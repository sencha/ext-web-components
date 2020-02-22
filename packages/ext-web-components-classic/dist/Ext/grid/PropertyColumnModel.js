import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_header_Container from '../../Ext/grid/header/Container.js';

var Ext_grid_PropertyColumnModel =
/*#__PURE__*/
function (_Ext_grid_header_Cont) {
  _inheritsLoose(Ext_grid_PropertyColumnModel, _Ext_grid_header_Cont);

  Ext_grid_PropertyColumnModel.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'childEls', 'cls', 'columnsText', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'dateFormat', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultWidth', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'enableColumnHide', 'falseText', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'nameText', 'overCls', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'sealed', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'sortable', 'sortAscText', 'sortClearText', 'sortDescText', 'stateEvents', 'stateful', 'stateId', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trueText', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'valueText', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_grid_PropertyColumnModel.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'add',
      parameters: 'sender,component,index'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayout',
      parameters: 'sender,layout'
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
      name: 'beforeadd',
      parameters: 'sender,component,index'
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
      name: 'beforeremove',
      parameters: 'sender,component'
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
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
    }, {
      name: 'columnhide',
      parameters: 'ct,column'
    }, {
      name: 'columnmove',
      parameters: 'ct,column,fromIdx,toIdx'
    }, {
      name: 'columnresize',
      parameters: 'ct,column,width'
    }, {
      name: 'columnschanged',
      parameters: 'ct'
    }, {
      name: 'columnshow',
      parameters: 'ct,column'
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
      name: 'headerclick',
      parameters: 'ct,column,e,t'
    }, {
      name: 'headercontextmenu',
      parameters: 'ct,column,e,t'
    }, {
      name: 'headertriggerclick',
      parameters: 'ct,column,e,t'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'menucreate',
      parameters: 'ct,menu'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'remove',
      parameters: 'sender,component'
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
      name: 'sortchange',
      parameters: 'ct,column,direction'
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

  Ext_grid_PropertyColumnModel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_PropertyColumnModel.PROPERTIES());
    return Ext_grid_header_Container.getProperties(properties);
  };

  Ext_grid_PropertyColumnModel.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_PropertyColumnModel.EVENTS());
    return Ext_grid_header_Container.getEvents(events);
  };

  _createClass(Ext_grid_PropertyColumnModel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_header_Cont.observedAttributes;
      Ext_grid_PropertyColumnModel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_PropertyColumnModel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_PropertyColumnModel(properties, events) {
    return _Ext_grid_header_Cont.call(this, properties.concat(Ext_grid_PropertyColumnModel.PROPERTIES()), events.concat(Ext_grid_PropertyColumnModel.EVENTS())) || this;
  }

  var _proto = Ext_grid_PropertyColumnModel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_header_Cont.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_header_Cont.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_PropertyColumnModel;
}(Ext_grid_header_Container);

export { Ext_grid_PropertyColumnModel as default };