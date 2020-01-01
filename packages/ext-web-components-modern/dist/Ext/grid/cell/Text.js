import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base from '../../../Ext/grid/cell/Base.js';

var Ext_grid_cell_Text =
/*#__PURE__*/
function (_Ext_grid_cell_Base) {
  _inheritsLoose(Ext_grid_cell_Text, _Ext_grid_cell_Base);

  Ext_grid_cell_Text.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'flex', 'floated', 'focusCls', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderTo', 'ripple', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue'];
  };

  Ext_grid_cell_Text.EVENTS = function EVENTS() {
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
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_grid_cell_Text.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_Text.PROPERTIES());
    return Ext_grid_cell_Base.getProperties(properties);
  };

  Ext_grid_cell_Text.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_Text.EVENTS());
    return Ext_grid_cell_Base.getEvents(events);
  };

  _createClass(Ext_grid_cell_Text, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Base.observedAttributes;
      Ext_grid_cell_Text.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_Text.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Text(properties, events) {
    return _Ext_grid_cell_Base.call(this, properties.concat(Ext_grid_cell_Text.PROPERTIES()), events.concat(Ext_grid_cell_Text.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_Text.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Text;
}(Ext_grid_cell_Base);

export { Ext_grid_cell_Text as default };