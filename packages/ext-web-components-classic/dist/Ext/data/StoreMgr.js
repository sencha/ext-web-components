import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_data_StoreMgr = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_data_StoreMgr, _Ext_util_MixedCollec);

  Ext_data_StoreMgr.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_data_StoreMgr.EVENTS = function EVENTS() {
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

  Ext_data_StoreMgr.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_StoreMgr.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_data_StoreMgr.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_StoreMgr.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_data_StoreMgr, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_data_StoreMgr.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_StoreMgr.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_StoreMgr(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_data_StoreMgr.PROPERTIES()), events.concat(Ext_data_StoreMgr.EVENTS())) || this;
  }

  var _proto = Ext_data_StoreMgr.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_StoreMgr;
}(Ext_util_MixedCollection);

export { Ext_data_StoreMgr as default };