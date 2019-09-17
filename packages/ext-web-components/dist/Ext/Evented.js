import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base_Component from '../Ext/Base';

var Ext_Evented_Component =
/*#__PURE__*/
function (_Ext_Base_Component) {
  _inheritsLoose(Ext_Evented_Component, _Ext_Base_Component);

  //events
  //configs
  Ext_Evented_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_Evented_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_Evented_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Evented_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_Evented_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base_Component.observedAttributes;

      for (var property in Ext_Evented_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Evented_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Evented_Component(propertiesobject, methods, events) {
    return _Ext_Base_Component.call(this, Object.assign(propertiesobject, Ext_Evented_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Evented_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Evented_Component.METHODS()), events.concat(Ext_Evented_Component.EVENTS())) || this; //this.XTYPE = Ext_Evented_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Evented_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Evented_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Evented_Component.EVENTS());
  }

  var _proto = Ext_Evented_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Evented_Component;
}(Ext_Base_Component);

export { Ext_Evented_Component as default };