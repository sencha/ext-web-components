import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../../Ext/draw/sprite/Sprite.js';

var Ext_chart_axis_sprite_Axis = /*#__PURE__*/function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_chart_axis_sprite_Axis, _Ext_draw_sprite_Spri);

  Ext_chart_axis_sprite_Axis.PROPERTIES = function PROPERTIES() {
    return ['animation', 'axis', 'axisLine', 'baseRotation', 'centerX', 'centerY', 'dataMax', 'dataMin', 'dirty', 'endGap', 'enlargeEstStepSizeByText', 'estStepSize', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'grid', 'hidden', 'label', 'labelOffset', 'layout', 'layoutContext', 'length', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'majorTicks', 'majorTickSize', 'max', 'min', 'minorTicks', 'minorTickSize', 'minStepSize', 'miterLimit', 'parent', 'position', 'radius', 'renderer', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'segmenter', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startGap', 'strokeOpacity', 'strokeStyle', 'surface', 'textPadding', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'visibleMax', 'visibleMin', 'zIndex'];
  };

  Ext_chart_axis_sprite_Axis.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_sprite_Axis.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_sprite_Axis.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_chart_axis_sprite_Axis.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_sprite_Axis.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_chart_axis_sprite_Axis, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_chart_axis_sprite_Axis.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_sprite_Axis.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_sprite_Axis(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_chart_axis_sprite_Axis.PROPERTIES()), events.concat(Ext_chart_axis_sprite_Axis.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_sprite_Axis.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_sprite_Axis;
}(Ext_draw_sprite_Sprite);

export { Ext_chart_axis_sprite_Axis as default };