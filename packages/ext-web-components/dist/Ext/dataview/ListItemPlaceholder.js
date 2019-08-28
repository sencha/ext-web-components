import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_SimpleListItem_Component from '../../Ext/dataview/SimpleListItem';

var Ext_dataview_ListItemPlaceholder_Component =
/*#__PURE__*/
function (_Ext_dataview_SimpleL) {
  _inheritsLoose(Ext_dataview_ListItemPlaceholder_Component, _Ext_dataview_SimpleL);

  //events
  //configs
  Ext_dataview_ListItemPlaceholder_Component.XTYPE = function XTYPE() {
    return 'listitemplaceholder';
  };

  Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_dataview_ListItemPlaceholder_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_ListItemPlaceholder_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_ListItemPlaceholder_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_SimpleL.observedAttributes;

      for (var property in Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_ListItemPlaceholder_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_ListItemPlaceholder_Component() {
    var _this;

    _this = _Ext_dataview_SimpleL.call(this, Ext_dataview_ListItemPlaceholder_Component.METHODS(), Ext_dataview_ListItemPlaceholder_Component.XTYPE(), Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT(), Ext_dataview_ListItemPlaceholder_Component.EVENTS()) || this;
    _this.XTYPE = Ext_dataview_ListItemPlaceholder_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_dataview_ListItemPlaceholder_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_dataview_ListItemPlaceholder_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_dataview_ListItemPlaceholder_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_dataview_ListItemPlaceholder_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_SimpleL.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_SimpleL.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_ListItemPlaceholder_Component;
}(Ext_dataview_SimpleListItem_Component);

export { Ext_dataview_ListItemPlaceholder_Component as default };