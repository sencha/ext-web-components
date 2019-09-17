import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_grid_locked_Grid_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_grid_locked_Grid_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_grid_locked_Grid_Component.XTYPE = function XTYPE() {
    return 'lockedgrid';
  };

  Ext_grid_locked_Grid_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "columnMenu": ["object"],
      "columns": ["Ext.grid.column.Column[]"],
      "defaultLockedRegion": ["string"],
      "enableColumnMove": ["boolean"],
      "gridDefaults": ["object"],
      "grouped": ["boolean"],
      "hideHeaders": ["boolean"],
      "itemConfig": ["object"],
      "leftGridDefaults": ["object"],
      "regions": ["object"],
      "rightGridDefaults": ["object"],
      "store": ["Ext.data.Store", "object", "string"],
      "variableHeights": ["boolean"]
    };
  };

  Ext_grid_locked_Grid_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_locked_Grid_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_locked_Grid_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_locked_Grid_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_locked_Grid_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_locked_Grid_Component.METHODS()), events.concat(Ext_grid_locked_Grid_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_locked_Grid_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_locked_Grid_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_locked_Grid_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_locked_Grid_Component.EVENTS());
  }

  var _proto = Ext_grid_locked_Grid_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_locked_Grid_Component;
}(Ext_Panel_Component);

export { Ext_grid_locked_Grid_Component as default };