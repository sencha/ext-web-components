import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Weeks from '../../../Ext/calendar/view/Weeks.js';

var Ext_calendar_view_Month =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(Ext_calendar_view_Month, _Ext_calendar_view_We);

  Ext_calendar_view_Month.PROPERTIES = function PROPERTIES() {
    return ['addForm', 'addOnSelect', 'alignSelf', 'allowSelection', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'axisLock', 'bind', 'border', 'bottom', 'centered', 'cls', 'compact', 'compactOptions', 'constrainAlign', 'contentEl', 'controller', 'controlStoreRange', 'data', 'dayFormat', 'defaultListenerScope', 'disabled', 'displayed', 'docked', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'firstDayOfWeek', 'flex', 'floated', 'focusCls', 'fullscreen', 'gestureNavigation', 'header', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'overflowText', 'padding', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'showOverflow', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'timezoneOffset', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_view_Month.EVENTS = function EVENTS() {
    return [{
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'calendar-monthview'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'calendar-monthview,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'eventadd',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'eventdrop',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'eventedit',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'eventtap',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'calendar-monthview,event'
    }, {
      name: 'focusenter',
      parameters: 'calendar-monthview,event'
    }, {
      name: 'focusleave',
      parameters: 'calendar-monthview,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'selectrange',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'calendar-monthview'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'validateeventadd',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'validateeventedit',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'valuechange',
      parameters: 'calendar-monthview,context'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_view_Month.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Month.PROPERTIES());
    return Ext_calendar_view_Weeks.getProperties(properties);
  };

  Ext_calendar_view_Month.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_Month.EVENTS());
    return Ext_calendar_view_Weeks.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-monthview'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_view_Month, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_We.observedAttributes; //for (var property in Ext_calendar_view_Month.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_view_Month.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_Month.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Month(properties, events) {
    return _Ext_calendar_view_We.call(this, properties.concat(Ext_calendar_view_Month.PROPERTIES()), events.concat(Ext_calendar_view_Month.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_Month.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_We.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_We.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Month;
}(Ext_calendar_view_Weeks);

export { Ext_calendar_view_Month as default };