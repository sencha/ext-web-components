import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_grid_locking_View = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_grid_locking_View, _Ext_Base);

  Ext_grid_locking_View.PROPERTIES = function PROPERTIES() {
    return ['focusCls', 'listeners'];
  };

  Ext_grid_locking_View.EVENTS = function EVENTS() {
    return [{
      name: 'blur',
      parameters: 'sender,event'
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
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_locking_View.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_locking_View.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_grid_locking_View.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_locking_View.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_grid_locking_View, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_grid_locking_View.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_locking_View.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_locking_View(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_grid_locking_View.PROPERTIES()), events.concat(Ext_grid_locking_View.EVENTS())) || this;
  }

  var _proto = Ext_grid_locking_View.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_locking_View;
}(Ext_Base);

export { Ext_grid_locking_View as default };