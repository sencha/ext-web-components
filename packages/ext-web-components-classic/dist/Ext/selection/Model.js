import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_mixin_Observable from '../../Ext/mixin/Observable.js';

var Ext_selection_Model = /*#__PURE__*/function (_Ext_mixin_Observable) {
  _inheritsLoose(Ext_selection_Model, _Ext_mixin_Observable);

  Ext_selection_Model.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'selected', 'store', 'toggleOnClick'];
  };

  Ext_selection_Model.EVENTS = function EVENTS() {
    return [{
      name: 'focuschange',
      parameters: 'sender,oldFocused,newFocused'
    }, {
      name: 'selectionchange',
      parameters: 'sender,selected'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_selection_Model.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_selection_Model.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  };

  Ext_selection_Model.getEvents = function getEvents(events) {
    events = events.concat(Ext_selection_Model.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  };

  _createClass(Ext_selection_Model, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_mixin_Observable.observedAttributes;
      Ext_selection_Model.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_selection_Model.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_selection_Model(properties, events) {
    return _Ext_mixin_Observable.call(this, properties.concat(Ext_selection_Model.PROPERTIES()), events.concat(Ext_selection_Model.EVENTS())) || this;
  }

  var _proto = Ext_selection_Model.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_mixin_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_mixin_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_selection_Model;
}(Ext_mixin_Observable);

export { Ext_selection_Model as default };