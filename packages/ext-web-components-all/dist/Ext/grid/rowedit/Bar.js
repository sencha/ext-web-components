import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel from '../../../Ext/Panel.js';

var Ext_grid_rowedit_Bar =
/*#__PURE__*/
function (_Ext_Panel) {
  _inheritsLoose(Ext_grid_rowedit_Bar, _Ext_Panel);

  Ext_grid_rowedit_Bar.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_grid_rowedit_Bar.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,roweditorbar,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'roweditorbar,item,index'
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
      parameters: 'roweditorbar'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'roweditorbar'
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
      parameters: 'roweditorbar,context'
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
      parameters: 'roweditorbar'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'roweditorbar,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'roweditorbar'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,roweditorbar,newActiveItem'
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
      parameters: 'roweditorbar'
    }, {
      name: 'drawershow',
      parameters: 'roweditorbar'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'roweditorbar'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'roweditorbar,event'
    }, {
      name: 'focusenter',
      parameters: 'roweditorbar,event'
    }, {
      name: 'focusleave',
      parameters: 'roweditorbar,event'
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
      parameters: 'roweditorbar,item,toIndex,fromIndex'
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
      parameters: 'roweditorbar,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'roweditorbar,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'roweditorbar,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'roweditorbar,context'
    }, {
      name: 'resizedragend',
      parameters: 'roweditorbar,context'
    }, {
      name: 'resizedragstart',
      parameters: 'roweditorbar,context'
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
      parameters: 'roweditorbar'
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

  Ext_grid_rowedit_Bar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_rowedit_Bar.PROPERTIES());
    return Ext_Panel.getProperties(properties);
  };

  Ext_grid_rowedit_Bar.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_rowedit_Bar.EVENTS());
    return Ext_Panel.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'roweditorbar'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_rowedit_Bar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel.observedAttributes; //for (var property in Ext_grid_rowedit_Bar.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_rowedit_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_rowedit_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_rowedit_Bar(properties, events) {
    return _Ext_Panel.call(this, properties.concat(Ext_grid_rowedit_Bar.PROPERTIES()), events.concat(Ext_grid_rowedit_Bar.EVENTS())) || this;
  }

  var _proto = Ext_grid_rowedit_Bar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_rowedit_Bar;
}(Ext_Panel);

export { Ext_grid_rowedit_Bar as default };