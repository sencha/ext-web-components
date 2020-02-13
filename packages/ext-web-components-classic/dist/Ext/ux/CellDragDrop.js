import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../Ext/plugin/Abstract.js';

var Ext_ux_CellDragDrop =
/*#__PURE__*/
function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_ux_CellDragDrop, _Ext_plugin_Abstract);

  Ext_ux_CellDragDrop.PROPERTIES = function PROPERTIES() {
    return ['applyEmptyText', 'containerScroll', 'ddGroup', 'dragText', 'dropBackgroundColor', 'emptyText', 'enableDrag', 'enableDrop', 'enforceType', 'id', 'noDropBackgroundColor', 'stateEvents'];
  };

  Ext_ux_CellDragDrop.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ux_CellDragDrop.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_CellDragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_ux_CellDragDrop.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_CellDragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_ux_CellDragDrop, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_ux_CellDragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_CellDragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_CellDragDrop(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_ux_CellDragDrop.PROPERTIES()), events.concat(Ext_ux_CellDragDrop.EVENTS())) || this;
  }

  var _proto = Ext_ux_CellDragDrop.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_CellDragDrop;
}(Ext_plugin_Abstract);

export { Ext_ux_CellDragDrop as default };