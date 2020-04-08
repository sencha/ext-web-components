import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Store from '../../../Ext/data/Store.js';

var Ext_calendar_store_Events = /*#__PURE__*/function (_Ext_data_Store) {
  _inheritsLoose(Ext_calendar_store_Events, _Ext_data_Store);

  Ext_calendar_store_Events.PROPERTIES = function PROPERTIES() {
    return ['associatedEntity', 'asynchronousLoad', 'autoDestroy', 'autoLoad', 'autoSort', 'autoSync', 'batchUpdateMode', 'calendar', 'calendarParam', 'clearOnPageLoad', 'clearRemovedOnLoad', 'data', 'dateFormat', 'endParam', 'fields', 'filters', 'groupDir', 'grouper', 'groupField', 'listeners', 'model', 'pageSize', 'prefetchMode', 'proxy', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'role', 'session', 'sorters', 'sortOnLoad', 'startParam', 'statefulFilters', 'storeId', 'trackRemoved'];
  };

  Ext_calendar_store_Events.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'store,records,index'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforeprefetch',
      parameters: 'sender,operation'
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
      name: 'commit',
      parameters: 'store'
    }, {
      name: 'datachanged',
      parameters: 'sender'
    }, {
      name: 'endupdate',
      parameters: ''
    }, {
      name: 'filterchange',
      parameters: 'store,filters'
    }, {
      name: 'groupchange',
      parameters: 'store,grouper'
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'prefetch',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'reject',
      parameters: 'store'
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

  Ext_calendar_store_Events.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_store_Events.PROPERTIES());
    return Ext_data_Store.getProperties(properties);
  };

  Ext_calendar_store_Events.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_store_Events.EVENTS());
    return Ext_data_Store.getEvents(events);
  };

  _createClass(Ext_calendar_store_Events, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Store.observedAttributes;
      Ext_calendar_store_Events.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_store_Events.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_store_Events(properties, events) {
    return _Ext_data_Store.call(this, properties.concat(Ext_calendar_store_Events.PROPERTIES()), events.concat(Ext_calendar_store_Events.EVENTS())) || this;
  }

  var _proto = Ext_calendar_store_Events.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Store.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Store.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_store_Events;
}(Ext_data_Store);

export { Ext_calendar_store_Events as default };