import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_grid_locked_Region_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_grid_locked_Region_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_grid_locked_Region_Component.XTYPE = function XTYPE() {
    return 'lockedgridregion';
  };

  Ext_grid_locked_Region_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "grid": ["Ext.grid.Grid"],
      "locked": ["boolean", "string"],
      "menuItem": ["string"],
      "regionKey": ["string"]
    };
  };

  Ext_grid_locked_Region_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_locked_Region_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_locked_Region_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_grid_locked_Region_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_locked_Region_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_locked_Region_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this, Ext_grid_locked_Region_Component.METHODS(), Ext_grid_locked_Region_Component.XTYPE(), Ext_grid_locked_Region_Component.PROPERTIESOBJECT(), Ext_grid_locked_Region_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_locked_Region_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_locked_Region_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_locked_Region_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_locked_Region_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_locked_Region_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_locked_Region_Component;
}(Ext_Panel_Component);

export { Ext_grid_locked_Region_Component as default };