import { Injectable } from '@angular/core'
import { Activities } from './mock-data'
import { Activity } from './classes/activity'

@Injectable()
export class ActivityService {
    getActivties(): Promise<Activity[]> {
        return Promise.resolve(Activities);
    }

    getActivity(id: Number): Promise<Activity> {
        return this.getActivties().then(activities => activities.find(activity => activity.id === id))
    }
}