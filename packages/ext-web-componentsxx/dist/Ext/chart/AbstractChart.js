import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Container from '../../Ext/draw/Container';

var Ext_chart_AbstractChart =
/*#__PURE__*/
function (_Ext_draw_Container) {
  _inheritsLoose(Ext_chart_AbstractChart, _Ext_draw_Container);

  Ext_chart_AbstractChart.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'animation', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axes', 'axisLock', 'background', 'bind', 'bodyCls', 'border', 'bottom', 'captions', 'cardSwitchAnimation', 'centered', 'cls', 'colors', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'disabled', 'displayed', 'docked', 'downloadServerUrl', 'draggable', 'engine', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'gradients', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'highlightItem', 'html', 'id', 'inactiveChildTabIndex', 'innerCls', 'insetPadding', 'instanceCls', 'interactions', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'legend', 'listeners', 'mainRect', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizeHandler', 'right', 'ripple', 'scrollable', 'series', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sprites', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'surfaceZIndexes', 'tabIndex', 'theme', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_chart_AbstractChart.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,undefined,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'undefined,item,index'
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
      name: 'beforerefresh',
      parameters: 'undefined'
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
      name: 'bodyresize',
      parameters: 'size'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,undefined,newActiveItem'
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
      name: 'itemclick',
      parameters: 'chart,item,event'
    }, {
      name: 'itemdblclick',
      parameters: 'chart,item,event'
    }, {
      name: 'itemhighlight',
      parameters: 'undefined,newItem,oldItem'
    }, {
      name: 'itemhighlightchange',
      parameters: 'undefined,newItem,oldItem'
    }, {
      name: 'itemmousedown',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmousemove',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseout',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseover',
      parameters: 'chart,item,event'
    }, {
      name: 'itemmouseup',
      parameters: 'chart,item,event'
    }, {
      name: 'itemtap',
      parameters: 'chart,item,event'
    }, {
      name: 'layout',
      parameters: 'undefined'
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
      parameters: 'undefined,item,toIndex,fromIndex'
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
      name: 'redraw',
      parameters: 'undefined'
    }, {
      name: 'refresh',
      parameters: 'undefined'
    }, {
      name: 'remove',
      parameters: 'undefined,item,index'
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
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'spriteclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritedblclick',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousedown',
      parameters: 'sprite,event'
    }, {
      name: 'spritemousemove',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseout',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseover',
      parameters: 'sprite,event'
    }, {
      name: 'spritemouseup',
      parameters: 'sprite,event'
    }, {
      name: 'spritetap',
      parameters: 'sprite,event'
    }, {
      name: 'storechange',
      parameters: 'chart,newStore,oldStore'
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

  Ext_chart_AbstractChart.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_AbstractChart.PROPERTIES());
    return Ext_draw_Container.getProperties(properties);
  };

  Ext_chart_AbstractChart.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_AbstractChart.EVENTS());
    return Ext_draw_Container.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_chart_AbstractChart, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_Container.observedAttributes; //for (var property in Ext_chart_AbstractChart.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_chart_AbstractChart.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_AbstractChart.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_AbstractChart(properties, events) {
    return _Ext_draw_Container.call(this, properties.concat(Ext_chart_AbstractChart.PROPERTIES()), events.concat(Ext_chart_AbstractChart.EVENTS())) || this;
  }

  var _proto = Ext_chart_AbstractChart.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_Container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_Container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_AbstractChart;
}(Ext_draw_Container);

export { Ext_chart_AbstractChart as default };