import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivityService } from '../../shared/activity.service';
import { Activity } from '../../shared/classes/activity'
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';

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
        category: '',
        id: null
    }
    lat: number = 50;
    long: number = 30;
    constructor(private activityService: ActivityService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        window.scrollTo(0,0);
        this.route.params
            .switchMap((params: Params) => this.activityService.getActivity(+params['id']))
            .subscribe(
            (activity) => {
                this.activity = activity
                this.setGeolocation();
            },
            error => console.log(error)
            );
    }

    setGeolocation(): void {
        console.log('run');
        //Call service that will make request to Google geolocation API for long and lat values
        this.activityService.getGeolocation(this.activity.location).subscribe(
            res => {
                let data= JSON.parse(res._body)
                this.lat=data.results[0].geometry.location.lat;
                this.long=data.results[0].geometry.location.lng;
                },
            error => console.log(error)
        );
    }


}