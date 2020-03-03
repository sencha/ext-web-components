import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_panel_Proxy = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_panel_Proxy, _Ext_Base);

  Ext_panel_Proxy.PROPERTIES = function PROPERTIES() {
    return ['insertProxy', 'moveOnDrag'];
  };

  Ext_panel_Proxy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_panel_Proxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_Proxy.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_panel_Proxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_Proxy.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_panel_Proxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_panel_Proxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_Proxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Proxy(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_panel_Proxy.PROPERTIES()), events.concat(Ext_panel_Proxy.EVENTS())) || this;
  }

  var _proto = Ext_panel_Proxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Proxy;
}(Ext_Base);

export { Ext_panel_Proxy as default };