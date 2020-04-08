import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Observable from '../../Ext/util/Observable.js';

var Ext_form_Basic = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_form_Basic, _Ext_util_Observable);

  Ext_form_Basic.PROPERTIES = function PROPERTIES() {
    return ['api', 'baseParams', 'errorReader', 'jsonSubmit', 'listeners', 'metadata', 'method', 'paramOrder', 'paramsAsHash', 'reader', 'standardSubmit', 'timeout', 'trackResetOnLoad', 'url', 'waitMsgTarget', 'waitTitle'];
  };

  Ext_form_Basic.EVENTS = function EVENTS() {
    return [{
      name: 'actioncomplete',
      parameters: 'sender,action'
    }, {
      name: 'actionfailed',
      parameters: 'sender,action'
    }, {
      name: 'beforeaction',
      parameters: 'sender,action'
    }, {
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'errorchange',
      parameters: 'sender'
    }, {
      name: 'validitychange',
      parameters: 'sender,valid'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_Basic.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_Basic.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_form_Basic.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_Basic.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  _createClass(Ext_form_Basic, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_form_Basic.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_Basic.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Basic(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_form_Basic.PROPERTIES()), events.concat(Ext_form_Basic.EVENTS())) || this;
  }

  var _proto = Ext_form_Basic.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Basic;
}(Ext_util_Observable);

export { Ext_form_Basic as default };