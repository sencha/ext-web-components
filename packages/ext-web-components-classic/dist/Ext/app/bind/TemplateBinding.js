import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_bind_BaseBinding from '../../../Ext/app/bind/BaseBinding.js';

var Ext_app_bind_TemplateBinding = /*#__PURE__*/function (_Ext_app_bind_BaseBin) {
  _inheritsLoose(Ext_app_bind_TemplateBinding, _Ext_app_bind_BaseBin);

  Ext_app_bind_TemplateBinding.PROPERTIES = function PROPERTIES() {
    return ['single'];
  };

  Ext_app_bind_TemplateBinding.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_TemplateBinding.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_TemplateBinding.PROPERTIES());
    return Ext_app_bind_BaseBinding.getProperties(properties);
  };

  Ext_app_bind_TemplateBinding.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_TemplateBinding.EVENTS());
    return Ext_app_bind_BaseBinding.getEvents(events);
  };

  _createClass(Ext_app_bind_TemplateBinding, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_BaseBin.observedAttributes;
      Ext_app_bind_TemplateBinding.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_TemplateBinding.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_TemplateBinding(properties, events) {
    return _Ext_app_bind_BaseBin.call(this, properties.concat(Ext_app_bind_TemplateBinding.PROPERTIES()), events.concat(Ext_app_bind_TemplateBinding.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_TemplateBinding.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_BaseBin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_BaseBin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_TemplateBinding;
}(Ext_app_bind_BaseBinding);

export { Ext_app_bind_TemplateBinding as default };