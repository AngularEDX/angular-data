import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DocumentClient } from 'documentdb';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DocDBDataSource {    
    private host : string = 'https://sidneydocdb.documents.azure.com:443/';
    private key : string = 'njx90Y56xRgKh4uzNnR3aAA7hYasN8zAQHFP1Nk8kU2yBe2IXpNDlxxt5fPDDkOtGCURczQkw98IMPiq5GcfKw==';
    private database : string = 'contoso';
    private collection : string = 'assets';
    private collectionUrl : string = 'dbs/' + this.database + '/colls/' + this.collection;

    constructor(private http: Http) { }

    public getAssets(callback: (documents: any[]) => void) {
        console.log(this.host);
        console.log(this.key);
        var client : DocumentClient = new DocumentClient(this.host, { masterKey: this.key });
        client.queryDocuments(
            this.collectionUrl,
            'SELECT * FROM assets'
        ).toArray((error, results) => {
            if (error) {
                throw error;
            }
            else {
                callback(results);
            }
        });
    };
}