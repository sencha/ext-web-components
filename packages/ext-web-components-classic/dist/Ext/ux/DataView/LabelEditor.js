import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor from '../../../Ext/Editor.js';

var Ext_ux_DataView_LabelEditor = /*#__PURE__*/function (_Ext_Editor) {
  _inheritsLoose(Ext_ux_DataView_LabelEditor, _Ext_Editor);

  Ext_ux_DataView_LabelEditor.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignment', 'alignOnScroll', 'alignTarget', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'autoSize', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cancelOnEsc', 'childEls', 'cls', 'columnWidth', 'completeOnEnter', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'field', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideEl', 'hideMode', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'offsets', 'overCls', 'padding', 'parentEl', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'revertInvalid', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'swallowKeys', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updateEl', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_ux_DataView_LabelEditor.EVENTS = function EVENTS() {
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
      name: 'beforecomplete',
      parameters: 'sender,value,startValue'
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
      name: 'beforestartedit',
      parameters: 'sender,boundEl,value'
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
      name: 'canceledit',
      parameters: 'sender,value,startValue'
    }, {
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'complete',
      parameters: 'sender,value,startValue'
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
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'specialkey',
      parameters: 'sender,field,event'
    }, {
      name: 'startedit',
      parameters: 'sender,boundEl,value'
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

  Ext_ux_DataView_LabelEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_DataView_LabelEditor.PROPERTIES());
    return Ext_Editor.getProperties(properties);
  };

  Ext_ux_DataView_LabelEditor.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_DataView_LabelEditor.EVENTS());
    return Ext_Editor.getEvents(events);
  };

  _createClass(Ext_ux_DataView_LabelEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Editor.observedAttributes;
      Ext_ux_DataView_LabelEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_DataView_LabelEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_DataView_LabelEditor(properties, events) {
    return _Ext_Editor.call(this, properties.concat(Ext_ux_DataView_LabelEditor.PROPERTIES()), events.concat(Ext_ux_DataView_LabelEditor.EVENTS())) || this;
  }

  var _proto = Ext_ux_DataView_LabelEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Editor.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Editor.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_DataView_LabelEditor;
}(Ext_Editor);

export { Ext_ux_DataView_LabelEditor as default };