import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_picker_Tablet_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_picker_Tablet_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_picker_Tablet_Component.XTYPE = function XTYPE() {
    return 'tabletpicker';
  };

  Ext_picker_Tablet_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_picker_Tablet_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_picker_Tablet_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_picker_Tablet_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_picker_Tablet_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_picker_Tablet_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Tablet_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_picker_Tablet_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_picker_Tablet_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_picker_Tablet_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_picker_Tablet_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_picker_Tablet_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Tablet_Component;
}(Ext_Panel_Component);

export { Ext_picker_Tablet_Component as default };