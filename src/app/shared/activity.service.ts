import { Injectable } from '@angular/core';
import { Activities } from './mock-data';
import { Http, Response } from '@angular/http';
import { Activity } from './classes/activity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class ActivityService {
    private googleUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAIfvS8oYnjYrFYESl4WO1kMzQtWldKSZQ&address=';

    constructor(private http: Http) { }

    getActivties(): Promise<Activity[]> {
        return Promise.resolve(Activities);
    }

    getActivity(id: Number): Promise<Activity> {
        return this.getActivties()
        .then(activities => activities.find(activity => activity.id === id))
    }

    getGeolocation(address: string): Observable<any> {
        console.log(address);
        return this.http.get(this.googleUrl.concat(address))
            .catch(this.handleError)

    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
