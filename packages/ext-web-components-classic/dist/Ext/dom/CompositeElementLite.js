import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dom_CompositeElementLite = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dom_CompositeElementLite, _Ext_Base);

  Ext_dom_CompositeElementLite.PROPERTIES = function PROPERTIES() {
    return ['bubbleEvents', 'listeners'];
  };

  Ext_dom_CompositeElementLite.EVENTS = function EVENTS() {
    return [{
      name: 'abort',
      parameters: 'e,t'
    }, {
      name: 'blur',
      parameters: 'e,t'
    }, {
      name: 'change',
      parameters: 'e,t'
    }, {
      name: 'click',
      parameters: 'e,t'
    }, {
      name: 'contextmenu',
      parameters: 'e,t'
    }, {
      name: 'dblclick',
      parameters: 'e,t'
    }, {
      name: 'DOMActivate',
      parameters: 'e,t'
    }, {
      name: 'DOMAttrModified',
      parameters: 'e,t'
    }, {
      name: 'DOMCharacterDataModified',
      parameters: 'e,t'
    }, {
      name: 'DOMFocusIn',
      parameters: 'e,t'
    }, {
      name: 'DOMFocusOut',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeInserted',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeInsertedIntoDocument',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeRemoved',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeRemovedFromDocument',
      parameters: 'e,t'
    }, {
      name: 'DOMSubtreeModified',
      parameters: 'e,t'
    }, {
      name: 'doubletap',
      parameters: 'event,node,options'
    }, {
      name: 'error',
      parameters: 'e,t'
    }, {
      name: 'focus',
      parameters: 'e,t'
    }, {
      name: 'focusmove',
      parameters: 'e,t'
    }, {
      name: 'keydown',
      parameters: 'e,t'
    }, {
      name: 'keypress',
      parameters: 'e,t'
    }, {
      name: 'keyup',
      parameters: 'e,t'
    }, {
      name: 'load',
      parameters: 'e,t'
    }, {
      name: 'longpress',
      parameters: 'event,node,options'
    }, {
      name: 'mousedown',
      parameters: 'e,t'
    }, {
      name: 'mouseenter',
      parameters: 'e,t'
    }, {
      name: 'mouseleave',
      parameters: 'e,t'
    }, {
      name: 'mousemove',
      parameters: 'e,t'
    }, {
      name: 'mouseout',
      parameters: 'e,t'
    }, {
      name: 'mouseover',
      parameters: 'e,t'
    }, {
      name: 'mouseup',
      parameters: 'e,t'
    }, {
      name: 'painted',
      parameters: 'sender'
    }, {
      name: 'pinch',
      parameters: 'event,node,options'
    }, {
      name: 'pinchend',
      parameters: 'event,node,options'
    }, {
      name: 'pinchstart',
      parameters: 'event,node,options'
    }, {
      name: 'reset',
      parameters: 'e,t'
    }, {
      name: 'resize',
      parameters: 'sender,info'
    }, {
      name: 'rotate',
      parameters: 'event,node,options'
    }, {
      name: 'rotateend',
      parameters: 'event,node,options'
    }, {
      name: 'rotatestart',
      parameters: 'event,node,options'
    }, {
      name: 'scroll',
      parameters: 'e,t'
    }, {
      name: 'select',
      parameters: 'e,t'
    }, {
      name: 'singletap',
      parameters: 'event,node,options'
    }, {
      name: 'submit',
      parameters: 'e,t'
    }, {
      name: 'swipe',
      parameters: 'event,node,options'
    }, {
      name: 'taphold',
      parameters: 'event,node,options'
    }, {
      name: 'unload',
      parameters: 'e,t'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_CompositeElementLite.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_CompositeElementLite.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dom_CompositeElementLite.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_CompositeElementLite.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dom_CompositeElementLite, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dom_CompositeElementLite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_CompositeElementLite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_CompositeElementLite(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dom_CompositeElementLite.PROPERTIES()), events.concat(Ext_dom_CompositeElementLite.EVENTS())) || this;
  }

  var _proto = Ext_dom_CompositeElementLite.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_CompositeElementLite;
}(Ext_Base);

export { Ext_dom_CompositeElementLite as default };