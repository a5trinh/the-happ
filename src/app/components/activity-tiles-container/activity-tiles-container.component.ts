import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../shared/classes/activity';

@Component({
  selector: 'activity-tiles-container',
  templateUrl: './activity-tiles-container.component.html',
  styleUrls: ['./activity-tiles-container.component.css']
})

export class ActivityTilesContainerComponent implements OnInit {

  activities: Activity[];

  constructor(private activityService: ActivityService) {

  }

  ngOnInit(): void {
    this.activityService.getActivties().then(activities => this.activities = activities);
  }


}