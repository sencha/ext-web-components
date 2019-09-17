## @sencha/ext-web-components-all

last run: Tue Sep 10 2019 06:57:45 GMT-0400 (Eastern Daylight Time)

## Test with an  CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new  CLI application

```sh
ng new ng-ewc-all --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-ewc-all; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-web-components-all": "~7.0.0",
"@webcomponents/webcomponentsjs": "^2.2.10",
```

#### Run npm install

in a terminal window at the root of your application, run the following:

```sh
npm install
```

#### Replace src/styles.css (optional)

If you want to get a look at different styling...
Open the src/styles.css file in the editor and replace the contents with the following:

```sh
:root {
    --dark-mode: false;
    --base-color: yellow !important;
    --base-highlight-color: #64b5f6;
    --base-light-color: #bbdefb;
    --base-dark-color: #1976d2;
    --base-pressed-color: #6ab8f7;
    --base-focused-color: #42a5f5;
    --base-invisible-color: rgba(33, 150, 243, 0);
    --base-foreground-color: green !important;
    --accent-color: #ff9800;
    --accent-light-color: #ffe0b2;
    --accent-dark-color: #f57c00;
    --accent-pressed-color: #ffb74d;
    --accent-invisible-color: rgba(255, 152, 0, 0);
    --accent-foreground-color: #222;
    --confirm-color: #7cb342;
    --confirm-pressed-color: #a2cc75;
    --alert-color: #c62828;
    --alert-pressed-color: #de5c5c;
    --color: blue !important;
    --reverse-color: #fff;
    --highlight-color: rgba(17, 17, 17, 0.54);
    --disabled-color: rgba(17, 17, 17, 0.38);
    --reverse-disabled-color: rgba(255, 255, 255, 0.38);
    --divider-color: #e2e2e2;
    --selected-background-color: #e0e0e0;
    --hovered-background-color: #eee;
    --header-background-color: #f5f5f5;
    --faded-color: #e1e1e1;
    --background-color: #fafafa;
    --alt-background-color: #f5f5f5;
    --reverse-background-color: #303030;
    --reverse-alt-background-color: #3a3a3a;
    --overlay-color: rgba(0, 0, 0, 0.03);
    --content-padding: 16px;
    --listitem-selected-background-color: #e0e0e0;
    --reverse-border-color: #e0e0e0;
    --reverse-alt-border-color: #e0e0e0;
}

.x-grid {
    --color: red !important;
}
```


#### Replace src/app/app.module.js

Open the src/app/app.module.js file in the editor and replace the contents with the following:

```sh
declare var Ext: any
import '@sencha/ext-web-components-all/ext-web-components-all.module'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtModule
    //ExtAllModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following:

```sh

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-panel viewport="true" title="panel" layout="fit">
    <ext-toolbar docked="top">
        <ext-button
            text="click me please"
            (ready)="readyButton($event)"
            (tap)="tapButton($event)"
        >
        </ext-button>
    </ext-toolbar>
    <ext-grid
        [title]="title"
        (ready)="readyGrid($event)"
    >
        <ext-column text="name" dataIndex="name"></ext-column>
        <ext-column text="email" dataIndex="email" flex="1"></ext-column>
    </ext-grid>
</ext-panel>
    `,
    styles: []
})
export class AppComponent {
    title = 'the grid';
    data=[
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ]
    button: any;

    readyButton = (event) => {
        this.button = event.detail.cmp;
    }
    tapButton = (event) => {
        alert('button text: ' + this.button.getText())
    }
    readyGrid(event) {
        var grid = event.detail.cmp;
        grid.setData(this.data)
    }
}

```

#### Run the application

Type the following in a command/terminal window:

```sh
ng serve --open --port 4200
```

a page at http://localhost:4200 opens in a browser window and the EWC application will load

#### imports in the npm package module:
##### @sencha/ext-web-components-all/ext-web-components-all.module

