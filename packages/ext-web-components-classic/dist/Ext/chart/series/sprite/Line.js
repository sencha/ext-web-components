import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Aggregative from '../../../../Ext/chart/series/sprite/Aggregative.js';

var Ext_chart_series_sprite_Line = /*#__PURE__*/function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_Line, _Ext_chart_series_spr);

  Ext_chart_series_sprite_Line.PROPERTIES = function PROPERTIES() {
    return ['animation', 'curve', 'dataClose', 'dataHigh', 'dataLow', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataOpen', 'dataX', 'dataY', 'dirty', 'field', 'fillArea', 'fillOpacity', 'fillStyle', 'flipXY', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'nullStyle', 'parent', 'preciseStroke', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'selectionTolerance', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'yCap', 'zIndex'];
  };

  Ext_chart_series_sprite_Line.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_Line.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Line.PROPERTIES());
    return Ext_chart_series_sprite_Aggregative.getProperties(properties);
  };

  Ext_chart_series_sprite_Line.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Line.EVENTS());
    return Ext_chart_series_sprite_Aggregative.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Line, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Line(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_Line.PROPERTIES()), events.concat(Ext_chart_series_sprite_Line.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Line.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Line;
}(Ext_chart_series_sprite_Aggregative);

export { Ext_chart_series_sprite_Line as default };