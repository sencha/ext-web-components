import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_Item from '../../Ext/drag/Item.js';

var Ext_drag_Target = /*#__PURE__*/function (_Ext_drag_Item) {
  _inheritsLoose(Ext_drag_Target, _Ext_drag_Item);

  Ext_drag_Target.PROPERTIES = function PROPERTIES() {
    return ['accepts', 'autoDestroy', 'component', 'element', 'groups', 'invalidCls', 'listeners', 'validCls'];
  };

  Ext_drag_Target.EVENTS = function EVENTS() {
    return [{
      name: 'beforedrop',
      parameters: 'sender,info'
    }, {
      name: 'dragenter',
      parameters: 'sender,info'
    }, {
      name: 'dragleave',
      parameters: 'sender,info'
    }, {
      name: 'dragmove',
      parameters: 'sender,info'
    }, {
      name: 'drop',
      parameters: 'sender,info'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_drag_Target.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_Target.PROPERTIES());
    return Ext_drag_Item.getProperties(properties);
  };

  Ext_drag_Target.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_Target.EVENTS());
    return Ext_drag_Item.getEvents(events);
  };

  _createClass(Ext_drag_Target, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_Item.observedAttributes;
      Ext_drag_Target.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_Target.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_Target(properties, events) {
    return _Ext_drag_Item.call(this, properties.concat(Ext_drag_Target.PROPERTIES()), events.concat(Ext_drag_Target.EVENTS())) || this;
  }

  var _proto = Ext_drag_Target.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_Item.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_Item.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_Target;
}(Ext_drag_Item);

export { Ext_drag_Target as default };