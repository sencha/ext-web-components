import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dashboard_Part = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dashboard_Part, _Ext_Base);

  Ext_dashboard_Part.PROPERTIES = function PROPERTIES() {
    return ['viewTemplate'];
  };

  Ext_dashboard_Part.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dashboard_Part.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dashboard_Part.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dashboard_Part.getEvents = function getEvents(events) {
    events = events.concat(Ext_dashboard_Part.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dashboard_Part, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dashboard_Part.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dashboard_Part.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dashboard_Part(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dashboard_Part.PROPERTIES()), events.concat(Ext_dashboard_Part.EVENTS())) || this;
  }

  var _proto = Ext_dashboard_Part.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dashboard_Part;
}(Ext_Base);

export { Ext_dashboard_Part as default };