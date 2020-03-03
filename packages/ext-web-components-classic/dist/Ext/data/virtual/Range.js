import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Range from '../../../Ext/data/Range.js';

var Ext_data_virtual_Range = /*#__PURE__*/function (_Ext_data_Range) {
  _inheritsLoose(Ext_data_virtual_Range, _Ext_data_Range);

  Ext_data_virtual_Range.PROPERTIES = function PROPERTIES() {
    return ['begin', 'buffer', 'callback', 'end', 'leadingBufferZone', 'prefetch', 'scope', 'store', 'trailingBufferZone', 'waitTimeout'];
  };

  Ext_data_virtual_Range.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_virtual_Range.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_virtual_Range.PROPERTIES());
    return Ext_data_Range.getProperties(properties);
  };

  Ext_data_virtual_Range.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_virtual_Range.EVENTS());
    return Ext_data_Range.getEvents(events);
  };

  _createClass(Ext_data_virtual_Range, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Range.observedAttributes;
      Ext_data_virtual_Range.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_virtual_Range.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_virtual_Range(properties, events) {
    return _Ext_data_Range.call(this, properties.concat(Ext_data_virtual_Range.PROPERTIES()), events.concat(Ext_data_virtual_Range.EVENTS())) || this;
  }

  var _proto = Ext_data_virtual_Range.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Range.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Range.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_virtual_Range;
}(Ext_data_Range);

export { Ext_data_virtual_Range as default };