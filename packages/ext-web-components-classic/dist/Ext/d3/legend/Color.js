import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_legend_Legend from '../../../Ext/d3/legend/Legend.js';

var Ext_d3_legend_Color = /*#__PURE__*/function (_Ext_d3_legend_Legend) {
  _inheritsLoose(Ext_d3_legend_Color, _Ext_d3_legend_Legend);

  Ext_d3_legend_Color.PROPERTIES = function PROPERTIES() {
    return ['axis', 'component', 'docked', 'items', 'listeners'];
  };

  Ext_d3_legend_Color.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_legend_Color.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_legend_Color.PROPERTIES());
    return Ext_d3_legend_Legend.getProperties(properties);
  };

  Ext_d3_legend_Color.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_legend_Color.EVENTS());
    return Ext_d3_legend_Legend.getEvents(events);
  };

  _createClass(Ext_d3_legend_Color, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_legend_Legend.observedAttributes;
      Ext_d3_legend_Color.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_legend_Color.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_legend_Color(properties, events) {
    return _Ext_d3_legend_Legend.call(this, properties.concat(Ext_d3_legend_Color.PROPERTIES()), events.concat(Ext_d3_legend_Color.EVENTS())) || this;
  }

  var _proto = Ext_d3_legend_Color.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_legend_Legend.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_legend_Legend.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_legend_Color;
}(Ext_d3_legend_Legend);

export { Ext_d3_legend_Color as default };