import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '../shared/classes/activity';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category';

@Pipe({
    name: 'categoryFilter',
    pure: false
})

export class CategoryFilterPipe implements PipeTransform {
    categories: Category[];
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
                if (activity.category == category.name && category.isActive) {//return activity if catergory names match and the category is active
                    match = true;
                }
            })
            return match;
        }))]
        return results;
    }
}