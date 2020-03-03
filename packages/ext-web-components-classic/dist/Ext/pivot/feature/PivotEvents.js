import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

var Ext_pivot_feature_PivotEvents = /*#__PURE__*/function (_Ext_grid_feature_Fea) {
  _inheritsLoose(Ext_pivot_feature_PivotEvents, _Ext_grid_feature_Fea);

  Ext_pivot_feature_PivotEvents.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_pivot_feature_PivotEvents.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_feature_PivotEvents.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_feature_PivotEvents.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  };

  Ext_pivot_feature_PivotEvents.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_feature_PivotEvents.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  };

  _createClass(Ext_pivot_feature_PivotEvents, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Fea.observedAttributes;
      Ext_pivot_feature_PivotEvents.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_feature_PivotEvents.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_feature_PivotEvents(properties, events) {
    return _Ext_grid_feature_Fea.call(this, properties.concat(Ext_pivot_feature_PivotEvents.PROPERTIES()), events.concat(Ext_pivot_feature_PivotEvents.EVENTS())) || this;
  }

  var _proto = Ext_pivot_feature_PivotEvents.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Fea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Fea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_feature_PivotEvents;
}(Ext_grid_feature_Feature);

export { Ext_pivot_feature_PivotEvents as default };