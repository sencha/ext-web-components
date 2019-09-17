import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView_Component from '../../Ext/dataview/DataView';

var Ext_calendar_AbstractList_Component =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_calendar_AbstractList_Component, _Ext_dataview_DataVie);

  //events
  //configs
  Ext_calendar_AbstractList_Component.XTYPE = function XTYPE() {
    return '';
  };

  Ext_calendar_AbstractList_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_calendar_AbstractList_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_AbstractList_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_AbstractList_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes;

      for (var property in Ext_calendar_AbstractList_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_AbstractList_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_AbstractList_Component() {
    var _this;

    _this = _Ext_dataview_DataVie.call(this) || this;
    _this.XTYPE = Ext_calendar_AbstractList_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_AbstractList_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_AbstractList_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_AbstractList_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_AbstractList_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_AbstractList_Component;
}(Ext_dataview_DataView_Component);

export { Ext_calendar_AbstractList_Component as default };