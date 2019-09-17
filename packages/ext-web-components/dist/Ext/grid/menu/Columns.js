import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Shared_Component from '../../../Ext/grid/menu/Shared';

var Ext_grid_menu_Columns_Component =
/*#__PURE__*/
function (_Ext_grid_menu_Shared) {
  _inheritsLoose(Ext_grid_menu_Columns_Component, _Ext_grid_menu_Shared);

  //events
  //configs
  Ext_grid_menu_Columns_Component.XTYPE = function XTYPE() {
    return 'gridcolumnsmenu';
  };

  Ext_grid_menu_Columns_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "text": ["string"]
    };
  };

  Ext_grid_menu_Columns_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_menu_Columns_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_menu_Columns_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_menu_Shared.observedAttributes;

      for (var property in Ext_grid_menu_Columns_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_menu_Columns_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_menu_Columns_Component(propertiesobject, methods, events) {
    return _Ext_grid_menu_Shared.call(this, Object.assign(propertiesobject, Ext_grid_menu_Columns_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_menu_Columns_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_menu_Columns_Component.METHODS()), events.concat(Ext_grid_menu_Columns_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_menu_Columns_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_menu_Columns_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_menu_Columns_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_menu_Columns_Component.EVENTS());
  }

  var _proto = Ext_grid_menu_Columns_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_menu_Shared.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_menu_Shared.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_menu_Columns_Component;
}(Ext_grid_menu_Shared_Component);

export { Ext_grid_menu_Columns_Component as default };