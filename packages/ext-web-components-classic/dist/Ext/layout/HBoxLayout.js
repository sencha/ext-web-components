import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Box from '../../Ext/layout/container/Box.js';

var Ext_layout_HBoxLayout = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_HBoxLayout, _Ext_layout_container);

  Ext_layout_HBoxLayout.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignRoundingMethod', 'animatePolicy', 'childEls', 'constrainAlign', 'enableSplitters', 'itemCls', 'overflowHandler', 'pack', 'padding', 'stretchMaxPartner', 'vertical'];
  };

  Ext_layout_HBoxLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_HBoxLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_HBoxLayout.PROPERTIES());
    return Ext_layout_container_Box.getProperties(properties);
  };

  Ext_layout_HBoxLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_HBoxLayout.EVENTS());
    return Ext_layout_container_Box.getEvents(events);
  };

  _createClass(Ext_layout_HBoxLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_HBoxLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_HBoxLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_HBoxLayout(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_HBoxLayout.PROPERTIES()), events.concat(Ext_layout_HBoxLayout.EVENTS())) || this;
  }

  var _proto = Ext_layout_HBoxLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_HBoxLayout;
}(Ext_layout_container_Box);

export { Ext_layout_HBoxLayout as default };