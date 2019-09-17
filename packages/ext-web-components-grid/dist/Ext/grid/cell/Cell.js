import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text_Component from '../../../Ext/grid/cell/Text';

var Ext_grid_cell_Cell_Component =
/*#__PURE__*/
function (_Ext_grid_cell_Text_C) {
  _inheritsLoose(Ext_grid_cell_Cell_Component, _Ext_grid_cell_Text_C);

  //events
  //configs
  Ext_grid_cell_Cell_Component.XTYPE = function XTYPE() {
    return 'gridcell';
  };

  Ext_grid_cell_Cell_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "formatter": ["string"],
      "renderer": ["function", "string"],
      "scope": ["object"],
      "tpl": ["string", "string[]", "Ext.XTemplate"]
    };
  };

  Ext_grid_cell_Cell_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_cell_Cell_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_cell_Cell_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Text_C.observedAttributes;

      for (var property in Ext_grid_cell_Cell_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_cell_Cell_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Cell_Component() {
    var _this;

    _this = _Ext_grid_cell_Text_C.call(this) || this;
    _this.XTYPE = Ext_grid_cell_Cell_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_cell_Cell_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_cell_Cell_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_cell_Cell_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_cell_Cell_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Text_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Text_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Cell_Component;
}(Ext_grid_cell_Text_Component);

export { Ext_grid_cell_Cell_Component as default };