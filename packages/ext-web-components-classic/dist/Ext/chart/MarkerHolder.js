import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_chart_MarkerHolder = /*#__PURE__*/function (_Ext_Mixin) {
  _inheritsLoose(Ext_chart_MarkerHolder, _Ext_Mixin);

  Ext_chart_MarkerHolder.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_chart_MarkerHolder.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_MarkerHolder.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_MarkerHolder.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_chart_MarkerHolder.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_MarkerHolder.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_chart_MarkerHolder, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_chart_MarkerHolder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_MarkerHolder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_MarkerHolder(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_chart_MarkerHolder.PROPERTIES()), events.concat(Ext_chart_MarkerHolder.EVENTS())) || this;
  }

  var _proto = Ext_chart_MarkerHolder.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_MarkerHolder;
}(Ext_Mixin);

export { Ext_chart_MarkerHolder as default };