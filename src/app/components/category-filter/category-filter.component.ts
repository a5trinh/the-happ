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

    constructor(private store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getFilters).subscribe((filters) => {
            this.stateFilters = filters;
        })
    }

    activateFilter(selectedFilter: Category) {
        this.store.dispatch(new filter.ActivateAction(selectedFilter)) //Dispatch a new action defined by imported filter Action. Actions are only objects with a type and payload
    }

    disableFilter(selectedFilter: Category) {
        this.store.dispatch(new filter.DisableAction(selectedFilter))
    }

    resetFilters() {
        this.store.dispatch(new filter.ResetAction())
    }

    setIcon(filterName: string): string {
        let icon = '';
        switch (filterName) {
            case 'music':
                icon = 'fa-music';
                break;
            case 'dining':
                icon = 'fa-cutlery';
                break;
            case 'sport':
                icon = 'fa-futbol-o';
                break;
            case 'outdoors':
                icon = 'fa-tree';
                break;
            case 'shopping':
                icon = 'fa-shopping-bag';
                break;
            case 'gaming':
                icon = 'fa-gamepad';
                break;
            case 'festive':
                icon = 'fa-star';
                break;
            default:
                icon = 'fa-star';
        }

        return icon;
    }
}