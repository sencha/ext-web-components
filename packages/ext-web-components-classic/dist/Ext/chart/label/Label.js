import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Text from '../../../Ext/draw/sprite/Text.js';

var Ext_chart_label_Label = /*#__PURE__*/function (_Ext_draw_sprite_Text) {
  _inheritsLoose(Ext_chart_label_Label, _Ext_draw_sprite_Text);

  Ext_chart_label_Label.PROPERTIES = function PROPERTIES() {
    return ['animation', 'calloutLine', 'dirty', 'field', 'fillOpacity', 'fillStyle', 'font', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'fx', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'hideLessThan', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'preciseMeasurement', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'text', 'textAlign', 'textBaseline', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'x', 'y', 'zIndex'];
  };

  Ext_chart_label_Label.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_label_Label.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_label_Label.PROPERTIES());
    return Ext_draw_sprite_Text.getProperties(properties);
  };

  Ext_chart_label_Label.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_label_Label.EVENTS());
    return Ext_draw_sprite_Text.getEvents(events);
  };

  _createClass(Ext_chart_label_Label, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Text.observedAttributes;
      Ext_chart_label_Label.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_label_Label.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_label_Label(properties, events) {
    return _Ext_draw_sprite_Text.call(this, properties.concat(Ext_chart_label_Label.PROPERTIES()), events.concat(Ext_chart_label_Label.EVENTS())) || this;
  }

  var _proto = Ext_chart_label_Label.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Text.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Text.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_label_Label;
}(Ext_draw_sprite_Text);

export { Ext_chart_label_Label as default };