"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var documentdb_1 = require("documentdb");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var DocDBDataSource = (function () {
    function DocDBDataSource(http) {
        this.http = http;
        this.host = 'https://sidneydocdb.documents.azure.com:443/';
        this.key = 'njx90Y56xRgKh4uzNnR3aAA7hYasN8zAQHFP1Nk8kU2yBe2IXpNDlxxt5fPDDkOtGCURczQkw98IMPiq5GcfKw==';
        this.database = 'contoso';
        this.collection = 'assets';
        this.collectionUrl = 'dbs/' + this.database + '/colls/' + this.collection;
    }
    DocDBDataSource.prototype.getAssets = function (callback) {
        console.log(this.host);
        console.log(this.key);
        var client = new documentdb_1.DocumentClient(this.host, { masterKey: this.key });
        client.queryDocuments(this.collectionUrl, 'SELECT * FROM assets').toArray(function (error, results) {
            if (error) {
                throw error;
            }
            else {
                callback(results);
            }
        });
    };
    ;
    return DocDBDataSource;
}());
DocDBDataSource = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DocDBDataSource);
exports.DocDBDataSource = DocDBDataSource;
//# sourceMappingURL=docdbdatasource.service.js.map