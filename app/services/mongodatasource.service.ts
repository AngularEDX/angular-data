import { Injectable } from '@angular/core';

@Injectable()
export class MongoDataSource {
    getAssets(callback: (documents: any[]) => void) {
        callback([]);
    };
}