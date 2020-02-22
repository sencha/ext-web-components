import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_sparkline_RangeMap =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_sparkline_RangeMap, _Ext_Base);

  Ext_sparkline_RangeMap.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_sparkline_RangeMap.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_sparkline_RangeMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_RangeMap.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_sparkline_RangeMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_RangeMap.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_RangeMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_sparkline_RangeMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_RangeMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_RangeMap(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_sparkline_RangeMap.PROPERTIES()), events.concat(Ext_sparkline_RangeMap.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_RangeMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_RangeMap;
}(Ext_Base);

export { Ext_sparkline_RangeMap as default };