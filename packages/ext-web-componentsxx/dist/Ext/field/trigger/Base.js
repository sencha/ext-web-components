import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget from '../../../Ext/Widget';

var Ext_field_trigger_Base =
/*#__PURE__*/
function (_Ext_Widget) {
  _inheritsLoose(Ext_field_trigger_Base, _Ext_Widget);

  Ext_field_trigger_Base.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'field', 'flex', 'floated', 'focusCls', 'group', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'ripple', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_field_trigger_Base.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'undefined,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'undefined,event'
    }, {
      name: 'focusenter',
      parameters: 'undefined,event'
    }, {
      name: 'focusleave',
      parameters: 'undefined,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'undefined'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_field_trigger_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_trigger_Base.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  };

  Ext_field_trigger_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_trigger_Base.EVENTS());
    return Ext_Widget.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_trigger_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget.observedAttributes; //for (var property in Ext_field_trigger_Base.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_trigger_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_trigger_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Base(properties, events) {
    return _Ext_Widget.call(this, properties.concat(Ext_field_trigger_Base.PROPERTIES()), events.concat(Ext_field_trigger_Base.EVENTS())) || this;
  }

  var _proto = Ext_field_trigger_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Base;
}(Ext_Widget);

export { Ext_field_trigger_Base as default };