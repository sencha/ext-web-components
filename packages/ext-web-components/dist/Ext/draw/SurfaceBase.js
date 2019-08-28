import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget_Component from '../../Ext/Widget';

var Ext_draw_SurfaceBase_Component =
/*#__PURE__*/
function (_Ext_Widget_Component) {
  _inheritsLoose(Ext_draw_SurfaceBase_Component, _Ext_Widget_Component);

  //events
  //configs
  Ext_draw_SurfaceBase_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_draw_SurfaceBase_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_draw_SurfaceBase_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_draw_SurfaceBase_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget_Component.observedAttributes;

      for (var property in Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_draw_SurfaceBase_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_SurfaceBase_Component() {
    var _this;

    _this = _Ext_Widget_Component.call(this, Ext_draw_SurfaceBase_Component.METHODS(), Ext_draw_SurfaceBase_Component.XTYPE(), Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT(), Ext_draw_SurfaceBase_Component.EVENTS()) || this;
    _this.XTYPE = Ext_draw_SurfaceBase_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_draw_SurfaceBase_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_draw_SurfaceBase_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_draw_SurfaceBase_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_SurfaceBase_Component;
}(Ext_Widget_Component);

export { Ext_draw_SurfaceBase_Component as default };