import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_exporter_file_zip_File from '../../../../Ext/exporter/file/zip/File.js';

var Ext_exporter_file_zip_Folder = /*#__PURE__*/function (_Ext_exporter_file_zi) {
  _inheritsLoose(Ext_exporter_file_zip_Folder, _Ext_exporter_file_zi);

  var _super = _createSuper(Ext_exporter_file_zip_Folder);

  Ext_exporter_file_zip_Folder.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_exporter_file_zip_Folder.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_zip_Folder.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_zip_Folder.PROPERTIES());
    return Ext_exporter_file_zip_File.getProperties(properties);
  };

  Ext_exporter_file_zip_Folder.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_zip_Folder.EVENTS());
    return Ext_exporter_file_zip_File.getEvents(events);
  };

  _createClass(Ext_exporter_file_zip_Folder, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_zi.observedAttributes;
      Ext_exporter_file_zip_Folder.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_zip_Folder.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_zip_Folder(properties, events) {
    return _Ext_exporter_file_zi.call(this, properties.concat(Ext_exporter_file_zip_Folder.PROPERTIES()), events.concat(Ext_exporter_file_zip_Folder.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_zip_Folder.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_zi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_zi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_zip_Folder;
}(Ext_exporter_file_zip_File);

export { Ext_exporter_file_zip_Folder as default };