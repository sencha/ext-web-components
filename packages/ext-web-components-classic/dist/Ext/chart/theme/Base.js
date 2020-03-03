import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_theme_BaseTheme from '../../../Ext/chart/theme/BaseTheme.js';

var Ext_chart_theme_Base = /*#__PURE__*/function (_Ext_chart_theme_Base) {
  _inheritsLoose(Ext_chart_theme_Base, _Ext_chart_theme_Base);

  Ext_chart_theme_Base.PROPERTIES = function PROPERTIES() {
    return ['axis', 'baseColor', 'chart', 'colors', 'gradients', 'legend', 'series', 'seriesThemes', 'sprites'];
  };

  Ext_chart_theme_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_theme_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_Base.PROPERTIES());
    return Ext_chart_theme_BaseTheme.getProperties(properties);
  };

  Ext_chart_theme_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_theme_Base.EVENTS());
    return Ext_chart_theme_BaseTheme.getEvents(events);
  };

  _createClass(Ext_chart_theme_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_theme_Base.observedAttributes;
      Ext_chart_theme_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_theme_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_theme_Base(properties, events) {
    return _Ext_chart_theme_Base.call(this, properties.concat(Ext_chart_theme_Base.PROPERTIES()), events.concat(Ext_chart_theme_Base.EVENTS())) || this;
  }

  var _proto = Ext_chart_theme_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_theme_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_theme_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_theme_Base;
}(Ext_chart_theme_BaseTheme);

export { Ext_chart_theme_Base as default };