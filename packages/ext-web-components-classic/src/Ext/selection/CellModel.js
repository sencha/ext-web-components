import Ext_selection_DataViewModel from '../../Ext/selection/DataViewModel.js';

export default class Ext_selection_CellModel extends Ext_selection_DataViewModel {
  static PROPERTIES() { return [
    'allowDeselect',
    'deselectOnContainerClick',
    'enableKeyNav',
    'ignoreRightMouseSelection',
    'listeners',
    'mode',
    'ordered',
    'preventWrap',
    'pruneRemoved',
    'selected',
    'store',
    'toggleOnClick',
  ]};
  static EVENTS() { return [
    {name:'beforedeselect', parameters:'sender,record,index'},
    {name:'beforeselect', parameters:'sender,record,index'},
    {name:'deselect', parameters:'sender,record,row,column'},
    {name:'focuschange', parameters:'sender,oldFocused,newFocused'},
    {name:'select', parameters:'sender,record,row,column'},
    {name:'selectionchange', parameters:'sender,selected'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_selection_CellModel.PROPERTIES());
    return Ext_selection_DataViewModel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_selection_CellModel.EVENTS());
    return Ext_selection_DataViewModel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_selection_CellModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_selection_CellModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_selection_CellModel.PROPERTIES()),
      events.concat(Ext_selection_CellModel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
