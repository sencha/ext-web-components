import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Split from '../../Ext/button/Split.js';

var Ext_button_Cycle = /*#__PURE__*/function (_Ext_button_Split) {
  _inheritsLoose(Ext_button_Cycle, _Ext_button_Split);

  Ext_button_Cycle.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'allowDepress', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrowAlign', 'arrowCls', 'arrowHandler', 'arrowTooltip', 'arrowVisible', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'baseParams', 'bind', 'border', 'changeHandler', 'childEls', 'clickEvent', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'destroyMenu', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'forceGlyph', 'forceIcon', 'formBind', 'frame', 'glyph', 'handleMouseEvents', 'handler', 'height', 'hidden', 'hideMode', 'href', 'hrefTarget', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'overflowText', 'padding', 'params', 'plugins', 'prependText', 'pressed', 'preventDefault', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'repeat', 'resizable', 'resizeHandles', 'saveDelay', 'scale', 'scope', 'scrollable', 'separateArrowStyling', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showEmptyMenu', 'showText', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleGroup', 'toggleHandler', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_button_Cycle.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'arrowclick',
      parameters: 'sender,e'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'beforetoggle',
      parameters: 'sender,pressed'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'change',
      parameters: 'sender,item'
    }, {
      name: 'click',
      parameters: 'sender,e'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
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
      name: 'glyphchange',
      parameters: 'sender,newGlyph,oldGlyph'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'iconchange',
      parameters: 'sender,oldIcon,newIcon'
    }, {
      name: 'menuhide',
      parameters: 'sender,menu'
    }, {
      name: 'menushow',
      parameters: 'sender,menu'
    }, {
      name: 'menutriggerout',
      parameters: 'sender,menu,e'
    }, {
      name: 'menutriggerover',
      parameters: 'sender,menu,e'
    }, {
      name: 'mouseout',
      parameters: 'sender,e'
    }, {
      name: 'mouseover',
      parameters: 'sender,e'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'textchange',
      parameters: 'sender,oldText,newText'
    }, {
      name: 'toggle',
      parameters: 'sender,pressed'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_button_Cycle.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_button_Cycle.PROPERTIES());
    return Ext_button_Split.getProperties(properties);
  };

  Ext_button_Cycle.getEvents = function getEvents(events) {
    events = events.concat(Ext_button_Cycle.EVENTS());
    return Ext_button_Split.getEvents(events);
  };

  _createClass(Ext_button_Cycle, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_button_Split.observedAttributes;
      Ext_button_Cycle.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_button_Cycle.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_button_Cycle(properties, events) {
    return _Ext_button_Split.call(this, properties.concat(Ext_button_Cycle.PROPERTIES()), events.concat(Ext_button_Cycle.EVENTS())) || this;
  }

  var _proto = Ext_button_Cycle.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_button_Split.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_button_Split.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_button_Cycle;
}(Ext_button_Split);

export { Ext_button_Cycle as default };