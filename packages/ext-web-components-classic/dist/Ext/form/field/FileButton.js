import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_button_Button from '../../../Ext/button/Button.js';

var Ext_form_field_FileButton = /*#__PURE__*/function (_Ext_button_Button) {
  _inheritsLoose(Ext_form_field_FileButton, _Ext_button_Button);

  Ext_form_field_FileButton.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'allowDepress', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrowAlign', 'arrowCls', 'arrowVisible', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'baseParams', 'bind', 'border', 'childEls', 'clickEvent', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'destroyMenu', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableToggle', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'glyph', 'handleMouseEvents', 'handler', 'height', 'hidden', 'hideMode', 'href', 'hrefTarget', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'overflowText', 'padding', 'params', 'plugins', 'pressed', 'preventDefault', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'repeat', 'resizable', 'resizeHandles', 'saveDelay', 'scale', 'scope', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showEmptyMenu', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleGroup', 'toggleHandler', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'value', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_form_field_FileButton.EVENTS = function EVENTS() {
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

  Ext_form_field_FileButton.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_field_FileButton.PROPERTIES());
    return Ext_button_Button.getProperties(properties);
  };

  Ext_form_field_FileButton.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_field_FileButton.EVENTS());
    return Ext_button_Button.getEvents(events);
  };

  _createClass(Ext_form_field_FileButton, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_button_Button.observedAttributes;
      Ext_form_field_FileButton.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_field_FileButton.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_field_FileButton(properties, events) {
    return _Ext_button_Button.call(this, properties.concat(Ext_form_field_FileButton.PROPERTIES()), events.concat(Ext_form_field_FileButton.EVENTS())) || this;
  }

  var _proto = Ext_form_field_FileButton.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_button_Button.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_button_Button.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_field_FileButton;
}(Ext_button_Button);

export { Ext_form_field_FileButton as default };