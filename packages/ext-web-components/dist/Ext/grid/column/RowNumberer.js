import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Number_Component from '../../../Ext/grid/column/Number';

var Ext_grid_column_RowNumberer_Component =
/*#__PURE__*/
function (_Ext_grid_column_Numb) {
  _inheritsLoose(Ext_grid_column_RowNumberer_Component, _Ext_grid_column_Numb);

  //events
  //configs
  Ext_grid_column_RowNumberer_Component.XTYPE = function XTYPE() {
    return 'rownumberer';
  };

  Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "menu": ["boolean"]
    };
  };

  Ext_grid_column_RowNumberer_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_column_RowNumberer_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_column_RowNumberer_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_column_Numb.observedAttributes;

      for (var property in Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_column_RowNumberer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_RowNumberer_Component() {
    var _this;

    _this = _Ext_grid_column_Numb.call(this, Ext_grid_column_RowNumberer_Component.METHODS(), Ext_grid_column_RowNumberer_Component.XTYPE(), Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT(), Ext_grid_column_RowNumberer_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_column_RowNumberer_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_column_RowNumberer_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_column_RowNumberer_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_column_RowNumberer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_column_Numb.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_column_Numb.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_RowNumberer_Component;
}(Ext_grid_column_Number_Component);

export { Ext_grid_column_RowNumberer_Component as default };