
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//Constants
import { URLS } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class IssuesService {
    constructor(private httpClient: HttpClient) { }

    /**
         * This function gets a specific issue of a GitHub repo given the owner, repo name and issue id
         * @param owner 
         * @param repo 
         */
    public getIssue(issueNumber: number, owner: string = 'facebook', repo: string = 'react') {
        return this.httpClient.get(`${URLS.api}/repos/${owner}/${repo}/issues/${issueNumber}`);
    }

    /**
     * This function gets the issues of a GitHub repo given the owner and repo name
     * @param owner 
     * @param repo 
     */
    public getIssues(query?: string) {
        //Building query base string 
        let q = "repo:facebook/react type:issue state:open";
        const options = query && query.length ?
            { params: new HttpParams().set('q', `${q} "${query}" in:title`) }
            : { params: new HttpParams().set('q', `${q}`) };

        return this.httpClient.get(`${URLS.api}/search/issues`, options);
    }
}