import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component from '../../Ext/Component.js';

var Ext_view_AbstractView = /*#__PURE__*/function (_Ext_Component) {
  _inheritsLoose(Ext_view_AbstractView, _Ext_Component);

  Ext_view_AbstractView.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'blockRefresh', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'deferEmptyText', 'deferInitialRefresh', 'disabled', 'disabledCls', 'disableSelection', 'dock', 'draggable', 'emptyText', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemCls', 'itemId', 'itemSelector', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'loadingCls', 'loadingHeight', 'loadingText', 'loadingUseMsg', 'loadMask', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'navigationModel', 'overCls', 'overItemCls', 'padding', 'plugins', 'preserveScrollOnRefresh', 'preserveScrollOnReload', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selectedItemCls', 'selection', 'selectionModel', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'singleSelect', 'stateEvents', 'stateful', 'stateId', 'store', 'style', 'tabIndex', 'throttledUpdate', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackOver', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_view_AbstractView.EVENTS = function EVENTS() {
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
      name: 'beforerefresh',
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
      name: 'itemadd',
      parameters: 'records,index,node,view'
    }, {
      name: 'itemremove',
      parameters: 'records,index,item,view'
    }, {
      name: 'itemupdate',
      parameters: 'record,index,node,view'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'refresh',
      parameters: 'sender'
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
      name: 'viewready',
      parameters: 'sender'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_view_AbstractView.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_AbstractView.PROPERTIES());
    return Ext_Component.getProperties(properties);
  };

  Ext_view_AbstractView.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_AbstractView.EVENTS());
    return Ext_Component.getEvents(events);
  };

  _createClass(Ext_view_AbstractView, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component.observedAttributes;
      Ext_view_AbstractView.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_AbstractView.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_AbstractView(properties, events) {
    return _Ext_Component.call(this, properties.concat(Ext_view_AbstractView.PROPERTIES()), events.concat(Ext_view_AbstractView.EVENTS())) || this;
  }

  var _proto = Ext_view_AbstractView.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_AbstractView;
}(Ext_Component);

export { Ext_view_AbstractView as default };