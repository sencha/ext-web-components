import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_AbstractStore = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_data_AbstractStore, _Ext_Base);

  Ext_data_AbstractStore.PROPERTIES = function PROPERTIES() {
    return ['autoDestroy', 'autoSort', 'filters', 'groupDir', 'grouper', 'groupField', 'listeners', 'pageSize', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'sorters', 'statefulFilters', 'storeId'];
  };

  Ext_data_AbstractStore.EVENTS = function EVENTS() {
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

  Ext_data_AbstractStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_AbstractStore.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_AbstractStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_AbstractStore.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_AbstractStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_AbstractStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_AbstractStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_AbstractStore(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_AbstractStore.PROPERTIES()), events.concat(Ext_data_AbstractStore.EVENTS())) || this;
  }

  var _proto = Ext_data_AbstractStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_AbstractStore;
}(Ext_Base);

export { Ext_data_AbstractStore as default };