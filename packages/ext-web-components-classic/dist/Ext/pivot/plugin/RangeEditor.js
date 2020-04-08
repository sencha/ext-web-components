import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_pivot_plugin_RangeEditor = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_pivot_plugin_RangeEditor, _Ext_plugin_Abstract);

  Ext_pivot_plugin_RangeEditor.PROPERTIES = function PROPERTIES() {
    return ['defaultUpdater', 'grid', 'height', 'id', 'onAfterRecordsUpdate', 'onBeforeRecordsUpdate', 'scope', 'stateEvents', 'textButtonCancel', 'textButtonOk', 'textFieldEdit', 'textFieldType', 'textFieldValue', 'textWindowTitle', 'updaters', 'view', 'width'];
  };

  Ext_pivot_plugin_RangeEditor.EVENTS = function EVENTS() {
    return [{
      name: 'hiderangeeditorpanel',
      parameters: 'panel'
    }, {
      name: 'pivotbeforeupdate',
      parameters: 'updater'
    }, {
      name: 'pivotupdate',
      parameters: 'updater'
    }, {
      name: 'showrangeeditorpanel',
      parameters: 'panel'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_plugin_RangeEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_plugin_RangeEditor.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_pivot_plugin_RangeEditor.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_plugin_RangeEditor.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_pivot_plugin_RangeEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_pivot_plugin_RangeEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_plugin_RangeEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_plugin_RangeEditor(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_pivot_plugin_RangeEditor.PROPERTIES()), events.concat(Ext_pivot_plugin_RangeEditor.EVENTS())) || this;
  }

  var _proto = Ext_pivot_plugin_RangeEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_plugin_RangeEditor;
}(Ext_plugin_Abstract);

export { Ext_pivot_plugin_RangeEditor as default };