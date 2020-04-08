import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Container from '../../../Ext/layout/container/Container.js';

var Ext_layout_container_Auto = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Auto, _Ext_layout_container);

  Ext_layout_container_Auto.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls', 'reserveScrollbar'];
  };

  Ext_layout_container_Auto.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Auto.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Auto.PROPERTIES());
    return Ext_layout_container_Container.getProperties(properties);
  };

  Ext_layout_container_Auto.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Auto.EVENTS());
    return Ext_layout_container_Container.getEvents(events);
  };

  _createClass(Ext_layout_container_Auto, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Auto.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Auto.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Auto(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Auto.PROPERTIES()), events.concat(Ext_layout_container_Auto.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Auto.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Auto;
}(Ext_layout_container_Container);

export { Ext_layout_container_Auto as default };