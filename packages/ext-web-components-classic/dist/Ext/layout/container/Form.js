import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Auto from '../../../Ext/layout/container/Auto.js';

var Ext_layout_container_Form = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Form, _Ext_layout_container);

  Ext_layout_container_Form.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls', 'itemSpacing', 'labelWidth', 'reserveScrollbar'];
  };

  Ext_layout_container_Form.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Form.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Form.PROPERTIES());
    return Ext_layout_container_Auto.getProperties(properties);
  };

  Ext_layout_container_Form.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Form.EVENTS());
    return Ext_layout_container_Auto.getEvents(events);
  };

  _createClass(Ext_layout_container_Form, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Form.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Form.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Form(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Form.PROPERTIES()), events.concat(Ext_layout_container_Form.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Form.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Form;
}(Ext_layout_container_Auto);

export { Ext_layout_container_Form as default };