import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../../Ext/Mixin.js';

var Ext_google_ux_Client = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_google_ux_Client, _Ext_Mixin);

  Ext_google_ux_Client.PROPERTIES = function PROPERTIES() {
    return ['requiredScripts'];
  };

  Ext_google_ux_Client.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_google_ux_Client.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_google_ux_Client.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_google_ux_Client.getEvents = function getEvents(events) {
    events = events.concat(Ext_google_ux_Client.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_google_ux_Client, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_google_ux_Client.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_google_ux_Client.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_google_ux_Client(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_google_ux_Client.PROPERTIES()), events.concat(Ext_google_ux_Client.EVENTS())) || this;
  }

  var _proto = Ext_google_ux_Client.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_google_ux_Client;
}(Ext_Mixin);

export { Ext_google_ux_Client as default };