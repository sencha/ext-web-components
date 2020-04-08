import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_feature_PivotEvents from '../../../Ext/pivot/feature/PivotEvents.js';

var Ext_pivot_feature_PivotView = /*#__PURE__*/function (_Ext_pivot_feature_Pi) {
  _inheritsLoose(Ext_pivot_feature_PivotView, _Ext_pivot_feature_Pi);

  Ext_pivot_feature_PivotView.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_pivot_feature_PivotView.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_feature_PivotView.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_feature_PivotView.PROPERTIES());
    return Ext_pivot_feature_PivotEvents.getProperties(properties);
  };

  Ext_pivot_feature_PivotView.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_feature_PivotView.EVENTS());
    return Ext_pivot_feature_PivotEvents.getEvents(events);
  };

  _createClass(Ext_pivot_feature_PivotView, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_feature_Pi.observedAttributes;
      Ext_pivot_feature_PivotView.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_feature_PivotView.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_feature_PivotView(properties, events) {
    return _Ext_pivot_feature_Pi.call(this, properties.concat(Ext_pivot_feature_PivotView.PROPERTIES()), events.concat(Ext_pivot_feature_PivotView.EVENTS())) || this;
  }

  var _proto = Ext_pivot_feature_PivotView.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_feature_Pi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_feature_Pi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_feature_PivotView;
}(Ext_pivot_feature_PivotEvents);

export { Ext_pivot_feature_PivotView as default };