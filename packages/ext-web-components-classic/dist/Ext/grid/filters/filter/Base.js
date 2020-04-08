import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../../Ext/Base.js';

var Ext_grid_filters_filter_Base = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_grid_filters_filter_Base, _Ext_Base);

  Ext_grid_filters_filter_Base.PROPERTIES = function PROPERTIES() {
    return ['active', 'dataIndex', 'itemDefaults', 'serializer', 'updateBuffer'];
  };

  Ext_grid_filters_filter_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_filters_filter_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_Base.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_grid_filters_filter_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_Base.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_grid_filters_filter_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_grid_filters_filter_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_filters_filter_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_filter_Base(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_grid_filters_filter_Base.PROPERTIES()), events.concat(Ext_grid_filters_filter_Base.EVENTS())) || this;
  }

  var _proto = Ext_grid_filters_filter_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_filter_Base;
}(Ext_Base);

export { Ext_grid_filters_filter_Base as default };