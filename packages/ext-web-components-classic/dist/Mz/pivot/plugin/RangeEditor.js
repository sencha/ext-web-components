import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Mz_pivot_plugin_RangeEditor = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Mz_pivot_plugin_RangeEditor, _Ext_plugin_Abstract);

  var _super = _createSuper(Mz_pivot_plugin_RangeEditor);

  Mz_pivot_plugin_RangeEditor.PROPERTIES = function PROPERTIES() {
    return ['defaultUpdater', 'grid', 'height', 'id', 'onAfterRecordsUpdate', 'onBeforeRecordsUpdate', 'scope', 'stateEvents', 'textButtonCancel', 'textButtonOk', 'textFieldEdit', 'textFieldType', 'textFieldValue', 'textWindowTitle', 'updaters', 'view', 'width'];
  };

  Mz_pivot_plugin_RangeEditor.EVENTS = function EVENTS() {
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

  Mz_pivot_plugin_RangeEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_pivot_plugin_RangeEditor.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Mz_pivot_plugin_RangeEditor.getEvents = function getEvents(events) {
    events = events.concat(Mz_pivot_plugin_RangeEditor.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Mz_pivot_plugin_RangeEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Mz_pivot_plugin_RangeEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_pivot_plugin_RangeEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_pivot_plugin_RangeEditor(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Mz_pivot_plugin_RangeEditor.PROPERTIES()), events.concat(Mz_pivot_plugin_RangeEditor.EVENTS())) || this;
  }

  var _proto = Mz_pivot_plugin_RangeEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_pivot_plugin_RangeEditor;
}(Ext_plugin_Abstract);

export { Mz_pivot_plugin_RangeEditor as default };