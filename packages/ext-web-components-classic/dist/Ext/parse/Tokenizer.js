import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Fly from '../../Ext/util/Fly.js';

var Ext_parse_Tokenizer = /*#__PURE__*/function (_Ext_util_Fly) {
  _inheritsLoose(Ext_parse_Tokenizer, _Ext_util_Fly);

  Ext_parse_Tokenizer.PROPERTIES = function PROPERTIES() {
    return ['keywords', 'operators'];
  };

  Ext_parse_Tokenizer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_parse_Tokenizer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_parse_Tokenizer.PROPERTIES());
    return Ext_util_Fly.getProperties(properties);
  };

  Ext_parse_Tokenizer.getEvents = function getEvents(events) {
    events = events.concat(Ext_parse_Tokenizer.EVENTS());
    return Ext_util_Fly.getEvents(events);
  };

  _createClass(Ext_parse_Tokenizer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Fly.observedAttributes;
      Ext_parse_Tokenizer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_parse_Tokenizer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_parse_Tokenizer(properties, events) {
    return _Ext_util_Fly.call(this, properties.concat(Ext_parse_Tokenizer.PROPERTIES()), events.concat(Ext_parse_Tokenizer.EVENTS())) || this;
  }

  var _proto = Ext_parse_Tokenizer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Fly.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Fly.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_parse_Tokenizer;
}(Ext_util_Fly);

export { Ext_parse_Tokenizer as default };