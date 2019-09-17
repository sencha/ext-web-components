import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Base_Component from '../../../Ext/calendar/view/Base';

var Ext_calendar_view_Weeks_Component =
/*#__PURE__*/
function (_Ext_calendar_view_Ba) {
  _inheritsLoose(Ext_calendar_view_Weeks_Component, _Ext_calendar_view_Ba);

  //configs
  Ext_calendar_view_Weeks_Component.XTYPE = function XTYPE() {
    return 'calendar-weeksview';
  };

  Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "addOnSelect": ["boolean"],
      "allowSelection": ["boolean"],
      "compactOptions": ["object"],
      "dayFormat": ["string"],
      "draggable": ["boolean"],
      "droppable": ["boolean"],
      "firstDayOfWeek": ["number"],
      "overflowText": ["string"],
      "showOverflow": ["string"],
      "value": ["date"],
      "visibleDays": ["number"],
      "visibleWeeks": ["number"],
      "weekendDays": ["number[]"]
    };
  };

  Ext_calendar_view_Weeks_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforeeventdragstart',
      parameters: 'undefined,context'
    }, {
      name: 'eventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'select',
      parameters: 'undefined,context'
    }, {
      name: 'selectrange',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'undefined,context'
    }];
  };

  Ext_calendar_view_Weeks_Component.METHODS = function METHODS() {
    return [{
      name: 'clearSelected',
      "function": function _function() {
        return this.ext.clearSelected();
      }
    }, {
      name: 'constructEvents',
      "function": function _function() {
        return this.ext.constructEvents();
      }
    }, {
      name: 'createEvent',
      "function": function _function(event, cfg, dummy) {
        return this.ext.createEvent(event, cfg, dummy);
      }
    }, {
      name: 'doRecalculate',
      "function": function _function(start) {
        return this.ext.doRecalculate(start);
      }
    }, {
      name: 'doRefresh',
      "function": function _function() {
        return this.ext.doRefresh();
      }
    }, {
      name: 'doRefreshEvents',
      "function": function _function() {
        return this.ext.doRefreshEvents();
      }
    }, {
      name: 'findIndex',
      "function": function _function(sizes, offset) {
        return this.ext.findIndex(sizes, offset);
      }
    }, {
      name: 'generateCells',
      "function": function _function(numRows, setHeights) {
        return this.ext.generateCells(numRows, setHeights);
      }
    }, {
      name: 'getCell',
      "function": function _function(date) {
        return this.ext.getCell(date);
      }
    }, {
      name: 'getCellByPosition',
      "function": function _function(pageX, pageY) {
        return this.ext.getCellByPosition(pageX, pageY);
      }
    }, {
      name: 'getCellFromEvent',
      "function": function _function(e, inferFromWidget) {
        return this.ext.getCellFromEvent(e, inferFromWidget);
      }
    }, {
      name: 'getDateFromCell',
      "function": function _function(cell) {
        return this.ext.getDateFromCell(cell);
      }
    }, {
      name: 'getDaySizes',
      "function": function _function() {
        return this.ext.getDaySizes();
      }
    }, {
      name: 'getEventStyle',
      "function": function _function() {
        return this.ext.getEventStyle();
      }
    }, {
      name: 'getEventWidget',
      "function": function _function(el) {
        return this.ext.getEventWidget(el);
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
    }, {
      name: 'handleEventTap',
      "function": function _function(e) {
        return this.ext.handleEventTap(e);
      }
    }, {
      name: 'handleResize',
      "function": function _function() {
        return this.ext.handleResize();
      }
    }, {
      name: 'onOverflowClick',
      "function": function _function(e) {
        return this.ext.onOverflowClick(e);
      }
    }, {
      name: 'onSourceAttach',
      "function": function _function() {
        return this.ext.onSourceAttach();
      }
    }, {
      name: 'onTouchEnd',
      "function": function _function(event) {
        return this.ext.onTouchEnd(event);
      }
    }, {
      name: 'onTouchMove',
      "function": function _function(e) {
        return this.ext.onTouchMove(e);
      }
    }, {
      name: 'onTouchStart',
      "function": function _function(e, t) {
        return this.ext.onTouchStart(e, t);
      }
    }, {
      name: 'positionEvent',
      "function": function _function(el, item) {
        return this.ext.positionEvent(el, item);
      }
    }, {
      name: 'positionSum',
      "function": function _function(start, len, sizes) {
        return this.ext.positionSum(start, len, sizes);
      }
    }, {
      name: 'processWeek',
      "function": function _function(week, frag) {
        return this.ext.processWeek(week, frag);
      }
    }, {
      name: 'queryCells',
      "function": function _function() {
        return this.ext.queryCells();
      }
    }, {
      name: 'recalculate',
      "function": function _function() {
        return this.ext.recalculate();
      }
    }, {
      name: 'refreshHeaders',
      "function": function _function() {
        return this.ext.refreshHeaders();
      }
    }, {
      name: 'selectRange',
      "function": function _function(from, to) {
        return this.ext.selectRange(from, to);
      }
    }];
  };

  _createClass(Ext_calendar_view_Weeks_Component, [{
    key: "onbeforeeventdragstart",
    //events
    get: function get() {
      return this.getAttribute('onbeforeeventdragstart');
    },
    set: function set(onbeforeeventdragstart) {
      this.setAttribute('onbeforeeventdragstart', onbeforeeventdragstart);
    }
  }, {
    key: "oneventdrop",
    get: function get() {
      return this.getAttribute('oneventdrop');
    },
    set: function set(oneventdrop) {
      this.setAttribute('oneventdrop', oneventdrop);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
    }
  }, {
    key: "onselectrange",
    get: function get() {
      return this.getAttribute('onselectrange');
    },
    set: function set(onselectrange) {
      this.setAttribute('onselectrange', onselectrange);
    }
  }, {
    key: "onvalidateeventdrop",
    get: function get() {
      return this.getAttribute('onvalidateeventdrop');
    },
    set: function set(onvalidateeventdrop) {
      this.setAttribute('onvalidateeventdrop', onvalidateeventdrop);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_Ba.observedAttributes;

      for (var property in Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_view_Weeks_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Weeks_Component() {
    var _this;

    _this = _Ext_calendar_view_Ba.call(this) || this;
    _this.XTYPE = Ext_calendar_view_Weeks_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_view_Weeks_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_calendar_view_Weeks_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_calendar_view_Weeks_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_view_Weeks_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Weeks_Component;
}(Ext_calendar_view_Base_Component);

export { Ext_calendar_view_Weeks_Component as default };