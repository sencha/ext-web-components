import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_exporter_file_ooxml_theme_Base from '../../../../../Ext/exporter/file/ooxml/theme/Base.js';

var Ext_exporter_file_ooxml_theme_Office = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_theme_Office, _Ext_exporter_file_oo);

  var _super = _createSuper(Ext_exporter_file_ooxml_theme_Office);

  Ext_exporter_file_ooxml_theme_Office.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'contentType', 'fileName', 'fileNameTemplate', 'folder', 'id', 'idPrefix', 'index', 'name', 'nameTemplate', 'path', 'relationship', 'tplAttributes', 'tplNonAttributes'];
  };

  Ext_exporter_file_ooxml_theme_Office.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_theme_Office.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_theme_Office.PROPERTIES());
    return Ext_exporter_file_ooxml_theme_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_theme_Office.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_theme_Office.EVENTS());
    return Ext_exporter_file_ooxml_theme_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_theme_Office, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_theme_Office.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_theme_Office.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_theme_Office(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_theme_Office.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_theme_Office.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_theme_Office.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_theme_Office;
}(Ext_exporter_file_ooxml_theme_Base);

export { Ext_exporter_file_ooxml_theme_Office as default };