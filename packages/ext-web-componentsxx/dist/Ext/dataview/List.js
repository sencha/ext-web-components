import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_Component from '../../Ext/dataview/Component';

var Ext_dataview_List =
/*#__PURE__*/
function (_Ext_dataview_Compone) {
  _inheritsLoose(Ext_dataview_List, _Ext_dataview_Compone);

  Ext_dataview_List.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_dataview_List.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,list,oldActiveItem'
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
      name: 'beforegroupcollapse',
      parameters: 'list,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'list,group'
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
      parameters: 'list'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'list,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'list,location'
    }, {
      name: 'childlongpress',
      parameters: 'list,location'
    }, {
      name: 'childmouseenter',
      parameters: 'list,location'
    }, {
      name: 'childmouseleave',
      parameters: 'list,location'
    }, {
      name: 'childsingletap',
      parameters: 'list,location'
    }, {
      name: 'childtap',
      parameters: 'list,location'
    }, {
      name: 'childtaphold',
      parameters: 'list,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'list,location'
    }, {
      name: 'childtouchend',
      parameters: 'list,location'
    }, {
      name: 'childtouchmove',
      parameters: 'list,location'
    }, {
      name: 'childtouchstart',
      parameters: 'list,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,list,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'list,records'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'disclose',
      parameters: 'list,record,target,index,event'
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
      parameters: 'list,event'
    }, {
      name: 'focusenter',
      parameters: 'list,event'
    }, {
      name: 'focusleave',
      parameters: 'list,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'groupcollapse',
      parameters: 'list,group'
    }, {
      name: 'groupexpand',
      parameters: 'list,group'
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
      name: 'itemaction',
      parameters: 'list,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'list,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'list,index,target,record,e'
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
      parameters: 'list,to,from'
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
      parameters: 'list'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'list,item,rendered'
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
      parameters: 'list,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'list'
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

  Ext_dataview_List.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dataview_List.PROPERTIES());
    return Ext_dataview_Component.getProperties(properties);
  };

  Ext_dataview_List.getEvents = function getEvents(events) {
    events = events.concat(Ext_dataview_List.EVENTS());
    return Ext_dataview_Component.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'list'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_dataview_List, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_Compone.observedAttributes; //for (var property in Ext_dataview_List.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_dataview_List.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dataview_List.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_List(properties, events) {
    return _Ext_dataview_Compone.call(this, properties.concat(Ext_dataview_List.PROPERTIES()), events.concat(Ext_dataview_List.EVENTS())) || this;
  }

  var _proto = Ext_dataview_List.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_Compone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_Compone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_List;
}(Ext_dataview_Component);

export { Ext_dataview_List as default };