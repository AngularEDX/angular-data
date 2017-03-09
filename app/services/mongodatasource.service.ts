import { IDataSource } from './idatasource.service';

export class MongoDataSource implements IDataSource {
    public getAssets() : any[] {
        return [];
    };
}