import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger from '../../../Ext/field/trigger/Trigger';

var Ext_field_trigger_Menu =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(Ext_field_trigger_Menu, _Ext_field_trigger_Tr);

  Ext_field_trigger_Menu.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'destroyMenu', 'disabled', 'field', 'flex', 'floated', 'focusCls', 'focusOnTap', 'group', 'handler', 'height', 'hidden', 'hideMode', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'menu', 'menuAlign', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'repeat', 'ripple', 'scope', 'session', 'shadow', 'shareableName', 'shim', 'side', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'triggers', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_field_trigger_Menu.EVENTS = function EVENTS() {
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
      parameters: 'menutrigger'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'menutrigger,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'menutrigger,event'
    }, {
      name: 'focusenter',
      parameters: 'menutrigger,event'
    }, {
      name: 'focusleave',
      parameters: 'menutrigger,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'menutrigger'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_field_trigger_Menu.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_trigger_Menu.PROPERTIES());
    return Ext_field_trigger_Trigger.getProperties(properties);
  };

  Ext_field_trigger_Menu.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_trigger_Menu.EVENTS());
    return Ext_field_trigger_Trigger.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'menutrigger'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_field_trigger_Menu, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Tr.observedAttributes; //for (var property in Ext_field_trigger_Menu.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_field_trigger_Menu.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_trigger_Menu.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Menu(properties, events) {
    return _Ext_field_trigger_Tr.call(this, properties.concat(Ext_field_trigger_Menu.PROPERTIES()), events.concat(Ext_field_trigger_Menu.EVENTS())) || this;
  }

  var _proto = Ext_field_trigger_Menu.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Tr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Tr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Menu;
}(Ext_field_trigger_Trigger);

export { Ext_field_trigger_Menu as default };