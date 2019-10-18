import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../Ext/Evented';

var Ext_Widget =
/*#__PURE__*/
function (_Ext_Evented) {
  _inheritsLoose(Ext_Widget, _Ext_Evented);

  Ext_Widget.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'flex', 'floated', 'focusCls', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'ripple', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_Widget.EVENTS = function EVENTS() {
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
      parameters: 'widget'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'widget,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'widget,event'
    }, {
      name: 'focusenter',
      parameters: 'widget,event'
    }, {
      name: 'focusleave',
      parameters: 'widget,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'widget'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_Widget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Widget.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_Widget.getEvents = function getEvents(events) {
    events = events.concat(Ext_Widget.EVENTS());
    return Ext_Evented.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'widget'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_Widget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes; //for (var property in Ext_Widget.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_Widget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Widget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Widget(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_Widget.PROPERTIES()), events.concat(Ext_Widget.EVENTS())) || this;
  }

  var _proto = Ext_Widget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Widget;
}(Ext_Evented);

export { Ext_Widget as default };