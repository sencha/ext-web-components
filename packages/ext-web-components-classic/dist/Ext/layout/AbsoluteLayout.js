import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Anchor from '../../Ext/layout/container/Anchor.js';

var Ext_layout_AbsoluteLayout = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_AbsoluteLayout, _Ext_layout_container);

  Ext_layout_AbsoluteLayout.PROPERTIES = function PROPERTIES() {
    return ['anchor', 'animatePolicy', 'childEls', 'defaultAnchor', 'itemCls', 'reserveScrollbar'];
  };

  Ext_layout_AbsoluteLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_AbsoluteLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_AbsoluteLayout.PROPERTIES());
    return Ext_layout_container_Anchor.getProperties(properties);
  };

  Ext_layout_AbsoluteLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_AbsoluteLayout.EVENTS());
    return Ext_layout_container_Anchor.getEvents(events);
  };

  _createClass(Ext_layout_AbsoluteLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_AbsoluteLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_AbsoluteLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_AbsoluteLayout(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_AbsoluteLayout.PROPERTIES()), events.concat(Ext_layout_AbsoluteLayout.EVENTS())) || this;
  }

  var _proto = Ext_layout_AbsoluteLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_AbsoluteLayout;
}(Ext_layout_container_Anchor);

export { Ext_layout_AbsoluteLayout as default };