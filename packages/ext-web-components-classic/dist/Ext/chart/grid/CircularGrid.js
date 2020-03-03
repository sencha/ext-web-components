import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Circle from '../../../Ext/draw/sprite/Circle.js';

var Ext_chart_grid_CircularGrid = /*#__PURE__*/function (_Ext_draw_sprite_Circ) {
  _inheritsLoose(Ext_chart_grid_CircularGrid, _Ext_draw_sprite_Circ);

  Ext_chart_grid_CircularGrid.PROPERTIES = function PROPERTIES() {
    return ['animation', 'cx', 'cy', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'r', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_grid_CircularGrid.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_grid_CircularGrid.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_grid_CircularGrid.PROPERTIES());
    return Ext_draw_sprite_Circle.getProperties(properties);
  };

  Ext_chart_grid_CircularGrid.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_grid_CircularGrid.EVENTS());
    return Ext_draw_sprite_Circle.getEvents(events);
  };

  _createClass(Ext_chart_grid_CircularGrid, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Circ.observedAttributes;
      Ext_chart_grid_CircularGrid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_grid_CircularGrid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_grid_CircularGrid(properties, events) {
    return _Ext_draw_sprite_Circ.call(this, properties.concat(Ext_chart_grid_CircularGrid.PROPERTIES()), events.concat(Ext_chart_grid_CircularGrid.EVENTS())) || this;
  }

  var _proto = Ext_chart_grid_CircularGrid.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Circ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Circ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_grid_CircularGrid;
}(Ext_draw_sprite_Circle);

export { Ext_chart_grid_CircularGrid as default };