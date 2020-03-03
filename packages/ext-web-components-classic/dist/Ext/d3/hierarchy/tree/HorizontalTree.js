import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_tree_Tree from '../../../../Ext/d3/hierarchy/tree/Tree.js';

var Ext_d3_hierarchy_tree_HorizontalTree = /*#__PURE__*/function (_Ext_d3_hierarchy_tre) {
  _inheritsLoose(Ext_d3_hierarchy_tree_HorizontalTree, _Ext_d3_hierarchy_tre);

  Ext_d3_hierarchy_tree_HorizontalTree.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'depth', 'disabled', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeRadius', 'nodeSize', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_hierarchy_tree_HorizontalTree.EVENTS = function EVENTS() {
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
      name: 'layout',
      parameters: 'component'
    }, {
      name: 'sceneresize',
      parameters: 'component,scene,size'
    }, {
      name: 'scenesetup',
      parameters: 'component,scene'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_hierarchy_tree_HorizontalTree.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_hierarchy_tree_HorizontalTree.PROPERTIES());
    return Ext_d3_hierarchy_tree_Tree.getProperties(properties);
  };

  Ext_d3_hierarchy_tree_HorizontalTree.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_hierarchy_tree_HorizontalTree.EVENTS());
    return Ext_d3_hierarchy_tree_Tree.getEvents(events);
  };

  _createClass(Ext_d3_hierarchy_tree_HorizontalTree, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_tre.observedAttributes;
      Ext_d3_hierarchy_tree_HorizontalTree.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_hierarchy_tree_HorizontalTree.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_tree_HorizontalTree(properties, events) {
    return _Ext_d3_hierarchy_tre.call(this, properties.concat(Ext_d3_hierarchy_tree_HorizontalTree.PROPERTIES()), events.concat(Ext_d3_hierarchy_tree_HorizontalTree.EVENTS())) || this;
  }

  var _proto = Ext_d3_hierarchy_tree_HorizontalTree.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_tre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_tre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_tree_HorizontalTree;
}(Ext_d3_hierarchy_tree_Tree);

export { Ext_d3_hierarchy_tree_HorizontalTree as default };