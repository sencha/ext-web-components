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

  function Ext_grid_column_RowNumberer_Component(propertiesobject, methods, events) {
    return _Ext_grid_column_Numb.call(this, Object.assign(propertiesobject, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_column_RowNumberer_Component.METHODS()), events.concat(Ext_grid_column_RowNumberer_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_column_RowNumberer_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_RowNumberer_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_column_RowNumberer_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_column_RowNumberer_Component.EVENTS());
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