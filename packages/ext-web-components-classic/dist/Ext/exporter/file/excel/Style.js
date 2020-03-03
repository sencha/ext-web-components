import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_Style from '../../../../Ext/exporter/file/Style.js';

var Ext_exporter_file_excel_Style = /*#__PURE__*/function (_Ext_exporter_file_St) {
  _inheritsLoose(Ext_exporter_file_excel_Style, _Ext_exporter_file_St);

  Ext_exporter_file_excel_Style.PROPERTIES = function PROPERTIES() {
    return ['alignment', 'autoGenerateId', 'autoGenerateKey', 'borders', 'font', 'format', 'id', 'idPrefix', 'interior', 'name', 'parentId', 'protection'];
  };

  Ext_exporter_file_excel_Style.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_excel_Style.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_excel_Style.PROPERTIES());
    return Ext_exporter_file_Style.getProperties(properties);
  };

  Ext_exporter_file_excel_Style.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_excel_Style.EVENTS());
    return Ext_exporter_file_Style.getEvents(events);
  };

  _createClass(Ext_exporter_file_excel_Style, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_St.observedAttributes;
      Ext_exporter_file_excel_Style.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_excel_Style.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_excel_Style(properties, events) {
    return _Ext_exporter_file_St.call(this, properties.concat(Ext_exporter_file_excel_Style.PROPERTIES()), events.concat(Ext_exporter_file_excel_Style.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_excel_Style.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_St.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_St.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_excel_Style;
}(Ext_exporter_file_Style);

export { Ext_exporter_file_excel_Style as default };