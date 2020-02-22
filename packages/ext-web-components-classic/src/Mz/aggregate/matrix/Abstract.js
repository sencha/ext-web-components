import Ext_util_Observable from '../../../Ext/util/Observable.js';

export default class Mz_aggregate_matrix_Abstract extends Ext_util_Observable {
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
    'resultType',
    'rowGrandTotalsPosition',
    'rowSubTotalsPosition',
    'showZeroAsBlank',
    'textGrandTotalTpl',
    'textRowLabels',
    'textTotalTpl',
    'topAxis',
    'topAxisType',
    'type',
    'useNaturalSorting',
    'viewLayoutType',
  ]};
  static EVENTS() { return [
    {name:'beforereconfigure', parameters:'matrix,config'},
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
    properties = properties.concat(Mz_aggregate_matrix_Abstract.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Abstract.EVENTS());
    return Ext_util_Observable.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_aggregate_matrix_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_aggregate_matrix_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_aggregate_matrix_Abstract.PROPERTIES()),
      events.concat(Mz_aggregate_matrix_Abstract.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
