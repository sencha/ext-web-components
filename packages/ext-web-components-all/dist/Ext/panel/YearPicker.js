import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_BoundList_Component from '../../Ext/dataview/BoundList';

var Ext_panel_YearPicker_Component =
/*#__PURE__*/
function (_Ext_dataview_BoundLi) {
  _inheritsLoose(Ext_panel_YearPicker_Component, _Ext_dataview_BoundLi);

  //events
  //configs
  Ext_panel_YearPicker_Component.XTYPE = function XTYPE() {
    return 'yearpicker';
  };

  Ext_panel_YearPicker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_panel_YearPicker_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_YearPicker_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_YearPicker_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_BoundLi.observedAttributes;

      for (var property in Ext_panel_YearPicker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_YearPicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_YearPicker_Component() {
    var _this;

    _this = _Ext_dataview_BoundLi.call(this) || this;
    _this.XTYPE = Ext_panel_YearPicker_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_panel_YearPicker_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_panel_YearPicker_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_panel_YearPicker_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_panel_YearPicker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_BoundLi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_BoundLi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_YearPicker_Component;
}(Ext_dataview_BoundList_Component);

export { Ext_panel_YearPicker_Component as default };