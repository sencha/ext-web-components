import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_Layout from '../../../Ext/layout/Layout.js';

var Ext_layout_container_Container = /*#__PURE__*/function (_Ext_layout_Layout) {
  _inheritsLoose(Ext_layout_container_Container, _Ext_layout_Layout);

  Ext_layout_container_Container.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls'];
  };

  Ext_layout_container_Container.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Container.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Container.PROPERTIES());
    return Ext_layout_Layout.getProperties(properties);
  };

  Ext_layout_container_Container.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Container.EVENTS());
    return Ext_layout_Layout.getEvents(events);
  };

  _createClass(Ext_layout_container_Container, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_Layout.observedAttributes;
      Ext_layout_container_Container.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Container.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Container(properties, events) {
    return _Ext_layout_Layout.call(this, properties.concat(Ext_layout_container_Container.PROPERTIES()), events.concat(Ext_layout_container_Container.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Container.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_Layout.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_Layout.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Container;
}(Ext_layout_Layout);

export { Ext_layout_container_Container as default };