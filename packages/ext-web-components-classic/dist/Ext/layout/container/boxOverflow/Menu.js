import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_boxOverflow_None from '../../../../Ext/layout/container/boxOverflow/None.js';

var Ext_layout_container_boxOverflow_Menu = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_boxOverflow_Menu, _Ext_layout_container);

  Ext_layout_container_boxOverflow_Menu.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_layout_container_boxOverflow_Menu.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_boxOverflow_Menu.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_boxOverflow_Menu.PROPERTIES());
    return Ext_layout_container_boxOverflow_None.getProperties(properties);
  };

  Ext_layout_container_boxOverflow_Menu.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_boxOverflow_Menu.EVENTS());
    return Ext_layout_container_boxOverflow_None.getEvents(events);
  };

  _createClass(Ext_layout_container_boxOverflow_Menu, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_boxOverflow_Menu.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_boxOverflow_Menu.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_boxOverflow_Menu(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_boxOverflow_Menu.PROPERTIES()), events.concat(Ext_layout_container_boxOverflow_Menu.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_boxOverflow_Menu.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_boxOverflow_Menu;
}(Ext_layout_container_boxOverflow_None);

export { Ext_layout_container_boxOverflow_Menu as default };