import {Component, Input} from 'angular2/core';

@Component({
    selector: 'ng2-routing-tab',
    template: `
        <ng-content></ng-content>
    `
})
export class ng2RoutingTab {
    @Input('tabTitle') title:string;
    @Input() active = false;
    @Input() tabLink:any[];

    constructor(){

    }
}