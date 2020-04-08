import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_chart_legend_SpriteLegend = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_chart_legend_SpriteLegend, _Ext_Base);

  Ext_chart_legend_SpriteLegend.PROPERTIES = function PROPERTIES() {
    return ['background', 'border', 'chart', 'docked', 'hidden', 'listeners', 'marker', 'padding', 'size', 'store', 'surface', 'toggleable'];
  };

  Ext_chart_legend_SpriteLegend.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_legend_SpriteLegend.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_SpriteLegend.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_chart_legend_SpriteLegend.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_legend_SpriteLegend.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_chart_legend_SpriteLegend, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_chart_legend_SpriteLegend.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_legend_SpriteLegend.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_SpriteLegend(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_chart_legend_SpriteLegend.PROPERTIES()), events.concat(Ext_chart_legend_SpriteLegend.EVENTS())) || this;
  }

  var _proto = Ext_chart_legend_SpriteLegend.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_SpriteLegend;
}(Ext_Base);

export { Ext_chart_legend_SpriteLegend as default };