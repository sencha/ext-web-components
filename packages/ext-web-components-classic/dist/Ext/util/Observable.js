import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_mixin_Observable from '../../Ext/mixin/Observable.js';

var Ext_util_Observable = /*#__PURE__*/function (_Ext_mixin_Observable) {
  _inheritsLoose(Ext_util_Observable, _Ext_mixin_Observable);

  Ext_util_Observable.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_util_Observable.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_Observable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Observable.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  };

  Ext_util_Observable.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Observable.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  };

  _createClass(Ext_util_Observable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_mixin_Observable.observedAttributes;
      Ext_util_Observable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Observable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Observable(properties, events) {
    return _Ext_mixin_Observable.call(this, properties.concat(Ext_util_Observable.PROPERTIES()), events.concat(Ext_util_Observable.EVENTS())) || this;
  }

  var _proto = Ext_util_Observable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_mixin_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_mixin_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Observable;
}(Ext_mixin_Observable);

export { Ext_util_Observable as default };