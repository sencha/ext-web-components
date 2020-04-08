import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Mz_aggregate_axis_Item = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Mz_aggregate_axis_Item, _Ext_Base);

  Mz_aggregate_axis_Item.PROPERTIES = function PROPERTIES() {
    return ['id', 'key', 'name', 'sortValue', 'value'];
  };

  Mz_aggregate_axis_Item.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_axis_Item.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_axis_Item.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Mz_aggregate_axis_Item.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_axis_Item.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_axis_Item, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Mz_aggregate_axis_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_axis_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_axis_Item(properties, events) {
    return _Ext_Base.call(this, properties.concat(Mz_aggregate_axis_Item.PROPERTIES()), events.concat(Mz_aggregate_axis_Item.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_axis_Item.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_axis_Item;
}(Ext_Base);

export { Mz_aggregate_axis_Item as default };