import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_excel_CellStyleXf from '../../../../../Ext/exporter/file/ooxml/excel/CellStyleXf.js';

var Ext_exporter_file_ooxml_excel_CellXf = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_CellXf, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'id', 'idPrefix', 'tplAttributes', 'tplNonAttributes'];
  };

  Ext_exporter_file_ooxml_excel_CellXf.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_CellXf.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES());
    return Ext_exporter_file_ooxml_excel_CellStyleXf.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_CellXf.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_CellXf.EVENTS());
    return Ext_exporter_file_ooxml_excel_CellStyleXf.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_CellXf, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_CellXf.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_CellXf(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_CellXf.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_CellXf.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_CellXf.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_CellXf;
}(Ext_exporter_file_ooxml_excel_CellStyleXf);

export { Ext_exporter_file_ooxml_excel_CellXf as default };