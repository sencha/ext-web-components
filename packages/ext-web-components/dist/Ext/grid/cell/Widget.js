import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base_Component from '../../../Ext/grid/cell/Base';

var Ext_grid_cell_Widget_Component =
/*#__PURE__*/
function (_Ext_grid_cell_Base_C) {
  _inheritsLoose(Ext_grid_cell_Widget_Component, _Ext_grid_cell_Base_C);

  //events
  //configs
  Ext_grid_cell_Widget_Component.XTYPE = function XTYPE() {
    return 'widgetcell';
  };

  Ext_grid_cell_Widget_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "align": ["'left'", "'center'", "'right'"],
      "forceWidth": ["boolean"],
      "selectable": ["boolean"],
      "widget": ["object"]
    };
  };

  Ext_grid_cell_Widget_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_cell_Widget_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_cell_Widget_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Base_C.observedAttributes;

      for (var property in Ext_grid_cell_Widget_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_cell_Widget_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Widget_Component(propertiesobject, methods, events) {
    return _Ext_grid_cell_Base_C.call(this, Object.assign(propertiesobject, Ext_grid_cell_Widget_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_cell_Widget_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_cell_Widget_Component.METHODS()), events.concat(Ext_grid_cell_Widget_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_cell_Widget_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_cell_Widget_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_cell_Widget_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_cell_Widget_Component.EVENTS());
  }

  var _proto = Ext_grid_cell_Widget_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Base_C.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Base_C.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Widget_Component;
}(Ext_grid_cell_Base_Component);

export { Ext_grid_cell_Widget_Component as default };