import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_grid_plugin_Editing = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_grid_plugin_Editing, _Ext_plugin_Abstract);

  Ext_grid_plugin_Editing.PROPERTIES = function PROPERTIES() {
    return ['clicksToEdit', 'default', 'id', 'listeners', 'stateEvents', 'triggerEvent'];
  };

  Ext_grid_plugin_Editing.EVENTS = function EVENTS() {
    return [{
      name: 'beforeedit',
      parameters: 'editor,context'
    }, {
      name: 'canceledit',
      parameters: 'editor,context'
    }, {
      name: 'edit',
      parameters: 'editor,context'
    }, {
      name: 'validateedit',
      parameters: 'editor,context'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_Editing.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Editing.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_grid_plugin_Editing.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_Editing.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_grid_plugin_Editing, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_grid_plugin_Editing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_Editing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_Editing(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_grid_plugin_Editing.PROPERTIES()), events.concat(Ext_grid_plugin_Editing.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_Editing.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_Editing;
}(Ext_plugin_Abstract);

export { Ext_grid_plugin_Editing as default };