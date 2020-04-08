import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_AbstractStore from '../../Ext/data/AbstractStore.js';

var Ext_data_ChainedStore = /*#__PURE__*/function (_Ext_data_AbstractSto) {
  _inheritsLoose(Ext_data_ChainedStore, _Ext_data_AbstractSto);

  Ext_data_ChainedStore.PROPERTIES = function PROPERTIES() {
    return ['autoDestroy', 'autoSort', 'filters', 'groupDir', 'grouper', 'groupField', 'listeners', 'pageSize', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'sorters', 'source', 'statefulFilters', 'storeId'];
  };

  Ext_data_ChainedStore.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'store,records,index'
    }, {
      name: 'beforesort',
      parameters: 'store,sorters'
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
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_ChainedStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_ChainedStore.PROPERTIES());
    return Ext_data_AbstractStore.getProperties(properties);
  };

  Ext_data_ChainedStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_ChainedStore.EVENTS());
    return Ext_data_AbstractStore.getEvents(events);
  };

  _createClass(Ext_data_ChainedStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_AbstractSto.observedAttributes;
      Ext_data_ChainedStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_ChainedStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_ChainedStore(properties, events) {
    return _Ext_data_AbstractSto.call(this, properties.concat(Ext_data_ChainedStore.PROPERTIES()), events.concat(Ext_data_ChainedStore.EVENTS())) || this;
  }

  var _proto = Ext_data_ChainedStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_AbstractSto.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_AbstractSto.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_ChainedStore;
}(Ext_data_AbstractStore);

export { Ext_data_ChainedStore as default };