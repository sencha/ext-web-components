import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Column from '../../../Ext/layout/container/Column.js';

var Ext_layout_container_Dashboard = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Dashboard, _Ext_layout_container);

  Ext_layout_container_Dashboard.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls', 'reserveScrollbar'];
  };

  Ext_layout_container_Dashboard.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Dashboard.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Dashboard.PROPERTIES());
    return Ext_layout_container_Column.getProperties(properties);
  };

  Ext_layout_container_Dashboard.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Dashboard.EVENTS());
    return Ext_layout_container_Column.getEvents(events);
  };

  _createClass(Ext_layout_container_Dashboard, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Dashboard.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Dashboard.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Dashboard(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Dashboard.PROPERTIES()), events.concat(Ext_layout_container_Dashboard.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Dashboard.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Dashboard;
}(Ext_layout_container_Column);

export { Ext_layout_container_Dashboard as default };