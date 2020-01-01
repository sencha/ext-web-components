import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell from '../../../Ext/grid/cell/Cell.js';

var Ext_grid_cell_Tree =
/*#__PURE__*/
function (_Ext_grid_cell_Cell) {
  _inheritsLoose(Ext_grid_cell_Tree, _Ext_grid_cell_Cell);

  Ext_grid_cell_Tree.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCheckChildren', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'checkable', 'checkableField', 'checkedField', 'checkOnTriTap', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'enableTri', 'encodeHtml', 'flex', 'floated', 'focusCls', 'formatter', 'height', 'hidden', 'hideMode', 'iconCls', 'iconClsProperty', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderer', 'renderTo', 'ripple', 'scope', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'tpl', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue'];
  };

  Ext_grid_cell_Tree.EVENTS = function EVENTS() {
    return [{
      name: 'beforecheckchange',
      parameters: 'sender,checked,current,record,e'
    }, {
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
      name: 'checkchange',
      parameters: 'sender,checked,record,e'
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

  Ext_grid_cell_Tree.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_Tree.PROPERTIES());
    return Ext_grid_cell_Cell.getProperties(properties);
  };

  Ext_grid_cell_Tree.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_Tree.EVENTS());
    return Ext_grid_cell_Cell.getEvents(events);
  };

  _createClass(Ext_grid_cell_Tree, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Cell.observedAttributes;
      Ext_grid_cell_Tree.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_Tree.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Tree(properties, events) {
    return _Ext_grid_cell_Cell.call(this, properties.concat(Ext_grid_cell_Tree.PROPERTIES()), events.concat(Ext_grid_cell_Tree.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_Tree.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Cell.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Cell.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Tree;
}(Ext_grid_cell_Cell);

export { Ext_grid_cell_Tree as default };