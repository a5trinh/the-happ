import { Component } from '@angular/core';

const DUMMYDATA = [
  { item: 1 },
  { item: 2 },
  { item: 3 },
  { item: 4 },
  { item: 5 },
  { item: 6 },
  { item: 7 },
  { item: 8 },
  { item: 9 },
  { item: 10 },
  { item: 11 },
  { item: 12 }
];

@Component({
  selector: 'activity-tiles-container',
  templateUrl: './activity-tiles-container.component.html',
  styleUrls: ['./activity-tiles-container.component.css']
})

export class ActivityTilesContainerComponent {
  first = 0;
  last = 4;
  dummyData = DUMMYDATA;
}