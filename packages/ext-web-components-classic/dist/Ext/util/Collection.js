import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Collection = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_Collection, _Ext_Base);

  Ext_util_Collection.PROPERTIES = function PROPERTIES() {
    return ['autoGroup', 'autoSort', 'decoder', 'defaultSortDirection', 'extraKeys', 'filters', 'groupConfig', 'grouper', 'groups', 'keyFn', 'listeners', 'multiSortLimit', 'rootProperty', 'sorters', 'source', 'trackGroups'];
  };

  Ext_util_Collection.EVENTS = function EVENTS() {
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

  Ext_util_Collection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Collection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Collection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Collection.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Collection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Collection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Collection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Collection(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Collection.PROPERTIES()), events.concat(Ext_util_Collection.EVENTS())) || this;
  }

  var _proto = Ext_util_Collection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Collection;
}(Ext_Base);

export { Ext_util_Collection as default };