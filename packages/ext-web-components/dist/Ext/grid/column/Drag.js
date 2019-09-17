import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

var Ext_grid_column_Drag_Component =
/*#__PURE__*/
function (_Ext_grid_column_Colu) {
  _inheritsLoose(Ext_grid_column_Drag_Component, _Ext_grid_column_Colu);

  //events
  //configs
  Ext_grid_column_Drag_Component.XTYPE = function XTYPE() {
    return 'dragcolumn';
  };

  Ext_grid_column_Drag_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_column_Drag_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_column_Drag_Component.METHODS = function METHODS() {
    return [{
      name: 'onViewColumnAdd',
      "function": function _function(grid, column, index) {
        return this.ext.onViewColumnAdd(grid, column, index);
      }
    }];
  };

  _createClass(Ext_grid_column_Drag_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_column_Colu.observedAttributes;

      for (var property in Ext_grid_column_Drag_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_column_Drag_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_column_Drag_Component(propertiesobject, methods, events) {
    return _Ext_grid_column_Colu.call(this, Object.assign(propertiesobject, Ext_grid_column_Drag_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_column_Drag_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_column_Drag_Component.METHODS()), events.concat(Ext_grid_column_Drag_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_column_Drag_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Drag_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_column_Drag_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_column_Drag_Component.EVENTS());
  }

  var _proto = Ext_grid_column_Drag_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_column_Colu.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_column_Colu.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_column_Drag_Component;
}(Ext_grid_column_Column_Component);

export { Ext_grid_column_Drag_Component as default };