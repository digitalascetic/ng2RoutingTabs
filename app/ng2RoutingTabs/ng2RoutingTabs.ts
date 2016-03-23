import {Component, ContentChildren, QueryList, AfterContentInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ng2RoutingTab} from './ng2RoutingTab';

@Component({
    selector: 'ng2-routing-tabs',
    template: `
        <ul>
            <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
                <a [routerLink]="tab.tabLink">{{tab.title}}</a>
            </li>
        </ul>
        <router-outlet></router-outlet>
    `,   
    directives: [ROUTER_DIRECTIVES]
})

export class ng2RoutingTabs implements AfterContentInit {
    @ContentChildren(ng2RoutingTab) tabs: QueryList<ng2RoutingTab>;
    
    constructor(private _router: Router){

    }

    ngAfterContentInit(){
        //active current Tab
        this.tabs.toArray().forEach((tab) => {
            let instruction = this._router.generate(tab.tabLink);
            if(this._router.isRouteActive(instruction)){
                tab.active = true;
            }
        } );

    }

    selectTab(selectedTab:ng2RoutingTab): void {

        // deactivate all tabs
        this.tabs.toArray().forEach((tab) => tab.active = false);

        // activate the tab the user has clicked on.
        selectedTab.active = true;

    }
}
