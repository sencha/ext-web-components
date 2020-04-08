import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_bind_AbstractStub from '../../../Ext/app/bind/AbstractStub.js';

var Ext_app_bind_Stub = /*#__PURE__*/function (_Ext_app_bind_Abstrac) {
  _inheritsLoose(Ext_app_bind_Stub, _Ext_app_bind_Abstrac);

  Ext_app_bind_Stub.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_app_bind_Stub.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_Stub.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Stub.PROPERTIES());
    return Ext_app_bind_AbstractStub.getProperties(properties);
  };

  Ext_app_bind_Stub.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_Stub.EVENTS());
    return Ext_app_bind_AbstractStub.getEvents(events);
  };

  _createClass(Ext_app_bind_Stub, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_Abstrac.observedAttributes;
      Ext_app_bind_Stub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_Stub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_Stub(properties, events) {
    return _Ext_app_bind_Abstrac.call(this, properties.concat(Ext_app_bind_Stub.PROPERTIES()), events.concat(Ext_app_bind_Stub.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_Stub.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_Stub;
}(Ext_app_bind_AbstractStub);

export { Ext_app_bind_Stub as default };