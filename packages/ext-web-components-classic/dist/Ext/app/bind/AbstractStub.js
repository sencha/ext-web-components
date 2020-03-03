import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Schedulable from '../../../Ext/util/Schedulable.js';

var Ext_app_bind_AbstractStub = /*#__PURE__*/function (_Ext_util_Schedulable) {
  _inheritsLoose(Ext_app_bind_AbstractStub, _Ext_util_Schedulable);

  Ext_app_bind_AbstractStub.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_app_bind_AbstractStub.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_AbstractStub.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_AbstractStub.PROPERTIES());
    return Ext_util_Schedulable.getProperties(properties);
  };

  Ext_app_bind_AbstractStub.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_AbstractStub.EVENTS());
    return Ext_util_Schedulable.getEvents(events);
  };

  _createClass(Ext_app_bind_AbstractStub, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Schedulable.observedAttributes;
      Ext_app_bind_AbstractStub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_AbstractStub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_AbstractStub(properties, events) {
    return _Ext_util_Schedulable.call(this, properties.concat(Ext_app_bind_AbstractStub.PROPERTIES()), events.concat(Ext_app_bind_AbstractStub.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_AbstractStub.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Schedulable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Schedulable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_AbstractStub;
}(Ext_util_Schedulable);

export { Ext_app_bind_AbstractStub as default };