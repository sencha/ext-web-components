import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks_Component from '../../../Ext/calendar/panel/Weeks';

var Ext_calendar_panel_Month_Component =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(Ext_calendar_panel_Month_Component, _Ext_calendar_panel_W);

  //events
  //configs
  Ext_calendar_panel_Month_Component.XTYPE = function XTYPE() {
    return 'calendar-month';
  };

  Ext_calendar_panel_Month_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "value": ["date"],
      "view": ["object"],
      "visibleWeeks": ["number"]
    };
  };

  Ext_calendar_panel_Month_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_panel_Month_Component.METHODS = function METHODS() {
    return [{
      name: 'nextMonth',
      "function": function _function(months) {
        return this.ext.nextMonth(months);
      }
    }, {
      name: 'nextYear',
      "function": function _function(years) {
        return this.ext.nextYear(years);
      }
    }, {
      name: 'previousMonth',
      "function": function _function(months) {
        return this.ext.previousMonth(months);
      }
    }, {
      name: 'previousYear',
      "function": function _function(years) {
        return this.ext.previousYear(years);
      }
    }];
  };

  _createClass(Ext_calendar_panel_Month_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_W.observedAttributes;

      for (var property in Ext_calendar_panel_Month_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_Month_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Month_Component() {
    var _this;

    _this = _Ext_calendar_panel_W.call(this) || this;
    _this.XTYPE = Ext_calendar_panel_Month_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_panel_Month_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_panel_Month_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_panel_Month_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_panel_Month_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_W.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_W.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Month_Component;
}(Ext_calendar_panel_Weeks_Component);

export { Ext_calendar_panel_Month_Component as default };