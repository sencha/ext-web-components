import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_DelimitedValue from '../../Ext/util/DelimitedValue.js';

var Ext_util_TSV = /*#__PURE__*/function (_Ext_util_DelimitedVa) {
  _inheritsLoose(Ext_util_TSV, _Ext_util_DelimitedVa);

  Ext_util_TSV.PROPERTIES = function PROPERTIES() {
    return ['dateFormat', 'delimiter', 'lineBreak', 'quote'];
  };

  Ext_util_TSV.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_TSV.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_TSV.PROPERTIES());
    return Ext_util_DelimitedValue.getProperties(properties);
  };

  Ext_util_TSV.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_TSV.EVENTS());
    return Ext_util_DelimitedValue.getEvents(events);
  };

  _createClass(Ext_util_TSV, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_DelimitedVa.observedAttributes;
      Ext_util_TSV.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_TSV.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_TSV(properties, events) {
    return _Ext_util_DelimitedVa.call(this, properties.concat(Ext_util_TSV.PROPERTIES()), events.concat(Ext_util_TSV.EVENTS())) || this;
  }

  var _proto = Ext_util_TSV.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_DelimitedVa.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_DelimitedVa.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_TSV;
}(Ext_util_DelimitedValue);

export { Ext_util_TSV as default };