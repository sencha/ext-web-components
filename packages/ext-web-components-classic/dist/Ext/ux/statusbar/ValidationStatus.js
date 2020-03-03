import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component from '../../../Ext/Component.js';

var Ext_ux_statusbar_ValidationStatus = /*#__PURE__*/function (_Ext_Component) {
  _inheritsLoose(Ext_ux_statusbar_ValidationStatus, _Ext_Component);

  Ext_ux_statusbar_ValidationStatus.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'disabled', 'disabledCls', 'dock', 'draggable', 'errorIconCls', 'errorListCls', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'hideText', 'html', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'padding', 'plugins', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showText', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'submitText', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validIconCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_ux_statusbar_ValidationStatus.EVENTS = function EVENTS() {
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

  Ext_ux_statusbar_ValidationStatus.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_statusbar_ValidationStatus.PROPERTIES());
    return Ext_Component.getProperties(properties);
  };

  Ext_ux_statusbar_ValidationStatus.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_statusbar_ValidationStatus.EVENTS());
    return Ext_Component.getEvents(events);
  };

  _createClass(Ext_ux_statusbar_ValidationStatus, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component.observedAttributes;
      Ext_ux_statusbar_ValidationStatus.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_statusbar_ValidationStatus.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_statusbar_ValidationStatus(properties, events) {
    return _Ext_Component.call(this, properties.concat(Ext_ux_statusbar_ValidationStatus.PROPERTIES()), events.concat(Ext_ux_statusbar_ValidationStatus.EVENTS())) || this;
  }

  var _proto = Ext_ux_statusbar_ValidationStatus.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_statusbar_ValidationStatus;
}(Ext_Component);

export { Ext_ux_statusbar_ValidationStatus as default };