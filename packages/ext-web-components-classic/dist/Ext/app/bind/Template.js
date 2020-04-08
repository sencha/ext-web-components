import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_app_bind_Template = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_app_bind_Template, _Ext_Base);

  Ext_app_bind_Template.PROPERTIES = function PROPERTIES() {
    return ['escapes'];
  };

  Ext_app_bind_Template.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_Template.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Template.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_app_bind_Template.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_Template.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_app_bind_Template, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_app_bind_Template.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_Template.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_Template(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_app_bind_Template.PROPERTIES()), events.concat(Ext_app_bind_Template.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_Template.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_Template;
}(Ext_Base);

export { Ext_app_bind_Template as default };