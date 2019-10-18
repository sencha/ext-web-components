import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component from '../../Ext/Component.js';

var Ext_field_Field =
/*#__PURE__*/
function (_Ext_Component) {
  _inheritsLoose(Ext_field_Field, _Ext_Component);

  Ext_field_Field.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoFitErrors', 'axisLock', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'flex', 'floated', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_field_Field.EVENTS = function EVENTS() {
    return [{
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
      parameters: 'field'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'field,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'field,newValue,oldValue'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'field,dirty'
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
      parameters: 'field,error'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'field,event'
    }, {
      name: 'focusenter',
      parameters: 'field,event'
    }, {
      name: 'focusleave',
      parameters: 'field,event'
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
      name: 'keyup',
      parameters: 'e'
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
      parameters: 'e'
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
      parameters: 'e'
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
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'field'
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

  Ext_field_Field.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_Field.PROPERTIES());
    return Ext_Component.getProperties(properties);
  };

  Ext_field_Field.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_Field.EVENTS());
    return Ext_Component.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'field'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_Field, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component.observedAttributes; //for (var property in Ext_field_Field.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_Field.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_Field.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_Field(properties, events) {
    return _Ext_Component.call(this, properties.concat(Ext_field_Field.PROPERTIES()), events.concat(Ext_field_Field.EVENTS())) || this;
  }

  var _proto = Ext_field_Field.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_Field;
}(Ext_Component);

export { Ext_field_Field as default };