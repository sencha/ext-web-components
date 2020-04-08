import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_ItemHighlight from '../../../Ext/chart/interactions/ItemHighlight.js';

var Ext_chart_interactions_ItemEdit = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(Ext_chart_interactions_ItemEdit, _Ext_chart_interactio);

  Ext_chart_interactions_ItemEdit.PROPERTIES = function PROPERTIES() {
    return ['chart', 'enabled', 'gesture', 'listeners', 'multiTooltips', 'renderer', 'sticky', 'style', 'tooltip'];
  };

  Ext_chart_interactions_ItemEdit.EVENTS = function EVENTS() {
    return [{
      name: 'beginitemedit',
      parameters: 'chart,interaction,item'
    }, {
      name: 'enditemedit',
      parameters: 'chart,interaction,item,target'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_interactions_ItemEdit.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_ItemEdit.PROPERTIES());
    return Ext_chart_interactions_ItemHighlight.getProperties(properties);
  };

  Ext_chart_interactions_ItemEdit.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_ItemEdit.EVENTS());
    return Ext_chart_interactions_ItemHighlight.getEvents(events);
  };

  _createClass(Ext_chart_interactions_ItemEdit, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_interactio.observedAttributes;
      Ext_chart_interactions_ItemEdit.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_ItemEdit.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_ItemEdit(properties, events) {
    return _Ext_chart_interactio.call(this, properties.concat(Ext_chart_interactions_ItemEdit.PROPERTIES()), events.concat(Ext_chart_interactions_ItemEdit.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_ItemEdit.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_interactio.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_interactio.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_ItemEdit;
}(Ext_chart_interactions_ItemHighlight);

export { Ext_chart_interactions_ItemEdit as default };