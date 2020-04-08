import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

var Ext_chart_interactions_CrossZoom = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(Ext_chart_interactions_CrossZoom, _Ext_chart_interactio);

  Ext_chart_interactions_CrossZoom.PROPERTIES = function PROPERTIES() {
    return ['axes', 'chart', 'enabled', 'gesture', 'listeners'];
  };

  Ext_chart_interactions_CrossZoom.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_interactions_CrossZoom.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_CrossZoom.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  };

  Ext_chart_interactions_CrossZoom.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_CrossZoom.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  };

  _createClass(Ext_chart_interactions_CrossZoom, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_interactio.observedAttributes;
      Ext_chart_interactions_CrossZoom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_CrossZoom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_CrossZoom(properties, events) {
    return _Ext_chart_interactio.call(this, properties.concat(Ext_chart_interactions_CrossZoom.PROPERTIES()), events.concat(Ext_chart_interactions_CrossZoom.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_CrossZoom.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_interactio.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_interactio.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_CrossZoom;
}(Ext_chart_interactions_Abstract);

export { Ext_chart_interactions_CrossZoom as default };