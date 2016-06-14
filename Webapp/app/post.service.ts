import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
    constructor(private http: Http) { }
    
    getReportedPosts(): Observable<JSON[]> {
        return this.http.get('/reported_posts')//.map(res => <JSON[]>res.json() )
    }
}