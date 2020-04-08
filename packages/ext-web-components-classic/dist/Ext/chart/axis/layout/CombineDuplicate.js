import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_layout_Discrete from '../../../../Ext/chart/axis/layout/Discrete.js';

var Ext_chart_axis_layout_CombineDuplicate = /*#__PURE__*/function (_Ext_chart_axis_layou) {
  _inheritsLoose(Ext_chart_axis_layout_CombineDuplicate, _Ext_chart_axis_layou);

  Ext_chart_axis_layout_CombineDuplicate.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_CombineDuplicate.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_layout_CombineDuplicate.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_CombineDuplicate.PROPERTIES());
    return Ext_chart_axis_layout_Discrete.getProperties(properties);
  };

  Ext_chart_axis_layout_CombineDuplicate.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_CombineDuplicate.EVENTS());
    return Ext_chart_axis_layout_Discrete.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_CombineDuplicate, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_layou.observedAttributes;
      Ext_chart_axis_layout_CombineDuplicate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_CombineDuplicate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_CombineDuplicate(properties, events) {
    return _Ext_chart_axis_layou.call(this, properties.concat(Ext_chart_axis_layout_CombineDuplicate.PROPERTIES()), events.concat(Ext_chart_axis_layout_CombineDuplicate.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_CombineDuplicate.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_layou.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_layou.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_CombineDuplicate;
}(Ext_chart_axis_layout_Discrete);

export { Ext_chart_axis_layout_CombineDuplicate as default };