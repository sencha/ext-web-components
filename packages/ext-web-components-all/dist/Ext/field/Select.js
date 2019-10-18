import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker from '../../Ext/field/Picker.js';

var Ext_field_Select =
/*#__PURE__*/
function (_Ext_field_Picker) {
  _inheritsLoose(Ext_field_Select, _Ext_field_Picker);

  Ext_field_Select.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alignTarget', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoFocus', 'autoFocusLast', 'autoHideInputMask', 'autoLoadOnValue', 'autoSelect', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'chipView', 'clearable', 'cls', 'collapseOnSelect', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'delimiter', 'dirty', 'disabled', 'displayed', 'displayField', 'displayTpl', 'docked', 'draggable', 'edgePicker', 'editable', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'flex', 'floated', 'floatedPicker', 'floatedPickerAlign', 'focusCls', 'focusTrap', 'forceSelection', 'fullscreen', 'height', 'hidden', 'hiddenName', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideTrigger', 'html', 'id', 'inline', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemCls', 'itemId', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multiSelect', 'name', 'nameable', 'options', 'padding', 'parseValidator', 'pattern', 'picker', 'pickerSlotAlign', 'placeholder', 'plugins', 'publishes', 'readOnly', 'record', 'recordCreator', 'recordCreatorScope', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'selection', 'selectOnTab', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'store', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'valueCollection', 'valueField', 'valueNotFoundText', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_field_Select.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: 'selectfield,e'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'selectfield'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'selectfield,e'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'selectfield,newValue,oldValue'
    }, {
      name: 'clearicontap',
      parameters: 'selectfield,input,e'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'selectfield,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'selectfield,error'
    }, {
      name: 'expand',
      parameters: 'field'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'selectfield,e'
    }, {
      name: 'focusenter',
      parameters: 'selectfield,event'
    }, {
      name: 'focusleave',
      parameters: 'selectfield,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'keydown',
      parameters: 'selectfield,e'
    }, {
      name: 'keyup',
      parameters: 'selectfield,e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'mousedown',
      parameters: 'selectfield,e'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'paste',
      parameters: 'selectfield,e'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'selectfield,newValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'selectfield'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_field_Select.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_Select.PROPERTIES());
    return Ext_field_Picker.getProperties(properties);
  };

  Ext_field_Select.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_Select.EVENTS());
    return Ext_field_Picker.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'selectfield'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_Select, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Picker.observedAttributes; //for (var property in Ext_field_Select.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_Select.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_Select.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Select(properties, events) {
    return _Ext_field_Picker.call(this, properties.concat(Ext_field_Select.PROPERTIES()), events.concat(Ext_field_Select.EVENTS())) || this;
  }

  var _proto = Ext_field_Select.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Picker.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Picker.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Select;
}(Ext_field_Picker);

export { Ext_field_Select as default };