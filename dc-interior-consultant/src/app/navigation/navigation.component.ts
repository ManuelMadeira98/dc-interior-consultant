import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
	menuIsOpen: boolean = false;
	isMobileOrTablet$!: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {}
		
	ngOnInit(): void {
		this.isMobileOrTablet$ = this.breakpointObserver.observe('(width <= 992px)').pipe(
			map((state: BreakpointState) => {
				if (!state.matches) {
					this.menuIsOpen = false;
				}
				return state.matches;
			})
		);
	}
}
