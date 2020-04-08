import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component from '../../Ext/Component.js';

var Ext_picker_Date = /*#__PURE__*/function (_Ext_Component) {
  _inheritsLoose(Ext_picker_Date, _Ext_Component);

  Ext_picker_Date.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaDisabledDatesText', 'ariaDisabledDaysText', 'ariaLabel', 'ariaLabelledBy', 'ariaMaxText', 'ariaMinText', 'ariaTitle', 'ariaTitleDateFormat', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'defaultValue', 'disableAnim', 'disabled', 'disabledCellCls', 'disabledCls', 'disabledDates', 'disabledDatesRE', 'disabledDatesText', 'disabledDays', 'disabledDaysText', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'footerButtonUI', 'format', 'formBind', 'frame', 'handler', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'keyNavConfig', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'longDayFormat', 'margin', 'maskDefaults', 'maskElement', 'maxDate', 'maxHeight', 'maxText', 'maxWidth', 'minDate', 'minHeight', 'minText', 'minWidth', 'modal', 'modelValidation', 'monthYearFormat', 'monthYearText', 'nameable', 'nextText', 'overCls', 'padding', 'plugins', 'prevText', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scope', 'scrollable', 'selectedCls', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'showToday', 'shrinkWrap', 'startDay', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'todayText', 'todayTip', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_picker_Date.EVENTS = function EVENTS() {
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
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
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
      name: 'hide',
      parameters: 'sender'
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
      name: 'select',
      parameters: 'sender,date'
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
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_picker_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_picker_Date.PROPERTIES());
    return Ext_Component.getProperties(properties);
  };

  Ext_picker_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_picker_Date.EVENTS());
    return Ext_Component.getEvents(events);
  };

  _createClass(Ext_picker_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component.observedAttributes;
      Ext_picker_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_picker_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_picker_Date(properties, events) {
    return _Ext_Component.call(this, properties.concat(Ext_picker_Date.PROPERTIES()), events.concat(Ext_picker_Date.EVENTS())) || this;
  }

  var _proto = Ext_picker_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_picker_Date;
}(Ext_Component);

export { Ext_picker_Date as default };