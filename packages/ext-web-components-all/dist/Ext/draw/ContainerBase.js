import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Container_Component from '../../Ext/Container';

var Ext_draw_ContainerBase_Component =
/*#__PURE__*/
function (_Ext_Container_Compon) {
  _inheritsLoose(Ext_draw_ContainerBase_Component, _Ext_Container_Compon);

  //events
  //configs
  Ext_draw_ContainerBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_draw_ContainerBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_draw_ContainerBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_ContainerBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_draw_ContainerBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Container_Compon.observedAttributes;

      for (var property in Ext_draw_ContainerBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_ContainerBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_ContainerBase_Component() {
    var _this;

    _this = _Ext_Container_Compon.call(this) || this;
    _this.XTYPE = Ext_draw_ContainerBase_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_ContainerBase_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_draw_ContainerBase_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_draw_ContainerBase_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_ContainerBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Container_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Container_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_ContainerBase_Component;
}(Ext_Container_Component);

export { Ext_draw_ContainerBase_Component as default };