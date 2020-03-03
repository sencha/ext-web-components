import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Auto from '../../Ext/layout/container/Auto.js';

var Ext_layout_AnchorLayout = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_AnchorLayout, _Ext_layout_container);

  Ext_layout_AnchorLayout.PROPERTIES = function PROPERTIES() {
    return ['anchor', 'animatePolicy', 'childEls', 'defaultAnchor', 'itemCls', 'reserveScrollbar'];
  };

  Ext_layout_AnchorLayout.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_AnchorLayout.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_AnchorLayout.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  };

  Ext_layout_AnchorLayout.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_AnchorLayout.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  };

  _createClass(Ext_layout_AnchorLayout, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_AnchorLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_AnchorLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_AnchorLayout(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_AnchorLayout.PROPERTIES()), events.concat(Ext_layout_AnchorLayout.EVENTS())) || this;
  }

  var _proto = Ext_layout_AnchorLayout.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_AnchorLayout;
}(Ext_layout_container_Auto);

export { Ext_layout_AnchorLayout as default };