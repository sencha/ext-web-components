import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_VBox from '../../../Ext/layout/container/VBox.js';

var Ext_layout_container_Accordion = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Accordion, _Ext_layout_container);

  Ext_layout_container_Accordion.PROPERTIES = function PROPERTIES() {
    return ['activeOnTop', 'align', 'alignRoundingMethod', 'animate', 'animatePolicy', 'autoWidth', 'childEls', 'collapseFirst', 'constrainAlign', 'enableSplitters', 'fill', 'hideCollapseTool', 'itemCls', 'multi', 'overflowHandler', 'pack', 'padding', 'stretchMaxPartner', 'titleCollapse', 'vertical', 'wrapOver'];
  };

  Ext_layout_container_Accordion.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Accordion.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Accordion.PROPERTIES());
    return Ext_layout_container_VBox.getProperties(properties);
  };

  Ext_layout_container_Accordion.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Accordion.EVENTS());
    return Ext_layout_container_VBox.getEvents(events);
  };

  _createClass(Ext_layout_container_Accordion, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Accordion.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Accordion.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Accordion(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Accordion.PROPERTIES()), events.concat(Ext_layout_container_Accordion.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Accordion.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Accordion;
}(Ext_layout_container_VBox);

export { Ext_layout_container_Accordion as default };