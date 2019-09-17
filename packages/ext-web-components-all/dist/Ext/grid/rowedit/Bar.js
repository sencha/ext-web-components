import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_grid_rowedit_Bar_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_grid_rowedit_Bar_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_grid_rowedit_Bar_Component.XTYPE = function XTYPE() {
    return 'roweditorbar';
  };

  Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_rowedit_Bar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_rowedit_Bar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_rowedit_Bar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_rowedit_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_rowedit_Bar_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this) || this;
    _this.XTYPE = Ext_grid_rowedit_Bar_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_rowedit_Bar_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_rowedit_Bar_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_rowedit_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_rowedit_Bar_Component;
}(Ext_Panel_Component);

export { Ext_grid_rowedit_Bar_Component as default };