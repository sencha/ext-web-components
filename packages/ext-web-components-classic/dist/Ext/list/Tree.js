import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../../Ext/Gadget.js';

var Ext_list_Tree = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_list_Tree, _Ext_Gadget);

  Ext_list_Tree.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'defaults', 'disabled', 'expanderFirst', 'expanderOnly', 'floatLeafItems', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightPath', 'indent', 'instanceCls', 'itemRipple', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'micro', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'selection', 'selectOnExpander', 'session', 'shareableName', 'singleExpand', 'store', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_list_Tree.EVENTS = function EVENTS() {
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
      name: 'itemclick',
      parameters: 'sender,info'
    }, {
      name: 'selectionchange',
      parameters: 'treelist,record'
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

  Ext_list_Tree.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_list_Tree.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_list_Tree.getEvents = function getEvents(events) {
    events = events.concat(Ext_list_Tree.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_list_Tree, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_list_Tree.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_list_Tree.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_Tree(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_list_Tree.PROPERTIES()), events.concat(Ext_list_Tree.EVENTS())) || this;
  }

  var _proto = Ext_list_Tree.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_Tree;
}(Ext_Gadget);

export { Ext_list_Tree as default };