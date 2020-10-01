
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    public getIssue(issueNumber:number, owner: string = 'facebook', repo: string = 'react') {
        return this.httpClient.get(`${URLS.api}/repos/${owner}/${repo}/issues/${issueNumber}`);
    }

    /**
     * This function gets the issues of a GitHub repo given the owner and repo name
     * @param owner 
     * @param repo 
     */
    public getIssues(owner: string = 'facebook', repo: string = 'react') {
        return this.httpClient.get(`${URLS.api}/repos/${owner}/${repo}/issues`);
    }
}