import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_partition_Partition from '../../../../Ext/d3/hierarchy/partition/Partition.js';

var Ext_d3_hierarchy_partition_Sunburst = /*#__PURE__*/function (_Ext_d3_hierarchy_par) {
  _inheritsLoose(Ext_d3_hierarchy_partition_Sunburst, _Ext_d3_hierarchy_par);

  Ext_d3_hierarchy_partition_Sunburst.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'textPadding', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'zoomParentDotRadius'];
  };

  Ext_d3_hierarchy_partition_Sunburst.EVENTS = function EVENTS() {
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

  Ext_d3_hierarchy_partition_Sunburst.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_hierarchy_partition_Sunburst.PROPERTIES());
    return Ext_d3_hierarchy_partition_Partition.getProperties(properties);
  };

  Ext_d3_hierarchy_partition_Sunburst.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_hierarchy_partition_Sunburst.EVENTS());
    return Ext_d3_hierarchy_partition_Partition.getEvents(events);
  };

  _createClass(Ext_d3_hierarchy_partition_Sunburst, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_par.observedAttributes;
      Ext_d3_hierarchy_partition_Sunburst.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_hierarchy_partition_Sunburst.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_partition_Sunburst(properties, events) {
    return _Ext_d3_hierarchy_par.call(this, properties.concat(Ext_d3_hierarchy_partition_Sunburst.PROPERTIES()), events.concat(Ext_d3_hierarchy_partition_Sunburst.EVENTS())) || this;
  }

  var _proto = Ext_d3_hierarchy_partition_Sunburst.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_par.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_par.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_partition_Sunburst;
}(Ext_d3_hierarchy_partition_Partition);

export { Ext_d3_hierarchy_partition_Sunburst as default };