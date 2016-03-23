# ng2RoutingTabs v. 0.0.1

**Angular2 Tabs Routing**

## Description
Simple Angular2 tabs component based on routing system. Uses version "2.0.0-beta.11" of Angular2.

##Getting Started
1. Fork and clone this repo
2. npm install
3. Run the TypeScript compiler and watch for changes "npm run tsc"
4. Open second terminal and launch the app in the browser "npm start"

## Installation

To install this component to an external project, follow the procedure:

1. `npm install`.
2. `import {ng2RoutingTabs} from './ng2RoutingTabs/ng2RoutingTabs';`
3. `import {ng2RoutingTab} from './ng2RoutingTabs/ng2RoutingTab';`
4. You need to configure your @RouteConfig on your component.
5. Use the following snippet inside your template:

   ```html
		<ng2-routing-tabs>
            <ng2-routing-tab [tabTitle]="'Tab1'" [tabLink]="[ './TabExample1']"></ng2-routing-tab>
            <ng2-routing-tab [tabTitle]="'Tab2'" [tabLink]="[ './TabExample2']"></ng2-routing-tab>
            <ng2-routing-tab [tabTitle]="'Tab3'" [tabLink]="[ './TabExample3']"></ng2-routing-tab>
        </ng2-routing-tabs>
   ```

## Compatibility (tested with)
* Firefox (latest)
* Chromium (latest)
* Safari (latest)

## License
* License: MIT

## Author
* Author: edezacas
