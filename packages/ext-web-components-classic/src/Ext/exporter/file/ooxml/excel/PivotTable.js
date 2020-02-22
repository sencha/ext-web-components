import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

export default class Ext_exporter_file_ooxml_excel_PivotTable extends Ext_exporter_file_ooxml_XmlRels {
  static PROPERTIES() { return [
    'applyAlignmentFormats',
    'applyBorderFormats',
    'applyFontFormats',
    'applyNumberFormats',
    'applyPatternFormats',
    'applyWidthHeightFormats',
    'asteriskTotals',
    'autoFormatId',
    'autoGenerateId',
    'autoGenerateKey',
    'cacheDefinition',
    'cacheId',
    'chartFormat',
    'colFields',
    'colGrandTotals',
    'colHeaderCaption',
    'colItems',
    'compact',
    'compactData',
    'contentType',
    'createdVersion',
    'customListSort',
    'dataCaption',
    'dataFields',
    'dataOnRows',
    'dataPosition',
    'disableFieldList',
    'editData',
    'enableDrill',
    'enableFieldProperties',
    'enableWizard',
    'errorCaption',
    'fieldListSortAscending',
    'fieldPrintTitles',
    'fileName',
    'fileNameTemplate',
    'folder',
    'generateTplAttributes',
    'grandTotalCaption',
    'gridDropZones',
    'id',
    'idPrefix',
    'immersive',
    'indent',
    'index',
    'itemPrintTitles',
    'location',
    'mdxSubqueries',
    'mergeItem',
    'minRefreshableVersion',
    'missingCaption',
    'multipleFieldFilters',
    'name',
    'nameTemplate',
    'outline',
    'outlineData',
    'pageFields',
    'pageOverThenDown',
    'pageStyle',
    'pageWrap',
    'path',
    'pivotFields',
    'pivotTableStyle',
    'pivotTableStyleInfo',
    'preserveFormatting',
    'printDrill',
    'published',
    'relationship',
    'rowFields',
    'rowGrandTotals',
    'rowHeaderCaption',
    'rowItems',
    'showCalcMbrs',
    'showDataDropDown',
    'showDataTips',
    'showDrill',
    'showDropZones',
    'showEmptyCol',
    'showEmptyRow',
    'showError',
    'showHeaders',
    'showItems',
    'showMemberPropertyTips',
    'showMissing',
    'showMultipleLabel',
    'subtotalHiddenItems',
    'tag',
    'tplAttributes',
    'tplNonAttributes',
    'updatedVersion',
    'useAutoFormatting',
    'vacatedStyle',
    'viewLayoutType',
    'visualTotals',
    'worksheet',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotTable.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_PivotTable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_PivotTable.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_PivotTable.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
