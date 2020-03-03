import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Instancing from '../../Ext/draw/sprite/Instancing.js';

var Ext_chart_Markers = /*#__PURE__*/function (_Ext_draw_sprite_Inst) {
  _inheritsLoose(Ext_chart_Markers, _Ext_draw_sprite_Inst);

  Ext_chart_Markers.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'instances', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'template', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_Markers.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_Markers.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_Markers.PROPERTIES());
    return Ext_draw_sprite_Instancing.getProperties(properties);
  };

  Ext_chart_Markers.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_Markers.EVENTS());
    return Ext_draw_sprite_Instancing.getEvents(events);
  };

  _createClass(Ext_chart_Markers, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Inst.observedAttributes;
      Ext_chart_Markers.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_Markers.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_Markers(properties, events) {
    return _Ext_draw_sprite_Inst.call(this, properties.concat(Ext_chart_Markers.PROPERTIES()), events.concat(Ext_chart_Markers.EVENTS())) || this;
  }

  var _proto = Ext_chart_Markers.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Inst.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Inst.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_Markers;
}(Ext_draw_sprite_Instancing);

export { Ext_chart_Markers as default };