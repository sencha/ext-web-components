import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Item from '../../Ext/menu/Item.js';

var Ext_menu_Separator = /*#__PURE__*/function (_Ext_menu_Item) {
  _inheritsLoose(Ext_menu_Separator, _Ext_menu_Item);

  Ext_menu_Separator.PROPERTIES = function PROPERTIES() {
    return ['activeCls', 'activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'canActivate', 'childEls', 'clickHideDelay', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'destroyMenu', 'disabled', 'disabledCls', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'glyph', 'handler', 'height', 'hidden', 'hideMode', 'hideOnClick', 'href', 'hrefTarget', 'html', 'icon', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'menuExpandDelay', 'menuHideDelay', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'padding', 'plain', 'plugins', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'separatorCls', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'text', 'toFrontOnShow', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_menu_Separator.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'item'
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
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
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
      name: 'click',
      parameters: 'item,e'
    }, {
      name: 'deactivate',
      parameters: 'item'
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
      name: 'iconchange',
      parameters: 'sender,oldIcon,newIcon'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
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
      name: 'textchange',
      parameters: 'sender,oldText,newText'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_menu_Separator.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_menu_Separator.PROPERTIES());
    return Ext_menu_Item.getProperties(properties);
  };

  Ext_menu_Separator.getEvents = function getEvents(events) {
    events = events.concat(Ext_menu_Separator.EVENTS());
    return Ext_menu_Item.getEvents(events);
  };

  _createClass(Ext_menu_Separator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_menu_Item.observedAttributes;
      Ext_menu_Separator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_menu_Separator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_menu_Separator(properties, events) {
    return _Ext_menu_Item.call(this, properties.concat(Ext_menu_Separator.PROPERTIES()), events.concat(Ext_menu_Separator.EVENTS())) || this;
  }

  var _proto = Ext_menu_Separator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_menu_Item.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_menu_Item.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_menu_Separator;
}(Ext_menu_Item);

export { Ext_menu_Separator as default };