import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_Checkbox from '../../../Ext/form/field/Checkbox.js';

var Ext_form_field_Radio = /*#__PURE__*/function (_Ext_form_field_Check) {
  _inheritsLoose(Ext_form_field_Radio, _Ext_form_field_Check);

  Ext_form_field_Radio.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterBoxLabelTextTpl', 'afterBoxLabelTpl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoRender', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeBoxLabelTextTpl', 'beforeBoxLabelTpl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'border', 'boxLabel', 'boxLabelAlign', 'boxLabelAttrTpl', 'boxLabelCls', 'checkChangeBuffer', 'checkChangeEvents', 'checked', 'checkedCls', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'dock', 'draggable', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'handler', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputType', 'inputValue', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'modelValue', 'modelValueUnchecked', 'msgTarget', 'name', 'nameable', 'overCls', 'padding', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scope', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'submitValue', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'uncheckedValue', 'userCls', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'value', 'valuePublishEvent', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_form_field_Radio.EVENTS = function EVENTS() {
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
      name: 'change',
      parameters: 'sender,newValue,oldValue'
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
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
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
      name: 'specialkey',
      parameters: 'sender,e'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'validitychange',
      parameters: 'sender,isValid'
    }, {
      name: 'writeablechange',
      parameters: 'sender,Read'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_form_field_Radio.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_field_Radio.PROPERTIES());
    return Ext_form_field_Checkbox.getProperties(properties);
  };

  Ext_form_field_Radio.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_field_Radio.EVENTS());
    return Ext_form_field_Checkbox.getEvents(events);
  };

  _createClass(Ext_form_field_Radio, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_field_Check.observedAttributes;
      Ext_form_field_Radio.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_field_Radio.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_field_Radio(properties, events) {
    return _Ext_form_field_Check.call(this, properties.concat(Ext_form_field_Radio.PROPERTIES()), events.concat(Ext_form_field_Radio.EVENTS())) || this;
  }

  var _proto = Ext_form_field_Radio.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_field_Check.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_field_Check.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_field_Radio;
}(Ext_form_field_Checkbox);

export { Ext_form_field_Radio as default };