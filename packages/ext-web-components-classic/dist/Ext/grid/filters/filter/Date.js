import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_filters_filter_TriFilter from '../../../../Ext/grid/filters/filter/TriFilter.js';

var Ext_grid_filters_filter_Date = /*#__PURE__*/function (_Ext_grid_filters_fil) {
  _inheritsLoose(Ext_grid_filters_filter_Date, _Ext_grid_filters_fil);

  Ext_grid_filters_filter_Date.PROPERTIES = function PROPERTIES() {
    return ['active', 'dataIndex', 'dateFormat', 'fields', 'itemDefaults', 'maxDate', 'minDate', 'pickerDefaults', 'serializer', 'updateBuffer'];
  };

  Ext_grid_filters_filter_Date.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_filters_filter_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_Date.PROPERTIES());
    return Ext_grid_filters_filter_TriFilter.getProperties(properties);
  };

  Ext_grid_filters_filter_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_Date.EVENTS());
    return Ext_grid_filters_filter_TriFilter.getEvents(events);
  };

  _createClass(Ext_grid_filters_filter_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_filters_fil.observedAttributes;
      Ext_grid_filters_filter_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_filters_filter_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_filter_Date(properties, events) {
    return _Ext_grid_filters_fil.call(this, properties.concat(Ext_grid_filters_filter_Date.PROPERTIES()), events.concat(Ext_grid_filters_filter_Date.EVENTS())) || this;
  }

  var _proto = Ext_grid_filters_filter_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_filters_fil.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_filters_fil.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_filter_Date;
}(Ext_grid_filters_filter_TriFilter);

export { Ext_grid_filters_filter_Date as default };