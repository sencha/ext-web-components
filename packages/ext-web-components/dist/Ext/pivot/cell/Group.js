import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell_Component from '../../../Ext/pivot/cell/Cell';

var Ext_pivot_cell_Group_Component =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell_) {
  _inheritsLoose(Ext_pivot_cell_Group_Component, _Ext_pivot_cell_Cell_);

  //events
  //configs
  Ext_pivot_cell_Group_Component.XTYPE = function XTYPE() {
    return 'pivotgridgroupcell';
  };

  Ext_pivot_cell_Group_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_pivot_cell_Group_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_pivot_cell_Group_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_pivot_cell_Group_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_cell_Cell_.observedAttributes;

      for (var property in Ext_pivot_cell_Group_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_pivot_cell_Group_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_cell_Group_Component(propertiesobject, methods, events) {
    return _Ext_pivot_cell_Cell_.call(this, Object.assign(propertiesobject, Ext_pivot_cell_Group_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_pivot_cell_Group_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_pivot_cell_Group_Component.METHODS()), events.concat(Ext_pivot_cell_Group_Component.EVENTS())) || this; //this.XTYPE = Ext_pivot_cell_Group_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_pivot_cell_Group_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_pivot_cell_Group_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_pivot_cell_Group_Component.EVENTS());
  }

  var _proto = Ext_pivot_cell_Group_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_cell_Cell_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_cell_Cell_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_cell_Group_Component;
}(Ext_pivot_cell_Cell_Component);

export { Ext_pivot_cell_Group_Component as default };