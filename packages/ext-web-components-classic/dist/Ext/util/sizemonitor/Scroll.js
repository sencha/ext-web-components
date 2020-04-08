import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_sizemonitor_Abstract from '../../../Ext/util/sizemonitor/Abstract.js';

var Ext_util_sizemonitor_Scroll = /*#__PURE__*/function (_Ext_util_sizemonitor) {
  _inheritsLoose(Ext_util_sizemonitor_Scroll, _Ext_util_sizemonitor);

  Ext_util_sizemonitor_Scroll.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_sizemonitor_Scroll.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_sizemonitor_Scroll.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_sizemonitor_Scroll.PROPERTIES());
    return Ext_util_sizemonitor_Abstract.getProperties(properties);
  };

  Ext_util_sizemonitor_Scroll.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_sizemonitor_Scroll.EVENTS());
    return Ext_util_sizemonitor_Abstract.getEvents(events);
  };

  _createClass(Ext_util_sizemonitor_Scroll, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_sizemonitor.observedAttributes;
      Ext_util_sizemonitor_Scroll.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_sizemonitor_Scroll.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_sizemonitor_Scroll(properties, events) {
    return _Ext_util_sizemonitor.call(this, properties.concat(Ext_util_sizemonitor_Scroll.PROPERTIES()), events.concat(Ext_util_sizemonitor_Scroll.EVENTS())) || this;
  }

  var _proto = Ext_util_sizemonitor_Scroll.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_sizemonitor.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_sizemonitor.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_sizemonitor_Scroll;
}(Ext_util_sizemonitor_Abstract);

export { Ext_util_sizemonitor_Scroll as default };