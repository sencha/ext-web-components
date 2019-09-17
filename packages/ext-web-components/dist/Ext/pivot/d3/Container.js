import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_d3_AbstractContainer_Component from '../../../Ext/pivot/d3/AbstractContainer';

var Ext_pivot_d3_Container_Component =
/*#__PURE__*/
function (_Ext_pivot_d3_Abstrac) {
  _inheritsLoose(Ext_pivot_d3_Container_Component, _Ext_pivot_d3_Abstrac);

  //events
  //configs
  Ext_pivot_d3_Container_Component.XTYPE = function XTYPE() {
    return 'pivotd3container';
  };

  Ext_pivot_d3_Container_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_d3_Container_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_d3_Container_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_d3_Container_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_d3_Abstrac.observedAttributes;

      for (var property in Ext_pivot_d3_Container_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_d3_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_d3_Container_Component(propertiesobject, methods, events) {
    return _Ext_pivot_d3_Abstrac.call(this, Object.assign(propertiesobject, Ext_pivot_d3_Container_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_d3_Container_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_d3_Container_Component.METHODS()), events.concat(Ext_pivot_d3_Container_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_d3_Container_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_d3_Container_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_d3_Container_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_d3_Container_Component.EVENTS());
  }

  var _proto = Ext_pivot_d3_Container_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_d3_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_d3_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_d3_Container_Component;
}(Ext_pivot_d3_AbstractContainer_Component);

export { Ext_pivot_d3_Container_Component as default };