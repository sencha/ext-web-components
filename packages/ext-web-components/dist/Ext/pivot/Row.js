import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Row_Component from '../../Ext/grid/Row';

var Ext_pivot_Row_Component =
/*#__PURE__*/
function (_Ext_grid_Row_Compone) {
  _inheritsLoose(Ext_pivot_Row_Component, _Ext_grid_Row_Compone);

  //events
  //configs
  Ext_pivot_Row_Component.XTYPE = function XTYPE() {
    return 'pivotgridrow';
  };

  Ext_pivot_Row_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_Row_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_Row_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_Row_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_Row_Compone.observedAttributes;

      for (var property in Ext_pivot_Row_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_Row_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_Row_Component() {
    var _this;

    _this = _Ext_grid_Row_Compone.call(this, Ext_pivot_Row_Component.METHODS(), Ext_pivot_Row_Component.XTYPE(), Ext_pivot_Row_Component.PROPERTIESOBJECT(), Ext_pivot_Row_Component.EVENTS()) || this;
    _this.XTYPE = Ext_pivot_Row_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_pivot_Row_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_pivot_Row_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_pivot_Row_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_pivot_Row_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_Row_Compone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_Row_Compone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_Row_Component;
}(Ext_grid_Row_Component);

export { Ext_pivot_Row_Component as default };