import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_sprite_Axis from '../../../../Ext/chart/axis/sprite/Axis.js';

var Ext_chart_axis_sprite_Axis3D = /*#__PURE__*/function (_Ext_chart_axis_sprit) {
  _inheritsLoose(Ext_chart_axis_sprite_Axis3D, _Ext_chart_axis_sprit);

  Ext_chart_axis_sprite_Axis3D.PROPERTIES = function PROPERTIES() {
    return ['animation', 'axis', 'axisLine', 'baseRotation', 'centerX', 'centerY', 'dataMax', 'dataMin', 'dirty', 'endGap', 'enlargeEstStepSizeByText', 'estStepSize', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'grid', 'hidden', 'label', 'labelOffset', 'layout', 'layoutContext', 'length', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'majorTicks', 'majorTickSize', 'max', 'min', 'minorTicks', 'minorTickSize', 'minStepSize', 'miterLimit', 'parent', 'position', 'radius', 'renderer', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'segmenter', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startGap', 'strokeOpacity', 'strokeStyle', 'surface', 'textPadding', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'visibleMax', 'visibleMin', 'zIndex'];
  };

  Ext_chart_axis_sprite_Axis3D.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_sprite_Axis3D.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_sprite_Axis3D.PROPERTIES());
    return Ext_chart_axis_sprite_Axis.getProperties(properties);
  };

  Ext_chart_axis_sprite_Axis3D.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_sprite_Axis3D.EVENTS());
    return Ext_chart_axis_sprite_Axis.getEvents(events);
  };

  _createClass(Ext_chart_axis_sprite_Axis3D, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_sprit.observedAttributes;
      Ext_chart_axis_sprite_Axis3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_sprite_Axis3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_sprite_Axis3D(properties, events) {
    return _Ext_chart_axis_sprit.call(this, properties.concat(Ext_chart_axis_sprite_Axis3D.PROPERTIES()), events.concat(Ext_chart_axis_sprite_Axis3D.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_sprite_Axis3D.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_sprit.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_sprit.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_sprite_Axis3D;
}(Ext_chart_axis_sprite_Axis);

export { Ext_chart_axis_sprite_Axis3D as default };