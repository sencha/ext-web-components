import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_BasicFilter from '../../Ext/util/BasicFilter.js';

var Ext_util_Filter = /*#__PURE__*/function (_Ext_util_BasicFilter) {
  _inheritsLoose(Ext_util_Filter, _Ext_util_BasicFilter);

  Ext_util_Filter.PROPERTIES = function PROPERTIES() {
    return ['anyMatch', 'caseSensitive', 'convert', 'disabled', 'disableOnEmpty', 'exactMatch', 'filterFn', 'id', 'operator', 'property', 'root', 'scope', 'serializer', 'value'];
  };

  Ext_util_Filter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Filter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Filter.PROPERTIES());
    return Ext_util_BasicFilter.getProperties(properties);
  };

  Ext_util_Filter.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Filter.EVENTS());
    return Ext_util_BasicFilter.getEvents(events);
  };

  _createClass(Ext_util_Filter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_BasicFilter.observedAttributes;
      Ext_util_Filter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Filter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Filter(properties, events) {
    return _Ext_util_BasicFilter.call(this, properties.concat(Ext_util_Filter.PROPERTIES()), events.concat(Ext_util_Filter.EVENTS())) || this;
  }

  var _proto = Ext_util_Filter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_BasicFilter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_BasicFilter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Filter;
}(Ext_util_BasicFilter);

export { Ext_util_Filter as default };