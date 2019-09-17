import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget_Component from '../Ext/Gadget';

var Ext_ProgressBarWidget_Component =
/*#__PURE__*/
function (_Ext_Gadget_Component) {
  _inheritsLoose(Ext_ProgressBarWidget_Component, _Ext_Gadget_Component);

  //events
  //configs
  Ext_ProgressBarWidget_Component.XTYPE = function XTYPE() {
    return 'progress';
  };

  Ext_ProgressBarWidget_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animate": ["boolean"],
      "text": ["string"]
    };
  };

  Ext_ProgressBarWidget_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_ProgressBarWidget_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_ProgressBarWidget_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget_Component.observedAttributes;

      for (var property in Ext_ProgressBarWidget_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_ProgressBarWidget_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ProgressBarWidget_Component() {
    var _this;

    _this = _Ext_Gadget_Component.call(this) || this;
    _this.XTYPE = Ext_ProgressBarWidget_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_ProgressBarWidget_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_ProgressBarWidget_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_ProgressBarWidget_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_ProgressBarWidget_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ProgressBarWidget_Component;
}(Ext_Gadget_Component);

export { Ext_ProgressBarWidget_Component as default };