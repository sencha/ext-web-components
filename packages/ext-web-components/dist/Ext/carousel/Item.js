import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Decorator_Component from '../../Ext/Decorator';

var Ext_carousel_Item_Component =
/*#__PURE__*/
function (_Ext_Decorator_Compon) {
  _inheritsLoose(Ext_carousel_Item_Component, _Ext_Decorator_Compon);

  //events
  //configs
  Ext_carousel_Item_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_carousel_Item_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_carousel_Item_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_carousel_Item_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_carousel_Item_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Decorator_Compon.observedAttributes;

      for (var property in Ext_carousel_Item_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_carousel_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_carousel_Item_Component(propertiesobject, methods, events) {
    return _Ext_Decorator_Compon.call(this, Object.assign(propertiesobject, Ext_carousel_Item_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_carousel_Item_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_carousel_Item_Component.METHODS()), events.concat(Ext_carousel_Item_Component.EVENTS())) || this; //this.XTYPE = Ext_carousel_Item_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_carousel_Item_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_carousel_Item_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_carousel_Item_Component.EVENTS());
  }

  var _proto = Ext_carousel_Item_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Decorator_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Decorator_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_carousel_Item_Component;
}(Ext_Decorator_Component);

export { Ext_carousel_Item_Component as default };