import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_legend_LegendBase from '../../Ext/chart/legend/LegendBase.js';

var Ext_chart_Legend =
/*#__PURE__*/
function (_Ext_chart_legend_Leg) {
  _inheritsLoose(Ext_chart_Legend, _Ext_chart_legend_Leg);

  Ext_chart_Legend.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'centered', 'cls', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inactiveChildTabIndex', 'inline', 'innerCls', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemId', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastSelected', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'pressedDelay', 'publishes', 'record', 'rect', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'right', 'ripple', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selected', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'toFrontOnShow', 'toggleable', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_chart_Legend.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,legend,oldActiveItem'
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
      parameters: 'legend'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'legend,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'legend,location'
    }, {
      name: 'childlongpress',
      parameters: 'legend,location'
    }, {
      name: 'childmouseenter',
      parameters: 'legend,location'
    }, {
      name: 'childmouseleave',
      parameters: 'legend,location'
    }, {
      name: 'childsingletap',
      parameters: 'legend,location'
    }, {
      name: 'childtap',
      parameters: 'legend,location'
    }, {
      name: 'childtaphold',
      parameters: 'legend,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'legend,location'
    }, {
      name: 'childtouchend',
      parameters: 'legend,location'
    }, {
      name: 'childtouchmove',
      parameters: 'legend,location'
    }, {
      name: 'childtouchstart',
      parameters: 'legend,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,legend,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'legend,records'
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
      parameters: 'legend,event'
    }, {
      name: 'focusenter',
      parameters: 'legend,event'
    }, {
      name: 'focusleave',
      parameters: 'legend,event'
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
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'legend,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'legend,index,target,record,e'
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
      parameters: 'legend,to,from'
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
      parameters: 'legend'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'legend,item,rendered'
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
      parameters: 'legend,selected'
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
      parameters: 'legend'
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

  Ext_chart_Legend.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_Legend.PROPERTIES());
    return Ext_chart_legend_LegendBase.getProperties(properties);
  };

  Ext_chart_Legend.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_Legend.EVENTS());
    return Ext_chart_legend_LegendBase.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'legend'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_chart_Legend, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_legend_Leg.observedAttributes; //for (var property in Ext_chart_Legend.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_chart_Legend.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_Legend.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_Legend(properties, events) {
    return _Ext_chart_legend_Leg.call(this, properties.concat(Ext_chart_Legend.PROPERTIES()), events.concat(Ext_chart_Legend.EVENTS())) || this;
  }

  var _proto = Ext_chart_Legend.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_legend_Leg.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_legend_Leg.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_Legend;
}(Ext_chart_legend_LegendBase);

export { Ext_chart_Legend as default };