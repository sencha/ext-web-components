import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_XTemplateParser = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_XTemplateParser, _Ext_Base);

  Ext_util_XTemplateParser.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_XTemplateParser.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_XTemplateParser.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_XTemplateParser.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_XTemplateParser.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_XTemplateParser.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_XTemplateParser, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_XTemplateParser.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_XTemplateParser.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_XTemplateParser(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_XTemplateParser.PROPERTIES()), events.concat(Ext_util_XTemplateParser.EVENTS())) || this;
  }

  var _proto = Ext_util_XTemplateParser.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_XTemplateParser;
}(Ext_Base);

export { Ext_util_XTemplateParser as default };