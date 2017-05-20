import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable()
export class ApplicationService {  
    private _db;
    private _applications;

    initDB() {
        PouchDB.plugin(cordovaSqlitePlugin);
        this._db = new PouchDB('applications.db', { adapter: 'cordova-sqlite' });
    }

    add(application) {  
        return this._db.post(application);
    }

    update(application) {  
        return this._db.put(application);
    }

    delete(application) {  
        return this._db.remove(application);
    }

    getAll() {  

        if (!this._applications) {
            return this._db.allDocs({ include_docs: true})
                .then(docs => {

                
                    this._applications = docs.rows.map(row => {
                       
                        row.doc.Date = new Date(row.doc.Date);
                        return row.doc;
                    });

                  
                    this._db.changes({ live: true, since: 'now', include_docs: true})
                        .on('change', this.onDatabaseChange);

                    return this._applications;
                });
        } else {
 
            return Promise.resolve(this._applications);
        }
    }

    private onDatabaseChange = (change) => {  
        var index = this.findIndex(this._applications, change.id);
        var application = this._applications[index];

        if (change.deleted) {
            if (application) {
                this._applications.splice(index, 1); // delete
            }
        } else {
            change.doc.Date = new Date(change.doc.Date);
            if (application && application._id === change.id) {
                this._applications[index] = change.doc; // update
            } else {
                this._applications.splice(index, 0, change.doc) // insert
            }
        }
    }

    // Binary search, the array is by default sorted by _id.
    private findIndex(array, id) {  
        var low = 0, high = array.length, mid;
        while (low < high) {
        mid = (low + high) >>> 1;
        array[mid]._id < id ? low = mid + 1 : high = mid
        }
        return low;
    }

}