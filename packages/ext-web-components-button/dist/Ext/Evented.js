import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_Evented =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_Evented, _Ext_Base);

  Ext_Evented.PROPERTIES = function PROPERTIES() {
    return ['listeners', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_Evented.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_Evented.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Evented.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_Evented.getEvents = function getEvents(events) {
    events = events.concat(Ext_Evented.EVENTS());
    return Ext_Base.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_Evented, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes; //for (var property in Ext_Evented.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_Evented.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Evented.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Evented(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_Evented.PROPERTIES()), events.concat(Ext_Evented.EVENTS())) || this;
  }

  var _proto = Ext_Evented.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Evented;
}(Ext_Base);

export { Ext_Evented as default };