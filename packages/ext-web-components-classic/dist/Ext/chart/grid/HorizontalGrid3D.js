import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_grid_HorizontalGrid from '../../../Ext/chart/grid/HorizontalGrid.js';

var Ext_chart_grid_HorizontalGrid3D = /*#__PURE__*/function (_Ext_chart_grid_Horiz) {
  _inheritsLoose(Ext_chart_grid_HorizontalGrid3D, _Ext_chart_grid_Horiz);

  Ext_chart_grid_HorizontalGrid3D.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_grid_HorizontalGrid3D.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_grid_HorizontalGrid3D.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_grid_HorizontalGrid3D.PROPERTIES());
    return Ext_chart_grid_HorizontalGrid.getProperties(properties);
  };

  Ext_chart_grid_HorizontalGrid3D.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_grid_HorizontalGrid3D.EVENTS());
    return Ext_chart_grid_HorizontalGrid.getEvents(events);
  };

  _createClass(Ext_chart_grid_HorizontalGrid3D, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_grid_Horiz.observedAttributes;
      Ext_chart_grid_HorizontalGrid3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_grid_HorizontalGrid3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_grid_HorizontalGrid3D(properties, events) {
    return _Ext_chart_grid_Horiz.call(this, properties.concat(Ext_chart_grid_HorizontalGrid3D.PROPERTIES()), events.concat(Ext_chart_grid_HorizontalGrid3D.EVENTS())) || this;
  }

  var _proto = Ext_chart_grid_HorizontalGrid3D.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_grid_Horiz.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_grid_Horiz.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_grid_HorizontalGrid3D;
}(Ext_chart_grid_HorizontalGrid);

export { Ext_chart_grid_HorizontalGrid3D as default };