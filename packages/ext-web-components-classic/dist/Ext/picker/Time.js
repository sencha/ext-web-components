import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_BoundList from '../../Ext/view/BoundList.js';

var Ext_picker_Time = /*#__PURE__*/function (_Ext_view_BoundList) {
  _inheritsLoose(Ext_picker_Time, _Ext_view_BoundList);

  Ext_picker_Time.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'displayField', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'format', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'increment', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxValue', 'maxWidth', 'minHeight', 'minValue', 'minWidth', 'modal', 'modelValidation', 'nameable', 'navigationModel', 'overCls', 'overItemCls', 'padding', 'pageSize', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_picker_Time.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforecontainerclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermousedown',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseout',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseover',
      parameters: 'sender,e'
    }, {
      name: 'beforecontainermouseup',
      parameters: 'sender,e'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeitemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforeitemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'beforerefresh',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeselect',
      parameters: 'sender,record,index'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'containerclick',
      parameters: 'sender,e'
    }, {
      name: 'containercontextmenu',
      parameters: 'sender,e'
    }, {
      name: 'containerdblclick',
      parameters: 'sender,e'
    }, {
      name: 'containerkeydown',
      parameters: 'sender,e'
    }, {
      name: 'containerkeypress',
      parameters: 'sender,e'
    }, {
      name: 'containerkeyup',
      parameters: 'sender,e'
    }, {
      name: 'containermousedown',
      parameters: 'sender,e'
    }, {
      name: 'containermouseout',
      parameters: 'sender,e'
    }, {
      name: 'containermouseover',
      parameters: 'sender,e'
    }, {
      name: 'containermouseup',
      parameters: 'sender,e'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'deselect',
      parameters: 'sender,record'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'highlightitem',
      parameters: 'view,node'
    }, {
      name: 'itemadd',
      parameters: 'records,index,node,view'
    }, {
      name: 'itemclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemcontextmenu',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemdblclick',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeydown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeypress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemkeyup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemlongpress',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmousedown',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemmouseup',
      parameters: 'sender,record,item,index,e'
    }, {
      name: 'itemremove',
      parameters: 'records,index,item,view'
    }, {
      name: 'itemupdate',
      parameters: 'record,index,node,view'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'select',
      parameters: 'sender,record,index'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'unhighlightitem',
      parameters: 'view,node'
    }, {
      name: 'viewready',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_picker_Time.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_picker_Time.PROPERTIES());
    return Ext_view_BoundList.getProperties(properties);
  };

  Ext_picker_Time.getEvents = function getEvents(events) {
    events = events.concat(Ext_picker_Time.EVENTS());
    return Ext_view_BoundList.getEvents(events);
  };

  _createClass(Ext_picker_Time, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_BoundList.observedAttributes;
      Ext_picker_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_picker_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Time(properties, events) {
    return _Ext_view_BoundList.call(this, properties.concat(Ext_picker_Time.PROPERTIES()), events.concat(Ext_picker_Time.EVENTS())) || this;
  }

  var _proto = Ext_picker_Time.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_BoundList.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_BoundList.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Time;
}(Ext_view_BoundList);

export { Ext_picker_Time as default };