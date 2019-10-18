import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel from '../../../Ext/panel/Panel.js';

var Ext_pivot_d3_AbstractContainer =
/*#__PURE__*/
function (_Ext_panel_Panel) {
  _inheritsLoose(Ext_pivot_d3_AbstractContainer, _Ext_panel_Panel);

  Ext_pivot_d3_AbstractContainer.PROPERTIES = function PROPERTIES() {
    return ['configurator', 'drawing', 'matrix', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_pivot_d3_AbstractContainer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_pivot_d3_AbstractContainer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES());
    return Ext_panel_Panel.getProperties(properties);
  };

  Ext_pivot_d3_AbstractContainer.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_d3_AbstractContainer.EVENTS());
    return Ext_panel_Panel.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_pivot_d3_AbstractContainer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Panel.observedAttributes; //for (var property in Ext_pivot_d3_AbstractContainer.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_pivot_d3_AbstractContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_d3_AbstractContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_AbstractContainer(properties, events) {
    return _Ext_panel_Panel.call(this, properties.concat(Ext_pivot_d3_AbstractContainer.PROPERTIES()), events.concat(Ext_pivot_d3_AbstractContainer.EVENTS())) || this;
  }

  var _proto = Ext_pivot_d3_AbstractContainer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_AbstractContainer;
}(Ext_panel_Panel);

export { Ext_pivot_d3_AbstractContainer as default };