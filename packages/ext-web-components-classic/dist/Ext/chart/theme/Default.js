import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_theme_Base from '../../../Ext/chart/theme/Base.js';

var Ext_chart_theme_Default = /*#__PURE__*/function (_Ext_chart_theme_Base) {
  _inheritsLoose(Ext_chart_theme_Default, _Ext_chart_theme_Base);

  Ext_chart_theme_Default.PROPERTIES = function PROPERTIES() {
    return ['axis', 'baseColor', 'chart', 'colors', 'gradients', 'legend', 'series', 'seriesThemes', 'sprites'];
  };

  Ext_chart_theme_Default.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_theme_Default.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_Default.PROPERTIES());
    return Ext_chart_theme_Base.getProperties(properties);
  };

  Ext_chart_theme_Default.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_theme_Default.EVENTS());
    return Ext_chart_theme_Base.getEvents(events);
  };

  _createClass(Ext_chart_theme_Default, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_theme_Base.observedAttributes;
      Ext_chart_theme_Default.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_theme_Default.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_theme_Default(properties, events) {
    return _Ext_chart_theme_Base.call(this, properties.concat(Ext_chart_theme_Default.PROPERTIES()), events.concat(Ext_chart_theme_Default.EVENTS())) || this;
  }

  var _proto = Ext_chart_theme_Default.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_theme_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_theme_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_theme_Default;
}(Ext_chart_theme_Base);

export { Ext_chart_theme_Default as default };