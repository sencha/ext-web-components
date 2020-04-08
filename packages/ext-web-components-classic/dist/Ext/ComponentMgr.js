import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_ComponentMgr = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ComponentMgr, _Ext_Base);

  Ext_ComponentMgr.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ComponentMgr.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ComponentMgr.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ComponentMgr.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ComponentMgr.getEvents = function getEvents(events) {
    events = events.concat(Ext_ComponentMgr.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ComponentMgr, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ComponentMgr.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ComponentMgr.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ComponentMgr(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ComponentMgr.PROPERTIES()), events.concat(Ext_ComponentMgr.EVENTS())) || this;
  }

  var _proto = Ext_ComponentMgr.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ComponentMgr;
}(Ext_Base);

export { Ext_ComponentMgr as default };