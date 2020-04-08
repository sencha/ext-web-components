import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_mixin_Observable from '../Ext/mixin/Observable.js';

var Ext_AbstractSelectionModel = /*#__PURE__*/function (_Ext_mixin_Observable) {
  _inheritsLoose(Ext_AbstractSelectionModel, _Ext_mixin_Observable);

  Ext_AbstractSelectionModel.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'ignoreRightMouseSelection', 'listeners', 'mode', 'ordered', 'pruneRemoved', 'selected', 'store', 'toggleOnClick'];
  };

  Ext_AbstractSelectionModel.EVENTS = function EVENTS() {
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

  Ext_AbstractSelectionModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_AbstractSelectionModel.PROPERTIES());
    return Ext_mixin_Observable.getProperties(properties);
  };

  Ext_AbstractSelectionModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_AbstractSelectionModel.EVENTS());
    return Ext_mixin_Observable.getEvents(events);
  };

  _createClass(Ext_AbstractSelectionModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_mixin_Observable.observedAttributes;
      Ext_AbstractSelectionModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_AbstractSelectionModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_AbstractSelectionModel(properties, events) {
    return _Ext_mixin_Observable.call(this, properties.concat(Ext_AbstractSelectionModel.PROPERTIES()), events.concat(Ext_AbstractSelectionModel.EVENTS())) || this;
  }

  var _proto = Ext_AbstractSelectionModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_mixin_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_mixin_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_AbstractSelectionModel;
}(Ext_mixin_Observable);

export { Ext_AbstractSelectionModel as default };