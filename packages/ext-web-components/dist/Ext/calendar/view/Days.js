import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Base_Component from '../../../Ext/calendar/view/Base';

var Ext_calendar_view_Days_Component =
/*#__PURE__*/
function (_Ext_calendar_view_Ba) {
  _inheritsLoose(Ext_calendar_view_Days_Component, _Ext_calendar_view_Ba);

  //configs
  Ext_calendar_view_Days_Component.XTYPE = function XTYPE() {
    return 'calendar-daysview';
  };

  Ext_calendar_view_Days_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allowSelection": ["boolean"],
      "displayOverlap": ["boolean"],
      "draggable": ["boolean"],
      "droppable": ["boolean"],
      "endTime": ["number"],
      "resizeEvents": ["boolean"],
      "showNowMarker": ["boolean"],
      "startTime": ["number"],
      "timeFormat": ["string"],
      "timeRenderer": ["function"],
      "value": ["date"],
      "visibleDays": ["number"]
    };
  };

  Ext_calendar_view_Days_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforeeventdragstart',
      parameters: 'undefined,context'
    }, {
      name: 'beforeeventresizestart',
      parameters: 'undefined,context'
    }, {
      name: 'eventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'eventresize',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'undefined,context'
    }, {
      name: 'validateeventresize',
      parameters: 'undefined,context'
    }];
  };

  Ext_calendar_view_Days_Component.METHODS = function METHODS() {
    return [{
      name: 'calculateSlots',
      "function": function _function() {
        return this.ext.calculateSlots();
      }
    }, {
      name: 'checkNowMarker',
      "function": function _function() {
        return this.ext.checkNowMarker();
      }
    }, {
      name: 'clearAndPopulate',
      "function": function _function(row, nodes, clearAll) {
        return this.ext.clearAndPopulate(row, nodes, clearAll);
      }
    }, {
      name: 'clearSelected',
      "function": function _function() {
        return this.ext.clearSelected();
      }
    }, {
      name: 'constructAllDayEvents',
      "function": function _function(events) {
        return this.ext.constructAllDayEvents(events);
      }
    }, {
      name: 'constructEvents',
      "function": function _function() {
        return this.ext.constructEvents();
      }
    }, {
      name: 'createScroller',
      "function": function _function() {
        return this.ext.createScroller();
      }
    }, {
      name: 'doCheckNowMarker',
      "function": function _function() {
        return this.ext.doCheckNowMarker();
      }
    }, {
      name: 'doRecalculate',
      "function": function _function(start) {
        return this.ext.doRecalculate(start);
      }
    }, {
      name: 'generateAllDayCells',
      "function": function _function(cls, html) {
        return this.ext.generateAllDayCells(cls, html);
      }
    }, {
      name: 'generateColumns',
      "function": function _function() {
        return this.ext.generateColumns();
      }
    }, {
      name: 'generateTimeElements',
      "function": function _function() {
        return this.ext.generateTimeElements();
      }
    }, {
      name: 'generateTimeLabels',
      "function": function _function() {
        return this.ext.generateTimeLabels();
      }
    }, {
      name: 'getColumn',
      "function": function _function(index) {
        return this.ext.getColumn(index);
      }
    }, {
      name: 'getColumns',
      "function": function _function() {
        return this.ext.getColumns();
      }
    }, {
      name: 'getEventColumn',
      "function": function _function(index) {
        return this.ext.getEventColumn(index);
      }
    }, {
      name: 'getEventStyle',
      "function": function _function() {
        return this.ext.getEventStyle();
      }
    }, {
      name: 'getEventWidget',
      "function": function _function(event) {
        return this.ext.getEventWidget(event);
      }
    }, {
      name: 'getSlotStyle',
      "function": function _function() {
        return this.ext.getSlotStyle();
      }
    }, {
      name: 'handleEventTap',
      "function": function _function(e) {
        return this.ext.handleEventTap(e);
      }
    }, {
      name: 'onAllDayTouchEnd',
      "function": function _function(e) {
        return this.ext.onAllDayTouchEnd(e);
      }
    }, {
      name: 'onAllDayTouchMove',
      "function": function _function(e) {
        return this.ext.onAllDayTouchMove(e);
      }
    }, {
      name: 'onAllDayTouchStart',
      "function": function _function(e) {
        return this.ext.onAllDayTouchStart(e);
      }
    }, {
      name: 'onBodyTouchEnd',
      "function": function _function(e) {
        return this.ext.onBodyTouchEnd(e);
      }
    }, {
      name: 'onBodyTouchMove',
      "function": function _function(e) {
        return this.ext.onBodyTouchMove(e);
      }
    }, {
      name: 'onBodyTouchStart',
      "function": function _function(e) {
        return this.ext.onBodyTouchStart(e);
      }
    }, {
      name: 'onResizerDrag',
      "function": function _function(e) {
        return this.ext.onResizerDrag(e);
      }
    }, {
      name: 'onResizerDragEnd',
      "function": function _function(e) {
        return this.ext.onResizerDragEnd(e);
      }
    }, {
      name: 'onResizerDragStart',
      "function": function _function(e) {
        return this.ext.onResizerDragStart(e);
      }
    }, {
      name: 'processDay',
      "function": function _function(day, frag) {
        return this.ext.processDay(day, frag);
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
      name: 'roundDate',
      "function": function _function(d) {
        return this.ext.roundDate(d);
      }
    }, {
      name: 'selectRange',
      "function": function _function(start, end) {
        return this.ext.selectRange(start, end);
      }
    }, {
      name: 'setTimeRange',
      "function": function _function(start, end) {
        return this.ext.setTimeRange(start, end);
      }
    }, {
      name: 'slotFromPosition',
      "function": function _function(pageY, local) {
        return this.ext.slotFromPosition(pageY, local);
      }
    }, {
      name: 'slotToPosition',
      "function": function _function(slot) {
        return this.ext.slotToPosition(slot);
      }
    }, {
      name: 'syncHeaderScroll',
      "function": function _function() {
        return this.ext.syncHeaderScroll();
      }
    }];
  };

  _createClass(Ext_calendar_view_Days_Component, [{
    key: "onbeforeeventdragstart",
    //events
    get: function get() {
      return this.getAttribute('onbeforeeventdragstart');
    },
    set: function set(onbeforeeventdragstart) {
      this.setAttribute('onbeforeeventdragstart', onbeforeeventdragstart);
    }
  }, {
    key: "onbeforeeventresizestart",
    get: function get() {
      return this.getAttribute('onbeforeeventresizestart');
    },
    set: function set(onbeforeeventresizestart) {
      this.setAttribute('onbeforeeventresizestart', onbeforeeventresizestart);
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
    key: "oneventresize",
    get: function get() {
      return this.getAttribute('oneventresize');
    },
    set: function set(oneventresize) {
      this.setAttribute('oneventresize', oneventresize);
    }
  }, {
    key: "onvalidateeventdrop",
    get: function get() {
      return this.getAttribute('onvalidateeventdrop');
    },
    set: function set(onvalidateeventdrop) {
      this.setAttribute('onvalidateeventdrop', onvalidateeventdrop);
    }
  }, {
    key: "onvalidateeventresize",
    get: function get() {
      return this.getAttribute('onvalidateeventresize');
    },
    set: function set(onvalidateeventresize) {
      this.setAttribute('onvalidateeventresize', onvalidateeventresize);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_Ba.observedAttributes;

      for (var property in Ext_calendar_view_Days_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_calendar_view_Days_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Days_Component() {
    var _this;

    _this = _Ext_calendar_view_Ba.call(this, Ext_calendar_view_Days_Component.METHODS(), Ext_calendar_view_Days_Component.XTYPE(), Ext_calendar_view_Days_Component.PROPERTIESOBJECT(), Ext_calendar_view_Days_Component.EVENTS()) || this;
    _this.XTYPE = Ext_calendar_view_Days_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_calendar_view_Days_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_calendar_view_Days_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_calendar_view_Days_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_calendar_view_Days_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Days_Component;
}(Ext_calendar_view_Base_Component);

export { Ext_calendar_view_Days_Component as default };