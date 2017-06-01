import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivityService } from '../../shared/activity.service';
import { Activity } from '../../shared/classes/activity'
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'activity-tile-details',
    templateUrl: './activity-tile-details.component.html',
    styleUrls: ['./activity-tile-details.component.css']
})

export class ActivityTileDetailsComponent implements OnInit {
    activity: Activity = {
        title: '',
        location: '',
        time: new Date(''),
        catergory: '',
        id: null
    }
    lat: number=0;
    long: number=0;
    constructor(private activityService: ActivityService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.activityService.getActivity(+params['id'])).subscribe(activity => this.activity = activity);
    }

    setGeolocation():void{
       //Call service that will make request to Google geolocation API for long and lat values
       //sample request https://maps.googleapis.com/maps/api/geocode/json?address=1%20Front%20St%20E,%20Toronto,%20ON%20M5E%201B2&key=AIzaSyAIfvS8oYnjYrFYESl4WO1kMzQtWldKSZQ
    }


}