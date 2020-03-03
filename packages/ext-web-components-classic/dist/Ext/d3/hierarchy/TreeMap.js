import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_hierarchy_Hierarchy from '../../../Ext/d3/hierarchy/Hierarchy.js';

var Ext_d3_hierarchy_TreeMap = /*#__PURE__*/function (_Ext_d3_hierarchy_Hie) {
  _inheritsLoose(Ext_d3_hierarchy_TreeMap, _Ext_d3_hierarchy_Hie);

  Ext_d3_hierarchy_TreeMap.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'busyLayoutText', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'expandEventName', 'focusCls', 'height', 'hidden', 'hideMode', 'hierarchyCls', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'leafTile', 'linkKey', 'listeners', 'margin', 'name', 'nameable', 'nodeChildren', 'nodeClass', 'nodeKey', 'nodeText', 'nodeTransform', 'nodeValue', 'noParentValue', 'noSizeLayout', 'padding', 'parentTile', 'plugins', 'publishes', 'reference', 'renderLinks', 'renderTo', 'ripple', 'rootVisible', 'scaleLabels', 'selectEventName', 'selection', 'session', 'shareableName', 'size', 'sorter', 'store', 'style', 'tiling', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_hierarchy_TreeMap.EVENTS = function EVENTS() {
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

  Ext_d3_hierarchy_TreeMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_hierarchy_TreeMap.PROPERTIES());
    return Ext_d3_hierarchy_Hierarchy.getProperties(properties);
  };

  Ext_d3_hierarchy_TreeMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_hierarchy_TreeMap.EVENTS());
    return Ext_d3_hierarchy_Hierarchy.getEvents(events);
  };

  _createClass(Ext_d3_hierarchy_TreeMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_hierarchy_Hie.observedAttributes;
      Ext_d3_hierarchy_TreeMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_hierarchy_TreeMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_hierarchy_TreeMap(properties, events) {
    return _Ext_d3_hierarchy_Hie.call(this, properties.concat(Ext_d3_hierarchy_TreeMap.PROPERTIES()), events.concat(Ext_d3_hierarchy_TreeMap.EVENTS())) || this;
  }

  var _proto = Ext_d3_hierarchy_TreeMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_hierarchy_Hie.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_hierarchy_Hie.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_hierarchy_TreeMap;
}(Ext_d3_hierarchy_Hierarchy);

export { Ext_d3_hierarchy_TreeMap as default };