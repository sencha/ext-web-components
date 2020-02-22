import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

export default class Ext_exporter_file_ooxml_excel_PivotField extends Ext_exporter_file_ooxml_Base {
  static PROPERTIES() { return [
    'allDrilled',
    'autoGenerateId',
    'autoGenerateKey',
    'autoShow',
    'autoSortScope',
    'avgSubtotal',
    'axis',
    'compact',
    'countASubtotal',
    'countSubtotal',
    'dataField',
    'dataSourceSort',
    'defaultAttributeDrillState',
    'defaultSubtotal',
    'dragOff',
    'dragToCol',
    'dragToData',
    'dragToPage',
    'dragToRow',
    'generateTplAttributes',
    'hiddenLevel',
    'hideNewItems',
    'id',
    'idPrefix',
    'includeNewItemsInFilter',
    'insertBlankRow',
    'insertPageBreak',
    'itemPageCount',
    'items',
    'maxSubtotal',
    'measureFilter',
    'minSubtotal',
    'multipleItemSelectionAllowed',
    'nonAutoSortDefault',
    'numFmtId',
    'outline',
    'productSubtotal',
    'rankBy',
    'serverField',
    'showAll',
    'showDropDowns',
    'showPropAsCaption',
    'showPropCell',
    'showPropTip',
    'sortType',
    'stdDevPSubtotal',
    'stdDevSubtotal',
    'subtotalCaption',
    'subtotalTop',
    'sumSubtotal',
    'topAutoShow',
    'tplAttributes',
    'tplNonAttributes',
    'uniqueMemberProperty',
    'varPSubtotal',
    'varSubtotal',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotField.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_excel_PivotField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_excel_PivotField.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_excel_PivotField.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
