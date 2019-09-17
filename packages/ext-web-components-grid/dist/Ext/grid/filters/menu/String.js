import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_filters_menu_Base_Component from '../../../../Ext/grid/filters/menu/Base';

var Ext_grid_filters_menu_String_Component =
/*#__PURE__*/
function (_Ext_grid_filters_men) {
  _inheritsLoose(Ext_grid_filters_menu_String_Component, _Ext_grid_filters_men);

  //events
  //configs
  Ext_grid_filters_menu_String_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_filters_menu_String_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_filters_menu_String_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_filters_menu_String_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_filters_men.observedAttributes;

      for (var property in Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_filters_menu_String_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_filters_menu_String_Component() {
    var _this;

    _this = _Ext_grid_filters_men.call(this) || this;
    _this.XTYPE = Ext_grid_filters_menu_String_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_filters_menu_String_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_filters_menu_String_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_filters_menu_String_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_filters_menu_String_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_filters_men.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_filters_men.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_filters_menu_String_Component;
}(Ext_grid_filters_menu_Base_Component);

export { Ext_grid_filters_menu_String_Component as default };