import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Window from '../../Ext/window/Window.js';

var Ext_window_MessageBox = /*#__PURE__*/function (_Ext_window_Window) {
  _inheritsLoose(Ext_window_MessageBox, _Ext_window_Window);

  Ext_window_MessageBox.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'animateTarget', 'animCollapse', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bubbleEvents', 'buttonAlign', 'buttons', 'childEls', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsedCls', 'collapseDirection', 'collapseFirst', 'collapseMode', 'collapseToolText', 'collapsible', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainHeader', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButton', 'defaultButtonTarget', 'defaultDockWeights', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'dockedItems', 'draggable', 'expandOnShow', 'expandToolText', 'fbar', 'fixed', 'flex', 'floatable', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'frameHeader', 'ghost', 'glyph', 'header', 'headerOverCls', 'headerPosition', 'height', 'hidden', 'hideCollapseTool', 'hideMode', 'hideShadowOnDeactivate', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'maintainTitlePosition', 'manageHeight', 'margin', 'maskClickAction', 'maskDefaults', 'maskElement', 'maxHeight', 'maximizable', 'maximized', 'maxWidth', 'minButtonWidth', 'minHeight', 'minimizable', 'minWidth', 'modal', 'modelValidation', 'monitorResize', 'nameable', 'nameHolder', 'onEsc', 'overCls', 'overlapHeader', 'padding', 'placeholder', 'placeholderCollapseHideMode', 'plain', 'plugins', 'publishes', 'rbar', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'shrinkWrapDock', 'simpleDrag', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'titlePosition', 'titleRotation', 'toFrontOnShow', 'tools', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y'];
  };

  Ext_window_MessageBox.EVENTS = function EVENTS() {
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
      name: 'beforeclose',
      parameters: 'panel'
    }, {
      name: 'beforecollapse',
      parameters: 'p,direction,animate'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforeexpand',
      parameters: 'p,animate'
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
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'close',
      parameters: 'panel'
    }, {
      name: 'collapse',
      parameters: 'p'
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
      name: 'dockedadd',
      parameters: 'sender,component,index'
    }, {
      name: 'dockedremove',
      parameters: 'sender,component'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'p'
    }, {
      name: 'float',
      parameters: ''
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
      name: 'glyphchange',
      parameters: 'sender,newGlyph,oldGlyph'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'iconalignchange',
      parameters: 'sender,newIconAlign,oldIconAlign'
    }, {
      name: 'iconchange',
      parameters: 'sender,newIcon,oldIcon'
    }, {
      name: 'iconclschange',
      parameters: 'sender,newIconCls,oldIconCls'
    }, {
      name: 'maskclick',
      parameters: 'sender'
    }, {
      name: 'maximize',
      parameters: 'sender'
    }, {
      name: 'minimize',
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
      parameters: 'sender,width,height'
    }, {
      name: 'restore',
      parameters: 'sender'
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
      name: 'titlealignchange',
      parameters: 'sender,newTitleAlign,oldTitleAlign'
    }, {
      name: 'titlechange',
      parameters: 'sender,newTitle,oldTitle'
    }, {
      name: 'titlepositionchange',
      parameters: 'sender,newTitlePosition,oldTitlePosition'
    }, {
      name: 'titlerotationchange',
      parameters: 'sender,newTitleRotation,oldTitleRotation'
    }, {
      name: 'unfloat',
      parameters: ''
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_window_MessageBox.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_window_MessageBox.PROPERTIES());
    return Ext_window_Window.getProperties(properties);
  };

  Ext_window_MessageBox.getEvents = function getEvents(events) {
    events = events.concat(Ext_window_MessageBox.EVENTS());
    return Ext_window_Window.getEvents(events);
  };

  _createClass(Ext_window_MessageBox, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_window_Window.observedAttributes;
      Ext_window_MessageBox.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_window_MessageBox.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_window_MessageBox(properties, events) {
    return _Ext_window_Window.call(this, properties.concat(Ext_window_MessageBox.PROPERTIES()), events.concat(Ext_window_MessageBox.EVENTS())) || this;
  }

  var _proto = Ext_window_MessageBox.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_window_Window.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_window_Window.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_window_MessageBox;
}(Ext_window_Window);

export { Ext_window_MessageBox as default };