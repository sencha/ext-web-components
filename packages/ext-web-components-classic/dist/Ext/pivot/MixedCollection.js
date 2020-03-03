import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_pivot_MixedCollection = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_pivot_MixedCollection, _Ext_util_MixedCollec);

  Ext_pivot_MixedCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_pivot_MixedCollection.EVENTS = function EVENTS() {
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

  Ext_pivot_MixedCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_MixedCollection.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_pivot_MixedCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_MixedCollection.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_pivot_MixedCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_pivot_MixedCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_MixedCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_MixedCollection(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_pivot_MixedCollection.PROPERTIES()), events.concat(Ext_pivot_MixedCollection.EVENTS())) || this;
  }

  var _proto = Ext_pivot_MixedCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_MixedCollection;
}(Ext_util_MixedCollection);

export { Ext_pivot_MixedCollection as default };