import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as filter from '../../actions/filter';
import { Category } from '../../models/category';

@Component({
    selector: 'category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.css']
})

export class CategoryFilterComponent {

    stateFilters: Category[]
    componentFilters: any[]

    constructor(private store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getFilters).subscribe((filters) => {
            this.stateFilters = filters;
        })

        this.componentFilters = [
            {
                name: "",
                active: true
            }
        ]
    }

    activateFilter(filterName: string) {
        this.store.dispatch(new filter.ActivateAction({
            name: filterName,
            isActive: false
        })) //Dispatch a new action defined by imported filter Action. Actions are only objects with a type and payload
    }

    disableFilter(filterName: string) {
        this.store.dispatch(new filter.DisableAction({
            name: filterName,
            isActive: true
        }))
    }
}