import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_Base from '../../Ext/form/field/Base.js';

var Ext_slider_MultiSlider = /*#__PURE__*/function (_Ext_form_field_Base) {
  _inheritsLoose(Ext_slider_MultiSlider, _Ext_form_field_Base);

  Ext_slider_MultiSlider.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animate', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaErrorText', 'ariaHelp', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoFitErrors', 'autoRender', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'border', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clickToChange', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constrainThumbs', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'decimalPrecision', 'defaultAlign', 'defaultListenerScope', 'dirtyCls', 'disabled', 'disabledCls', 'dock', 'draggable', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'formItemCls', 'frame', 'height', 'hidden', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'html', 'id', 'increment', 'inputAttrTpl', 'inputId', 'inputType', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyIncrement', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxValue', 'maxWidth', 'minHeight', 'minValue', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'name', 'nameable', 'overCls', 'padding', 'pageSize', 'plugins', 'preventMark', 'publishes', 'readOnly', 'readOnlyCls', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'submitValue', 'tabIndex', 'thumbPerValue', 'tipText', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'useTips', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'value', 'valuePublishEvent', 'values', 'vertical', 'viewModel', 'weight', 'width', 'xtype', 'zeroBasedSnapping'];
  };

  Ext_slider_MultiSlider.EVENTS = function EVENTS() {
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

  Ext_slider_MultiSlider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_slider_MultiSlider.PROPERTIES());
    return Ext_form_field_Base.getProperties(properties);
  };

  Ext_slider_MultiSlider.getEvents = function getEvents(events) {
    events = events.concat(Ext_slider_MultiSlider.EVENTS());
    return Ext_form_field_Base.getEvents(events);
  };

  _createClass(Ext_slider_MultiSlider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_field_Base.observedAttributes;
      Ext_slider_MultiSlider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_slider_MultiSlider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_MultiSlider(properties, events) {
    return _Ext_form_field_Base.call(this, properties.concat(Ext_slider_MultiSlider.PROPERTIES()), events.concat(Ext_slider_MultiSlider.EVENTS())) || this;
  }

  var _proto = Ext_slider_MultiSlider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_field_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_field_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_MultiSlider;
}(Ext_form_field_Base);

export { Ext_slider_MultiSlider as default };