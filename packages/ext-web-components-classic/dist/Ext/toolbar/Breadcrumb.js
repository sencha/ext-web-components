import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_container_Container from '../../Ext/container/Container.js';

var Ext_toolbar_Breadcrumb = /*#__PURE__*/function (_Ext_container_Contai) {
  _inheritsLoose(Ext_toolbar_Breadcrumb, _Ext_container_Contai);

  Ext_toolbar_Breadcrumb.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'buttonUI', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'displayField', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'overflowHandler', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selection', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showIcons', 'showMenuIcons', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'useSplitButtons', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_toolbar_Breadcrumb.EVENTS = function EVENTS() {
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
      parameters: 'sender,node,prevNode'
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
      name: 'selectionchange',
      parameters: 'sender,node,prevNode'
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

  Ext_toolbar_Breadcrumb.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_toolbar_Breadcrumb.PROPERTIES());
    return Ext_container_Container.getProperties(properties);
  };

  Ext_toolbar_Breadcrumb.getEvents = function getEvents(events) {
    events = events.concat(Ext_toolbar_Breadcrumb.EVENTS());
    return Ext_container_Container.getEvents(events);
  };

  _createClass(Ext_toolbar_Breadcrumb, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_container_Contai.observedAttributes;
      Ext_toolbar_Breadcrumb.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_toolbar_Breadcrumb.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_toolbar_Breadcrumb(properties, events) {
    return _Ext_container_Contai.call(this, properties.concat(Ext_toolbar_Breadcrumb.PROPERTIES()), events.concat(Ext_toolbar_Breadcrumb.EVENTS())) || this;
  }

  var _proto = Ext_toolbar_Breadcrumb.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_container_Contai.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_container_Contai.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_toolbar_Breadcrumb;
}(Ext_container_Container);

export { Ext_toolbar_Breadcrumb as default };