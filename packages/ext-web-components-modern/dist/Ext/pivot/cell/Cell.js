import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Cell from '../../../Ext/grid/cell/Cell.js';

var Ext_pivot_cell_Cell =
/*#__PURE__*/
function (_Ext_grid_cell_Cell) {
  _inheritsLoose(Ext_pivot_cell_Cell, _Ext_grid_cell_Cell);

  Ext_pivot_cell_Cell.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'flex', 'floated', 'focusCls', 'formatter', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderer', 'renderTo', 'ripple', 'scope', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'tpl', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue'];
  };

  Ext_pivot_cell_Cell.EVENTS = function EVENTS() {
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

  Ext_pivot_cell_Cell.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_cell_Cell.PROPERTIES());
    return Ext_grid_cell_Cell.getProperties(properties);
  };

  Ext_pivot_cell_Cell.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_cell_Cell.EVENTS());
    return Ext_grid_cell_Cell.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_pivot_cell_Cell, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Cell.observedAttributes; //for (var property in Ext_pivot_cell_Cell.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_pivot_cell_Cell.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_cell_Cell.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_cell_Cell(properties, events) {
    return _Ext_grid_cell_Cell.call(this, properties.concat(Ext_pivot_cell_Cell.PROPERTIES()), events.concat(Ext_pivot_cell_Cell.EVENTS())) || this;
  }

  var _proto = Ext_pivot_cell_Cell.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Cell.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Cell.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_cell_Cell;
}(Ext_grid_cell_Cell);

export { Ext_pivot_cell_Cell as default };