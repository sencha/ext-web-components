import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_NodeInterface extends Ext_Base {
  static PROPERTIES() { return [
    'allowDrag',
    'allowDrop',
    'checked',
    'children',
    'cls',
    'depth',
    'expandable',
    'expanded',
    'glyph',
    'href',
    'hrefTarget',
    'icon',
    'iconCls',
    'index',
    'isFirst',
    'isLast',
    'leaf',
    'loaded',
    'loading',
    'parentId',
    'qshowDelay',
    'qtip',
    'qtitle',
    'root',
    'text',
  ]};
  static EVENTS() { return [
    {name:'append', parameters:'sender,node,index'},
    {name:'beforeappend', parameters:'sender,node'},
    {name:'beforecollapse', parameters:'sender'},
    {name:'beforeexpand', parameters:'sender'},
    {name:'beforeinsert', parameters:'sender,node,refNode'},
    {name:'beforemove', parameters:'sender,oldParent,newParent,index'},
    {name:'beforeremove', parameters:'sender,node,isMove'},
    {name:'collapse', parameters:'sender'},
    {name:'expand', parameters:'sender'},
    {name:'insert', parameters:'sender,node,refNode'},
    {name:'move', parameters:'sender,oldParent,newParent,index'},
    {name:'remove', parameters:'sender,node,isMove,context'},
    {name:'sort', parameters:'sender,childNodes'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_NodeInterface.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_NodeInterface.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_NodeInterface.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_NodeInterface.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_NodeInterface.PROPERTIES()),
      events.concat(Ext_data_NodeInterface.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
