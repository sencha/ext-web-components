import _createClass from "@babel/runtime/helpers/createClass.js";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
import Ext_grid_cell_Number from '../../../Ext/grid/cell/Number.js';

var Ext_grid_cell_RowNumberer =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(Ext_grid_cell_RowNumberer, _Ext_grid_cell_Number);

  Ext_grid_cell_RowNumberer.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'flex', 'floated', 'focusCls', 'format', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderTo', 'ripple', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue'];
  };

  Ext_grid_cell_RowNumberer.EVENTS = function EVENTS() {
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

  Ext_grid_cell_RowNumberer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_RowNumberer.PROPERTIES());
    return Ext_grid_cell_Number.getProperties(properties);
  };

  Ext_grid_cell_RowNumberer.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_RowNumberer.EVENTS());
    return Ext_grid_cell_Number.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'rownumberercell'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_cell_RowNumberer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Number.observedAttributes; //for (var property in Ext_grid_cell_RowNumberer.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_cell_RowNumberer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_RowNumberer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_RowNumberer(properties, events) {
    return _Ext_grid_cell_Number.call(this, properties.concat(Ext_grid_cell_RowNumberer.PROPERTIES()), events.concat(Ext_grid_cell_RowNumberer.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_RowNumberer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Number.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Number.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_RowNumberer;
}(Ext_grid_cell_Number);

export { Ext_grid_cell_RowNumberer as default };