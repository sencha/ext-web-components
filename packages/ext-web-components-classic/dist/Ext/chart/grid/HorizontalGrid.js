import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../Ext/draw/sprite/Sprite.js';

var Ext_chart_grid_HorizontalGrid = /*#__PURE__*/function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_chart_grid_HorizontalGrid, _Ext_draw_sprite_Spri);

  Ext_chart_grid_HorizontalGrid.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_grid_HorizontalGrid.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_grid_HorizontalGrid.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_grid_HorizontalGrid.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_chart_grid_HorizontalGrid.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_grid_HorizontalGrid.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_chart_grid_HorizontalGrid, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_chart_grid_HorizontalGrid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_grid_HorizontalGrid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_grid_HorizontalGrid(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_chart_grid_HorizontalGrid.PROPERTIES()), events.concat(Ext_chart_grid_HorizontalGrid.EVENTS())) || this;
  }

  var _proto = Ext_chart_grid_HorizontalGrid.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_grid_HorizontalGrid;
}(Ext_draw_sprite_Sprite);

export { Ext_chart_grid_HorizontalGrid as default };