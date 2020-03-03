import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Sortable = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_Sortable, _Ext_Base);

  Ext_util_Sortable.PROPERTIES = function PROPERTIES() {
    return ['defaultSortDirection', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_util_Sortable.EVENTS = function EVENTS() {
    return [{
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Sortable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Sortable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Sortable.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Sortable.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Sortable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Sortable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Sortable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Sortable(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Sortable.PROPERTIES()), events.concat(Ext_util_Sortable.EVENTS())) || this;
  }

  var _proto = Ext_util_Sortable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Sortable;
}(Ext_Base);

export { Ext_util_Sortable as default };