import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_pivot_result_Collection = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_pivot_result_Collection, _Ext_Base);

  Ext_pivot_result_Collection.PROPERTIES = function PROPERTIES() {
    return ['matrix', 'resultType'];
  };

  Ext_pivot_result_Collection.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_result_Collection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_result_Collection.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_pivot_result_Collection.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_result_Collection.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_pivot_result_Collection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_pivot_result_Collection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_result_Collection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_result_Collection(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_pivot_result_Collection.PROPERTIES()), events.concat(Ext_pivot_result_Collection.EVENTS())) || this;
  }

  var _proto = Ext_pivot_result_Collection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_result_Collection;
}(Ext_Base);

export { Ext_pivot_result_Collection as default };