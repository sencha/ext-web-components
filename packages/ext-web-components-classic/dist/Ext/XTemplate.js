import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Template from '../Ext/Template.js';

var Ext_XTemplate = /*#__PURE__*/function (_Ext_Template) {
  _inheritsLoose(Ext_XTemplate, _Ext_Template);

  Ext_XTemplate.PROPERTIES = function PROPERTIES() {
    return ['compiled', 'definitions', 'disableFormats', 'strict'];
  };

  Ext_XTemplate.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_XTemplate.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_XTemplate.PROPERTIES());
    return Ext_Template.getProperties(properties);
  };

  Ext_XTemplate.getEvents = function getEvents(events) {
    events = events.concat(Ext_XTemplate.EVENTS());
    return Ext_Template.getEvents(events);
  };

  _createClass(Ext_XTemplate, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Template.observedAttributes;
      Ext_XTemplate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_XTemplate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_XTemplate(properties, events) {
    return _Ext_Template.call(this, properties.concat(Ext_XTemplate.PROPERTIES()), events.concat(Ext_XTemplate.EVENTS())) || this;
  }

  var _proto = Ext_XTemplate.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Template.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Template.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_XTemplate;
}(Ext_Template);

export { Ext_XTemplate as default };