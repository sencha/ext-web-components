import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../../Ext/Panel';

var Ext_panel_Date_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_panel_Date_Component, _Ext_Panel_Component);

  //events
  //configs
  Ext_panel_Date_Component.XTYPE = function XTYPE() {
    return 'datepanel';
  };

  Ext_panel_Date_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "animation": ["boolean"],
      "autoConfirm": ["boolean"],
      "captionFormat": ["string"],
      "dateCellFormat": ["string"],
      "disabledDates": ["date[]", "string[]", "regexp"],
      "disabledDays": ["number[]"],
      "focusableDate": ["date"],
      "format": ["string"],
      "handler": ["function"],
      "headerFormat": ["string"],
      "headerLength": ["number"],
      "hideCaptions": ["boolean"],
      "hideOutside": ["boolean"],
      "maxDate": ["date", "string"],
      "minDate": ["date", "string"],
      "navigationPosition": ["'header'", "'caption'"],
      "nextText": ["string"],
      "panes": ["number"],
      "prevText": ["string"],
      "scope": ["object"],
      "selectOnNavigate": ["boolean"],
      "showAfterMaxDate": ["boolean"],
      "showBeforeMinDate": ["boolean"],
      "showFooter": ["boolean"],
      "showTodayButton": ["boolean"],
      "specialDates": ["date[]", "string[]", "regexp[]"],
      "specialDays": ["number[]"],
      "splitTitle": ["boolean"],
      "startDay": ["number"],
      "titleAnimation": ["boolean", "object"],
      "transformCellCls": ["function"],
      "value": ["date"],
      "weekendDays": ["number[]"],
      "yearPicker": ["object"],
      "yearPickerDefaults": ["object"]
    };
  };

  Ext_panel_Date_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_panel_Date_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_panel_Date_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_panel_Date_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_panel_Date_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Date_Component() {
    var _this;

    _this = _Ext_Panel_Component.call(this, Ext_panel_Date_Component.METHODS(), Ext_panel_Date_Component.XTYPE(), Ext_panel_Date_Component.PROPERTIESOBJECT(), Ext_panel_Date_Component.EVENTS()) || this;
    _this.XTYPE = Ext_panel_Date_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_panel_Date_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_panel_Date_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_panel_Date_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_panel_Date_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Date_Component;
}(Ext_Panel_Component);

export { Ext_panel_Date_Component as default };