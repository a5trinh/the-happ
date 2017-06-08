//Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import {StoreModule } from '@ngrx/store';

//Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivityTilesContainerComponent } from './components/activity-tiles-container/activity-tiles-container.component';
import { ActivityTileComponent } from './components/activity-tile/activity-tile.component';
import { ActivityTileDetailsComponent } from './components/activity-tile-details/activity-tile-details.component';

//Pipe Imports
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
//Service Imports
import { ActivityService } from './services/activity.service';

import {reducer} from './reducers'

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  { path: 'activity/:id', component: ActivityTileDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActivityTilesContainerComponent,
    ActivityTileComponent,
    ActivityTileDetailsComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIfvS8oYnjYrFYESl4WO1kMzQtWldKSZQ'
    })
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
