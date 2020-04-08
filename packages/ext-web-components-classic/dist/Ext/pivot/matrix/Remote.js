import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_matrix_Base from '../../../Ext/pivot/matrix/Base.js';

var Ext_pivot_matrix_Remote = /*#__PURE__*/function (_Ext_pivot_matrix_Bas) {
  _inheritsLoose(Ext_pivot_matrix_Remote, _Ext_pivot_matrix_Bas);

  Ext_pivot_matrix_Remote.PROPERTIES = function PROPERTIES() {
    return ['aggregate', 'calculateAsExcel', 'cmp', 'colGrandTotalsPosition', 'collapsibleColumns', 'collapsibleRows', 'colSubTotalsPosition', 'compactViewColumnWidth', 'compactViewKey', 'grandTotalKey', 'keysSeparator', 'leftAxis', 'leftAxisType', 'listeners', 'resultType', 'rowGrandTotalsPosition', 'rowSubTotalsPosition', 'showZeroAsBlank', 'textGrandTotalTpl', 'textRowLabels', 'textTotalTpl', 'timeout', 'topAxis', 'topAxisType', 'type', 'url', 'useNaturalSorting', 'viewLayoutType'];
  };

  Ext_pivot_matrix_Remote.EVENTS = function EVENTS() {
    return [{
      name: 'beforereconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'beforerequest',
      parameters: 'matrix,params'
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
      name: 'requestexception',
      parameters: 'matrix,response'
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

  Ext_pivot_matrix_Remote.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_matrix_Remote.PROPERTIES());
    return Ext_pivot_matrix_Base.getProperties(properties);
  };

  Ext_pivot_matrix_Remote.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_matrix_Remote.EVENTS());
    return Ext_pivot_matrix_Base.getEvents(events);
  };

  _createClass(Ext_pivot_matrix_Remote, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_matrix_Bas.observedAttributes;
      Ext_pivot_matrix_Remote.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_matrix_Remote.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_matrix_Remote(properties, events) {
    return _Ext_pivot_matrix_Bas.call(this, properties.concat(Ext_pivot_matrix_Remote.PROPERTIES()), events.concat(Ext_pivot_matrix_Remote.EVENTS())) || this;
  }

  var _proto = Ext_pivot_matrix_Remote.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_matrix_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_matrix_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_matrix_Remote;
}(Ext_pivot_matrix_Base);

export { Ext_pivot_matrix_Remote as default };