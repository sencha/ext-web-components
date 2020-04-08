import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_filters_filter_Base from '../../../../Ext/grid/filters/filter/Base.js';

var Ext_grid_filters_filter_TriFilter = /*#__PURE__*/function (_Ext_grid_filters_fil) {
  _inheritsLoose(Ext_grid_filters_filter_TriFilter, _Ext_grid_filters_fil);

  Ext_grid_filters_filter_TriFilter.PROPERTIES = function PROPERTIES() {
    return ['active', 'dataIndex', 'itemDefaults', 'serializer', 'updateBuffer'];
  };

  Ext_grid_filters_filter_TriFilter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_filters_filter_TriFilter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_TriFilter.PROPERTIES());
    return Ext_grid_filters_filter_Base.getProperties(properties);
  };

  Ext_grid_filters_filter_TriFilter.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_TriFilter.EVENTS());
    return Ext_grid_filters_filter_Base.getEvents(events);
  };

  _createClass(Ext_grid_filters_filter_TriFilter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_filters_fil.observedAttributes;
      Ext_grid_filters_filter_TriFilter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_filters_filter_TriFilter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_filter_TriFilter(properties, events) {
    return _Ext_grid_filters_fil.call(this, properties.concat(Ext_grid_filters_filter_TriFilter.PROPERTIES()), events.concat(Ext_grid_filters_filter_TriFilter.EVENTS())) || this;
  }

  var _proto = Ext_grid_filters_filter_TriFilter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_filters_fil.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_filters_fil.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_filter_TriFilter;
}(Ext_grid_filters_filter_Base);

export { Ext_grid_filters_filter_TriFilter as default };