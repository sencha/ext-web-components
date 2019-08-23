import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Base_Component from '../../../Ext/calendar/header/Base';

var Ext_calendar_header_Weeks_Component =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(Ext_calendar_header_Weeks_Component, _Ext_calendar_header_);

  //events
  //configs
  Ext_calendar_header_Weeks_Component.XTYPE = function XTYPE() {
    return 'calendar-weeksheader';
  };

  Ext_calendar_header_Weeks_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "format": ["string"]
    };
  };

  Ext_calendar_header_Weeks_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_header_Weeks_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_calendar_header_Weeks_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_header_.observedAttributes;

      for (var property in Ext_calendar_header_Weeks_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_header_Weeks_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_header_Weeks_Component() {
    var _this;

    _this = _Ext_calendar_header_.call(this, Ext_calendar_header_Weeks_Component.METHODS(), Ext_calendar_header_Weeks_Component.XTYPE(), Ext_calendar_header_Weeks_Component.PROPERTIESOBJECT(), Ext_calendar_header_Weeks_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_header_Weeks_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_header_Weeks_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_header_Weeks_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_header_Weeks_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_header_Weeks_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_header_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_header_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_header_Weeks_Component;
}(Ext_calendar_header_Base_Component);

export { Ext_calendar_header_Weeks_Component as default };