import Ext_selection_RowModel from '../../Ext/selection/RowModel.js';

export default class Ext_selection_CheckboxModel extends Ext_selection_RowModel {
  static PROPERTIES() { return [
    'allowDeselect',
    'checkOnly',
    'deselectOnContainerClick',
    'editRenderer',
    'enableKeyNav',
    'headerAriaLabel',
    'headerDeselectText',
    'headerSelectText',
    'headerText',
    'ignoreRightMouseSelection',
    'injectCheckbox',
    'listeners',
    'mode',
    'ordered',
    'pruneRemoved',
    'renderer',
    'rowDeselectText',
    'rowSelectText',
    'selected',
    'showHeaderCheckbox',
    'store',
    'toggleOnClick',
  ]};
  static EVENTS() { return [
    {name:'beforedeselect', parameters:'sender,record,index'},
    {name:'beforeselect', parameters:'sender,record,index'},
    {name:'deselect', parameters:'sender,record,index'},
    {name:'focuschange', parameters:'sender,oldFocused,newFocused'},
    {name:'select', parameters:'sender,record,index'},
    {name:'selectionchange', parameters:'sender,selected'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_selection_CheckboxModel.PROPERTIES());
    return Ext_selection_RowModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_selection_CheckboxModel.EVENTS());
    return Ext_selection_RowModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_selection_CheckboxModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_selection_CheckboxModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_selection_CheckboxModel.PROPERTIES()),
      events.concat(Ext_selection_CheckboxModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
