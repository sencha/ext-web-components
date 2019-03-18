import ElementInsertBetween from './view/elementinsertbetween/ElementInsertBetweenComponent.js';
import ElementInsertEnd from './view/elementinsertend/ElementInsertEndComponent.js';
import ElementInsertStart from './view/elementinsertstart/ElementInsertStartComponent.js';
import InsertBetween from  './view/insertbetween/InsertBetweenComponent.js';
import InsertEnd from  './view/insertend/InsertEndComponent.js';
import InsertStart from  './view/insertstart/InsertStartComponent.js';

export default function getMenu() {
  return [
    { text: 'Element Insert Between', component: ElementInsertBetween },
    { text: 'Element Insert End', component: ElementInsertEnd },
    { text: 'Element Insert Start', component: ElementInsertStart },
    { text: 'Insert Between', component: InsertBetween },
    { text: 'Insert End', component: InsertEnd },
    { text: 'Insert Start', component: InsertStart },
  ]
};
