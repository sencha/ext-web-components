import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_slider_Multi from '../../Ext/slider/Multi.js';

var Ext_form_SliderField = /*#__PURE__*/function (_Ext_slider_Multi) {
  _inheritsLoose(Ext_form_SliderField, _Ext_slider_Multi);

  Ext_form_SliderField.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animate', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoRender', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clickToChange', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainThumbs', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'decimalPrecision', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'dock', 'draggable', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'increment', 'inputAttrTpl', 'inputId', 'inputType', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyIncrement', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxValue', 'maxWidth', 'minHeight', 'minValue', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'padding', 'pageSize', 'plugins', 'preventMark', 'publishes', 'publishOnComplete', 'readOnly', 'readOnlyCls', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'submitValue', 'tabIndex', 'thumbPerValue', 'tipText', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'useTips', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'value', 'valuePublishEvent', 'values', 'vertical', 'viewModel', 'weight', 'width', 'xtype', 'zeroBasedSnapping'];
  };

  Ext_form_SliderField.EVENTS = function EVENTS() {
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
      name: 'beforechange',
      parameters: 'slider,newValue,oldValue,thumb,type'
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
      parameters: 'slider,newValue,thumb,type'
    }, {
      name: 'changecomplete',
      parameters: 'slider,newValue,thumb'
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
      name: 'drag',
      parameters: 'slider,e'
    }, {
      name: 'dragend',
      parameters: 'slider,e'
    }, {
      name: 'dragstart',
      parameters: 'slider,e'
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

  Ext_form_SliderField.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_SliderField.PROPERTIES());
    return Ext_slider_Multi.getProperties(properties);
  };

  Ext_form_SliderField.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_SliderField.EVENTS());
    return Ext_slider_Multi.getEvents(events);
  };

  _createClass(Ext_form_SliderField, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_slider_Multi.observedAttributes;
      Ext_form_SliderField.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_SliderField.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_SliderField(properties, events) {
    return _Ext_slider_Multi.call(this, properties.concat(Ext_form_SliderField.PROPERTIES()), events.concat(Ext_form_SliderField.EVENTS())) || this;
  }

  var _proto = Ext_form_SliderField.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_slider_Multi.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_slider_Multi.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_SliderField;
}(Ext_slider_Multi);

export { Ext_form_SliderField as default };