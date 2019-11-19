import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor from '../../Ext/Editor';

var Ext_grid_CellEditor =
/*#__PURE__*/
function (_Ext_Editor) {
  _inheritsLoose(Ext_grid_CellEditor, _Ext_Editor);

  Ext_grid_CellEditor.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignment', 'alignSelf', 'allowBlur', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoPin', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cancelOnClear', 'cancelOnEsc', 'cardSwitchAnimation', 'centered', 'cls', 'completeOnEnter', 'constrain', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'disabled', 'displayed', 'docked', 'draggable', 'field', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'height', 'hidden', 'hideAnimation', 'hideEl', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'ignoreNoChange', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'matchFont', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'offset', 'padding', 'parentEl', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'revertInvalid', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'style', 'swallowKeys', 'tabIndex', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'updateEl', 'userCls', 'userSelectable', 'value', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_grid_CellEditor.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,celleditor,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'celleditor,item,index'
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
      name: 'beforecomplete',
      parameters: 'celleditor,value,startValue'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
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
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestartedit',
      parameters: 'celleditor,boundEl,value'
    }, {
      name: 'beforetofront',
      parameters: 'celleditor'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'celleditor,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'canceledit',
      parameters: 'celleditor,value,startValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'complete',
      parameters: 'celleditor,value,startValue'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,celleditor,newActiveItem'
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
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'celleditor,event'
    }, {
      name: 'focusenter',
      parameters: 'celleditor,event'
    }, {
      name: 'focusleave',
      parameters: 'celleditor,event'
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
      parameters: 'celleditor,item,toIndex,fromIndex'
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
      parameters: 'celleditor,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'celleditor,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
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
      name: 'specialkey',
      parameters: 'celleditor,field,event'
    }, {
      name: 'startedit',
      parameters: 'celleditor,boundEl,value'
    }, {
      name: 'tofront',
      parameters: 'celleditor'
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

  Ext_grid_CellEditor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_CellEditor.PROPERTIES());
    return Ext_Editor.getProperties(properties);
  };

  Ext_grid_CellEditor.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_CellEditor.EVENTS());
    return Ext_Editor.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'celleditor'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_grid_CellEditor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Editor.observedAttributes; //for (var property in Ext_grid_CellEditor.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_grid_CellEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_CellEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_CellEditor(properties, events) {
    return _Ext_Editor.call(this, properties.concat(Ext_grid_CellEditor.PROPERTIES()), events.concat(Ext_grid_CellEditor.EVENTS())) || this;
  }

  var _proto = Ext_grid_CellEditor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Editor.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Editor.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_CellEditor;
}(Ext_Editor);

export { Ext_grid_CellEditor as default };