import './lib/ext-accordion.component';<br/>import './lib/ext-actionsheet.component';<br/>import './lib/ext-audio.component';<br/>import './lib/ext-booleancell.component';<br/>import './lib/ext-booleancolumn.component';<br/>import './lib/ext-boundlist.component';<br/>import './lib/ext-breadcrumbbar.component';<br/>import './lib/ext-button.component';<br/>import './lib/ext-calendar-calendar-picker.component';<br/>import './lib/ext-calendar-day.component';<br/>import './lib/ext-calendar-days.component';<br/>import './lib/ext-calendar-daysheader.component';<br/>import './lib/ext-calendar-daysview.component';<br/>import './lib/ext-calendar-dayview.component';<br/>import './lib/ext-calendar-event.component';<br/>import './lib/ext-calendar-form-add.component';<br/>import './lib/ext-calendar-form-edit.component';<br/>import './lib/ext-calendar-list.component';<br/>import './lib/ext-calendar-month.component';<br/>import './lib/ext-calendar-monthview.component';<br/>import './lib/ext-calendar-multiview.component';<br/>import './lib/ext-calendar-timefield.component';<br/>import './lib/ext-calendar-week.component';<br/>import './lib/ext-calendar-weeks.component';<br/>import './lib/ext-calendar-weeksheader.component';<br/>import './lib/ext-calendar-weeksview.component';<br/>import './lib/ext-calendar-weekview.component';<br/>import './lib/ext-calendar.component';<br/>import './lib/ext-carousel.component';<br/>import './lib/ext-cartesian.component';<br/>import './lib/ext-celleditor.component';<br/>import './lib/ext-chart.component';<br/>import './lib/ext-chartnavigator.component';<br/>import './lib/ext-checkbox.component';<br/>import './lib/ext-checkboxfield.component';<br/>import './lib/ext-checkboxgroup.component';<br/>import './lib/ext-checkcell.component';<br/>import './lib/ext-checkcolumn.component';<br/>import './lib/ext-chip.component';<br/>import './lib/ext-chipview.component';<br/>import './lib/ext-cleartrigger.component';<br/>import './lib/ext-colorbutton.component';<br/>import './lib/ext-colorfield.component';<br/>import './lib/ext-colorpickercolorpreview.component';<br/>import './lib/ext-colorselector.component';<br/>import './lib/ext-column.component';<br/>import './lib/ext-combobox.component';<br/>import './lib/ext-comboboxfield.component';<br/>import './lib/ext-component.component';<br/>import './lib/ext-componentdataview.component';<br/>import './lib/ext-container.component';<br/>import './lib/ext-containerfield.component';<br/>import './lib/ext-d3-canvas.component';<br/>import './lib/ext-d3-heatmap.component';<br/>import './lib/ext-d3-horizontal-tree.component';<br/>import './lib/ext-d3-pack.component';<br/>import './lib/ext-d3-partition.component';<br/>import './lib/ext-d3-sunburst.component';<br/>import './lib/ext-d3-svg.component';<br/>import './lib/ext-d3-tree.component';<br/>import './lib/ext-d3-treemap.component';<br/>import './lib/ext-d3.component';<br/>import './lib/ext-dataitem.component';<br/>import './lib/ext-dataview.component';<br/>import './lib/ext-datecell.component';<br/>import './lib/ext-datecolumn.component';<br/>import './lib/ext-datefield.component';<br/>import './lib/ext-datepanel.component';<br/>import './lib/ext-datepicker.component';<br/>import './lib/ext-datepickerfield.component';<br/>import './lib/ext-datepickernativefield.component';<br/>import './lib/ext-datetitle.component';<br/>import './lib/ext-datetrigger.component';<br/>import './lib/ext-dialog.component';<br/>import './lib/ext-displayfield.component';<br/>import './lib/ext-dragcolumn.component';<br/>import './lib/ext-draw.component';<br/>import './lib/ext-editor.component';<br/>import './lib/ext-emailfield.component';<br/>import './lib/ext-emptytext.component';<br/>import './lib/ext-expandtrigger.component';<br/>import './lib/ext-field.component';<br/>import './lib/ext-fieldcontainer.component';<br/>import './lib/ext-fieldpanel.component';<br/>import './lib/ext-fieldset.component';<br/>import './lib/ext-filebutton.component';<br/>import './lib/ext-filefield.component';<br/>import './lib/ext-formpanel.component';<br/>import './lib/ext-froalaeditor.component';<br/>import './lib/ext-froalaeditorfield.component';<br/>import './lib/ext-gauge.component';<br/>import './lib/ext-google-map.component';<br/>import './lib/ext-grid.component';<br/>import './lib/ext-gridcell.component';<br/>import './lib/ext-gridcellbase.component';<br/>import './lib/ext-gridcolumn.component';<br/>import './lib/ext-gridcolumnsmenu.component';<br/>import './lib/ext-gridgroupbythismenuitem.component';<br/>import './lib/ext-gridrow.component';<br/>import './lib/ext-gridshowingroupsmenuitem.component';<br/>import './lib/ext-gridsortascmenuitem.component';<br/>import './lib/ext-gridsortdescmenuitem.component';<br/>import './lib/ext-gridsummaryrow.component';<br/>import './lib/ext-groupcontainer.component';<br/>import './lib/ext-headercontainer.component';<br/>import './lib/ext-hiddenfield.component';<br/>import './lib/ext-image.component';<br/>import './lib/ext-img.component';<br/>import './lib/ext-indexbar.component';<br/>import './lib/ext-indicator.component';<br/>import './lib/ext-inputfield.component';<br/>import './lib/ext-itemheader.component';<br/>import './lib/ext-label.component';<br/>import './lib/ext-legend.component';<br/>import './lib/ext-list.component';<br/>import './lib/ext-listitem.component';<br/>import './lib/ext-listitemplaceholder.component';<br/>import './lib/ext-listswiperitem.component';<br/>import './lib/ext-listswiperstepper.component';<br/>import './lib/ext-loadmask.component';<br/>import './lib/ext-lockedgrid.component';<br/>import './lib/ext-lockedgridregion.component';<br/>import './lib/ext-map.component';<br/>import './lib/ext-mask.component';<br/>import './lib/ext-media.component';<br/>import './lib/ext-menu.component';<br/>import './lib/ext-menucheckitem.component';<br/>import './lib/ext-menuitem.component';<br/>import './lib/ext-menuradioitem.component';<br/>import './lib/ext-menuseparator.component';<br/>import './lib/ext-menutrigger.component';<br/>import './lib/ext-messagebox.component';<br/>import './lib/ext-navigationview.component';<br/>import './lib/ext-nestedlist.component';<br/>import './lib/ext-numbercell.component';<br/>import './lib/ext-numbercolumn.component';<br/>import './lib/ext-numberfield.component';<br/>import './lib/ext-pagingtoolbar.component';<br/>import './lib/ext-panel.component';<br/>import './lib/ext-panelheader.component';<br/>import './lib/ext-paneltitle.component';<br/>import './lib/ext-paneltool.component';<br/>import './lib/ext-passwordfield.component';<br/>import './lib/ext-picker.component';<br/>import './lib/ext-pickerfield.component';<br/>import './lib/ext-pickerslot.component';<br/>import './lib/ext-pivotconfigcontainer.component';<br/>import './lib/ext-pivotconfigfield.component';<br/>import './lib/ext-pivotconfigform.component';<br/>import './lib/ext-pivotconfigpanel.component';<br/>import './lib/ext-pivotd3container.component';<br/>import './lib/ext-pivotgrid.component';<br/>import './lib/ext-pivotgridcell.component';<br/>import './lib/ext-pivotgridgroupcell.component';<br/>import './lib/ext-pivotgridrow.component';<br/>import './lib/ext-pivotheatmap.component';<br/>import './lib/ext-pivotrangeeditor.component';<br/>import './lib/ext-pivotsettings.component';<br/>import './lib/ext-pivottreemap.component';<br/>import './lib/ext-polar.component';<br/>import './lib/ext-progress.component';<br/>import './lib/ext-progressbarwidget.component';<br/>import './lib/ext-pullrefreshbar.component';<br/>import './lib/ext-pullrefreshspinner.component';<br/>import './lib/ext-radio.component';<br/>import './lib/ext-radiofield.component';<br/>import './lib/ext-radiogroup.component';<br/>import './lib/ext-rating.component';<br/>import './lib/ext-revealtrigger.component';<br/>import './lib/ext-rowbody.component';<br/>import './lib/ext-roweditor.component';<br/>import './lib/ext-roweditorbar.component';<br/>import './lib/ext-roweditorcell.component';<br/>import './lib/ext-roweditorgap.component';<br/>import './lib/ext-rowheader.component';<br/>import './lib/ext-rownumberer.component';<br/>import './lib/ext-rownumberercell.component';<br/>import './lib/ext-searchfield.component';<br/>import './lib/ext-segmentedbutton.component';<br/>import './lib/ext-selectfield.component';<br/>import './lib/ext-selectioncolumn.component';<br/>import './lib/ext-selectpicker.component';<br/>import './lib/ext-sheet.component';<br/>import './lib/ext-simplelistitem.component';<br/>import './lib/ext-singlesliderfield.component';<br/>import './lib/ext-slider.component';<br/>import './lib/ext-sliderfield.component';<br/>import './lib/ext-spacefilling.component';<br/>import './lib/ext-spacer.component';<br/>import './lib/ext-sparkline.component';<br/>import './lib/ext-sparklinebar.component';<br/>import './lib/ext-sparklinebox.component';<br/>import './lib/ext-sparklinebullet.component';<br/>import './lib/ext-sparklinediscrete.component';<br/>import './lib/ext-sparklineline.component';<br/>import './lib/ext-sparklinepie.component';<br/>import './lib/ext-sparklinetristate.component';<br/>import './lib/ext-spindowntrigger.component';<br/>import './lib/ext-spinnerfield.component';<br/>import './lib/ext-spinuptrigger.component';<br/>import './lib/ext-splitbutton.component';<br/>import './lib/ext-surface.component';<br/>import './lib/ext-tab.component';<br/>import './lib/ext-tabbar.component';<br/>import './lib/ext-tabletpicker.component';<br/>import './lib/ext-tabpanel.component';<br/>import './lib/ext-templatecolumn.component';<br/>import './lib/ext-textareafield.component';<br/>import './lib/ext-textcell.component';<br/>import './lib/ext-textcolumn.component';<br/>import './lib/ext-textfield.component';<br/>import './lib/ext-thumb.component';<br/>import './lib/ext-timefield.component';<br/>import './lib/ext-timepanel.component';<br/>import './lib/ext-timetrigger.component';<br/>import './lib/ext-title.component';<br/>import './lib/ext-titlebar.component';<br/>import './lib/ext-togglefield.component';<br/>import './lib/ext-toggleslider.component';<br/>import './lib/ext-tool.component';<br/>import './lib/ext-toolbar.component';<br/>import './lib/ext-tooltip.component';<br/>import './lib/ext-tree.component';<br/>import './lib/ext-treecell.component';<br/>import './lib/ext-treecolumn.component';<br/>import './lib/ext-treelist.component';<br/>import './lib/ext-treelistitem.component';<br/>import './lib/ext-trigger.component';<br/>import './lib/ext-urlfield.component';<br/>import './lib/ext-video.component';<br/>import './lib/ext-viewport.component';<br/>import './lib/ext-widget.component';<br/>import './lib/ext-widgetcell.component';<br/>import './lib/ext-window.component';<br/>import './lib/ext-yearpicker.component';<br/>