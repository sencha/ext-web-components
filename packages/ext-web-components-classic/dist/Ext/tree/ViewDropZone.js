import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_DropZone from '../../Ext/view/DropZone.js';

var Ext_tree_ViewDropZone = /*#__PURE__*/function (_Ext_view_DropZone) {
  _inheritsLoose(Ext_tree_ViewDropZone, _Ext_view_DropZone);

  Ext_tree_ViewDropZone.PROPERTIES = function PROPERTIES() {
    return ['allowContainerDrops', 'allowParentInserts', 'appendOnly', 'containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'expandDelay', 'overClass'];
  };

  Ext_tree_ViewDropZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_tree_ViewDropZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tree_ViewDropZone.PROPERTIES());
    return Ext_view_DropZone.getProperties(properties);
  };

  Ext_tree_ViewDropZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_tree_ViewDropZone.EVENTS());
    return Ext_view_DropZone.getEvents(events);
  };

  _createClass(Ext_tree_ViewDropZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_DropZone.observedAttributes;
      Ext_tree_ViewDropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tree_ViewDropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_ViewDropZone(properties, events) {
    return _Ext_view_DropZone.call(this, properties.concat(Ext_tree_ViewDropZone.PROPERTIES()), events.concat(Ext_tree_ViewDropZone.EVENTS())) || this;
  }

  var _proto = Ext_tree_ViewDropZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_DropZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_DropZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_ViewDropZone;
}(Ext_view_DropZone);

export { Ext_tree_ViewDropZone as default };