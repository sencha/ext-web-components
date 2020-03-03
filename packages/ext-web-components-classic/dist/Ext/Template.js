import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_Template = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_Template, _Ext_Base);

  Ext_Template.PROPERTIES = function PROPERTIES() {
    return ['compiled', 'disableFormats'];
  };

  Ext_Template.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Template.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Template.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_Template.getEvents = function getEvents(events) {
    events = events.concat(Ext_Template.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_Template, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_Template.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Template.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Template(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_Template.PROPERTIES()), events.concat(Ext_Template.EVENTS())) || this;
  }

  var _proto = Ext_Template.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Template;
}(Ext_Base);

export { Ext_Template as default };