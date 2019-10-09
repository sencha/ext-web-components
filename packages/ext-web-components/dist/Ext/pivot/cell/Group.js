import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_cell_Cell from '../../../Ext/pivot/cell/Cell';

var Ext_pivot_cell_Group =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(Ext_pivot_cell_Group, _Ext_pivot_cell_Cell);

  Ext_pivot_cell_Group.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'flex', 'floated', 'focusCls', 'formatter', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderer', 'renderTo', 'ripple', 'scope', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'tpl', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_pivot_cell_Group.EVENTS = function EVENTS() {
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
      parameters: 'pivotgridgroupcell'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'pivotgridgroupcell,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'pivotgridgroupcell,event'
    }, {
      name: 'focusenter',
      parameters: 'pivotgridgroupcell,event'
    }, {
      name: 'focusleave',
      parameters: 'pivotgridgroupcell,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'pivotgridgroupcell'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_pivot_cell_Group.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_cell_Group.PROPERTIES());
    return Ext_pivot_cell_Cell.getProperties(properties);
  };

  Ext_pivot_cell_Group.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_cell_Group.EVENTS());
    return Ext_pivot_cell_Cell.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'pivotgridgroupcell'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_pivot_cell_Group, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_pivot_cell_Cell.observedAttributes; //for (var property in Ext_pivot_cell_Group.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_pivot_cell_Group.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_cell_Group.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_cell_Group(properties, events) {
    return _Ext_pivot_cell_Cell.call(this, properties.concat(Ext_pivot_cell_Group.PROPERTIES()), events.concat(Ext_pivot_cell_Group.EVENTS())) || this;
  }

  var _proto = Ext_pivot_cell_Group.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_pivot_cell_Cell.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_pivot_cell_Cell.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_cell_Group;
}(Ext_pivot_cell_Cell);

export { Ext_pivot_cell_Group as default };