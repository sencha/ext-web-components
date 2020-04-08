import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_XTemplateParser from '../../Ext/util/XTemplateParser.js';

var Ext_util_XTemplateCompiler = /*#__PURE__*/function (_Ext_util_XTemplatePa) {
  _inheritsLoose(Ext_util_XTemplateCompiler, _Ext_util_XTemplatePa);

  Ext_util_XTemplateCompiler.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_XTemplateCompiler.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_XTemplateCompiler.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_XTemplateCompiler.PROPERTIES());
    return Ext_util_XTemplateParser.getProperties(properties);
  };

  Ext_util_XTemplateCompiler.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_XTemplateCompiler.EVENTS());
    return Ext_util_XTemplateParser.getEvents(events);
  };

  _createClass(Ext_util_XTemplateCompiler, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_XTemplatePa.observedAttributes;
      Ext_util_XTemplateCompiler.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_XTemplateCompiler.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_XTemplateCompiler(properties, events) {
    return _Ext_util_XTemplatePa.call(this, properties.concat(Ext_util_XTemplateCompiler.PROPERTIES()), events.concat(Ext_util_XTemplateCompiler.EVENTS())) || this;
  }

  var _proto = Ext_util_XTemplateCompiler.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_XTemplatePa.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_XTemplatePa.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_XTemplateCompiler;
}(Ext_util_XTemplateParser);

export { Ext_util_XTemplateCompiler as default };