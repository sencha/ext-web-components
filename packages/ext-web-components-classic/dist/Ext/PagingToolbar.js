import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Toolbar from '../Ext/toolbar/Toolbar.js';

var Ext_PagingToolbar = /*#__PURE__*/function (_Ext_toolbar_Toolbar) {
  _inheritsLoose(Ext_PagingToolbar, _Ext_toolbar_Toolbar);

  Ext_PagingToolbar.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'afterPageText', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'beforePageText', 'bind', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButtonUI', 'defaultFieldUI', 'defaultFocus', 'defaultFooterButtonUI', 'defaultFooterFieldUI', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'displayInfo', 'displayMsg', 'dock', 'draggable', 'emptyMsg', 'enableOverflow', 'firstText', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'inputItemWidth', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lastText', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'nextText', 'overCls', 'overflowHandler', 'padding', 'plugins', 'prependButtons', 'prevText', 'publishes', 'reference', 'referenceHolder', 'refreshText', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackMenus', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'vertical', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_PagingToolbar.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'add',
      parameters: 'sender,component,index'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayout',
      parameters: 'sender,layout'
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
      name: 'beforeadd',
      parameters: 'sender,component,index'
    }, {
      name: 'beforechange',
      parameters: 'sender,page'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeremove',
      parameters: 'sender,component'
    }, {
      name: 'beforerender',
      parameters: 'sender'
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
      name: 'change',
      parameters: 'sender,pageData'
    }, {
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'deactivate',
      parameters: 'sender'
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
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'overflowchange',
      parameters: 'lastHiddenCount,hiddenCount,hiddenItems'
    }, {
      name: 'remove',
      parameters: 'sender,component'
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
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_PagingToolbar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_PagingToolbar.PROPERTIES());
    return Ext_toolbar_Toolbar.getProperties(properties);
  };

  Ext_PagingToolbar.getEvents = function getEvents(events) {
    events = events.concat(Ext_PagingToolbar.EVENTS());
    return Ext_toolbar_Toolbar.getEvents(events);
  };

  _createClass(Ext_PagingToolbar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_toolbar_Toolbar.observedAttributes;
      Ext_PagingToolbar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_PagingToolbar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_PagingToolbar(properties, events) {
    return _Ext_toolbar_Toolbar.call(this, properties.concat(Ext_PagingToolbar.PROPERTIES()), events.concat(Ext_PagingToolbar.EVENTS())) || this;
  }

  var _proto = Ext_PagingToolbar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_toolbar_Toolbar.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_toolbar_Toolbar.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_PagingToolbar;
}(Ext_toolbar_Toolbar);

export { Ext_PagingToolbar as default };