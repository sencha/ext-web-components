import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../../Ext/Base.js';

var Ext_chart_axis_layout_Layout = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_chart_axis_layout_Layout, _Ext_Base);

  Ext_chart_axis_layout_Layout.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_Layout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_layout_Layout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_Layout.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_chart_axis_layout_Layout.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_Layout.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_Layout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_chart_axis_layout_Layout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_Layout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_Layout(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_chart_axis_layout_Layout.PROPERTIES()), events.concat(Ext_chart_axis_layout_Layout.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_Layout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_Layout;
}(Ext_Base);

export { Ext_chart_axis_layout_Layout as default };