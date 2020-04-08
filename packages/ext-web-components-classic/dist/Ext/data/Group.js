import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Group from '../../Ext/util/Group.js';

var Ext_data_Group = /*#__PURE__*/function (_Ext_util_Group) {
  _inheritsLoose(Ext_data_Group, _Ext_util_Group);

  Ext_data_Group.PROPERTIES = function PROPERTIES() {
    return ['autoGroup', 'autoSort', 'decoder', 'defaultSortDirection', 'extraKeys', 'filters', 'groupConfig', 'grouper', 'groups', 'keyFn', 'listeners', 'multiSortLimit', 'rootProperty', 'sorters', 'source', 'trackGroups'];
  };

  Ext_data_Group.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'collection,details'
    }, {
      name: 'beforeitemchange',
      parameters: 'collection,details'
    }, {
      name: 'beforesort',
      parameters: 'collection,sorters'
    }, {
      name: 'beginupdate',
      parameters: 'collection'
    }, {
      name: 'endupdate',
      parameters: 'collection'
    }, {
      name: 'itemchange',
      parameters: 'collection,details'
    }, {
      name: 'refresh',
      parameters: 'collection'
    }, {
      name: 'remove',
      parameters: 'collection,details'
    }, {
      name: 'sort',
      parameters: 'collection'
    }, {
      name: 'updatekey',
      parameters: 'collection,details'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Group.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Group.PROPERTIES());
    return Ext_util_Group.getProperties(properties);
  };

  Ext_data_Group.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Group.EVENTS());
    return Ext_util_Group.getEvents(events);
  };

  _createClass(Ext_data_Group, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Group.observedAttributes;
      Ext_data_Group.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Group.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Group(properties, events) {
    return _Ext_util_Group.call(this, properties.concat(Ext_data_Group.PROPERTIES()), events.concat(Ext_data_Group.EVENTS())) || this;
  }

  var _proto = Ext_data_Group.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Group.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Group.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Group;
}(Ext_util_Group);

export { Ext_data_Group as default };