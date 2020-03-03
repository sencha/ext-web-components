import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_filters_filter_SingleFilter from '../../../../Ext/grid/filters/filter/SingleFilter.js';

var Ext_grid_filters_filter_Boolean = /*#__PURE__*/function (_Ext_grid_filters_fil) {
  _inheritsLoose(Ext_grid_filters_filter_Boolean, _Ext_grid_filters_fil);

  Ext_grid_filters_filter_Boolean.PROPERTIES = function PROPERTIES() {
    return ['active', 'dataIndex', 'defaultValue', 'itemDefaults', 'noText', 'serializer', 'updateBuffer', 'yesText'];
  };

  Ext_grid_filters_filter_Boolean.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_filters_filter_Boolean.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_filters_filter_Boolean.PROPERTIES());
    return Ext_grid_filters_filter_SingleFilter.getProperties(properties);
  };

  Ext_grid_filters_filter_Boolean.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_filters_filter_Boolean.EVENTS());
    return Ext_grid_filters_filter_SingleFilter.getEvents(events);
  };

  _createClass(Ext_grid_filters_filter_Boolean, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_filters_fil.observedAttributes;
      Ext_grid_filters_filter_Boolean.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_filters_filter_Boolean.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_filter_Boolean(properties, events) {
    return _Ext_grid_filters_fil.call(this, properties.concat(Ext_grid_filters_filter_Boolean.PROPERTIES()), events.concat(Ext_grid_filters_filter_Boolean.EVENTS())) || this;
  }

  var _proto = Ext_grid_filters_filter_Boolean.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_filters_fil.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_filters_fil.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_filter_Boolean;
}(Ext_grid_filters_filter_SingleFilter);

export { Ext_grid_filters_filter_Boolean as default };