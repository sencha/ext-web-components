import Ext_selection_Model from '../../../Ext/selection/Model.js';

export default class Ext_grid_selection_SpreadsheetModel extends Ext_selection_Model {
  static PROPERTIES() { return [
    'allowDeselect',
    'cellSelect',
    'checkboxColumnIndex',
    'checkboxHeaderWidth',
    'checkboxSelect',
    'checkColumnHeaderText',
    'columnSelect',
    'dragSelect',
    'extensible',
    'ignoreRightMouseSelection',
    'listeners',
    'mode',
    'ordered',
    'pruneRemoved',
    'reducible',
    'rowNumbererHeaderWidth',
    'rowSelect',
    'selected',
    'showHeaderCheckbox',
    'store',
    'toggleOnClick',
  ]};
  static EVENTS() { return [
    {name:'focuschange', parameters:'sender,oldFocused,newFocused'},
    {name:'selectionchange', parameters:'grid,selection'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_selection_SpreadsheetModel.PROPERTIES());
    return Ext_selection_Model.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_selection_SpreadsheetModel.EVENTS());
    return Ext_selection_Model.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_selection_SpreadsheetModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_selection_SpreadsheetModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_selection_SpreadsheetModel.PROPERTIES()),
      events.concat(Ext_grid_selection_SpreadsheetModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
