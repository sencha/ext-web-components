import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_AbstractMixedCollection from '../../Ext/util/AbstractMixedCollection.js';

var Ext_util_MixedCollection = /*#__PURE__*/function (_Ext_util_AbstractMix) {
  _inheritsLoose(Ext_util_MixedCollection, _Ext_util_AbstractMix);

  Ext_util_MixedCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_util_MixedCollection.EVENTS = function EVENTS() {
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

  Ext_util_MixedCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_MixedCollection.PROPERTIES());
    return Ext_util_AbstractMixedCollection.getProperties(properties);
  };

  Ext_util_MixedCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_MixedCollection.EVENTS());
    return Ext_util_AbstractMixedCollection.getEvents(events);
  };

  _createClass(Ext_util_MixedCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_AbstractMix.observedAttributes;
      Ext_util_MixedCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_MixedCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_MixedCollection(properties, events) {
    return _Ext_util_AbstractMix.call(this, properties.concat(Ext_util_MixedCollection.PROPERTIES()), events.concat(Ext_util_MixedCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_MixedCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_AbstractMix.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_AbstractMix.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_MixedCollection;
}(Ext_util_AbstractMixedCollection);

export { Ext_util_MixedCollection as default };