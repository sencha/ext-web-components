import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy from '../../../../Ext/d3/hierarchy/Hierarchy.js';

var Ext_d3_hierarchy_partition_Partition = /*#__PURE__*/function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_partition_Partition, _Ext_d3_hierarchy_Hie);

  Ext_d3_hierarchy_partition_Partition.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_hierarchy_partition_Partition.EVENTS = function EVENTS() {
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

  Ext_d3_hierarchy_partition_Partition.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_hierarchy_partition_Partition.PROPERTIES());
    return Ext_d3_hierarchy_Hierarchy.getProperties(properties);
  };

  Ext_d3_hierarchy_partition_Partition.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_hierarchy_partition_Partition.EVENTS());
    return Ext_d3_hierarchy_Hierarchy.getEvents(events);
  };

  _createClass(Ext_d3_hierarchy_partition_Partition, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;
      Ext_d3_hierarchy_partition_Partition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_hierarchy_partition_Partition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_partition_Partition(properties, events) {
    return _Ext_d3_hierarchy_Hie.call(this, properties.concat(Ext_d3_hierarchy_partition_Partition.PROPERTIES()), events.concat(Ext_d3_hierarchy_partition_Partition.EVENTS())) || this;
  }

  var _proto = Ext_d3_hierarchy_partition_Partition.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_partition_Partition;
}(Ext_d3_hierarchy_Hierarchy);

export { Ext_d3_hierarchy_partition_Partition as default };