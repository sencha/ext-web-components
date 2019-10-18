import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_AbstractContainer from '../../../Ext/pivot/d3/AbstractContainer.js';

var Ext_pivot_d3_Container =
/*#__PURE__*/
function (_Ext_pivot_d3_Abstrac) {
  _inheritsLoose(Ext_pivot_d3_Container, _Ext_pivot_d3_Abstrac);

  Ext_pivot_d3_Container.PROPERTIES = function PROPERTIES() {
    return ['configurator', 'drawing', 'matrix', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_pivot_d3_Container.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_pivot_d3_Container.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_d3_Container.PROPERTIES());
    return Ext_pivot_d3_AbstractContainer.getProperties(properties);
  };

  Ext_pivot_d3_Container.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_d3_Container.EVENTS());
    return Ext_pivot_d3_AbstractContainer.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'pivotd3container'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_pivot_d3_Container, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_d3_Abstrac.observedAttributes; //for (var property in Ext_pivot_d3_Container.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_pivot_d3_Container.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_d3_Container.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_Container(properties, events) {
    return _Ext_pivot_d3_Abstrac.call(this, properties.concat(Ext_pivot_d3_Container.PROPERTIES()), events.concat(Ext_pivot_d3_Container.EVENTS())) || this;
  }

  var _proto = Ext_pivot_d3_Container.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_d3_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_d3_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_Container;
}(Ext_pivot_d3_AbstractContainer);

export { Ext_pivot_d3_Container as default };