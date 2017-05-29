import {Component,Input} from '@angular/core';

@Component({
    selector:'activity-tile',
    templateUrl:'./activity-tile.component.html',
    styleUrls:['./activity-tile.component.css']
})

export class ActivityTileComponent{
    @Input('activityDetails') activity;
}