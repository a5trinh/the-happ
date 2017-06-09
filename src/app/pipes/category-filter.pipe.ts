import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '../shared/classes/activity';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    categories: Observable<string[]>;
    constructor(private store: Store<fromRoot.State>) {
        //binding store values to directive
        this.categories = store.select(fromRoot.getFilters)
    }

    transform(activities) {
        //Return null if no activities exist, since data is asynchronous 
        console.log(activities);
        if (activities == null) {
            return null;
        }
        let results = activities.filter((activity) => {
            let match = false;
            this.categories.subscribe((categories) => {
                categories.forEach((category) => {
                    if (activity.category == category) {
                        match = true;
                    }
                })

            })
            return match
        })

        return results;


    }


}