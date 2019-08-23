import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_AbstractPanel_Component from '../../../Ext/calendar/panel/AbstractPanel';

var Ext_calendar_panel_Panel_Component =
/*#__PURE__*/
function (_Ext_calendar_panel_A) {
  _inheritsLoose(Ext_calendar_panel_Panel_Component, _Ext_calendar_panel_A);

  //events
  //configs
  Ext_calendar_panel_Panel_Component.XTYPE = function XTYPE() {
    return 'calendar';
  };

  Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "calendarList": ["object"],
      "cls": ["string", "string[]"],
      "compact": ["boolean"],
      "compactOptions": ["object"],
      "createButton": ["object"],
      "createButtonPosition": ["string"],
      "dateTitle": ["object"],
      "defaultView": ["string"],
      "highlightToday": ["boolean"],
      "nextButton": ["object"],
      "previousButton": ["object"],
      "referenceHolder": ["boolean"],
      "sideBar": ["object"],
      "store": ["object", "Ext.calendar.store.Calendars"],
      "switcher": ["object"],
      "switcherPosition": ["string"],
      "timezoneOffset": ["number"],
      "titleBar": ["object"],
      "todayButton": ["object"],
      "value": ["date"],
      "views": ["object"]
    };
  };

  Ext_calendar_panel_Panel_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_calendar_panel_Panel_Component.METHODS = function METHODS() {
    return [{
      name: 'getCalendarList',
      "function": function _function() {
        return this.ext.getCalendarList();
      }
    }, {
      name: 'getCreateButton',
      "function": function _function() {
        return this.ext.getCreateButton();
      }
    }, {
      name: 'getNextButton',
      "function": function _function() {
        return this.ext.getNextButton();
      }
    }, {
      name: 'getPreviousButton',
      "function": function _function() {
        return this.ext.getPreviousButton();
      }
    }, {
      name: 'getSideBar',
      "function": function _function() {
        return this.ext.getSideBar();
      }
    }, {
      name: 'getSwitcher',
      "function": function _function() {
        return this.ext.getSwitcher();
      }
    }, {
      name: 'getTitleBar',
      "function": function _function() {
        return this.ext.getTitleBar();
      }
    }, {
      name: 'getTodayButton',
      "function": function _function() {
        return this.ext.getTodayButton();
      }
    }, {
      name: 'getView',
      "function": function _function() {
        return this.ext.getView();
      }
    }, {
      name: 'moveNext',
      "function": function _function() {
        return this.ext.moveNext();
      }
    }, {
      name: 'movePrevious',
      "function": function _function() {
        return this.ext.movePrevious();
      }
    }, {
      name: 'navigate',
      "function": function _function(amount, interval) {
        return this.ext.navigate(amount, interval);
      }
    }, {
      name: 'setCalendarList',
      "function": function _function() {
        return this.ext.setCalendarList();
      }
    }, {
      name: 'setCreateButton',
      "function": function _function() {
        return this.ext.setCreateButton();
      }
    }, {
      name: 'setNextButton',
      "function": function _function() {
        return this.ext.setNextButton();
      }
    }, {
      name: 'setPreviousButton',
      "function": function _function() {
        return this.ext.setPreviousButton();
      }
    }, {
      name: 'setSideBar',
      "function": function _function() {
        return this.ext.setSideBar();
      }
    }, {
      name: 'setSwitcher',
      "function": function _function() {
        return this.ext.setSwitcher();
      }
    }, {
      name: 'setTitleBar',
      "function": function _function() {
        return this.ext.setTitleBar();
      }
    }, {
      name: 'setTodayButton',
      "function": function _function() {
        return this.ext.setTodayButton();
      }
    }, {
      name: 'setView',
      "function": function _function(view) {
        return this.ext.setView(view);
      }
    }, {
      name: 'setViews',
      "function": function _function() {
        return this.ext.setViews();
      }
    }];
  };

  _createClass(Ext_calendar_panel_Panel_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_A.observedAttributes;

      for (var property in Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_panel_Panel_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Panel_Component() {
    var _this;

    _this = _Ext_calendar_panel_A.call(this, Ext_calendar_panel_Panel_Component.METHODS(), Ext_calendar_panel_Panel_Component.XTYPE(), Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT(), Ext_calendar_panel_Panel_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_panel_Panel_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_panel_Panel_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_panel_Panel_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_panel_Panel_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_panel_Panel_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_A.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_A.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Panel_Component;
}(Ext_calendar_panel_AbstractPanel_Component);

export { Ext_calendar_panel_Panel_Component as default };