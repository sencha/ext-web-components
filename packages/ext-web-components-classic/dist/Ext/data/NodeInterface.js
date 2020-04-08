import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_NodeInterface = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_data_NodeInterface, _Ext_Base);

  Ext_data_NodeInterface.PROPERTIES = function PROPERTIES() {
    return ['allowDrag', 'allowDrop', 'checked', 'children', 'cls', 'depth', 'expandable', 'expanded', 'glyph', 'href', 'hrefTarget', 'icon', 'iconCls', 'index', 'isFirst', 'isLast', 'leaf', 'loaded', 'loading', 'parentId', 'qshowDelay', 'qtip', 'qtitle', 'root', 'text'];
  };

  Ext_data_NodeInterface.EVENTS = function EVENTS() {
    return [{
      name: 'append',
      parameters: 'sender,node,index'
    }, {
      name: 'beforeappend',
      parameters: 'sender,node'
    }, {
      name: 'beforecollapse',
      parameters: 'sender'
    }, {
      name: 'beforeexpand',
      parameters: 'sender'
    }, {
      name: 'beforeinsert',
      parameters: 'sender,node,refNode'
    }, {
      name: 'beforemove',
      parameters: 'sender,oldParent,newParent,index'
    }, {
      name: 'beforeremove',
      parameters: 'sender,node,isMove'
    }, {
      name: 'collapse',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'sender'
    }, {
      name: 'insert',
      parameters: 'sender,node,refNode'
    }, {
      name: 'move',
      parameters: 'sender,oldParent,newParent,index'
    }, {
      name: 'remove',
      parameters: 'sender,node,isMove,context'
    }, {
      name: 'sort',
      parameters: 'sender,childNodes'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_NodeInterface.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_NodeInterface.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_NodeInterface.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_NodeInterface.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_NodeInterface, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_NodeInterface.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_NodeInterface.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_NodeInterface(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_NodeInterface.PROPERTIES()), events.concat(Ext_data_NodeInterface.EVENTS())) || this;
  }

  var _proto = Ext_data_NodeInterface.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_NodeInterface;
}(Ext_Base);

export { Ext_data_NodeInterface as default };