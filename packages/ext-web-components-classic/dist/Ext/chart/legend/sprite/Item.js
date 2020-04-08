import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Composite from '../../../../Ext/draw/sprite/Composite.js';

var Ext_chart_legend_sprite_Item = /*#__PURE__*/function (_Ext_draw_sprite_Comp) {
  _inheritsLoose(Ext_chart_legend_sprite_Item, _Ext_draw_sprite_Comp);

  Ext_chart_legend_sprite_Item.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_legend_sprite_Item.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_legend_sprite_Item.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_sprite_Item.PROPERTIES());
    return Ext_draw_sprite_Composite.getProperties(properties);
  };

  Ext_chart_legend_sprite_Item.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_legend_sprite_Item.EVENTS());
    return Ext_draw_sprite_Composite.getEvents(events);
  };

  _createClass(Ext_chart_legend_sprite_Item, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Comp.observedAttributes;
      Ext_chart_legend_sprite_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_legend_sprite_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_sprite_Item(properties, events) {
    return _Ext_draw_sprite_Comp.call(this, properties.concat(Ext_chart_legend_sprite_Item.PROPERTIES()), events.concat(Ext_chart_legend_sprite_Item.EVENTS())) || this;
  }

  var _proto = Ext_chart_legend_sprite_Item.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Comp.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Comp.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_sprite_Item;
}(Ext_draw_sprite_Composite);

export { Ext_chart_legend_sprite_Item as default };