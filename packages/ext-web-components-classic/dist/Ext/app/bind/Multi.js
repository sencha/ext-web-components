import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_bind_BaseBinding from '../../../Ext/app/bind/BaseBinding.js';

var Ext_app_bind_Multi = /*#__PURE__*/function (_Ext_app_bind_BaseBin) {
  _inheritsLoose(Ext_app_bind_Multi, _Ext_app_bind_BaseBin);

  Ext_app_bind_Multi.PROPERTIES = function PROPERTIES() {
    return ['single', 'trackStatics'];
  };

  Ext_app_bind_Multi.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_Multi.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Multi.PROPERTIES());
    return Ext_app_bind_BaseBinding.getProperties(properties);
  };

  Ext_app_bind_Multi.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_Multi.EVENTS());
    return Ext_app_bind_BaseBinding.getEvents(events);
  };

  _createClass(Ext_app_bind_Multi, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_BaseBin.observedAttributes;
      Ext_app_bind_Multi.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_Multi.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_Multi(properties, events) {
    return _Ext_app_bind_BaseBin.call(this, properties.concat(Ext_app_bind_Multi.PROPERTIES()), events.concat(Ext_app_bind_Multi.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_Multi.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_BaseBin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_BaseBin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_Multi;
}(Ext_app_bind_BaseBinding);

export { Ext_app_bind_Multi as default };