
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class IssuesService {
    constructor(private httpClient: HttpClient) { }
    

    public search(searchString:string){
        return[
            {
                title:"nwjkwnfkadwjds"
            }
        ];
    }
}