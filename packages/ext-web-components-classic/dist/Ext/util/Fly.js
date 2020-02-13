import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Fly =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_util_Fly, _Ext_Base);

  Ext_util_Fly.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_Fly.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_util_Fly.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Fly.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Fly.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Fly.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Fly, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Fly.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Fly.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Fly(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Fly.PROPERTIES()), events.concat(Ext_util_Fly.EVENTS())) || this;
  }

  var _proto = Ext_util_Fly.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Fly;
}(Ext_Base);

export { Ext_util_Fly as default };