import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Collection from '../../Ext/util/Collection.js';

var Ext_util_FilterCollection =
/*#__PURE__*/
function (_Ext_util_Collection) {
  _inheritsLoose(Ext_util_FilterCollection, _Ext_util_Collection);

  Ext_util_FilterCollection.PROPERTIES = function PROPERTIES() {
    return ['autoGroup', 'autoSort', 'decoder', 'defaultSortDirection', 'extraKeys', 'filters', 'groupConfig', 'grouper', 'groups', 'keyFn', 'listeners', 'multiSortLimit', 'rootProperty', 'sorters', 'source', 'trackGroups'];
  };

  Ext_util_FilterCollection.EVENTS = function EVENTS() {
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
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_util_FilterCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_FilterCollection.PROPERTIES());
    return Ext_util_Collection.getProperties(properties);
  };

  Ext_util_FilterCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_FilterCollection.EVENTS());
    return Ext_util_Collection.getEvents(events);
  };

  _createClass(Ext_util_FilterCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Collection.observedAttributes;
      Ext_util_FilterCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_FilterCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_FilterCollection(properties, events) {
    return _Ext_util_Collection.call(this, properties.concat(Ext_util_FilterCollection.PROPERTIES()), events.concat(Ext_util_FilterCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_FilterCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Collection.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Collection.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_FilterCollection;
}(Ext_util_Collection);

export { Ext_util_FilterCollection as default };