import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView from '../../Ext/dataview/DataView';

var Ext_calendar_AbstractList =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_calendar_AbstractList, _Ext_dataview_DataVie);

  Ext_calendar_AbstractList.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemId', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastSelected', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selected', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_calendar_AbstractList.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,undefined,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: ''
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
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
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
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'undefined'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'undefined,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'undefined,location'
    }, {
      name: 'childlongpress',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseenter',
      parameters: 'undefined,location'
    }, {
      name: 'childmouseleave',
      parameters: 'undefined,location'
    }, {
      name: 'childsingletap',
      parameters: 'undefined,location'
    }, {
      name: 'childtap',
      parameters: 'undefined,location'
    }, {
      name: 'childtaphold',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchend',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchmove',
      parameters: 'undefined,location'
    }, {
      name: 'childtouchstart',
      parameters: 'undefined,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,undefined,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'undefined,records'
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
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'undefined,event'
    }, {
      name: 'focusenter',
      parameters: 'undefined,event'
    }, {
      name: 'focusleave',
      parameters: 'undefined,event'
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
      name: 'itemdoubletap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'undefined,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'undefined,index,target,record,e'
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
      parameters: ''
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'navigate',
      parameters: 'undefined,to,from'
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
      name: 'refresh',
      parameters: 'undefined'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'undefined,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'rowselection',
      parameters: 'view,selection'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'undefined,selected'
    }, {
      name: 'selectionchange',
      parameters: 'view,records,selected,selection'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'undefined'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_calendar_AbstractList.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_AbstractList.PROPERTIES());
    return Ext_dataview_DataView.getProperties(properties);
  };

  Ext_calendar_AbstractList.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_AbstractList.EVENTS());
    return Ext_dataview_DataView.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_calendar_AbstractList, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes; //for (var property in Ext_calendar_AbstractList.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_calendar_AbstractList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_AbstractList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_AbstractList(properties, events) {
    return _Ext_dataview_DataVie.call(this, properties.concat(Ext_calendar_AbstractList.PROPERTIES()), events.concat(Ext_calendar_AbstractList.EVENTS())) || this;
  }

  var _proto = Ext_calendar_AbstractList.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_AbstractList;
}(Ext_dataview_DataView);

export { Ext_calendar_AbstractList as default };