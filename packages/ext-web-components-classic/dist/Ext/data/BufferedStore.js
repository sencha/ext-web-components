import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_ProxyStore from '../../Ext/data/ProxyStore.js';

var Ext_data_BufferedStore = /*#__PURE__*/function (_Ext_data_ProxyStore) {
  _inheritsLoose(Ext_data_BufferedStore, _Ext_data_ProxyStore);

  Ext_data_BufferedStore.PROPERTIES = function PROPERTIES() {
    return ['asynchronousLoad', 'autoDestroy', 'autoLoad', 'autoSort', 'autoSync', 'batchUpdateMode', 'defaultViewSize', 'fields', 'filters', 'groupDir', 'grouper', 'groupField', 'leadingBufferZone', 'listeners', 'model', 'pageSize', 'proxy', 'purgePageCount', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'sorters', 'sortOnLoad', 'statefulFilters', 'storeId', 'trackRemoved', 'trailingBufferZone', 'viewSize'];
  };

  Ext_data_BufferedStore.EVENTS = function EVENTS() {
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

  Ext_data_BufferedStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_BufferedStore.PROPERTIES());
    return Ext_data_ProxyStore.getProperties(properties);
  };

  Ext_data_BufferedStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_BufferedStore.EVENTS());
    return Ext_data_ProxyStore.getEvents(events);
  };

  _createClass(Ext_data_BufferedStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_ProxyStore.observedAttributes;
      Ext_data_BufferedStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_BufferedStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_BufferedStore(properties, events) {
    return _Ext_data_ProxyStore.call(this, properties.concat(Ext_data_BufferedStore.PROPERTIES()), events.concat(Ext_data_BufferedStore.EVENTS())) || this;
  }

  var _proto = Ext_data_BufferedStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_ProxyStore.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_ProxyStore.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_BufferedStore;
}(Ext_data_ProxyStore);

export { Ext_data_BufferedStore as default };