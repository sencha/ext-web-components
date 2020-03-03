import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget from '../../Ext/Widget.js';

var Ext_list_AbstractTreeItem = /*#__PURE__*/function (_Ext_Widget) {
  _inheritsLoose(Ext_list_AbstractTreeItem, _Ext_Widget);

  Ext_list_AbstractTreeItem.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'expandable', 'expanded', 'focusCls', 'height', 'hidden', 'hideMode', 'iconCls', 'iconClsProperty', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'leaf', 'listeners', 'loading', 'margin', 'name', 'nameable', 'node', 'over', 'owner', 'parentItem', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'selected', 'selectedParent', 'session', 'shareableName', 'style', 'text', 'textProperty', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_list_AbstractTreeItem.EVENTS = function EVENTS() {
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

  Ext_list_AbstractTreeItem.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_list_AbstractTreeItem.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  };

  Ext_list_AbstractTreeItem.getEvents = function getEvents(events) {
    events = events.concat(Ext_list_AbstractTreeItem.EVENTS());
    return Ext_Widget.getEvents(events);
  };

  _createClass(Ext_list_AbstractTreeItem, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget.observedAttributes;
      Ext_list_AbstractTreeItem.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_list_AbstractTreeItem.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_AbstractTreeItem(properties, events) {
    return _Ext_Widget.call(this, properties.concat(Ext_list_AbstractTreeItem.PROPERTIES()), events.concat(Ext_list_AbstractTreeItem.EVENTS())) || this;
  }

  var _proto = Ext_list_AbstractTreeItem.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_AbstractTreeItem;
}(Ext_Widget);

export { Ext_list_AbstractTreeItem as default };