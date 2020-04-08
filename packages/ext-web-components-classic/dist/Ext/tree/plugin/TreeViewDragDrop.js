import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_tree_plugin_TreeViewDragDrop = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_tree_plugin_TreeViewDragDrop, _Ext_plugin_Abstract);

  Ext_tree_plugin_TreeViewDragDrop.PROPERTIES = function PROPERTIES() {
    return ['allowContainerDrops', 'allowCopy', 'allowParentInserts', 'appendOnly', 'containerScroll', 'copy', 'ddGroup', 'displayField', 'dragGroup', 'dragText', 'dragZone', 'dropGroup', 'dropZone', 'enableDrag', 'enableDrop', 'expandDelay', 'id', 'nodeHighlightColor', 'nodeHighlightOnDrop', 'nodeHighlightOnRepair', 'sortOnDrop', 'stateEvents'];
  };

  Ext_tree_plugin_TreeViewDragDrop.EVENTS = function EVENTS() {
    return [{
      name: 'beforedrop',
      parameters: 'node,data,overModel,dropPosition,dropHandlers'
    }, {
      name: 'drop',
      parameters: 'node,data,overModel,dropPosition'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_tree_plugin_TreeViewDragDrop.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tree_plugin_TreeViewDragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_tree_plugin_TreeViewDragDrop.getEvents = function getEvents(events) {
    events = events.concat(Ext_tree_plugin_TreeViewDragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_tree_plugin_TreeViewDragDrop, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_tree_plugin_TreeViewDragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tree_plugin_TreeViewDragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_plugin_TreeViewDragDrop(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_tree_plugin_TreeViewDragDrop.PROPERTIES()), events.concat(Ext_tree_plugin_TreeViewDragDrop.EVENTS())) || this;
  }

  var _proto = Ext_tree_plugin_TreeViewDragDrop.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_plugin_TreeViewDragDrop;
}(Ext_plugin_Abstract);

export { Ext_tree_plugin_TreeViewDragDrop as default };