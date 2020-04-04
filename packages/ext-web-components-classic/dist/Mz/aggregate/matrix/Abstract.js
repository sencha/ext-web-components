import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_Observable from '../../../Ext/util/Observable.js';

var Mz_aggregate_matrix_Abstract = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Mz_aggregate_matrix_Abstract, _Ext_util_Observable);

  var _super = _createSuper(Mz_aggregate_matrix_Abstract);

  Mz_aggregate_matrix_Abstract.PROPERTIES = function PROPERTIES() {
    return ['aggregate', 'calculateAsExcel', 'cmp', 'colGrandTotalsPosition', 'collapsibleColumns', 'collapsibleRows', 'colSubTotalsPosition', 'compactViewColumnWidth', 'compactViewKey', 'grandTotalKey', 'keysSeparator', 'leftAxis', 'leftAxisType', 'listeners', 'resultType', 'rowGrandTotalsPosition', 'rowSubTotalsPosition', 'showZeroAsBlank', 'textGrandTotalTpl', 'textRowLabels', 'textTotalTpl', 'topAxis', 'topAxisType', 'type', 'useNaturalSorting', 'viewLayoutType'];
  };

  Mz_aggregate_matrix_Abstract.EVENTS = function EVENTS() {
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

  Mz_aggregate_matrix_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_matrix_Abstract.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Mz_aggregate_matrix_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Abstract.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Mz_aggregate_matrix_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Mz_aggregate_matrix_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_matrix_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_matrix_Abstract(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Mz_aggregate_matrix_Abstract.PROPERTIES()), events.concat(Mz_aggregate_matrix_Abstract.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_matrix_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_matrix_Abstract;
}(Ext_util_Observable);

export { Mz_aggregate_matrix_Abstract as default };