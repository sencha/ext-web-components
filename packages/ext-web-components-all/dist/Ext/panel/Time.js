import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel from '../../Ext/Panel.js';

var Ext_panel_Time =
/*#__PURE__*/
function (_Ext_Panel) {
  _inheritsLoose(Ext_panel_Time, _Ext_Panel);

  Ext_panel_Time.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignPMInside', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoAdvance', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'confirmable', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'declineHandler', 'defaultButtons', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'handler', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hourDisplayFormat', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'meridiem', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'mode', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'vertical', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_panel_Time.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,timepanel,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'timepanel,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'timepanel'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'timepanel'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforeresizedragstart',
      parameters: 'timepanel,context'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'timepanel'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'timepanel,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'timepanel'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,timepanel,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'timepanel'
    }, {
      name: 'drawershow',
      parameters: 'timepanel'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'timepanel'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'timepanel,event'
    }, {
      name: 'focusenter',
      parameters: 'timepanel,event'
    }, {
      name: 'focusleave',
      parameters: 'timepanel,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'move',
      parameters: 'timepanel,item,toIndex,fromIndex'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'timepanel,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'timepanel,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'timepanel,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'timepanel,context'
    }, {
      name: 'resizedragend',
      parameters: 'timepanel,context'
    }, {
      name: 'resizedragstart',
      parameters: 'timepanel,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'timepanel'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_panel_Time.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_panel_Time.PROPERTIES());
    return Ext_Panel.getProperties(properties);
  };

  Ext_panel_Time.getEvents = function getEvents(events) {
    events = events.concat(Ext_panel_Time.EVENTS());
    return Ext_Panel.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'timepanel'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_panel_Time, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel.observedAttributes; //for (var property in Ext_panel_Time.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_panel_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_panel_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_panel_Time(properties, events) {
    return _Ext_Panel.call(this, properties.concat(Ext_panel_Time.PROPERTIES()), events.concat(Ext_panel_Time.EVENTS())) || this;
  }

  var _proto = Ext_panel_Time.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_panel_Time;
}(Ext_Panel);

export { Ext_panel_Time as default };