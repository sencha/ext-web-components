import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../../Ext/Container';

var Ext_chart_navigator_ContainerBase_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_chart_navigator_ContainerBase_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_chart_navigator_ContainerBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_chart_navigator_ContainerBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_chart_navigator_ContainerBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_chart_navigator_ContainerBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_chart_navigator_ContainerBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_navigator_ContainerBase_Component(propertiesobject, methods, events) {
    return _Ext_Container_Compon.call(this, Object.assign(propertiesobject, Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_chart_navigator_ContainerBase_Component.METHODS()), events.concat(Ext_chart_navigator_ContainerBase_Component.EVENTS())) || this; //this.XTYPE = Ext_chart_navigator_ContainerBase_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_navigator_ContainerBase_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_chart_navigator_ContainerBase_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_chart_navigator_ContainerBase_Component.EVENTS());
  }

  var _proto = Ext_chart_navigator_ContainerBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_navigator_ContainerBase_Component;
}(Ext_Container_Component);

export { Ext_chart_navigator_ContainerBase_Component as default };