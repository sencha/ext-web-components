import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_data_writer_Writer from '../../Ext/data/writer/Writer.js';

var Ext_data_XmlWriter = /*#__PURE__*/function (_Ext_data_writer_Writ) {
  _inheritsLoose(Ext_data_XmlWriter, _Ext_data_writer_Writ);

  var _super = _createSuper(Ext_data_XmlWriter);

  Ext_data_XmlWriter.PROPERTIES = function PROPERTIES() {
    return ['allDataOptions', 'clientIdProperty', 'dateFormat', 'defaultDocumentRoot', 'documentRoot', 'header', 'nameProperty', 'partialDataOptions', 'record', 'transform', 'writeAllFields', 'writeRecordId'];
  };

  Ext_data_XmlWriter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_XmlWriter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_XmlWriter.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  };

  Ext_data_XmlWriter.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_XmlWriter.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  };

  _createClass(Ext_data_XmlWriter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_writer_Writ.observedAttributes;
      Ext_data_XmlWriter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_XmlWriter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_XmlWriter(properties, events) {
    return _Ext_data_writer_Writ.call(this, properties.concat(Ext_data_XmlWriter.PROPERTIES()), events.concat(Ext_data_XmlWriter.EVENTS())) || this;
  }

  var _proto = Ext_data_XmlWriter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_writer_Writ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_writer_Writ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_XmlWriter;
}(Ext_data_writer_Writer);

export { Ext_data_XmlWriter as default };