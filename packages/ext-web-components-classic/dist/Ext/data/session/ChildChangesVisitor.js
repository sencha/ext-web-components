import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_session_ChangesVisitor from '../../../Ext/data/session/ChangesVisitor.js';

var Ext_data_session_ChildChangesVisitor = /*#__PURE__*/function (_Ext_data_session_Cha) {
  _inheritsLoose(Ext_data_session_ChildChangesVisitor, _Ext_data_session_Cha);

  Ext_data_session_ChildChangesVisitor.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_session_ChildChangesVisitor.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_session_ChildChangesVisitor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_session_ChildChangesVisitor.PROPERTIES());
    return Ext_data_session_ChangesVisitor.getProperties(properties);
  };

  Ext_data_session_ChildChangesVisitor.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_session_ChildChangesVisitor.EVENTS());
    return Ext_data_session_ChangesVisitor.getEvents(events);
  };

  _createClass(Ext_data_session_ChildChangesVisitor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_session_Cha.observedAttributes;
      Ext_data_session_ChildChangesVisitor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_session_ChildChangesVisitor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_session_ChildChangesVisitor(properties, events) {
    return _Ext_data_session_Cha.call(this, properties.concat(Ext_data_session_ChildChangesVisitor.PROPERTIES()), events.concat(Ext_data_session_ChildChangesVisitor.EVENTS())) || this;
  }

  var _proto = Ext_data_session_ChildChangesVisitor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_session_Cha.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_session_Cha.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_session_ChildChangesVisitor;
}(Ext_data_session_ChangesVisitor);

export { Ext_data_session_ChildChangesVisitor as default };