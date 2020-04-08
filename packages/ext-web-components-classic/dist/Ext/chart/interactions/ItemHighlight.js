import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

var Ext_chart_interactions_ItemHighlight = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(Ext_chart_interactions_ItemHighlight, _Ext_chart_interactio);

  Ext_chart_interactions_ItemHighlight.PROPERTIES = function PROPERTIES() {
    return ['chart', 'enabled', 'gesture', 'listeners', 'multiTooltips', 'sticky'];
  };

  Ext_chart_interactions_ItemHighlight.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_interactions_ItemHighlight.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_ItemHighlight.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  };

  Ext_chart_interactions_ItemHighlight.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_ItemHighlight.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  };

  _createClass(Ext_chart_interactions_ItemHighlight, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_interactio.observedAttributes;
      Ext_chart_interactions_ItemHighlight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_ItemHighlight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_ItemHighlight(properties, events) {
    return _Ext_chart_interactio.call(this, properties.concat(Ext_chart_interactions_ItemHighlight.PROPERTIES()), events.concat(Ext_chart_interactions_ItemHighlight.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_ItemHighlight.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_interactio.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_interactio.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_ItemHighlight;
}(Ext_chart_interactions_Abstract);

export { Ext_chart_interactions_ItemHighlight as default };