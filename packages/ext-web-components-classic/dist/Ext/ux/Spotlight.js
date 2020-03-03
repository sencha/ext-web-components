import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_ux_Spotlight = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ux_Spotlight, _Ext_Base);

  Ext_ux_Spotlight.PROPERTIES = function PROPERTIES() {
    return ['animate', 'duration', 'easing'];
  };

  Ext_ux_Spotlight.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_Spotlight.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_Spotlight.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ux_Spotlight.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_Spotlight.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ux_Spotlight, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ux_Spotlight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_Spotlight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_Spotlight(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ux_Spotlight.PROPERTIES()), events.concat(Ext_ux_Spotlight.EVENTS())) || this;
  }

  var _proto = Ext_ux_Spotlight.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_Spotlight;
}(Ext_Base);

export { Ext_ux_Spotlight as default };