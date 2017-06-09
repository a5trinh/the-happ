import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '../shared/classes/activity';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';

@Pipe({
    name: 'categoryFilter',
    pure: false
})

export class CategoryFilterPipe implements PipeTransform {
    categories: string[];
    constructor(private store: Store<fromRoot.State>) {
        //binding store values to directive
        store.select(fromRoot.getFilters).subscribe((filters) => {
            this.categories = filters;
        })
    }

    transform(activities) {
        //Return null if no activities exist, since data is asynchronous 
        if (activities == null) {
            return null;
        }
        let results = []
        results = [...(activities.filter((activity) => {
            let match = false;
            this.categories.forEach((category) => {
                if (activity.category == category) {
                    match = true;
                }
            })
            return match;
        }))]
        return results;
    }
}