import Ext_selection_DataViewModel from '../../Ext/selection/DataViewModel.js';

export default class Ext_selection_RowModel extends Ext_selection_DataViewModel {
  static PROPERTIES() { return [
    'allowDeselect',
    'deselectOnContainerClick',
    'enableKeyNav',
    'ignoreRightMouseSelection',
    'listeners',
    'mode',
    'ordered',
    'pruneRemoved',
    'selected',
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
    properties = properties.concat(Ext_selection_RowModel.PROPERTIES());
    return Ext_selection_DataViewModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_selection_RowModel.EVENTS());
    return Ext_selection_DataViewModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_selection_RowModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_selection_RowModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_selection_RowModel.PROPERTIES()),
      events.concat(Ext_selection_RowModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
