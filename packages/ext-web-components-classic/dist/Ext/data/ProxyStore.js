import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_AbstractStore from '../../Ext/data/AbstractStore.js';

var Ext_data_ProxyStore = /*#__PURE__*/function (_Ext_data_AbstractSto) {
  _inheritsLoose(Ext_data_ProxyStore, _Ext_data_AbstractSto);

  Ext_data_ProxyStore.PROPERTIES = function PROPERTIES() {
    return ['asynchronousLoad', 'autoDestroy', 'autoLoad', 'autoSort', 'autoSync', 'batchUpdateMode', 'fields', 'filters', 'groupDir', 'grouper', 'groupField', 'listeners', 'model', 'pageSize', 'proxy', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'sorters', 'sortOnLoad', 'statefulFilters', 'storeId', 'trackRemoved'];
  };

  Ext_data_ProxyStore.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'store,records,index'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforesort',
      parameters: 'store,sorters'
    }, {
      name: 'beforesync',
      parameters: 'options'
    }, {
      name: 'beginupdate',
      parameters: ''
    }, {
      name: 'clear',
      parameters: 'sender'
    }, {
      name: 'datachanged',
      parameters: 'sender'
    }, {
      name: 'endupdate',
      parameters: ''
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'remove',
      parameters: 'store,records,index,isMove'
    }, {
      name: 'sort',
      parameters: 'store'
    }, {
      name: 'update',
      parameters: 'sender,record,operation,modifiedFieldNames,details'
    }, {
      name: 'write',
      parameters: 'store,operation'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_ProxyStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_ProxyStore.PROPERTIES());
    return Ext_data_AbstractStore.getProperties(properties);
  };

  Ext_data_ProxyStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_ProxyStore.EVENTS());
    return Ext_data_AbstractStore.getEvents(events);
  };

  _createClass(Ext_data_ProxyStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_AbstractSto.observedAttributes;
      Ext_data_ProxyStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_ProxyStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_ProxyStore(properties, events) {
    return _Ext_data_AbstractSto.call(this, properties.concat(Ext_data_ProxyStore.PROPERTIES()), events.concat(Ext_data_ProxyStore.EVENTS())) || this;
  }

  var _proto = Ext_data_ProxyStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_AbstractSto.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_AbstractSto.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_ProxyStore;
}(Ext_data_AbstractStore);

export { Ext_data_ProxyStore as default };