import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container from '../../../Ext/container/Container.js';

var Ext_calendar_view_Multi =
/*#__PURE__*/
function (_Ext_container_Contai) {
  _inheritsLoose(Ext_calendar_view_Multi, _Ext_container_Contai);

  Ext_calendar_view_Multi.PROPERTIES = function PROPERTIES() {
    return ['compact', 'compactOptions', 'defaultView', 'layout', 'store', 'timezoneOffset', 'value', 'views', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_view_Multi.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_view_Multi.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Multi.PROPERTIES());
    return Ext_container_Container.getProperties(properties);
  };

  Ext_calendar_view_Multi.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_Multi.EVENTS());
    return Ext_container_Container.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-multiview'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_view_Multi, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_container_Contai.observedAttributes; //for (var property in Ext_calendar_view_Multi.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_view_Multi.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_Multi.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Multi(properties, events) {
    return _Ext_container_Contai.call(this, properties.concat(Ext_calendar_view_Multi.PROPERTIES()), events.concat(Ext_calendar_view_Multi.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_Multi.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_container_Contai.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_container_Contai.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Multi;
}(Ext_container_Container);

export { Ext_calendar_view_Multi as default };