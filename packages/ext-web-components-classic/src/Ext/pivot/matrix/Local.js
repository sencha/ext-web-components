import Ext_pivot_matrix_Base from '../../../Ext/pivot/matrix/Base.js';

export default class Ext_pivot_matrix_Local extends Ext_pivot_matrix_Base {
  static PROPERTIES() { return [
    'aggregate',
    'calculateAsExcel',
    'cmp',
    'colGrandTotalsPosition',
    'collapsibleColumns',
    'collapsibleRows',
    'colSubTotalsPosition',
    'compactViewColumnWidth',
    'compactViewKey',
    'grandTotalKey',
    'keysSeparator',
    'leftAxis',
    'leftAxisType',
    'listeners',
    'recordsPerJob',
    'resultType',
    'rowGrandTotalsPosition',
    'rowSubTotalsPosition',
    'showZeroAsBlank',
    'store',
    'textGrandTotalTpl',
    'textRowLabels',
    'textTotalTpl',
    'timeBetweenJobs',
    'topAxis',
    'topAxisType',
    'type',
    'useNaturalSorting',
    'viewLayoutType',
  ]};
  static EVENTS() { return [
    {name:'afterupdate', parameters:'matrix'},
    {name:'beforereconfigure', parameters:'matrix,config'},
    {name:'beforeupdate', parameters:'matrix'},
    {name:'buildtotals', parameters:'matrix,totals'},
    {name:'cleardata', parameters:'matrix'},
    {name:'columnsbuilt', parameters:'matrix,columns'},
    {name:'done', parameters:'matrix'},
    {name:'modelbuilt', parameters:'matrix,model'},
    {name:'progress', parameters:'matrix,index,total'},
    {name:'reconfigure', parameters:'matrix,config'},
    {name:'recordbuilt', parameters:'matrix,record,item'},
    {name:'start', parameters:'matrix'},
    {name:'storebuilt', parameters:'matrix,store'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_pivot_matrix_Local.PROPERTIES());
    return Ext_pivot_matrix_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_pivot_matrix_Local.EVENTS());
    return Ext_pivot_matrix_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_pivot_matrix_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_pivot_matrix_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_pivot_matrix_Local.PROPERTIES()),
      events.concat(Ext_pivot_matrix_Local.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
