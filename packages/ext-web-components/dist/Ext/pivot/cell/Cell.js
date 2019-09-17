import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell_Component from '../../../Ext/grid/cell/Cell';

var Ext_pivot_cell_Cell_Component =
/*#__PURE__*/
function (_Ext_grid_cell_Cell_C) {
  _inheritsLoose(Ext_pivot_cell_Cell_Component, _Ext_grid_cell_Cell_C);

  //events
  //configs
  Ext_pivot_cell_Cell_Component.XTYPE = function XTYPE() {
    return 'pivotgridcell';
  };

  Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_cell_Cell_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_cell_Cell_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_cell_Cell_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Cell_C.observedAttributes;

      for (var property in Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_cell_Cell_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_cell_Cell_Component(propertiesobject, methods, events) {
    return _Ext_grid_cell_Cell_C.call(this, Object.assign(propertiesobject, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_cell_Cell_Component.METHODS()), events.concat(Ext_pivot_cell_Cell_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_cell_Cell_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_cell_Cell_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_cell_Cell_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_cell_Cell_Component.EVENTS());
  }

  var _proto = Ext_pivot_cell_Cell_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Cell_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Cell_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_cell_Cell_Component;
}(Ext_grid_cell_Cell_Component);

export { Ext_pivot_cell_Cell_Component as default };