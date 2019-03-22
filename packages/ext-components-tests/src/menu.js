import ElementInsertBetween from './view/createChild/elementinsertbetween/ElementInsertBetweenComponent.js';
import ElementInsertEnd from './view/createChild/elementinsertend/ElementInsertEndComponent.js';
import ElementInsertStart from './view/createChild/elementinsertstart/ElementInsertStartComponent.js';
import InsertBetween from  './view/createChild/insertbetween/InsertBetweenComponent.js';
import InsertEnd from  './view/createChild/insertend/InsertEndComponent.js';
import InsertStart from  './view/createChild/insertstart/InsertStartComponent.js';

import Defaults from  './view/defaults/DefaultsComponent.js';

import BasicEventComponent from  './view/event/basicevent/BasicEventComponent.js';
import SingleEventComponent from './view/event/singleevent/SingleEventComponent.js';

import HTMLInExtComponent from './view/htmlinextcomponent/HTMLInExtComponent.js';

import SimpleAttributeUpdateComponent from './view/attributeupdate/simpleattributeupdate/SimpleAttributeUpdateComponent.js';
import ClassNameUpdateComponent from './view/attributeupdate/classnameupdate/ClassNameUpdateComponent.js';

import UpdateFunctionsComponent from './view/updatefunctions/UpdateFunctionsComponent.js';

import SimpleComponent from './view/simple/SimpleComponent.js';

import SenchaTestHooksComponent from './view/senchatesthooks/SenchaTestHooksComponent.js';

import RelTooltipComponent from './view/rel/reltooltip/RelTooltipComponent.js';
import RelMenuComponent from './view/rel/relmenu/RelMenuComponent.js';
import RelGridColumnComponent from './view/rel/relgridcolumn/RelGridColumnComponent.js';
import RelEditorComponent from './view/rel/releditor/RelEditorComponent.js';
import RelDialogComponent from './view/rel/reldialog/RelDialogComponent.js';
import RelComponent from './view/rel/rel/RelComponent.js';

import LifecycleComponent from './view/lifecycle/LifecycleComponent.js';

export default function getMenu() {
  return [
    { text: 'Create Child', children: [
      { text: 'Element Insert Between', component: ElementInsertBetween },
      { text: 'Element Insert End', component: ElementInsertEnd },
      { text: 'Element Insert Start', component: ElementInsertStart },
      { text: 'Insert Between', component: InsertBetween },
      { text: 'Insert End', component: InsertEnd },
      { text: 'Insert Start', component: InsertStart },
    ]},
    { text: 'Event', children: [
        { text: 'Basic Event', component: BasicEventComponent },
        { text: 'Single Event', component: SingleEventComponent },
      ]
    },
    { text: 'Updates', children: [
        { text: 'Simple Attribute Update', component: SimpleAttributeUpdateComponent },
        { text: 'Class Name Update', component: ClassNameUpdateComponent },
      ]
    },
    { text: 'Relational', children: [
      { text: 'Rel', component: RelComponent },
      { text: 'Rel Tooltip', component: RelTooltipComponent },
      { text: 'Rel Menu', component: RelMenuComponent },
      { text: 'Rel Grid Column', component: RelGridColumnComponent },
      { text: 'Rel Editor', component: RelEditorComponent },
      { text: 'Rel Dialog', component: RelDialogComponent },
    ]},
    { text: 'Defaults', component: Defaults },
    { text: 'HTML in Ext Component', component: HTMLInExtComponent },
    { text: 'Update Functions', component: UpdateFunctionsComponent },
    { text: 'Simple', component: SimpleComponent },
    { text: 'Sencha Test Hooks', component: SenchaTestHooksComponent },
    { text: 'Lifecycle', component: LifecycleComponent },
  ]
};
