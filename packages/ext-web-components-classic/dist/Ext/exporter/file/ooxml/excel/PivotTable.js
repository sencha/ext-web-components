import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

var Ext_exporter_file_ooxml_excel_PivotTable = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_PivotTable, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES = function PROPERTIES() {
    return ['applyAlignmentFormats', 'applyBorderFormats', 'applyFontFormats', 'applyNumberFormats', 'applyPatternFormats', 'applyWidthHeightFormats', 'asteriskTotals', 'autoFormatId', 'autoGenerateId', 'autoGenerateKey', 'cacheDefinition', 'cacheId', 'chartFormat', 'colFields', 'colGrandTotals', 'colHeaderCaption', 'colItems', 'compact', 'compactData', 'contentType', 'createdVersion', 'customListSort', 'dataCaption', 'dataFields', 'dataOnRows', 'dataPosition', 'disableFieldList', 'editData', 'enableDrill', 'enableFieldProperties', 'enableWizard', 'errorCaption', 'fieldListSortAscending', 'fieldPrintTitles', 'fileName', 'fileNameTemplate', 'folder', 'generateTplAttributes', 'grandTotalCaption', 'gridDropZones', 'id', 'idPrefix', 'immersive', 'indent', 'index', 'itemPrintTitles', 'location', 'mdxSubqueries', 'mergeItem', 'minRefreshableVersion', 'missingCaption', 'multipleFieldFilters', 'name', 'nameTemplate', 'outline', 'outlineData', 'pageFields', 'pageOverThenDown', 'pageStyle', 'pageWrap', 'path', 'pivotFields', 'pivotTableStyle', 'pivotTableStyleInfo', 'preserveFormatting', 'printDrill', 'published', 'relationship', 'rowFields', 'rowGrandTotals', 'rowHeaderCaption', 'rowItems', 'showCalcMbrs', 'showDataDropDown', 'showDataTips', 'showDrill', 'showDropZones', 'showEmptyCol', 'showEmptyRow', 'showError', 'showHeaders', 'showItems', 'showMemberPropertyTips', 'showMissing', 'showMultipleLabel', 'subtotalHiddenItems', 'tag', 'tplAttributes', 'tplNonAttributes', 'updatedVersion', 'useAutoFormatting', 'vacatedStyle', 'viewLayoutType', 'visualTotals', 'worksheet'];
  };

  Ext_exporter_file_ooxml_excel_PivotTable.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_PivotTable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_PivotTable.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotTable.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_PivotTable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_PivotTable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_PivotTable(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_PivotTable.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_PivotTable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_PivotTable;
}(Ext_exporter_file_ooxml_XmlRels);

export { Ext_exporter_file_ooxml_excel_PivotTable as default };