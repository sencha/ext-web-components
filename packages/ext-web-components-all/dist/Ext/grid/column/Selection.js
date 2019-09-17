import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Check_Component from '../../../Ext/grid/column/Check';

var Ext_grid_column_Selection_Component =
/*#__PURE__*/
function (_Ext_grid_column_Chec) {
  _inheritsLoose(Ext_grid_column_Selection_Component, _Ext_grid_column_Chec);

  //events
  //configs
  Ext_grid_column_Selection_Component.XTYPE = function XTYPE() {
    return 'selectioncolumn';
  };

  Ext_grid_column_Selection_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "stopSelection": ["string"]
    };
  };

  Ext_grid_column_Selection_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_column_Selection_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_column_Selection_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_column_Chec.observedAttributes;

      for (var property in Ext_grid_column_Selection_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_column_Selection_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_Selection_Component() {
    var _this;

    _this = _Ext_grid_column_Chec.call(this) || this;
    _this.XTYPE = Ext_grid_column_Selection_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_column_Selection_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_column_Selection_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_column_Selection_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_column_Selection_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_column_Chec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_column_Chec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_Selection_Component;
}(Ext_grid_column_Check_Component);

export { Ext_grid_column_Selection_Component as default };