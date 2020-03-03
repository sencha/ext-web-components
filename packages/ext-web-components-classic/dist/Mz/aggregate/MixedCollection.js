import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Mz_aggregate_MixedCollection = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Mz_aggregate_MixedCollection, _Ext_util_MixedCollec);

  Mz_aggregate_MixedCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Mz_aggregate_MixedCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
    }, {
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'clear',
      parameters: ''
    }, {
      name: 'remove',
      parameters: 'o,key'
    }, {
      name: 'replace',
      parameters: 'key,old,new'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Mz_aggregate_MixedCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_MixedCollection.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Mz_aggregate_MixedCollection.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_MixedCollection.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Mz_aggregate_MixedCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Mz_aggregate_MixedCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_MixedCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_MixedCollection(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Mz_aggregate_MixedCollection.PROPERTIES()), events.concat(Mz_aggregate_MixedCollection.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_MixedCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_MixedCollection;
}(Ext_util_MixedCollection);

export { Mz_aggregate_MixedCollection as default };