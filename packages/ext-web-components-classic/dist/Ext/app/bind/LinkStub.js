import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_bind_Stub from '../../../Ext/app/bind/Stub.js';

var Ext_app_bind_LinkStub = /*#__PURE__*/function (_Ext_app_bind_Stub) {
  _inheritsLoose(Ext_app_bind_LinkStub, _Ext_app_bind_Stub);

  Ext_app_bind_LinkStub.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_app_bind_LinkStub.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_LinkStub.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_LinkStub.PROPERTIES());
    return Ext_app_bind_Stub.getProperties(properties);
  };

  Ext_app_bind_LinkStub.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_LinkStub.EVENTS());
    return Ext_app_bind_Stub.getEvents(events);
  };

  _createClass(Ext_app_bind_LinkStub, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_Stub.observedAttributes;
      Ext_app_bind_LinkStub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_LinkStub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_LinkStub(properties, events) {
    return _Ext_app_bind_Stub.call(this, properties.concat(Ext_app_bind_LinkStub.PROPERTIES()), events.concat(Ext_app_bind_LinkStub.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_LinkStub.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_Stub.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_Stub.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_LinkStub;
}(Ext_app_bind_Stub);

export { Ext_app_bind_LinkStub as default };