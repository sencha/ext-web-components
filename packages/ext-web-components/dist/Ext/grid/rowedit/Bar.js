import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../../Ext/Panel';

var Ext_grid_rowedit_Bar_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_grid_rowedit_Bar_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_grid_rowedit_Bar_Component.XTYPE = function XTYPE() {
    return 'roweditorbar';
  };

  Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_rowedit_Bar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_rowedit_Bar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_rowedit_Bar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_rowedit_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_rowedit_Bar_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_rowedit_Bar_Component.METHODS()), events.concat(Ext_grid_rowedit_Bar_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_rowedit_Bar_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_rowedit_Bar_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_rowedit_Bar_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_rowedit_Bar_Component.EVENTS());
  }

  var _proto = Ext_grid_rowedit_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_rowedit_Bar_Component;
}(Ext_Panel_Component);

export { Ext_grid_rowedit_Bar_Component as default };