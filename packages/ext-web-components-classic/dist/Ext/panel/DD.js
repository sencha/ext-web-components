import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DragSource from '../../Ext/dd/DragSource.js';

var Ext_panel_DD = /*#__PURE__*/function (_Ext_dd_DragSource) {
  _inheritsLoose(Ext_panel_DD, _Ext_dd_DragSource);

  Ext_panel_DD.PROPERTIES = function PROPERTIES() {
    return ['animRepair', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'repairHighlightColor'];
  };

  Ext_panel_DD.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_panel_DD.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_DD.PROPERTIES());
    return Ext_dd_DragSource.getProperties(properties);
  };

  Ext_panel_DD.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_DD.EVENTS());
    return Ext_dd_DragSource.getEvents(events);
  };

  _createClass(Ext_panel_DD, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DragSource.observedAttributes;
      Ext_panel_DD.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_DD.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_DD(properties, events) {
    return _Ext_dd_DragSource.call(this, properties.concat(Ext_panel_DD.PROPERTIES()), events.concat(Ext_panel_DD.EVENTS())) || this;
  }

  var _proto = Ext_panel_DD.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DragSource.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DragSource.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_DD;
}(Ext_dd_DragSource);

export { Ext_panel_DD as default };