import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base from '../../../Ext/grid/cell/Base';

var Ext_grid_cell_Widget =
/*#__PURE__*/
function (_Ext_grid_cell_Base) {
  _inheritsLoose(Ext_grid_cell_Widget, _Ext_grid_cell_Base);

  Ext_grid_cell_Widget.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'flex', 'floated', 'focusCls', 'forceWidth', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'ripple', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'widget', 'width', 'x', 'y', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_grid_cell_Widget.EVENTS = function EVENTS() {
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
      parameters: 'widgetcell'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'widgetcell,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'widgetcell,event'
    }, {
      name: 'focusenter',
      parameters: 'widgetcell,event'
    }, {
      name: 'focusleave',
      parameters: 'widgetcell,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'widgetcell'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_grid_cell_Widget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_Widget.PROPERTIES());
    return Ext_grid_cell_Base.getProperties(properties);
  };

  Ext_grid_cell_Widget.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_Widget.EVENTS());
    return Ext_grid_cell_Base.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'widgetcell'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_cell_Widget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Base.observedAttributes; //for (var property in Ext_grid_cell_Widget.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_cell_Widget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_Widget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Widget(properties, events) {
    return _Ext_grid_cell_Base.call(this, properties.concat(Ext_grid_cell_Widget.PROPERTIES()), events.concat(Ext_grid_cell_Widget.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_Widget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Widget;
}(Ext_grid_cell_Base);

export { Ext_grid_cell_Widget as default };