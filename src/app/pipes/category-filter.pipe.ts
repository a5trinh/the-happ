import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from '../shared/classes/activity';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    categories = ['dining','music'];

    transform(activities) {
        console.log(activities)
      //Return null if no activities exist, since data is asynchronous 
        if (activities == null) {
            return null;
        }
        let results = activities.filter((activity) => {
            if (this.categories.includes(activity.category)) {
                return activity;
            }
        })
         console.log('initialized')
        return results;

    }


}