import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as filter from '../../actions/filter';

@Component({
    selector: 'category-filter',
    templateUrl: './category-filter.component.html',
    styleUrls: ['./category-filter.component.css']
})

export class CategoryFilterComponent {

    stateFilters: string[]
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

    addFilter(filterName: string) {
        this.store.dispatch(new filter.AddAction(filterName)) //Dispatch a new action defined by imported filter Action. Actions are only objects with a type and payload
    }

    removeFilter(filterName: string) {
        this.store.dispatch(new filter.RemoveAction(filterName))
    }
}