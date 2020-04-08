import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

var Ext_chart_interactions_PanZoom = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(Ext_chart_interactions_PanZoom, _Ext_chart_interactio);

  Ext_chart_interactions_PanZoom.PROPERTIES = function PROPERTIES() {
    return ['axes', 'chart', 'doubleTapReset', 'enabled', 'gesture', 'listeners', 'overflowArrowOptions', 'panGesture', 'showOverflowArrows', 'zoomGesture', 'zoomOnPan'];
  };

  Ext_chart_interactions_PanZoom.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_interactions_PanZoom.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_PanZoom.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  };

  Ext_chart_interactions_PanZoom.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_PanZoom.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  };

  _createClass(Ext_chart_interactions_PanZoom, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_interactio.observedAttributes;
      Ext_chart_interactions_PanZoom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_PanZoom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_PanZoom(properties, events) {
    return _Ext_chart_interactio.call(this, properties.concat(Ext_chart_interactions_PanZoom.PROPERTIES()), events.concat(Ext_chart_interactions_PanZoom.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_PanZoom.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_interactio.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_interactio.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_PanZoom;
}(Ext_chart_interactions_Abstract);

export { Ext_chart_interactions_PanZoom as default };