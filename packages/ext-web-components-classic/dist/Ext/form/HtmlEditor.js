import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldContainer from '../../Ext/form/FieldContainer.js';

var Ext_form_HtmlEditor = /*#__PURE__*/function (_Ext_form_FieldContai) {
  _inheritsLoose(Ext_form_HtmlEditor, _Ext_form_FieldContai);

  Ext_form_HtmlEditor.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeError', 'activeErrorsTpl', 'activeItem', 'afterBodyEl', 'afterIFrameTpl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'afterTextAreaTpl', 'alignOnScroll', 'alignTarget', 'allowDomMove', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoCreate', 'autoDestroy', 'autoEl', 'autoFitErrors', 'autoRender', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeIFrameTpl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'beforeTextAreaTpl', 'bind', 'border', 'bubbleEvents', 'buttonDefaults', 'childEls', 'cls', 'columnWidth', 'combineErrors', 'combineLabels', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'createLinkText', 'data', 'defaultAlign', 'defaultButtonUI', 'defaultFocus', 'defaultLinkValue', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultValue', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableAlignments', 'enableColors', 'enableFont', 'enableFontSize', 'enableFormat', 'enableLinks', 'enableLists', 'enableSourceEdit', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldDefaults', 'fieldLabel', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'fontFamilies', 'formBind', 'formItemCls', 'frame', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'iframeAttrTpl', 'inactiveChildTabIndex', 'inputType', 'invalidCls', 'invalidText', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelConnector', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'nameHolder', 'overCls', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'submitValue', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'validateOnChange', 'validation', 'validationField', 'value', 'valuePublishEvent', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_form_HtmlEditor.EVENTS = function EVENTS() {
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
      name: 'beforepush',
      parameters: 'sender,html'
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
      name: 'beforesync',
      parameters: 'sender,html'
    }, {
      name: 'blur',
      parameters: ''
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'change',
      parameters: 'sender,newValue,oldValue'
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
      name: 'dirtychange',
      parameters: 'sender,isDirty'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'editmodechange',
      parameters: 'sender,sourceEdit'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
    }, {
      name: 'fielderrorchange',
      parameters: 'sender,field,error'
    }, {
      name: 'fieldvaliditychange',
      parameters: 'sender,field,isValid'
    }, {
      name: 'focus',
      parameters: ''
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
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'push',
      parameters: 'sender,html'
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
      parameters: ''
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'sync',
      parameters: 'sender,html'
    }, {
      name: 'validitychange',
      parameters: 'sender,isValid'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_HtmlEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_HtmlEditor.PROPERTIES());
    return Ext_form_FieldContainer.getProperties(properties);
  };

  Ext_form_HtmlEditor.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_HtmlEditor.EVENTS());
    return Ext_form_FieldContainer.getEvents(events);
  };

  _createClass(Ext_form_HtmlEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_FieldContai.observedAttributes;
      Ext_form_HtmlEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_HtmlEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_HtmlEditor(properties, events) {
    return _Ext_form_FieldContai.call(this, properties.concat(Ext_form_HtmlEditor.PROPERTIES()), events.concat(Ext_form_HtmlEditor.EVENTS())) || this;
  }

  var _proto = Ext_form_HtmlEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_FieldContai.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_FieldContai.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_HtmlEditor;
}(Ext_form_FieldContainer);

export { Ext_form_HtmlEditor as default };