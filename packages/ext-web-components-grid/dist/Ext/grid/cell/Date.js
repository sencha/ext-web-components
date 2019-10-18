import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text from '../../../Ext/grid/cell/Text.js';

var Ext_grid_cell_Date =
/*#__PURE__*/
function (_Ext_grid_cell_Text) {
  _inheritsLoose(Ext_grid_cell_Date, _Ext_grid_cell_Text);

  Ext_grid_cell_Date.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'bodyCls', 'bodyStyle', 'border', 'cellCls', 'cls', 'column', 'constrainAlign', 'controller', 'defaultListenerScope', 'defaultToolWeights', 'disabled', 'encodeHtml', 'flex', 'floated', 'focusCls', 'format', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rawValue', 'record', 'reference', 'relative', 'renderTo', 'ripple', 'selectable', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'toolDefaults', 'tools', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y', 'zeroValue', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_grid_cell_Date.EVENTS = function EVENTS() {
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
      parameters: 'datecell'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'datecell,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'datecell,event'
    }, {
      name: 'focusenter',
      parameters: 'datecell,event'
    }, {
      name: 'focusleave',
      parameters: 'datecell,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'datecell'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_grid_cell_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_cell_Date.PROPERTIES());
    return Ext_grid_cell_Text.getProperties(properties);
  };

  Ext_grid_cell_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_cell_Date.EVENTS());
    return Ext_grid_cell_Text.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'datecell'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_cell_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_cell_Text.observedAttributes; //for (var property in Ext_grid_cell_Date.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_cell_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_cell_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_cell_Date(properties, events) {
    return _Ext_grid_cell_Text.call(this, properties.concat(Ext_grid_cell_Date.PROPERTIES()), events.concat(Ext_grid_cell_Date.EVENTS())) || this;
  }

  var _proto = Ext_grid_cell_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_cell_Text.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_cell_Text.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_cell_Date;
}(Ext_grid_cell_Text);

export { Ext_grid_cell_Date as default };