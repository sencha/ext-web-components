import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Observable from '../../../Ext/util/Observable.js';

var Ext_pivot_matrix_Base = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_pivot_matrix_Base, _Ext_util_Observable);

  Ext_pivot_matrix_Base.PROPERTIES = function PROPERTIES() {
    return ['aggregate', 'calculateAsExcel', 'cmp', 'colGrandTotalsPosition', 'collapsibleColumns', 'collapsibleRows', 'colSubTotalsPosition', 'compactViewColumnWidth', 'compactViewKey', 'grandTotalKey', 'keysSeparator', 'leftAxis', 'leftAxisType', 'listeners', 'resultType', 'rowGrandTotalsPosition', 'rowSubTotalsPosition', 'showZeroAsBlank', 'textGrandTotalTpl', 'textRowLabels', 'textTotalTpl', 'topAxis', 'topAxisType', 'type', 'useNaturalSorting', 'viewLayoutType'];
  };

  Ext_pivot_matrix_Base.EVENTS = function EVENTS() {
    return [{
      name: 'beforereconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'buildtotals',
      parameters: 'matrix,totals'
    }, {
      name: 'cleardata',
      parameters: 'matrix'
    }, {
      name: 'columnsbuilt',
      parameters: 'matrix,columns'
    }, {
      name: 'done',
      parameters: 'matrix'
    }, {
      name: 'modelbuilt',
      parameters: 'matrix,model'
    }, {
      name: 'progress',
      parameters: 'matrix,index,total'
    }, {
      name: 'reconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'recordbuilt',
      parameters: 'matrix,record,item'
    }, {
      name: 'start',
      parameters: 'matrix'
    }, {
      name: 'storebuilt',
      parameters: 'matrix,store'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_matrix_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_matrix_Base.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_pivot_matrix_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_matrix_Base.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Ext_pivot_matrix_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_pivot_matrix_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_matrix_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_matrix_Base(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_pivot_matrix_Base.PROPERTIES()), events.concat(Ext_pivot_matrix_Base.EVENTS())) || this;
  }

  var _proto = Ext_pivot_matrix_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_matrix_Base;
}(Ext_util_Observable);

export { Ext_pivot_matrix_Base as default };