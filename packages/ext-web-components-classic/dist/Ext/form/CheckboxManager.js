import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_form_CheckboxManager = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_form_CheckboxManager, _Ext_util_MixedCollec);

  Ext_form_CheckboxManager.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_form_CheckboxManager.EVENTS = function EVENTS() {
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

  Ext_form_CheckboxManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_CheckboxManager.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_form_CheckboxManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_CheckboxManager.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_form_CheckboxManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_form_CheckboxManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_CheckboxManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_CheckboxManager(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_form_CheckboxManager.PROPERTIES()), events.concat(Ext_form_CheckboxManager.EVENTS())) || this;
  }

  var _proto = Ext_form_CheckboxManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_CheckboxManager;
}(Ext_util_MixedCollection);

export { Ext_form_CheckboxManager as default };