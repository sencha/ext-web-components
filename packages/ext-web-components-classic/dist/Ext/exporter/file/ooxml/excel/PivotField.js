import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

var Ext_exporter_file_ooxml_excel_PivotField = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_PivotField, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES = function PROPERTIES() {
    return ['allDrilled', 'autoGenerateId', 'autoGenerateKey', 'autoShow', 'autoSortScope', 'avgSubtotal', 'axis', 'compact', 'countASubtotal', 'countSubtotal', 'dataField', 'dataSourceSort', 'defaultAttributeDrillState', 'defaultSubtotal', 'dragOff', 'dragToCol', 'dragToData', 'dragToPage', 'dragToRow', 'generateTplAttributes', 'hiddenLevel', 'hideNewItems', 'id', 'idPrefix', 'includeNewItemsInFilter', 'insertBlankRow', 'insertPageBreak', 'itemPageCount', 'items', 'maxSubtotal', 'measureFilter', 'minSubtotal', 'multipleItemSelectionAllowed', 'nonAutoSortDefault', 'numFmtId', 'outline', 'productSubtotal', 'rankBy', 'serverField', 'showAll', 'showDropDowns', 'showPropAsCaption', 'showPropCell', 'showPropTip', 'sortType', 'stdDevPSubtotal', 'stdDevSubtotal', 'subtotalCaption', 'subtotalTop', 'sumSubtotal', 'topAutoShow', 'tplAttributes', 'tplNonAttributes', 'uniqueMemberProperty', 'varPSubtotal', 'varSubtotal'];
  };

  Ext_exporter_file_ooxml_excel_PivotField.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_PivotField.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_PivotField.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotField.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_PivotField, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_PivotField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_PivotField(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_PivotField.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_PivotField.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_PivotField;
}(Ext_exporter_file_ooxml_Base);

export { Ext_exporter_file_ooxml_excel_PivotField as default };