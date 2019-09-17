import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_ItemHeader_Component from '../../Ext/dataview/ItemHeader';

var Ext_grid_RowHeader_Component =
/*#__PURE__*/
function (_Ext_dataview_ItemHea) {
  _inheritsLoose(Ext_grid_RowHeader_Component, _Ext_dataview_ItemHea);

  //events
  //configs
  Ext_grid_RowHeader_Component.XTYPE = function XTYPE() {
    return 'rowheader';
  };

  Ext_grid_RowHeader_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_grid_RowHeader_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_RowHeader_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_RowHeader_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_ItemHea.observedAttributes;

      for (var property in Ext_grid_RowHeader_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_RowHeader_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_RowHeader_Component(propertiesobject, methods, events) {
    return _Ext_dataview_ItemHea.call(this, Object.assign(propertiesobject, Ext_grid_RowHeader_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_grid_RowHeader_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_grid_RowHeader_Component.METHODS()), events.concat(Ext_grid_RowHeader_Component.EVENTS())) || this; //this.XTYPE = Ext_grid_RowHeader_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_RowHeader_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_grid_RowHeader_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_grid_RowHeader_Component.EVENTS());
  }

  var _proto = Ext_grid_RowHeader_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_ItemHea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_ItemHea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_RowHeader_Component;
}(Ext_dataview_ItemHeader_Component);

export { Ext_grid_RowHeader_Component as default };