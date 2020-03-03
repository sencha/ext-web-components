import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Container from '../../Ext/layout/container/Container.js';

var Ext_layout_BoxLayout = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_BoxLayout, _Ext_layout_container);

  Ext_layout_BoxLayout.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignRoundingMethod', 'animatePolicy', 'childEls', 'constrainAlign', 'enableSplitters', 'itemCls', 'overflowHandler', 'pack', 'padding', 'stretchMaxPartner', 'vertical'];
  };

  Ext_layout_BoxLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_BoxLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_BoxLayout.PROPERTIES());
    return Ext_layout_container_Container.getProperties(properties);
  };

  Ext_layout_BoxLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_BoxLayout.EVENTS());
    return Ext_layout_container_Container.getEvents(events);
  };

  _createClass(Ext_layout_BoxLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_BoxLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_BoxLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_BoxLayout(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_BoxLayout.PROPERTIES()), events.concat(Ext_layout_BoxLayout.EVENTS())) || this;
  }

  var _proto = Ext_layout_BoxLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_BoxLayout;
}(Ext_layout_container_Container);

export { Ext_layout_BoxLayout as default };