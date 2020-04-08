import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DD from '../../../Ext/dd/DD.js';

var Ext_ux_dd_BoxContainerDD = /*#__PURE__*/function (_Ext_dd_DD) {
  _inheritsLoose(Ext_ux_dd_BoxContainerDD, _Ext_dd_DD);

  Ext_ux_dd_BoxContainerDD.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ux_dd_BoxContainerDD.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_dd_BoxContainerDD.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_dd_BoxContainerDD.PROPERTIES());
    return Ext_dd_DD.getProperties(properties);
  };

  Ext_ux_dd_BoxContainerDD.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_dd_BoxContainerDD.EVENTS());
    return Ext_dd_DD.getEvents(events);
  };

  _createClass(Ext_ux_dd_BoxContainerDD, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DD.observedAttributes;
      Ext_ux_dd_BoxContainerDD.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_dd_BoxContainerDD.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_dd_BoxContainerDD(properties, events) {
    return _Ext_dd_DD.call(this, properties.concat(Ext_ux_dd_BoxContainerDD.PROPERTIES()), events.concat(Ext_ux_dd_BoxContainerDD.EVENTS())) || this;
  }

  var _proto = Ext_ux_dd_BoxContainerDD.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DD.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DD.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_dd_BoxContainerDD;
}(Ext_dd_DD);

export { Ext_ux_dd_BoxContainerDD as default };