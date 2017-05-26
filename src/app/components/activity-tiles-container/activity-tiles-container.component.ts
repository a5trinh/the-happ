import { Component } from '@angular/core';


const DUMMYDATA = [
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' },
  { location: '1 Front St E, Toronto, ON M5E 1B2', time: 'Saturday, December 2 at 8 PM' }
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