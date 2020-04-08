import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_result_Base from '../../../Ext/pivot/result/Base.js';

var Ext_pivot_result_Local = /*#__PURE__*/function (_Ext_pivot_result_Bas) {
  _inheritsLoose(Ext_pivot_result_Local, _Ext_pivot_result_Bas);

  Ext_pivot_result_Local.PROPERTIES = function PROPERTIES() {
    return ['leftKey', 'topKey'];
  };

  Ext_pivot_result_Local.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_result_Local.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_result_Local.PROPERTIES());
    return Ext_pivot_result_Base.getProperties(properties);
  };

  Ext_pivot_result_Local.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_result_Local.EVENTS());
    return Ext_pivot_result_Base.getEvents(events);
  };

  _createClass(Ext_pivot_result_Local, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_result_Bas.observedAttributes;
      Ext_pivot_result_Local.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_result_Local.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_result_Local(properties, events) {
    return _Ext_pivot_result_Bas.call(this, properties.concat(Ext_pivot_result_Local.PROPERTIES()), events.concat(Ext_pivot_result_Local.EVENTS())) || this;
  }

  var _proto = Ext_pivot_result_Local.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_result_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_result_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_result_Local;
}(Ext_pivot_result_Base);

export { Ext_pivot_result_Local as default };