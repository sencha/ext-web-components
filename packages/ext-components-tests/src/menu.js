import ElementInsertBetween from './view/elementinsertbetween/ElementInsertBetweenComponent.js';
import ElementInsertEnd from './view/elementinsertend/ElementInsertEndComponent.js';
import ElementInsertStart from './view/elementinsertstart/ElementInsertStartComponent.js';
import InsertBetween from  '.view/insertbetween/InsertBetweenComponent.js';
import InsertEnd from  '.view/insertend/InsertEndComponent.js';
import InsertStart from  '.view/insertstart/InsertStartComponent.js';

export default function getMenu() {
  return [
    { text: 'Element Insert Between', component: ElementInsertBetween, iconCls:'x-fa fa-question' },
    { text: 'Element Insert End', component: ElementInsertEnd, iconCls:'x-fa fa-question' },
    { text: 'Element Insert Start', component: ElementInsertStart, iconCls:'x-fa fa-question' },
    { text: 'Insert Between', component: InsertBetween, iconCls:'x-fa fa-question' },
    { text: 'Insert End', component: InsertEnd, iconCls:'x-fa fa-question' },
    { text: 'Insert Start', component: InsertStart, iconCls:'x-fa fa-question' },
  ]
};
