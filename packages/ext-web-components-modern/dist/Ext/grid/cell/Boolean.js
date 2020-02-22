import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text from '../../../Ext/grid/cell/Text.js';

var Ext_grid_cell_Boolean =
/*#__PURE__*/
function (_Ext_grid_cell_Text) {
  _inheritsLoose(Ext_grid_cell_Boolean, _Ext_grid_cell_Text);

  Ext_grid_cell_Boolean.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'falseText', 'flex', 'floated', 'focusCls', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderTo', 'ripple', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'translatable', 'trueText', 'twoWayBindable', 'ui', 'undefinedText', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue'];
  };

  Ext_grid_cell_Boolean.EVENTS = function EVENTS() {
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
      name: 'beforetofront',
      parameters: 'sender'
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
      name: 'tofront',
      parameters: 'sender'
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

  Ext_grid_cell_Boolean.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_Boolean.PROPERTIES());
    return Ext_grid_cell_Text.getProperties(properties);
  };

  Ext_grid_cell_Boolean.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_Boolean.EVENTS());
    return Ext_grid_cell_Text.getEvents(events);
  };

  _createClass(Ext_grid_cell_Boolean, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Text.observedAttributes;
      Ext_grid_cell_Boolean.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_Boolean.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Boolean(properties, events) {
    return _Ext_grid_cell_Text.call(this, properties.concat(Ext_grid_cell_Boolean.PROPERTIES()), events.concat(Ext_grid_cell_Boolean.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_Boolean.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Text.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Text.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Boolean;
}(Ext_grid_cell_Text);

export { Ext_grid_cell_Boolean as default };