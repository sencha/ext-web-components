import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger from '../../../Ext/field/trigger/Trigger.js';

var Ext_field_trigger_SpinDown =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(Ext_field_trigger_SpinDown, _Ext_field_trigger_Tr);

  Ext_field_trigger_SpinDown.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y'];
  };

  Ext_field_trigger_SpinDown.EVENTS = function EVENTS() {
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
      parameters: 'sender'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
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
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'sender'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_field_trigger_SpinDown.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_trigger_SpinDown.PROPERTIES());
    return Ext_field_trigger_Trigger.getProperties(properties);
  };

  Ext_field_trigger_SpinDown.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_trigger_SpinDown.EVENTS());
    return Ext_field_trigger_Trigger.getEvents(events);
  };

  _createClass(Ext_field_trigger_SpinDown, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Tr.observedAttributes;
      Ext_field_trigger_SpinDown.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_trigger_SpinDown.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_SpinDown(properties, events) {
    return _Ext_field_trigger_Tr.call(this, properties.concat(Ext_field_trigger_SpinDown.PROPERTIES()), events.concat(Ext_field_trigger_SpinDown.EVENTS())) || this;
  }

  var _proto = Ext_field_trigger_SpinDown.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Tr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Tr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_SpinDown;
}(Ext_field_trigger_Trigger);

export { Ext_field_trigger_SpinDown as default };