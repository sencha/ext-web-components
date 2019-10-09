import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_DataView from '../../Ext/dataview/DataView';

var Ext_picker_Slot =
/*#__PURE__*/
function (_Ext_dataview_DataVie) {
  _inheritsLoose(Ext_picker_Slot, _Ext_dataview_DataVie);

  Ext_picker_Slot.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'displayField', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemId', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastSelected', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selected', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'showTitle', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'title', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'valueField', 'verticallyCenterItems', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_picker_Slot.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,pickerslot,oldActiveItem'
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
      parameters: 'pickerslot'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'pickerslot,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'pickerslot,location'
    }, {
      name: 'childlongpress',
      parameters: 'pickerslot,location'
    }, {
      name: 'childmouseenter',
      parameters: 'pickerslot,location'
    }, {
      name: 'childmouseleave',
      parameters: 'pickerslot,location'
    }, {
      name: 'childsingletap',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtap',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtaphold',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtouchend',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtouchmove',
      parameters: 'pickerslot,location'
    }, {
      name: 'childtouchstart',
      parameters: 'pickerslot,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,pickerslot,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'pickerslot,records'
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
      parameters: 'pickerslot,event'
    }, {
      name: 'focusenter',
      parameters: 'pickerslot,event'
    }, {
      name: 'focusleave',
      parameters: 'pickerslot,event'
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
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'pickerslot,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'pickerslot,index,target,record,e'
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
      parameters: 'pickerslot,to,from'
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
      parameters: 'pickerslot'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'pickerslot,item,rendered'
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
      parameters: 'pickerslot,selected'
    }, {
      name: 'selectionchange',
      parameters: 'view,records,selected,selection'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'slotpick',
      parameters: 'pickerslot,value,node'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'pickerslot'
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

  Ext_picker_Slot.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_picker_Slot.PROPERTIES());
    return Ext_dataview_DataView.getProperties(properties);
  };

  Ext_picker_Slot.getEvents = function getEvents(events) {
    events = events.concat(Ext_picker_Slot.EVENTS());
    return Ext_dataview_DataView.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'pickerslot'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_picker_Slot, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_DataVie.observedAttributes; //for (var property in Ext_picker_Slot.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_picker_Slot.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_picker_Slot.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Slot(properties, events) {
    return _Ext_dataview_DataVie.call(this, properties.concat(Ext_picker_Slot.PROPERTIES()), events.concat(Ext_picker_Slot.EVENTS())) || this;
  }

  var _proto = Ext_picker_Slot.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_DataVie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_DataVie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Slot;
}(Ext_dataview_DataView);

export { Ext_picker_Slot as default };