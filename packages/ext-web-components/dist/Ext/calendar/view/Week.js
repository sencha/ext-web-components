import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Days_Component from '../../../Ext/calendar/view/Days';

var Ext_calendar_view_Week_Component =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(Ext_calendar_view_Week_Component, _Ext_calendar_view_Da);

  //events
  //configs
  Ext_calendar_view_Week_Component.XTYPE = function XTYPE() {
    return 'calendar-weekview';
  };

  Ext_calendar_view_Week_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "firstDayOfWeek": ["number"],
      "value": ["date"],
      "visibleDays": ["number"]
    };
  };

  Ext_calendar_view_Week_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_view_Week_Component.METHODS = function METHODS() {
    return [{
      name: 'doRecalculate',
      "function": function _function(start) {
        return this.ext.doRecalculate(start);
      }
    }, {
      name: 'getMoveBaseValue',
      "function": function _function() {
        return this.ext.getMoveBaseValue();
      }
    }, {
      name: 'getMoveInterval',
      "function": function _function() {
        return this.ext.getMoveInterval();
      }
    }];
  };

  _createClass(Ext_calendar_view_Week_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_Da.observedAttributes;

      for (var property in Ext_calendar_view_Week_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_view_Week_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Week_Component() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, Ext_calendar_view_Week_Component.METHODS(), Ext_calendar_view_Week_Component.XTYPE(), Ext_calendar_view_Week_Component.PROPERTIESOBJECT(), Ext_calendar_view_Week_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_view_Week_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_view_Week_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_view_Week_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_view_Week_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_view_Week_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_Da.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_Da.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Week_Component;
}(Ext_calendar_view_Days_Component);

export { Ext_calendar_view_Week_Component as default };