import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataItem_Component from '../../Ext/dataview/DataItem';

var Ext_dataview_ListItem_Component =
/*#__PURE__*/
function (_Ext_dataview_DataIte) {
  _inheritsLoose(Ext_dataview_ListItem_Component, _Ext_dataview_DataIte);

  //events
  //configs
  Ext_dataview_ListItem_Component.XTYPE = function XTYPE() {
    return 'listitem';
  };

  Ext_dataview_ListItem_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_dataview_ListItem_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_ListItem_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_ListItem_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataIte.observedAttributes;

      for (var property in Ext_dataview_ListItem_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_ListItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_ListItem_Component() {
    var _this;

    _this = _Ext_dataview_DataIte.call(this, Ext_dataview_ListItem_Component.METHODS(), Ext_dataview_ListItem_Component.XTYPE(), Ext_dataview_ListItem_Component.PROPERTIESOBJECT(), Ext_dataview_ListItem_Component.EVENTS()) || this;
    _this.XTYPE = Ext_dataview_ListItem_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_dataview_ListItem_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_dataview_ListItem_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_dataview_ListItem_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_dataview_ListItem_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataIte.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataIte.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_ListItem_Component;
}(Ext_dataview_DataItem_Component);

export { Ext_dataview_ListItem_Component as default };