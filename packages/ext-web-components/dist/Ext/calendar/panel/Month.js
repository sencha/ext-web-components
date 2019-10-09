import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Weeks from '../../../Ext/calendar/panel/Weeks';

var Ext_calendar_panel_Month =
/*#__PURE__*/
function (_Ext_calendar_panel_W) {
  _inheritsLoose(Ext_calendar_panel_Month, _Ext_calendar_panel_W);

  Ext_calendar_panel_Month.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'addForm', 'addOnSelect', 'alignSelf', 'allowFocusingDisabledChildren', 'allowSelection', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'compact', 'compactOptions', 'constrainAlign', 'contentEl', 'control', 'controller', 'controlStoreRange', 'data', 'dayFormat', 'dayHeader', 'dayHeaderFormat', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'eventRelayers', 'firstDayOfWeek', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'gestureNavigation', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'highlightToday', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'overflowText', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'showOverflow', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'tbar', 'timezoneOffset', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'view', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_panel_Month.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,calendar-month,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'calendar-month,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'calendar-month'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'calendar-month,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'calendar-month,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'calendar-month,context'
    }, {
      name: 'beforeexpand',
      parameters: 'calendar-month'
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
      name: 'beforeresizedragstart',
      parameters: 'calendar-month,context'
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
      parameters: 'calendar-month'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'calendar-month,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'calendar-month'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,calendar-month,newActiveItem'
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
      name: 'drawerhide',
      parameters: 'calendar-month'
    }, {
      name: 'drawershow',
      parameters: 'calendar-month'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'eventadd',
      parameters: 'calendar-month,context'
    }, {
      name: 'eventdrop',
      parameters: 'calendar-month,context'
    }, {
      name: 'eventedit',
      parameters: 'calendar-month,context'
    }, {
      name: 'eventtap',
      parameters: 'calendar-month,context'
    }, {
      name: 'expand',
      parameters: 'calendar-month'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'calendar-month,event'
    }, {
      name: 'focusenter',
      parameters: 'calendar-month,event'
    }, {
      name: 'focusleave',
      parameters: 'calendar-month,event'
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
      name: 'move',
      parameters: 'calendar-month,item,toIndex,fromIndex'
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
      name: 'remove',
      parameters: 'calendar-month,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'calendar-month,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'calendar-month,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'calendar-month,context'
    }, {
      name: 'resizedragend',
      parameters: 'calendar-month,context'
    }, {
      name: 'resizedragstart',
      parameters: 'calendar-month,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'calendar-month'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'validateeventadd',
      parameters: 'calendar-month,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'calendar-month,context'
    }, {
      name: 'validateeventedit',
      parameters: 'calendar-month,context'
    }, {
      name: 'valuechange',
      parameters: 'calendar-month,context'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_panel_Month.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_panel_Month.PROPERTIES());
    return Ext_calendar_panel_Weeks.getProperties(properties);
  };

  Ext_calendar_panel_Month.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_panel_Month.EVENTS());
    return Ext_calendar_panel_Weeks.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'calendar-month'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_panel_Month, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_W.observedAttributes; //for (var property in Ext_calendar_panel_Month.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_panel_Month.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_panel_Month.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Month(properties, events) {
    return _Ext_calendar_panel_W.call(this, properties.concat(Ext_calendar_panel_Month.PROPERTIES()), events.concat(Ext_calendar_panel_Month.EVENTS())) || this;
  }

  var _proto = Ext_calendar_panel_Month.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_W.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_W.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Month;
}(Ext_calendar_panel_Weeks);

export { Ext_calendar_panel_Month as default };