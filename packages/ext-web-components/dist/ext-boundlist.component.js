import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtBoundlistComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtBoundlistComponent, _ExtBase);

  ExtBoundlistComponent.XTYPE = function XTYPE() {
    return 'boundlist';
  };

  ExtBoundlistComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "activeChildTabIndex": "Number",
      "activeItem": "Ext.Component/Object/String/Number",
      "allowFocusingDisabledChildren": "Boolean",
      "alwaysOnTop": "Boolean/Number",
      "ariaAttributes": "Object",
      "ariaDescribedBy": "String",
      "ariaLabel": "String",
      "ariaLabelledBy": "String",
      "associatedData": "Boolean/Object",
      "autoDestroy": "Boolean",
      "autoSize": "Boolean",
      "axisLock": "Boolean",
      "bind": "Object/String",
      "border": "Boolean",
      "bottom": "Number/String",
      "bufferSize": "Number",
      "cardSwitchAnimation": "String/Object/Boolean",
      "centered": "Boolean",
      "cls": "String/String[]",
      "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
      "contentEl": "Ext.dom.Element/HTMLElement/String",
      "control": "Object",
      "controller": "String/Object/Ext.app.ViewController",
      "data": "Object",
      "defaultFocus": "String",
      "defaultListenerScope": "Boolean",
      "defaults": "Object",
      "defaultType": "Ext.enums.Widget",
      "deferEmptyText": "Boolean",
      "deselectOnContainerClick": "Boolean",
      "disabled": "Boolean",
      "disableSelection": "Boolean",
      "disclosureProperty": "String",
      "displayed": "Boolean",
      "docked": "String",
      "draggable": "Boolean/Object/Ext.drag.Source",
      "emptyItemText": "String",
      "emptyState": "Boolean",
      "emptyText": "String/Boolean",
      "emptyTextDefaults": "Object/Ext.Component",
      "emptyTextProperty": "String",
      "flex": "Number/String/Object",
      "floated": "Boolean",
      "focusableContainer": "Boolean",
      "focusCls": "String",
      "fullscreen": "Boolean",
      "grouped": "Boolean",
      "groupFooter": "Object/Ext.dataview.ItemHeader",
      "groupHeader": "Object/Ext.dataview.ItemHeader",
      "height": "Number/String",
      "hidden": "Boolean",
      "hideAnimation": "String/Mixed",
      "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
      "hideOnMaskTap": "Boolean",
      "horizontalOverflow": "any",
      "html": "String/Ext.dom.Element/HTMLElement",
      "id": "String",
      "inactiveChildTabIndex": "Number",
      "indexBar": "Boolean/Object/Ext.dataview.IndexBar",
      "infinite": "Boolean",
      "inline": "Boolean/Object",
      "innerCls": "String",
      "innerCtHeight": "any",
      "innerWidth": "any",
      "instanceCls": "String/String[]",
      "itemButtonMode": "boolean",
      "itemCls": "String",
      "itemConfig": "Object/Ext.Component",
      "itemContentCls": "String",
      "itemDataMap": "Object",
      "itemId": "String",
      "itemInnerCls": "String",
      "itemRipple": "Boolean/Object",
      "items": "Array/Object",
      "itemsFocusable": "Boolean",
      "itemTpl": "String/String[]/Ext.XTemplate",
      "keyMap": "Object",
      "keyMapEnabled": "Boolean",
      "keyMapTarget": "String",
      "layout": "Object/String",
      "left": "Number/String",
      "listeners": "Object",
      "loadingHeight": "Number",
      "loadingText": "String/Boolean",
      "maintainChildNodes": "Boolean",
      "manageBorders": "Boolean",
      "margin": "Number/String",
      "markDirty": "Boolean",
      "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
      "maxHeight": "Number/String",
      "maxItemCache": "Number",
      "maxWidth": "Number/String",
      "minHeight": "Number/String",
      "minimumBufferDistance": "Number",
      "minWidth": "Number/String",
      "modal": "Boolean",
      "modelValidation": "Boolean",
      "name": "String",
      "nameable": "Boolean",
      "nameHolder": "Boolean",
      "onItemDisclosure": "Boolean/Function/String/Object",
      "padding": "Number/String",
      "pinFooters": "Boolean",
      "pinHeaders": "Boolean",
      "pinnedFooter": "Object",
      "pinnedFooterHeight": "any",
      "pinnedHeader": "Object",
      "pinnedHeaderHeight": "any",
      "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
      "pressedDelay": "Number",
      "preventSelectionOnDisclose": "Boolean",
      "preventSelectionOnTool": "Boolean",
      "publishes": "String/String[]/Object",
      "record": "Ext.data.Model",
      "reference": "String",
      "referenceHolder": "Boolean",
      "relative": "Boolean",
      "renderTo": "Ext.dom.Element",
      "resetFocusPosition": "Boolean",
      "right": "Number/String",
      "ripple": "Boolean/Object/String",
      "rowLines": "Boolean",
      "scrollable": "Boolean/String/Object",
      "scrollDock": "'start'/'emd'",
      "scrollToTopOnRefresh": "Boolean",
      "selectable": "Object/Ext.dataview.selection.Model",
      "selection": "Ext.data.Model",
      "selfAlign": "String",
      "session": "Boolean/Object/Ext.data.Session",
      "shadow": "Boolean",
      "shareableName": "Boolean",
      "shim": "Boolean",
      "showAnimation": "String/Mixed",
      "stateful": "Boolean/Object/String[]",
      "statefulDefaults": "Object/String[]",
      "stateId": "String",
      "store": "Ext.data.Store/Object",
      "striped": "Boolean",
      "style": "String/Object",
      "tabIndex": "Number",
      "toFrontOnShow": "Boolean",
      "tooltip": "String/Object",
      "top": "Number/String",
      "topRenderedIndex": "any",
      "touchAction": "Object",
      "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
      "tplWriteMode": "String",
      "translatable": "Object",
      "triggerCtEvent": "'tap'/'singletap'",
      "triggerEvent": "'tap'",
      "twoWayBindable": "String/String[]/Object",
      "ui": "String/String[]",
      "userCls": "String/String[]",
      "userSelectable": "Boolean/String/Object",
      "variableHeights": "Boolean",
      "verticalOverflow": "Boolean",
      "viewModel": "String/Object/Ext.app.ViewModel",
      "visibleHeight": "Number",
      "visibleLeft": "any",
      "visibleTop": "Number",
      "visibleWidth": "any",
      "weight": "Number",
      "weighted": "Boolean",
      "width": "Number/String",
      "x": "Number",
      "xtype": "String",
      "y": "Number",
      "zIndex": "Number",
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtBoundlistComponent.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,boundlist,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: ''
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
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforetofront',
      parameters: 'boundlist'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'boundlist,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'boundlist,location'
    }, {
      name: 'childlongpress',
      parameters: 'boundlist,location'
    }, {
      name: 'childmouseenter',
      parameters: 'boundlist,location'
    }, {
      name: 'childmouseleave',
      parameters: 'boundlist,location'
    }, {
      name: 'childsingletap',
      parameters: 'boundlist,location'
    }, {
      name: 'childtap',
      parameters: 'boundlist,location'
    }, {
      name: 'childtaphold',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchend',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchmove',
      parameters: 'boundlist,location'
    }, {
      name: 'childtouchstart',
      parameters: 'boundlist,location'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,boundlist,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'boundlist,records'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'disclose',
      parameters: 'list,record,target,index,event'
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
      parameters: 'boundlist,event'
    }, {
      name: 'focusenter',
      parameters: 'boundlist,event'
    }, {
      name: 'focusleave',
      parameters: 'boundlist,event'
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
      name: 'itemaction',
      parameters: 'boundlist,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'boundlist,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'boundlist,index,target,record,e'
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
      parameters: ''
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'navigate',
      parameters: 'boundlist,to,from'
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
      name: 'refresh',
      parameters: 'boundlist'
    }, {
      name: 'remove',
      parameters: ''
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'boundlist,item,rendered'
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
      name: 'select',
      parameters: 'boundlist,selected'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'boundlist'
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

  ExtBoundlistComponent.METHODS = function METHODS() {
    return [{
      name: '_addDeclaredListeners',
      "function": function _function(listeners) {
        return this.ext._addDeclaredListeners(listeners);
      }
    }, {
      name: '_fixReference',
      "function": function _function() {
        return this.ext._fixReference();
      }
    }, {
      name: '_flushStateful',
      "function": function _function() {
        return this.ext._flushStateful();
      }
    }, {
      name: '_getStateId',
      "function": function _function() {
        return this.ext._getStateId();
      }
    }, {
      name: 'activatePlugin',
      "function": function _function(type) {
        return this.ext.activatePlugin(type);
      }
    }, {
      name: 'add',
      "function": function _function(newItems) {
        return this.ext.add(newItems);
      }
    }, {
      name: 'addAfterListener',
      "function": function _function() {
        return this.ext.addAfterListener();
      }
    }, {
      name: 'addBeforeListener',
      "function": function _function() {
        return this.ext.addBeforeListener();
      }
    }, {
      name: 'addCls',
      "function": function _function(cls, prefix, suffix) {
        return this.ext.addCls(cls, prefix, suffix);
      }
    }, {
      name: 'addDelegatedListener',
      "function": function _function(eventName, fn, scope, options, order, caller, manager) {
        return this.ext.addDelegatedListener(eventName, fn, scope, options, order, caller, manager);
      }
    }, {
      name: 'addDeprecations',
      "function": function _function(deprecations) {
        return this.ext.addDeprecations(deprecations);
      }
    }, {
      name: 'addElementReference',
      "function": function _function(name, domNode) {
        return this.ext.addElementReference(name, domNode);
      }
    }, {
      name: 'addElementReferenceOnDemand',
      "function": function _function(name, domNode) {
        return this.ext.addElementReferenceOnDemand(name, domNode);
      }
    }, {
      name: 'addListener',
      "function": function _function(eventName, fn, scope, options, order, caller) {
        return this.ext.addListener(eventName, fn, scope, options, order, caller);
      }
    }, {
      name: 'addManagedListener',
      "function": function _function(item, ename, fn, scope, options, noDestroy) {
        return this.ext.addManagedListener(item, ename, fn, scope, options, noDestroy);
      }
    }, {
      name: 'addPlugin',
      "function": function _function(plugin) {
        return this.ext.addPlugin(plugin);
      }
    }, {
      name: 'afterEdit',
      "function": function _function() {
        return this.ext.afterEdit();
      }
    }, {
      name: 'afterErase',
      "function": function _function() {
        return this.ext.afterErase();
      }
    }, {
      name: 'afterRender',
      "function": function _function() {
        return this.ext.afterRender();
      }
    }, {
      name: 'alignTo',
      "function": function _function(component, alignment, options) {
        return this.ext.alignTo(component, alignment, options);
      }
    }, {
      name: 'animateActiveItem',
      "function": function _function(activeItem, animation) {
        return this.ext.animateActiveItem(activeItem, animation);
      }
    }, {
      name: 'applyActiveItem',
      "function": function _function(activeItem, currentActiveItem) {
        return this.ext.applyActiveItem(activeItem, currentActiveItem);
      }
    }, {
      name: 'applyBind',
      "function": function _function(binds, currentBindings) {
        return this.ext.applyBind(binds, currentBindings);
      }
    }, {
      name: 'applyCentered',
      "function": function _function(centered) {
        return this.ext.applyCentered(centered);
      }
    }, {
      name: 'applyControl',
      "function": function _function(selectors) {
        return this.ext.applyControl(selectors);
      }
    }, {
      name: 'applyItemDefaults',
      "function": function _function(item) {
        return this.ext.applyItemDefaults(item);
      }
    }, {
      name: 'applyMasked',
      "function": function _function(masked) {
        return this.ext.applyMasked(masked);
      }
    }, {
      name: 'applyPlugins',
      "function": function _function(plugins, oldPlugins) {
        return this.ext.applyPlugins(plugins, oldPlugins);
      }
    }, {
      name: 'applySession',
      "function": function _function(session) {
        return this.ext.applySession(session);
      }
    }, {
      name: 'applyStyle',
      "function": function _function(style, oldStyle) {
        return this.ext.applyStyle(style, oldStyle);
      }
    }, {
      name: 'applyTpl',
      "function": function _function(tpl) {
        return this.ext.applyTpl(tpl);
      }
    }, {
      name: 'applyViewModel',
      "function": function _function(viewModel) {
        return this.ext.applyViewModel(viewModel);
      }
    }, {
      name: 'attachNameRef',
      "function": function _function(component) {
        return this.ext.attachNameRef(component);
      }
    }, {
      name: 'attachReference',
      "function": function _function(component) {
        return this.ext.attachReference(component);
      }
    }, {
      name: 'beforeInitialize',
      "function": function _function() {
        return this.ext.beforeInitialize();
      }
    }, {
      name: 'beforeSelectionRefresh',
      "function": function _function(toDeselect, toReselect) {
        return this.ext.beforeSelectionRefresh(toDeselect, toReselect);
      }
    }, {
      name: 'blur',
      "function": function _function() {
        return this.ext.blur();
      }
    }, {
      name: 'bubble',
      "function": function _function(fn, scope, args) {
        return this.ext.bubble(fn, scope, args);
      }
    }, {
      name: 'callOverridden',
      "function": function _function(args) {
        return this.ext.callOverridden(args);
      }
    }, {
      name: 'callParent',
      "function": function _function(args) {
        return this.ext.callParent(args);
      }
    }, {
      name: 'callSuper',
      "function": function _function(args) {
        return this.ext.callSuper(args);
      }
    }, {
      name: 'cancelAllCalls',
      "function": function _function() {
        return this.ext.cancelAllCalls();
      }
    }, {
      name: 'cancelBufferedCall',
      "function": function _function(name, invoke) {
        return this.ext.cancelBufferedCall(name, invoke);
      }
    }, {
      name: 'center',
      "function": function _function() {
        return this.ext.center();
      }
    }, {
      name: 'changeItem',
      "function": function _function(itemIndex, recordIndex) {
        return this.ext.changeItem(itemIndex, recordIndex);
      }
    }, {
      name: 'child',
      "function": function _function(selector) {
        return this.ext.child(selector);
      }
    }, {
      name: 'clearDelegatedListeners',
      "function": function _function() {
        return this.ext.clearDelegatedListeners();
      }
    }, {
      name: 'clearListeners',
      "function": function _function() {
        return this.ext.clearListeners();
      }
    }, {
      name: 'clearManagedListeners',
      "function": function _function() {
        return this.ext.clearManagedListeners();
      }
    }, {
      name: 'constructor',
      "function": function _function(config) {
        return this.ext.constructor(config);
      }
    }, {
      name: 'createPlugin',
      "function": function _function(config) {
        return this.ext.createPlugin(config);
      }
    }, {
      name: 'createRelayer',
      "function": function _function(newName, beginEnd) {
        return this.ext.createRelayer(newName, beginEnd);
      }
    }, {
      name: 'destroy',
      "function": function _function() {
        return this.ext.destroy();
      }
    }, {
      name: 'destroyMembers',
      "function": function _function(args) {
        return this.ext.destroyMembers(args);
      }
    }, {
      name: 'destroyPlugin',
      "function": function _function(plugin) {
        return this.ext.destroyPlugin(plugin);
      }
    }, {
      name: 'disable',
      "function": function _function() {
        return this.ext.disable();
      }
    }, {
      name: 'doAdd',
      "function": function _function(item, instanced) {
        return this.ext.doAdd(item, instanced);
      }
    }, {
      name: 'doAddListener',
      "function": function _function(name, fn, scope, options, order, caller, manager) {
        return this.ext.doAddListener(name, fn, scope, options, order, caller, manager);
      }
    }, {
      name: 'doDestroy',
      "function": function _function() {
        return this.ext.doDestroy();
      }
    }, {
      name: 'doFireDelegatedEvent',
      "function": function _function(eventName, args) {
        return this.ext.doFireDelegatedEvent(eventName, args);
      }
    }, {
      name: 'doFireEvent',
      "function": function _function(eventName, args, bubbles) {
        return this.ext.doFireEvent(eventName, args, bubbles);
      }
    }, {
      name: 'doInheritUi',
      "function": function _function() {
        return this.ext.doInheritUi();
      }
    }, {
      name: 'doInsert',
      "function": function _function(index, item, instanced) {
        return this.ext.doInsert(index, item, instanced);
      }
    }, {
      name: 'doUninheritUi',
      "function": function _function() {
        return this.ext.doUninheritUi();
      }
    }, {
      name: 'down',
      "function": function _function(selector) {
        return this.ext.down(selector);
      }
    }, {
      name: 'enable',
      "function": function _function() {
        return this.ext.enable();
      }
    }, {
      name: 'enableBubble',
      "function": function _function(eventNames) {
        return this.ext.enableBubble(eventNames);
      }
    }, {
      name: 'ensureVisible',
      "function": function _function(record, options) {
        return this.ext.ensureVisible(record, options);
      }
    }, {
      name: 'ensureVisiblePlan',
      "function": function _function(record, plan) {
        return this.ext.ensureVisiblePlan(record, plan);
      }
    }, {
      name: 'factoryItem',
      "function": function _function(item) {
        return this.ext.factoryItem(item);
      }
    }, {
      name: 'findDefaultFocus',
      "function": function _function() {
        return this.ext.findDefaultFocus();
      }
    }, {
      name: 'findFloatParent',
      "function": function _function(needsShow) {
        return this.ext.findFloatParent(needsShow);
      }
    }, {
      name: 'findFocusTarget',
      "function": function _function() {
        return this.ext.findFocusTarget();
      }
    }, {
      name: 'findPlugin',
      "function": function _function(type) {
        return this.ext.findPlugin(type);
      }
    }, {
      name: 'fireAction',
      "function": function _function(eventName, args, fn, scope, options, order) {
        return this.ext.fireAction(eventName, args, fn, scope, options, order);
      }
    }, {
      name: 'fireEvent',
      "function": function _function(eventName, args) {
        return this.ext.fireEvent(eventName, args);
      }
    }, {
      name: 'fireEventArgs',
      "function": function _function(eventName, args) {
        return this.ext.fireEventArgs(eventName, args);
      }
    }, {
      name: 'fireEventedAction',
      "function": function _function(eventName, args, fn, scope, fnArgs) {
        return this.ext.fireEventedAction(eventName, args, fn, scope, fnArgs);
      }
    }, {
      name: 'flushBufferedCall',
      "function": function _function(name) {
        return this.ext.flushBufferedCall(name);
      }
    }, {
      name: 'focus',
      "function": function _function(selectText) {
        return this.ext.focus(selectText);
      }
    }, {
      name: 'getAlignmentInfo',
      "function": function _function(component, alignment) {
        return this.ext.getAlignmentInfo(component, alignment);
      }
    }, {
      name: 'getAlignRegion',
      "function": function _function(component, alignment, options) {
        return this.ext.getAlignRegion(component, alignment, options);
      }
    }, {
      name: 'getAriaLabelEl',
      "function": function _function(reference) {
        return this.ext.getAriaLabelEl(reference);
      }
    }, {
      name: 'getAt',
      "function": function _function(index) {
        return this.ext.getAt(index);
      }
    }, {
      name: 'getBubbleParent',
      "function": function _function() {
        return this.ext.getBubbleParent();
      }
    }, {
      name: 'getClassCls',
      "function": function _function() {
        return this.ext.getClassCls();
      }
    }, {
      name: 'getComponent',
      "function": function _function(component) {
        return this.ext.getComponent(component);
      }
    }, {
      name: 'getConfig',
      "function": function _function(name, peek, ifInitialized) {
        return this.ext.getConfig(name, peek, ifInitialized);
      }
    }, {
      name: 'getController',
      "function": function _function() {
        return this.ext.getController();
      }
    }, {
      name: 'getCurrentAlignmentInfo',
      "function": function _function() {
        return this.ext.getCurrentAlignmentInfo();
      }
    }, {
      name: 'getCurrentConfig',
      "function": function _function() {
        return this.ext.getCurrentConfig();
      }
    }, {
      name: 'getDockedComponent',
      "function": function _function(component) {
        return this.ext.getDockedComponent(component);
      }
    }, {
      name: 'getDockedItems',
      "function": function _function() {
        return this.ext.getDockedItems();
      }
    }, {
      name: 'getElementConfig',
      "function": function _function() {
        return this.ext.getElementConfig();
      }
    }, {
      name: 'getFirstReferences',
      "function": function _function() {
        return this.ext.getFirstReferences();
      }
    }, {
      name: 'getFloatParent',
      "function": function _function() {
        return this.ext.getFloatParent();
      }
    }, {
      name: 'getFloatWrap',
      "function": function _function() {
        return this.ext.getFloatWrap();
      }
    }, {
      name: 'getFocusClsEl',
      "function": function _function(focusEl) {
        return this.ext.getFocusClsEl(focusEl);
      }
    }, {
      name: 'getFocusEl',
      "function": function _function() {
        return this.ext.getFocusEl();
      }
    }, {
      name: 'getId',
      "function": function _function() {
        return this.ext.getId();
      }
    }, {
      name: 'getInherited',
      "function": function _function(inner) {
        return this.ext.getInherited(inner);
      }
    }, {
      name: 'getInheritedConfig',
      "function": function _function(property, skipThis) {
        return this.ext.getInheritedConfig(property, skipThis);
      }
    }, {
      name: 'getInitialConfig',
      "function": function _function(name) {
        return this.ext.getInitialConfig(name);
      }
    }, {
      name: 'getInnerItems',
      "function": function _function() {
        return this.ext.getInnerItems();
      }
    }, {
      name: 'getItemAt',
      "function": function _function(index) {
        return this.ext.getItemAt(index);
      }
    }, {
      name: 'getItemFromPagePoint',
      "function": function _function(x, y) {
        return this.ext.getItemFromPagePoint(x, y);
      }
    }, {
      name: 'getItemFromPoint',
      "function": function _function(x, y) {
        return this.ext.getItemFromPoint(x, y);
      }
    }, {
      name: 'getItemIndex',
      "function": function _function(item) {
        return this.ext.getItemIndex(item);
      }
    }, {
      name: 'getMaxHeightElement',
      "function": function _function() {
        return this.ext.getMaxHeightElement();
      }
    }, {
      name: 'getModalSibling',
      "function": function _function() {
        return this.ext.getModalSibling();
      }
    }, {
      name: 'getNamedItems',
      "function": function _function() {
        return this.ext.getNamedItems();
      }
    }, {
      name: 'getPlugin',
      "function": function _function(id) {
        return this.ext.getPlugin(id);
      }
    }, {
      name: 'getPositionedItemTarget',
      "function": function _function(item) {
        return this.ext.getPositionedItemTarget(item);
      }
    }, {
      name: 'getProxiedConfigs',
      "function": function _function(name) {
        return this.ext.getProxiedConfigs(name);
      }
    }, {
      name: 'getReferences',
      "function": function _function() {
        return this.ext.getReferences();
      }
    }, {
      name: 'getRefItems',
      "function": function _function(deep) {
        return this.ext.getRefItems(deep);
      }
    }, {
      name: 'getRefOwner',
      "function": function _function() {
        return this.ext.getRefOwner();
      }
    }, {
      name: 'getRenderTarget',
      "function": function _function() {
        return this.ext.getRenderTarget();
      }
    }, {
      name: 'getScrollableClientRegion',
      "function": function _function() {
        return this.ext.getScrollableClientRegion();
      }
    }, {
      name: 'getScrollDockedItems',
      "function": function _function(which) {
        return this.ext.getScrollDockedItems(which);
      }
    }, {
      name: 'getSize',
      "function": function _function() {
        return this.ext.getSize();
      }
    }, {
      name: 'getStateBuilder',
      "function": function _function(cache) {
        return this.ext.getStateBuilder(cache);
      }
    }, {
      name: 'getStatefulOwner',
      "function": function _function() {
        return this.ext.getStatefulOwner();
      }
    }, {
      name: 'getTabIndex',
      "function": function _function() {
        return this.ext.getTabIndex();
      }
    }, {
      name: 'getViewItems',
      "function": function _function() {
        return this.ext.getViewItems();
      }
    }, {
      name: 'getXTypes',
      "function": function _function() {
        return this.ext.getXTypes();
      }
    }, {
      name: 'handleBlurEvent',
      "function": function _function(info) {
        return this.ext.handleBlurEvent(info);
      }
    }, {
      name: 'handleFocusEvent',
      "function": function _function(info) {
        return this.ext.handleFocusEvent(info);
      }
    }, {
      name: 'has',
      "function": function _function(item) {
        return this.ext.has(item);
      }
    }, {
      name: 'hasCls',
      "function": function _function(className) {
        return this.ext.hasCls(className);
      }
    }, {
      name: 'hasConfig',
      "function": function _function(name) {
        return this.ext.hasConfig(name);
      }
    }, {
      name: 'hasInnerItem',
      "function": function _function(item) {
        return this.ext.hasInnerItem(item);
      }
    }, {
      name: 'hasListener',
      "function": function _function(eventName) {
        return this.ext.hasListener(eventName);
      }
    }, {
      name: 'hide',
      "function": function _function(animation) {
        return this.ext.hide(animation);
      }
    }, {
      name: 'indexModifiedFields',
      "function": function _function(modified) {
        return this.ext.indexModifiedFields(modified);
      }
    }, {
      name: 'indexOf',
      "function": function _function(item) {
        return this.ext.indexOf(item);
      }
    }, {
      name: 'initBindable',
      "function": function _function() {
        return this.ext.initBindable();
      }
    }, {
      name: 'initBufferables',
      "function": function _function() {
        return this.ext.initBufferables();
      }
    }, {
      name: 'initConfig',
      "function": function _function(instanceConfig) {
        return this.ext.initConfig(instanceConfig);
      }
    }, {
      name: 'initDragConstraints',
      "function": function _function(draggable) {
        return this.ext.initDragConstraints(draggable);
      }
    }, {
      name: 'initElement',
      "function": function _function() {
        return this.ext.initElement();
      }
    }, {
      name: 'initElementListeners',
      "function": function _function(elementConfig) {
        return this.ext.initElementListeners(elementConfig);
      }
    }, {
      name: 'initFocusableElement',
      "function": function _function(force) {
        return this.ext.initFocusableElement(force);
      }
    }, {
      name: 'initFocusableEvents',
      "function": function _function(force) {
        return this.ext.initFocusableEvents(force);
      }
    }, {
      name: 'initialize',
      "function": function _function() {
        return this.ext.initialize();
      }
    }, {
      name: 'initInheritedState',
      "function": function _function(inheritedState) {
        return this.ext.initInheritedState(inheritedState);
      }
    }, {
      name: 'initKeyMap',
      "function": function _function() {
        return this.ext.initKeyMap();
      }
    }, {
      name: 'initUiReference',
      "function": function _function(referenceName, uiCls, isInstance) {
        return this.ext.initUiReference(referenceName, uiCls, isInstance);
      }
    }, {
      name: 'insert',
      "function": function _function(index, item) {
        return this.ext.insert(index, item);
      }
    }, {
      name: 'insertAfter',
      "function": function _function(item, relativeToItem) {
        return this.ext.insertAfter(item, relativeToItem);
      }
    }, {
      name: 'insertBefore',
      "function": function _function(item, relativeToItem) {
        return this.ext.insertBefore(item, relativeToItem);
      }
    }, {
      name: 'insertFirst',
      "function": function _function(item) {
        return this.ext.insertFirst(item);
      }
    }, {
      name: 'insertFloatedDom',
      "function": function _function(needsShow) {
        return this.ext.insertFloatedDom(needsShow);
      }
    }, {
      name: 'insertInner',
      "function": function _function(item, index) {
        return this.ext.insertInner(item, index);
      }
    }, {
      name: 'insertLast',
      "function": function _function(item) {
        return this.ext.insertLast(item);
      }
    }, {
      name: 'invalidateInheritedState',
      "function": function _function() {
        return this.ext.invalidateInheritedState();
      }
    }, {
      name: 'is',
      "function": function _function(selector) {
        return this.ext.is(selector);
      }
    }, {
      name: 'isAncestor',
      "function": function _function(possibleDescendant) {
        return this.ext.isAncestor(possibleDescendant);
      }
    }, {
      name: 'isBlurring',
      "function": function _function(e) {
        return this.ext.isBlurring(e);
      }
    }, {
      name: 'isBound',
      "function": function _function(name) {
        return this.ext.isBound(name);
      }
    }, {
      name: 'isCallPending',
      "function": function _function(name) {
        return this.ext.isCallPending(name);
      }
    }, {
      name: 'isCentered',
      "function": function _function() {
        return this.ext.isCentered();
      }
    }, {
      name: 'isDescendantOf',
      "function": function _function(ancestor) {
        return this.ext.isDescendantOf(ancestor);
      }
    }, {
      name: 'isDestructing',
      "function": function _function() {
        return this.ext.isDestructing();
      }
    }, {
      name: 'isDisabled',
      "function": function _function() {
        return this.ext.isDisabled();
      }
    }, {
      name: 'isEnabled',
      "function": function _function() {
        return this.ext.isEnabled();
      }
    }, {
      name: 'isFocusable',
      "function": function _function(deep) {
        return this.ext.isFocusable(deep);
      }
    }, {
      name: 'isFocusing',
      "function": function _function(e) {
        return this.ext.isFocusing(e);
      }
    }, {
      name: 'isHeighted',
      "function": function _function() {
        return this.ext.isHeighted();
      }
    }, {
      name: 'isHidden',
      "function": function _function(deep) {
        return this.ext.isHidden(deep);
      }
    }, {
      name: 'isPainted',
      "function": function _function() {
        return this.ext.isPainted();
      }
    }, {
      name: 'isRecordRendered',
      "function": function _function(recordIndex) {
        return this.ext.isRecordRendered(recordIndex);
      }
    }, {
      name: 'isRendered',
      "function": function _function() {
        return this.ext.isRendered();
      }
    }, {
      name: 'isSuspended',
      "function": function _function() {
        return this.ext.isSuspended;
      }
    }, {
      name: 'isSyncing',
      "function": function _function(name) {
        return this.ext.isSyncing(name);
      }
    }, {
      name: 'isVisible',
      "function": function _function(deep) {
        return this.ext.isVisible(deep);
      }
    }, {
      name: 'isWidthed',
      "function": function _function() {
        return this.ext.isWidthed();
      }
    }, {
      name: 'isXType',
      "function": function _function(xtype, shallow) {
        return this.ext.isXType(xtype, shallow);
      }
    }, {
      name: 'itemAs',
      "function": function _function(item, as) {
        return this.ext.itemAs(item, as);
      }
    }, {
      name: 'link',
      "function": function _function(name, value) {
        return this.ext.link(name, value);
      }
    }, {
      name: 'loadState',
      "function": function _function(state, stateful) {
        return this.ext.loadState(state, stateful);
      }
    }, {
      name: 'lookup',
      "function": function _function(ref) {
        return this.ext.lookup(ref);
      }
    }, {
      name: 'lookupController',
      "function": function _function(skipThis) {
        return this.ext.lookupController(skipThis);
      }
    }, {
      name: 'lookupName',
      "function": function _function(name) {
        return this.ext.lookupName(name);
      }
    }, {
      name: 'lookupNameHolder',
      "function": function _function(skipThis) {
        return this.ext.lookupNameHolder(skipThis);
      }
    }, {
      name: 'lookupReference',
      "function": function _function(ref) {
        return this.ext.lookupReference(ref);
      }
    }, {
      name: 'lookupReferenceHolder',
      "function": function _function(skipThis) {
        return this.ext.lookupReferenceHolder(skipThis);
      }
    }, {
      name: 'lookupSession',
      "function": function _function(skipThis) {
        return this.ext.lookupSession(skipThis);
      }
    }, {
      name: 'lookupTpl',
      "function": function _function(name) {
        return this.ext.lookupTpl(name);
      }
    }, {
      name: 'lookupViewModel',
      "function": function _function(skipThis) {
        return this.ext.lookupViewModel(skipThis);
      }
    }, {
      name: 'mapToItem',
      "function": function _function(value, as) {
        return this.ext.mapToItem(value, as);
      }
    }, {
      name: 'mapToRecord',
      "function": function _function(value) {
        return this.ext.mapToRecord(value);
      }
    }, {
      name: 'mapToRecordIndex',
      "function": function _function(value) {
        return this.ext.mapToRecordIndex(value);
      }
    }, {
      name: 'mapToViewIndex',
      "function": function _function(value, indexOffset) {
        return this.ext.mapToViewIndex(value, indexOffset);
      }
    }, {
      name: 'mask',
      "function": function _function(mask) {
        return this.ext.mask(mask);
      }
    }, {
      name: 'mergeProxiedConfigs',
      "function": function _function(name, itemConfig, alwaysClone) {
        return this.ext.mergeProxiedConfigs(name, itemConfig, alwaysClone);
      }
    }, {
      name: 'mon',
      "function": function _function(item, ename, fn, scope, options, noDestroy) {
        return this.ext.mon(item, ename, fn, scope, options, noDestroy);
      }
    }, {
      name: 'mun',
      "function": function _function(item, ename, fn, scope) {
        return this.ext.mun(item, ename, fn, scope);
      }
    }, {
      name: 'nextItem',
      "function": function _function(item, as) {
        return this.ext.nextItem(item, as);
      }
    }, {
      name: 'on',
      "function": function _function(eventName, fn, scope, options, order, caller) {
        return this.ext.on(eventName, fn, scope, options, order, caller);
      }
    }, {
      name: 'onAdded',
      "function": function _function(parent, instanced) {
        return this.ext.onAdded(parent, instanced);
      }
    }, {
      name: 'onAfter',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.onAfter(eventName, fn, scope, options);
      }
    }, {
      name: 'onBefore',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.onBefore(eventName, fn, scope, options);
      }
    }, {
      name: 'onBlur',
      "function": function _function(e) {
        return this.ext.onBlur(e);
      }
    }, {
      name: 'onFirstItemAdd',
      "function": function _function(item) {
        return this.ext.onFirstItemAdd(item);
      }
    }, {
      name: 'onFocus',
      "function": function _function(e) {
        return this.ext.onFocus(e);
      }
    }, {
      name: 'onFocusEnter',
      "function": function _function(e) {
        return this.ext.onFocusEnter(e);
      }
    }, {
      name: 'onFocusLeave',
      "function": function _function(e) {
        return this.ext.onFocusLeave(e);
      }
    }, {
      name: 'onFocusMove',
      "function": function _function(info) {
        return this.ext.onFocusMove(info);
      }
    }, {
      name: 'onInheritedAdd',
      "function": function _function(parent, instanced) {
        return this.ext.onInheritedAdd(parent, instanced);
      }
    }, {
      name: 'onInheritedRemove',
      "function": function _function(destroying) {
        return this.ext.onInheritedRemove(destroying);
      }
    }, {
      name: 'onInitialized',
      "function": function _function(fn, scope, args) {
        return this.ext.onInitialized(fn, scope, args);
      }
    }, {
      name: 'onItemAdd',
      "function": function _function(item, index) {
        return this.ext.onItemAdd(item, index);
      }
    }, {
      name: 'onItemMove',
      "function": function _function(item, toIndex, fromIndex) {
        return this.ext.onItemMove(item, toIndex, fromIndex);
      }
    }, {
      name: 'onItemRemove',
      "function": function _function(item, index, destroying) {
        return this.ext.onItemRemove(item, index, destroying);
      }
    }, {
      name: 'onNavigate',
      "function": function _function(e) {
        return this.ext.onNavigate(e);
      }
    }, {
      name: 'onRelease',
      "function": function _function() {
        return this.ext.onRelease();
      }
    }, {
      name: 'onRender',
      "function": function _function() {
        return this.ext.onRender();
      }
    }, {
      name: 'onResize',
      "function": function _function(width, height, oldWidth, oldHeight) {
        return this.ext.onResize(width, height, oldWidth, oldHeight);
      }
    }, {
      name: 'onScrollEnd',
      "function": function _function(x, y) {
        return this.ext.onScrollEnd(x, y);
      }
    }, {
      name: 'onScrollMove',
      "function": function _function(x, y) {
        return this.ext.onScrollMove(x, y);
      }
    }, {
      name: 'onScrollStart',
      "function": function _function(x, y) {
        return this.ext.onScrollStart(x, y);
      }
    }, {
      name: 'onStatefulChange',
      "function": function _function() {
        return this.ext.onStatefulChange();
      }
    }, {
      name: 'owns',
      "function": function _function(element) {
        return this.ext.owns(element);
      }
    }, {
      name: 'persistState',
      "function": function _function() {
        return this.ext.persistState();
      }
    }, {
      name: 'prepareData',
      "function": function _function(data, index, record) {
        return this.ext.prepareData(data, index, record);
      }
    }, {
      name: 'preprocessShow',
      "function": function _function(component, alignment, options) {
        return this.ext.preprocessShow(component, alignment, options);
      }
    }, {
      name: 'previousItem',
      "function": function _function(item, as) {
        return this.ext.previousItem(item, as);
      }
    }, {
      name: 'processElementConfig',
      "function": function _function() {
        return this.ext.processElementConfig();
      }
    }, {
      name: 'processFocusableContainerKeyEvent',
      "function": function _function(e) {
        return this.ext.processFocusableContainerKeyEvent(e);
      }
    }, {
      name: 'publishState',
      "function": function _function(property, value) {
        return this.ext.publishState(property, value);
      }
    }, {
      name: 'query',
      "function": function _function(selector) {
        return this.ext.query(selector);
      }
    }, {
      name: 'queryBy',
      "function": function _function(fn, scope) {
        return this.ext.queryBy(fn, scope);
      }
    }, {
      name: 'queryById',
      "function": function _function(id) {
        return this.ext.queryById(id);
      }
    }, {
      name: 'readStateObject',
      "function": function _function() {
        return this.ext.readStateObject();
      }
    }, {
      name: 'realign',
      "function": function _function(component, alignment, options) {
        return this.ext.realign(component, alignment, options);
      }
    }, {
      name: 'refresh',
      "function": function _function() {
        return this.ext.refresh();
      }
    }, {
      name: 'relayEvents',
      "function": function _function(origin, events, prefix) {
        return this.ext.relayEvents(origin, events, prefix);
      }
    }, {
      name: 'remove',
      "function": function _function(which, destroy) {
        return this.ext.remove(which, destroy);
      }
    }, {
      name: 'removeAfterListener',
      "function": function _function() {
        return this.ext.removeAfterListener();
      }
    }, {
      name: 'removeAll',
      "function": function _function(destroy, everything) {
        return this.ext.removeAll(destroy, everything);
      }
    }, {
      name: 'removeAt',
      "function": function _function(index, destroy) {
        return this.ext.removeAt(index, destroy);
      }
    }, {
      name: 'removeBeforeListener',
      "function": function _function() {
        return this.ext.removeBeforeListener();
      }
    }, {
      name: 'removeCls',
      "function": function _function(cls, prefix, suffix) {
        return this.ext.removeCls(cls, prefix, suffix);
      }
    }, {
      name: 'removeDelegatedListener',
      "function": function _function(eventName, fn, scope) {
        return this.ext.removeDelegatedListener(eventName, fn, scope);
      }
    }, {
      name: 'removeInner',
      "function": function _function(item) {
        return this.ext.removeInner(item);
      }
    }, {
      name: 'removeInnerAt',
      "function": function _function(index) {
        return this.ext.removeInnerAt(index);
      }
    }, {
      name: 'removeListener',
      "function": function _function(eventName, fn, scope, eventOptions) {
        return this.ext.removeListener(eventName, fn, scope, eventOptions);
      }
    }, {
      name: 'removeManagedListener',
      "function": function _function(item, ename, fn, scope) {
        return this.ext.removeManagedListener(item, ename, fn, scope);
      }
    }, {
      name: 'removeManagedListenerItem',
      "function": function _function(isClear, managedListener, item, ename, fn, scope) {
        return this.ext.removeManagedListenerItem(isClear, managedListener, item, ename, fn, scope);
      }
    }, {
      name: 'removePlugin',
      "function": function _function(plugin, destroy) {
        return this.ext.removePlugin(plugin, destroy);
      }
    }, {
      name: 'reorderItem',
      "function": function _function(item, ref, offset) {
        return this.ext.reorderItem(item, ref, offset);
      }
    }, {
      name: 'replaceCls',
      "function": function _function(oldCls, newCls, prefix, suffix) {
        return this.ext.replaceCls(oldCls, newCls, prefix, suffix);
      }
    }, {
      name: 'resetFloating',
      "function": function _function() {
        return this.ext.resetFloating();
      }
    }, {
      name: 'resetPositioned',
      "function": function _function() {
        return this.ext.resetPositioned();
      }
    }, {
      name: 'resolveListenerScope',
      "function": function _function(defaultScope) {
        return this.ext.resolveListenerScope(defaultScope);
      }
    }, {
      name: 'resolveSatelliteListenerScope',
      "function": function _function(satellite, defaultScope) {
        return this.ext.resolveSatelliteListenerScope(satellite, defaultScope);
      }
    }, {
      name: 'resumeEvent',
      "function": function _function(eventName) {
        return this.ext.resumeEvent(eventName);
      }
    }, {
      name: 'resumeEvents',
      "function": function _function(discardQueue) {
        return this.ext.resumeEvents(discardQueue);
      }
    }, {
      name: 'revertFocus',
      "function": function _function() {
        return this.ext.revertFocus();
      }
    }, {
      name: 'revertFocusTo',
      "function": function _function(target) {
        return this.ext.revertFocusTo(target);
      }
    }, {
      name: 'saveFocusState',
      "function": function _function() {
        return this.ext.saveFocusState();
      }
    }, {
      name: 'saveState',
      "function": function _function(state, stateful) {
        return this.ext.saveState(state, stateful);
      }
    }, {
      name: 'scrollToRecord',
      "function": function _function(record, animation) {
        return this.ext.scrollToRecord(record, animation);
      }
    }, {
      name: 'setConfig',
      "function": function _function(name, value, options) {
        return this.ext.setConfig(name, value, options);
      }
    }, {
      name: 'setCurrentAlignmentInfo',
      "function": function _function(alignmentInfo) {
        return this.ext.setCurrentAlignmentInfo(alignmentInfo);
      }
    }, {
      name: 'setListeners',
      "function": function _function(listeners) {
        return this.ext.setListeners(listeners);
      }
    }, {
      name: 'setRendered',
      "function": function _function(rendered, root) {
        return this.ext.setRendered(rendered, root);
      }
    }, {
      name: 'setSize',
      "function": function _function(width, height) {
        return this.ext.setSize(width, height);
      }
    }, {
      name: 'setTabIndex',
      "function": function _function(newTabIndex, focusEl) {
        return this.ext.setTabIndex(newTabIndex, focusEl);
      }
    }, {
      name: 'setVisibility',
      "function": function _function(isVisible) {
        return this.ext.setVisibility(isVisible);
      }
    }, {
      name: 'setXY',
      "function": function _function(x, y, animation) {
        return this.ext.setXY(x, y, animation);
      }
    }, {
      name: 'show',
      "function": function _function(animation, options) {
        return this.ext.show(animation, options);
      }
    }, {
      name: 'showAt',
      "function": function _function(x, y) {
        return this.ext.showAt(x, y);
      }
    }, {
      name: 'showBy',
      "function": function _function(component, alignment, options) {
        return this.ext.showBy(component, alignment, options);
      }
    }, {
      name: 'statics',
      "function": function _function() {
        return this.ext.statics();
      }
    }, {
      name: 'suspendEvent',
      "function": function _function(eventName) {
        return this.ext.suspendEvent(eventName);
      }
    }, {
      name: 'suspendEvents',
      "function": function _function(queueSuspended) {
        return this.ext.suspendEvents(queueSuspended);
      }
    }, {
      name: 'syncAlwaysOnTop',
      "function": function _function(fromMousedown) {
        return this.ext.syncAlwaysOnTop(fromMousedown);
      }
    }, {
      name: 'syncFloatWrap',
      "function": function _function() {
        return this.ext.syncFloatWrap();
      }
    }, {
      name: 'toFront',
      "function": function _function(fromMousedown) {
        return this.ext.toFront(fromMousedown);
      }
    }, {
      name: 'toggleCls',
      "function": function _function(className, state) {
        return this.ext.toggleCls(className, state);
      }
    }, {
      name: 'transformStatefulConfig',
      "function": function _function(instanceConfig, configurator) {
        return this.ext.transformStatefulConfig(instanceConfig, configurator);
      }
    }, {
      name: 'triggerInitialized',
      "function": function _function() {
        return this.ext.triggerInitialized();
      }
    }, {
      name: 'un',
      "function": function _function(eventName, fn, scope, eventOptions) {
        return this.ext.un(eventName, fn, scope, eventOptions);
      }
    }, {
      name: 'unAfter',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.unAfter(eventName, fn, scope, options);
      }
    }, {
      name: 'unBefore',
      "function": function _function(eventName, fn, scope, options) {
        return this.ext.unBefore(eventName, fn, scope, options);
      }
    }, {
      name: 'unlink',
      "function": function _function(names) {
        return this.ext.unlink(names);
      }
    }, {
      name: 'unmask',
      "function": function _function() {
        return this.ext.unmask();
      }
    }, {
      name: 'up',
      "function": function _function(selector, limit) {
        return this.ext.up(selector, limit);
      }
    }, {
      name: 'updateCls',
      "function": function _function(newCls, oldCls) {
        return this.ext.updateCls(newCls, oldCls);
      }
    }, {
      name: 'updateData',
      "function": function _function(newData) {
        return this.ext.updateData(newData);
      }
    }, {
      name: 'updateHeight',
      "function": function _function(height) {
        return this.ext.updateHeight(height);
      }
    }, {
      name: 'updateSession',
      "function": function _function(session) {
        return this.ext.updateSession(session);
      }
    }, {
      name: 'updateViewModel',
      "function": function _function(viewModel, oldViewModel) {
        return this.ext.updateViewModel(viewModel, oldViewModel);
      }
    }, {
      name: 'updateWidth',
      "function": function _function(width) {
        return this.ext.updateWidth(width);
      }
    }, {
      name: 'visitPostOrder',
      "function": function _function(selector, fn, scope, extraArgs) {
        return this.ext.visitPostOrder(selector, fn, scope, extraArgs);
      }
    }, {
      name: 'visitPreOrder',
      "function": function _function(selector, fn, scope, extraArgs) {
        return this.ext.visitPreOrder(selector, fn, scope, extraArgs);
      }
    }, {
      name: 'watchConfig',
      "function": function _function(name, fn, scope) {
        return this.ext.watchConfig(name, fn, scope);
      }
    }, {
      name: 'whenVisible',
      "function": function _function(fn, args) {
        return this.ext.whenVisible(fn, args);
      }
    }];
  };

  _createClass(ExtBoundlistComponent, [{
    key: "activeChildTabIndex",
    get: function get() {
      return this.getAttribute('activeChildTabIndex');
    },
    set: function set(activeChildTabIndex) {
      this.setAttribute('activeChildTabIndex', activeChildTabIndex);
    }
  }, {
    key: "activeItem",
    get: function get() {
      return this.getAttribute('activeItem');
    },
    set: function set(activeItem) {
      this.setAttribute('activeItem', activeItem);
    }
  }, {
    key: "allowFocusingDisabledChildren",
    get: function get() {
      return this.getAttribute('allowFocusingDisabledChildren');
    },
    set: function set(allowFocusingDisabledChildren) {
      this.setAttribute('allowFocusingDisabledChildren', allowFocusingDisabledChildren);
    }
  }, {
    key: "alwaysOnTop",
    get: function get() {
      return this.getAttribute('alwaysOnTop');
    },
    set: function set(alwaysOnTop) {
      this.setAttribute('alwaysOnTop', alwaysOnTop);
    }
  }, {
    key: "ariaAttributes",
    get: function get() {
      return this.getAttribute('ariaAttributes');
    },
    set: function set(ariaAttributes) {
      this.setAttribute('ariaAttributes', ariaAttributes);
    }
  }, {
    key: "ariaDescribedBy",
    get: function get() {
      return this.getAttribute('ariaDescribedBy');
    },
    set: function set(ariaDescribedBy) {
      this.setAttribute('ariaDescribedBy', ariaDescribedBy);
    }
  }, {
    key: "ariaLabel",
    get: function get() {
      return this.getAttribute('ariaLabel');
    },
    set: function set(ariaLabel) {
      this.setAttribute('ariaLabel', ariaLabel);
    }
  }, {
    key: "ariaLabelledBy",
    get: function get() {
      return this.getAttribute('ariaLabelledBy');
    },
    set: function set(ariaLabelledBy) {
      this.setAttribute('ariaLabelledBy', ariaLabelledBy);
    }
  }, {
    key: "associatedData",
    get: function get() {
      return this.getAttribute('associatedData');
    },
    set: function set(associatedData) {
      this.setAttribute('associatedData', associatedData);
    }
  }, {
    key: "autoDestroy",
    get: function get() {
      return this.getAttribute('autoDestroy');
    },
    set: function set(autoDestroy) {
      this.setAttribute('autoDestroy', autoDestroy);
    }
  }, {
    key: "autoSize",
    get: function get() {
      return this.getAttribute('autoSize');
    },
    set: function set(autoSize) {
      this.setAttribute('autoSize', autoSize);
    }
  }, {
    key: "axisLock",
    get: function get() {
      return this.getAttribute('axisLock');
    },
    set: function set(axisLock) {
      this.setAttribute('axisLock', axisLock);
    }
  }, {
    key: "bind",
    get: function get() {
      return this.getAttribute('bind');
    },
    set: function set(bind) {
      this.setAttribute('bind', bind);
    }
  }, {
    key: "border",
    get: function get() {
      return this.getAttribute('border');
    },
    set: function set(border) {
      this.setAttribute('border', border);
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.getAttribute('bottom');
    },
    set: function set(bottom) {
      this.setAttribute('bottom', bottom);
    }
  }, {
    key: "bufferSize",
    get: function get() {
      return this.getAttribute('bufferSize');
    },
    set: function set(bufferSize) {
      this.setAttribute('bufferSize', bufferSize);
    }
  }, {
    key: "cardSwitchAnimation",
    get: function get() {
      return this.getAttribute('cardSwitchAnimation');
    },
    set: function set(cardSwitchAnimation) {
      this.setAttribute('cardSwitchAnimation', cardSwitchAnimation);
    }
  }, {
    key: "centered",
    get: function get() {
      return this.getAttribute('centered');
    },
    set: function set(centered) {
      this.setAttribute('centered', centered);
    }
  }, {
    key: "cls",
    get: function get() {
      return this.getAttribute('cls');
    },
    set: function set(cls) {
      this.setAttribute('cls', cls);
    }
  }, {
    key: "constrainAlign",
    get: function get() {
      return this.getAttribute('constrainAlign');
    },
    set: function set(constrainAlign) {
      this.setAttribute('constrainAlign', constrainAlign);
    }
  }, {
    key: "contentEl",
    get: function get() {
      return this.getAttribute('contentEl');
    },
    set: function set(contentEl) {
      this.setAttribute('contentEl', contentEl);
    }
  }, {
    key: "control",
    get: function get() {
      return this.getAttribute('control');
    },
    set: function set(control) {
      this.setAttribute('control', control);
    }
  }, {
    key: "controller",
    get: function get() {
      return this.getAttribute('controller');
    },
    set: function set(controller) {
      this.setAttribute('controller', controller);
    }
  }, {
    key: "data",
    get: function get() {
      return this.getAttribute('data');
    },
    set: function set(data) {
      this.setAttribute('data', data);
    }
  }, {
    key: "defaultFocus",
    get: function get() {
      return this.getAttribute('defaultFocus');
    },
    set: function set(defaultFocus) {
      this.setAttribute('defaultFocus', defaultFocus);
    }
  }, {
    key: "defaultListenerScope",
    get: function get() {
      return this.getAttribute('defaultListenerScope');
    },
    set: function set(defaultListenerScope) {
      this.setAttribute('defaultListenerScope', defaultListenerScope);
    }
  }, {
    key: "defaults",
    get: function get() {
      return this.getAttribute('defaults');
    },
    set: function set(defaults) {
      this.setAttribute('defaults', defaults);
    }
  }, {
    key: "defaultType",
    get: function get() {
      return this.getAttribute('defaultType');
    },
    set: function set(defaultType) {
      this.setAttribute('defaultType', defaultType);
    }
  }, {
    key: "deferEmptyText",
    get: function get() {
      return this.getAttribute('deferEmptyText');
    },
    set: function set(deferEmptyText) {
      this.setAttribute('deferEmptyText', deferEmptyText);
    }
  }, {
    key: "deselectOnContainerClick",
    get: function get() {
      return this.getAttribute('deselectOnContainerClick');
    },
    set: function set(deselectOnContainerClick) {
      this.setAttribute('deselectOnContainerClick', deselectOnContainerClick);
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.getAttribute('disabled');
    },
    set: function set(disabled) {
      this.setAttribute('disabled', disabled);
    }
  }, {
    key: "disableSelection",
    get: function get() {
      return this.getAttribute('disableSelection');
    },
    set: function set(disableSelection) {
      this.setAttribute('disableSelection', disableSelection);
    }
  }, {
    key: "disclosureProperty",
    get: function get() {
      return this.getAttribute('disclosureProperty');
    },
    set: function set(disclosureProperty) {
      this.setAttribute('disclosureProperty', disclosureProperty);
    }
  }, {
    key: "displayed",
    get: function get() {
      return this.getAttribute('displayed');
    },
    set: function set(displayed) {
      this.setAttribute('displayed', displayed);
    }
  }, {
    key: "docked",
    get: function get() {
      return this.getAttribute('docked');
    },
    set: function set(docked) {
      this.setAttribute('docked', docked);
    }
  }, {
    key: "draggable",
    get: function get() {
      return this.getAttribute('draggable');
    },
    set: function set(draggable) {
      this.setAttribute('draggable', draggable);
    }
  }, {
    key: "emptyItemText",
    get: function get() {
      return this.getAttribute('emptyItemText');
    },
    set: function set(emptyItemText) {
      this.setAttribute('emptyItemText', emptyItemText);
    }
  }, {
    key: "emptyState",
    get: function get() {
      return this.getAttribute('emptyState');
    },
    set: function set(emptyState) {
      this.setAttribute('emptyState', emptyState);
    }
  }, {
    key: "emptyText",
    get: function get() {
      return this.getAttribute('emptyText');
    },
    set: function set(emptyText) {
      this.setAttribute('emptyText', emptyText);
    }
  }, {
    key: "emptyTextDefaults",
    get: function get() {
      return this.getAttribute('emptyTextDefaults');
    },
    set: function set(emptyTextDefaults) {
      this.setAttribute('emptyTextDefaults', emptyTextDefaults);
    }
  }, {
    key: "emptyTextProperty",
    get: function get() {
      return this.getAttribute('emptyTextProperty');
    },
    set: function set(emptyTextProperty) {
      this.setAttribute('emptyTextProperty', emptyTextProperty);
    }
  }, {
    key: "flex",
    get: function get() {
      return this.getAttribute('flex');
    },
    set: function set(flex) {
      this.setAttribute('flex', flex);
    }
  }, {
    key: "floated",
    get: function get() {
      return this.getAttribute('floated');
    },
    set: function set(floated) {
      this.setAttribute('floated', floated);
    }
  }, {
    key: "focusableContainer",
    get: function get() {
      return this.getAttribute('focusableContainer');
    },
    set: function set(focusableContainer) {
      this.setAttribute('focusableContainer', focusableContainer);
    }
  }, {
    key: "focusCls",
    get: function get() {
      return this.getAttribute('focusCls');
    },
    set: function set(focusCls) {
      this.setAttribute('focusCls', focusCls);
    }
  }, {
    key: "fullscreen",
    get: function get() {
      return this.getAttribute('fullscreen');
    },
    set: function set(fullscreen) {
      this.setAttribute('fullscreen', fullscreen);
    }
  }, {
    key: "grouped",
    get: function get() {
      return this.getAttribute('grouped');
    },
    set: function set(grouped) {
      this.setAttribute('grouped', grouped);
    }
  }, {
    key: "groupFooter",
    get: function get() {
      return this.getAttribute('groupFooter');
    },
    set: function set(groupFooter) {
      this.setAttribute('groupFooter', groupFooter);
    }
  }, {
    key: "groupHeader",
    get: function get() {
      return this.getAttribute('groupHeader');
    },
    set: function set(groupHeader) {
      this.setAttribute('groupHeader', groupHeader);
    }
  }, {
    key: "height",
    get: function get() {
      return this.getAttribute('height');
    },
    set: function set(height) {
      this.setAttribute('height', height);
    }
  }, {
    key: "hidden",
    get: function get() {
      return this.getAttribute('hidden');
    },
    set: function set(hidden) {
      this.setAttribute('hidden', hidden);
    }
  }, {
    key: "hideAnimation",
    get: function get() {
      return this.getAttribute('hideAnimation');
    },
    set: function set(hideAnimation) {
      this.setAttribute('hideAnimation', hideAnimation);
    }
  }, {
    key: "hideMode",
    get: function get() {
      return this.getAttribute('hideMode');
    },
    set: function set(hideMode) {
      this.setAttribute('hideMode', hideMode);
    }
  }, {
    key: "hideOnMaskTap",
    get: function get() {
      return this.getAttribute('hideOnMaskTap');
    },
    set: function set(hideOnMaskTap) {
      this.setAttribute('hideOnMaskTap', hideOnMaskTap);
    }
  }, {
    key: "horizontalOverflow",
    get: function get() {
      return this.getAttribute('horizontalOverflow');
    },
    set: function set(horizontalOverflow) {
      this.setAttribute('horizontalOverflow', horizontalOverflow);
    }
  }, {
    key: "html",
    get: function get() {
      return this.getAttribute('html');
    },
    set: function set(html) {
      this.setAttribute('html', html);
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(id) {
      this.setAttribute('id', id);
    }
  }, {
    key: "inactiveChildTabIndex",
    get: function get() {
      return this.getAttribute('inactiveChildTabIndex');
    },
    set: function set(inactiveChildTabIndex) {
      this.setAttribute('inactiveChildTabIndex', inactiveChildTabIndex);
    }
  }, {
    key: "indexBar",
    get: function get() {
      return this.getAttribute('indexBar');
    },
    set: function set(indexBar) {
      this.setAttribute('indexBar', indexBar);
    }
  }, {
    key: "infinite",
    get: function get() {
      return this.getAttribute('infinite');
    },
    set: function set(infinite) {
      this.setAttribute('infinite', infinite);
    }
  }, {
    key: "inline",
    get: function get() {
      return this.getAttribute('inline');
    },
    set: function set(inline) {
      this.setAttribute('inline', inline);
    }
  }, {
    key: "innerCls",
    get: function get() {
      return this.getAttribute('innerCls');
    },
    set: function set(innerCls) {
      this.setAttribute('innerCls', innerCls);
    }
  }, {
    key: "innerCtHeight",
    get: function get() {
      return this.getAttribute('innerCtHeight');
    },
    set: function set(innerCtHeight) {
      this.setAttribute('innerCtHeight', innerCtHeight);
    }
  }, {
    key: "innerWidth",
    get: function get() {
      return this.getAttribute('innerWidth');
    },
    set: function set(innerWidth) {
      this.setAttribute('innerWidth', innerWidth);
    }
  }, {
    key: "instanceCls",
    get: function get() {
      return this.getAttribute('instanceCls');
    },
    set: function set(instanceCls) {
      this.setAttribute('instanceCls', instanceCls);
    }
  }, {
    key: "itemButtonMode",
    get: function get() {
      return this.getAttribute('itemButtonMode');
    },
    set: function set(itemButtonMode) {
      this.setAttribute('itemButtonMode', itemButtonMode);
    }
  }, {
    key: "itemCls",
    get: function get() {
      return this.getAttribute('itemCls');
    },
    set: function set(itemCls) {
      this.setAttribute('itemCls', itemCls);
    }
  }, {
    key: "itemConfig",
    get: function get() {
      return this.getAttribute('itemConfig');
    },
    set: function set(itemConfig) {
      this.setAttribute('itemConfig', itemConfig);
    }
  }, {
    key: "itemContentCls",
    get: function get() {
      return this.getAttribute('itemContentCls');
    },
    set: function set(itemContentCls) {
      this.setAttribute('itemContentCls', itemContentCls);
    }
  }, {
    key: "itemDataMap",
    get: function get() {
      return this.getAttribute('itemDataMap');
    },
    set: function set(itemDataMap) {
      this.setAttribute('itemDataMap', itemDataMap);
    }
  }, {
    key: "itemId",
    get: function get() {
      return this.getAttribute('itemId');
    },
    set: function set(itemId) {
      this.setAttribute('itemId', itemId);
    }
  }, {
    key: "itemInnerCls",
    get: function get() {
      return this.getAttribute('itemInnerCls');
    },
    set: function set(itemInnerCls) {
      this.setAttribute('itemInnerCls', itemInnerCls);
    }
  }, {
    key: "itemRipple",
    get: function get() {
      return this.getAttribute('itemRipple');
    },
    set: function set(itemRipple) {
      this.setAttribute('itemRipple', itemRipple);
    }
  }, {
    key: "items",
    get: function get() {
      return this.getAttribute('items');
    },
    set: function set(items) {
      this.setAttribute('items', items);
    }
  }, {
    key: "itemsFocusable",
    get: function get() {
      return this.getAttribute('itemsFocusable');
    },
    set: function set(itemsFocusable) {
      this.setAttribute('itemsFocusable', itemsFocusable);
    }
  }, {
    key: "itemTpl",
    get: function get() {
      return this.getAttribute('itemTpl');
    },
    set: function set(itemTpl) {
      this.setAttribute('itemTpl', itemTpl);
    }
  }, {
    key: "keyMap",
    get: function get() {
      return this.getAttribute('keyMap');
    },
    set: function set(keyMap) {
      this.setAttribute('keyMap', keyMap);
    }
  }, {
    key: "keyMapEnabled",
    get: function get() {
      return this.getAttribute('keyMapEnabled');
    },
    set: function set(keyMapEnabled) {
      this.setAttribute('keyMapEnabled', keyMapEnabled);
    }
  }, {
    key: "keyMapTarget",
    get: function get() {
      return this.getAttribute('keyMapTarget');
    },
    set: function set(keyMapTarget) {
      this.setAttribute('keyMapTarget', keyMapTarget);
    }
  }, {
    key: "layout",
    get: function get() {
      return this.getAttribute('layout');
    },
    set: function set(layout) {
      this.setAttribute('layout', layout);
    }
  }, {
    key: "left",
    get: function get() {
      return this.getAttribute('left');
    },
    set: function set(left) {
      this.setAttribute('left', left);
    }
  }, {
    key: "listeners",
    get: function get() {
      return this.getAttribute('listeners');
    },
    set: function set(listeners) {
      this.setAttribute('listeners', listeners);
    }
  }, {
    key: "loadingHeight",
    get: function get() {
      return this.getAttribute('loadingHeight');
    },
    set: function set(loadingHeight) {
      this.setAttribute('loadingHeight', loadingHeight);
    }
  }, {
    key: "loadingText",
    get: function get() {
      return this.getAttribute('loadingText');
    },
    set: function set(loadingText) {
      this.setAttribute('loadingText', loadingText);
    }
  }, {
    key: "maintainChildNodes",
    get: function get() {
      return this.getAttribute('maintainChildNodes');
    },
    set: function set(maintainChildNodes) {
      this.setAttribute('maintainChildNodes', maintainChildNodes);
    }
  }, {
    key: "manageBorders",
    get: function get() {
      return this.getAttribute('manageBorders');
    },
    set: function set(manageBorders) {
      this.setAttribute('manageBorders', manageBorders);
    }
  }, {
    key: "margin",
    get: function get() {
      return this.getAttribute('margin');
    },
    set: function set(margin) {
      this.setAttribute('margin', margin);
    }
  }, {
    key: "markDirty",
    get: function get() {
      return this.getAttribute('markDirty');
    },
    set: function set(markDirty) {
      this.setAttribute('markDirty', markDirty);
    }
  }, {
    key: "masked",
    get: function get() {
      return this.getAttribute('masked');
    },
    set: function set(masked) {
      this.setAttribute('masked', masked);
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return this.getAttribute('maxHeight');
    },
    set: function set(maxHeight) {
      this.setAttribute('maxHeight', maxHeight);
    }
  }, {
    key: "maxItemCache",
    get: function get() {
      return this.getAttribute('maxItemCache');
    },
    set: function set(maxItemCache) {
      this.setAttribute('maxItemCache', maxItemCache);
    }
  }, {
    key: "maxWidth",
    get: function get() {
      return this.getAttribute('maxWidth');
    },
    set: function set(maxWidth) {
      this.setAttribute('maxWidth', maxWidth);
    }
  }, {
    key: "minHeight",
    get: function get() {
      return this.getAttribute('minHeight');
    },
    set: function set(minHeight) {
      this.setAttribute('minHeight', minHeight);
    }
  }, {
    key: "minimumBufferDistance",
    get: function get() {
      return this.getAttribute('minimumBufferDistance');
    },
    set: function set(minimumBufferDistance) {
      this.setAttribute('minimumBufferDistance', minimumBufferDistance);
    }
  }, {
    key: "minWidth",
    get: function get() {
      return this.getAttribute('minWidth');
    },
    set: function set(minWidth) {
      this.setAttribute('minWidth', minWidth);
    }
  }, {
    key: "modal",
    get: function get() {
      return this.getAttribute('modal');
    },
    set: function set(modal) {
      this.setAttribute('modal', modal);
    }
  }, {
    key: "modelValidation",
    get: function get() {
      return this.getAttribute('modelValidation');
    },
    set: function set(modelValidation) {
      this.setAttribute('modelValidation', modelValidation);
    }
  }, {
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    },
    set: function set(name) {
      this.setAttribute('name', name);
    }
  }, {
    key: "nameable",
    get: function get() {
      return this.getAttribute('nameable');
    },
    set: function set(nameable) {
      this.setAttribute('nameable', nameable);
    }
  }, {
    key: "nameHolder",
    get: function get() {
      return this.getAttribute('nameHolder');
    },
    set: function set(nameHolder) {
      this.setAttribute('nameHolder', nameHolder);
    }
  }, {
    key: "onItemDisclosure",
    get: function get() {
      return this.getAttribute('onItemDisclosure');
    },
    set: function set(onItemDisclosure) {
      this.setAttribute('onItemDisclosure', onItemDisclosure);
    }
  }, {
    key: "padding",
    get: function get() {
      return this.getAttribute('padding');
    },
    set: function set(padding) {
      this.setAttribute('padding', padding);
    }
  }, {
    key: "pinFooters",
    get: function get() {
      return this.getAttribute('pinFooters');
    },
    set: function set(pinFooters) {
      this.setAttribute('pinFooters', pinFooters);
    }
  }, {
    key: "pinHeaders",
    get: function get() {
      return this.getAttribute('pinHeaders');
    },
    set: function set(pinHeaders) {
      this.setAttribute('pinHeaders', pinHeaders);
    }
  }, {
    key: "pinnedFooter",
    get: function get() {
      return this.getAttribute('pinnedFooter');
    },
    set: function set(pinnedFooter) {
      this.setAttribute('pinnedFooter', pinnedFooter);
    }
  }, {
    key: "pinnedFooterHeight",
    get: function get() {
      return this.getAttribute('pinnedFooterHeight');
    },
    set: function set(pinnedFooterHeight) {
      this.setAttribute('pinnedFooterHeight', pinnedFooterHeight);
    }
  }, {
    key: "pinnedHeader",
    get: function get() {
      return this.getAttribute('pinnedHeader');
    },
    set: function set(pinnedHeader) {
      this.setAttribute('pinnedHeader', pinnedHeader);
    }
  }, {
    key: "pinnedHeaderHeight",
    get: function get() {
      return this.getAttribute('pinnedHeaderHeight');
    },
    set: function set(pinnedHeaderHeight) {
      this.setAttribute('pinnedHeaderHeight', pinnedHeaderHeight);
    }
  }, {
    key: "plugins",
    get: function get() {
      return this.getAttribute('plugins');
    },
    set: function set(plugins) {
      this.setAttribute('plugins', plugins);
    }
  }, {
    key: "pressedDelay",
    get: function get() {
      return this.getAttribute('pressedDelay');
    },
    set: function set(pressedDelay) {
      this.setAttribute('pressedDelay', pressedDelay);
    }
  }, {
    key: "preventSelectionOnDisclose",
    get: function get() {
      return this.getAttribute('preventSelectionOnDisclose');
    },
    set: function set(preventSelectionOnDisclose) {
      this.setAttribute('preventSelectionOnDisclose', preventSelectionOnDisclose);
    }
  }, {
    key: "preventSelectionOnTool",
    get: function get() {
      return this.getAttribute('preventSelectionOnTool');
    },
    set: function set(preventSelectionOnTool) {
      this.setAttribute('preventSelectionOnTool', preventSelectionOnTool);
    }
  }, {
    key: "publishes",
    get: function get() {
      return this.getAttribute('publishes');
    },
    set: function set(publishes) {
      this.setAttribute('publishes', publishes);
    }
  }, {
    key: "record",
    get: function get() {
      return this.getAttribute('record');
    },
    set: function set(record) {
      this.setAttribute('record', record);
    }
  }, {
    key: "reference",
    get: function get() {
      return this.getAttribute('reference');
    },
    set: function set(reference) {
      this.setAttribute('reference', reference);
    }
  }, {
    key: "referenceHolder",
    get: function get() {
      return this.getAttribute('referenceHolder');
    },
    set: function set(referenceHolder) {
      this.setAttribute('referenceHolder', referenceHolder);
    }
  }, {
    key: "relative",
    get: function get() {
      return this.getAttribute('relative');
    },
    set: function set(relative) {
      this.setAttribute('relative', relative);
    }
  }, {
    key: "renderTo",
    get: function get() {
      return this.getAttribute('renderTo');
    },
    set: function set(renderTo) {
      this.setAttribute('renderTo', renderTo);
    }
  }, {
    key: "resetFocusPosition",
    get: function get() {
      return this.getAttribute('resetFocusPosition');
    },
    set: function set(resetFocusPosition) {
      this.setAttribute('resetFocusPosition', resetFocusPosition);
    }
  }, {
    key: "right",
    get: function get() {
      return this.getAttribute('right');
    },
    set: function set(right) {
      this.setAttribute('right', right);
    }
  }, {
    key: "ripple",
    get: function get() {
      return this.getAttribute('ripple');
    },
    set: function set(ripple) {
      this.setAttribute('ripple', ripple);
    }
  }, {
    key: "rowLines",
    get: function get() {
      return this.getAttribute('rowLines');
    },
    set: function set(rowLines) {
      this.setAttribute('rowLines', rowLines);
    }
  }, {
    key: "scrollable",
    get: function get() {
      return this.getAttribute('scrollable');
    },
    set: function set(scrollable) {
      this.setAttribute('scrollable', scrollable);
    }
  }, {
    key: "scrollDock",
    get: function get() {
      return this.getAttribute('scrollDock');
    },
    set: function set(scrollDock) {
      this.setAttribute('scrollDock', scrollDock);
    }
  }, {
    key: "scrollToTopOnRefresh",
    get: function get() {
      return this.getAttribute('scrollToTopOnRefresh');
    },
    set: function set(scrollToTopOnRefresh) {
      this.setAttribute('scrollToTopOnRefresh', scrollToTopOnRefresh);
    }
  }, {
    key: "selectable",
    get: function get() {
      return this.getAttribute('selectable');
    },
    set: function set(selectable) {
      this.setAttribute('selectable', selectable);
    }
  }, {
    key: "selection",
    get: function get() {
      return this.getAttribute('selection');
    },
    set: function set(selection) {
      this.setAttribute('selection', selection);
    }
  }, {
    key: "selfAlign",
    get: function get() {
      return this.getAttribute('selfAlign');
    },
    set: function set(selfAlign) {
      this.setAttribute('selfAlign', selfAlign);
    }
  }, {
    key: "session",
    get: function get() {
      return this.getAttribute('session');
    },
    set: function set(session) {
      this.setAttribute('session', session);
    }
  }, {
    key: "shadow",
    get: function get() {
      return this.getAttribute('shadow');
    },
    set: function set(shadow) {
      this.setAttribute('shadow', shadow);
    }
  }, {
    key: "shareableName",
    get: function get() {
      return this.getAttribute('shareableName');
    },
    set: function set(shareableName) {
      this.setAttribute('shareableName', shareableName);
    }
  }, {
    key: "shim",
    get: function get() {
      return this.getAttribute('shim');
    },
    set: function set(shim) {
      this.setAttribute('shim', shim);
    }
  }, {
    key: "showAnimation",
    get: function get() {
      return this.getAttribute('showAnimation');
    },
    set: function set(showAnimation) {
      this.setAttribute('showAnimation', showAnimation);
    }
  }, {
    key: "stateful",
    get: function get() {
      return this.getAttribute('stateful');
    },
    set: function set(stateful) {
      this.setAttribute('stateful', stateful);
    }
  }, {
    key: "statefulDefaults",
    get: function get() {
      return this.getAttribute('statefulDefaults');
    },
    set: function set(statefulDefaults) {
      this.setAttribute('statefulDefaults', statefulDefaults);
    }
  }, {
    key: "stateId",
    get: function get() {
      return this.getAttribute('stateId');
    },
    set: function set(stateId) {
      this.setAttribute('stateId', stateId);
    }
  }, {
    key: "store",
    get: function get() {
      return this.getAttribute('store');
    },
    set: function set(store) {
      this.setAttribute('store', store);
    }
  }, {
    key: "striped",
    get: function get() {
      return this.getAttribute('striped');
    },
    set: function set(striped) {
      this.setAttribute('striped', striped);
    }
  }, {
    key: "style",
    get: function get() {
      return this.getAttribute('style');
    },
    set: function set(style) {
      this.setAttribute('style', style);
    }
  }, {
    key: "tabIndex",
    get: function get() {
      return this.getAttribute('tabIndex');
    },
    set: function set(tabIndex) {
      this.setAttribute('tabIndex', tabIndex);
    }
  }, {
    key: "toFrontOnShow",
    get: function get() {
      return this.getAttribute('toFrontOnShow');
    },
    set: function set(toFrontOnShow) {
      this.setAttribute('toFrontOnShow', toFrontOnShow);
    }
  }, {
    key: "tooltip",
    get: function get() {
      return this.getAttribute('tooltip');
    },
    set: function set(tooltip) {
      this.setAttribute('tooltip', tooltip);
    }
  }, {
    key: "top",
    get: function get() {
      return this.getAttribute('top');
    },
    set: function set(top) {
      this.setAttribute('top', top);
    }
  }, {
    key: "topRenderedIndex",
    get: function get() {
      return this.getAttribute('topRenderedIndex');
    },
    set: function set(topRenderedIndex) {
      this.setAttribute('topRenderedIndex', topRenderedIndex);
    }
  }, {
    key: "touchAction",
    get: function get() {
      return this.getAttribute('touchAction');
    },
    set: function set(touchAction) {
      this.setAttribute('touchAction', touchAction);
    }
  }, {
    key: "tpl",
    get: function get() {
      return this.getAttribute('tpl');
    },
    set: function set(tpl) {
      this.setAttribute('tpl', tpl);
    }
  }, {
    key: "tplWriteMode",
    get: function get() {
      return this.getAttribute('tplWriteMode');
    },
    set: function set(tplWriteMode) {
      this.setAttribute('tplWriteMode', tplWriteMode);
    }
  }, {
    key: "translatable",
    get: function get() {
      return this.getAttribute('translatable');
    },
    set: function set(translatable) {
      this.setAttribute('translatable', translatable);
    }
  }, {
    key: "triggerCtEvent",
    get: function get() {
      return this.getAttribute('triggerCtEvent');
    },
    set: function set(triggerCtEvent) {
      this.setAttribute('triggerCtEvent', triggerCtEvent);
    }
  }, {
    key: "triggerEvent",
    get: function get() {
      return this.getAttribute('triggerEvent');
    },
    set: function set(triggerEvent) {
      this.setAttribute('triggerEvent', triggerEvent);
    }
  }, {
    key: "twoWayBindable",
    get: function get() {
      return this.getAttribute('twoWayBindable');
    },
    set: function set(twoWayBindable) {
      this.setAttribute('twoWayBindable', twoWayBindable);
    }
  }, {
    key: "ui",
    get: function get() {
      return this.getAttribute('ui');
    },
    set: function set(ui) {
      this.setAttribute('ui', ui);
    }
  }, {
    key: "userCls",
    get: function get() {
      return this.getAttribute('userCls');
    },
    set: function set(userCls) {
      this.setAttribute('userCls', userCls);
    }
  }, {
    key: "userSelectable",
    get: function get() {
      return this.getAttribute('userSelectable');
    },
    set: function set(userSelectable) {
      this.setAttribute('userSelectable', userSelectable);
    }
  }, {
    key: "variableHeights",
    get: function get() {
      return this.getAttribute('variableHeights');
    },
    set: function set(variableHeights) {
      this.setAttribute('variableHeights', variableHeights);
    }
  }, {
    key: "verticalOverflow",
    get: function get() {
      return this.getAttribute('verticalOverflow');
    },
    set: function set(verticalOverflow) {
      this.setAttribute('verticalOverflow', verticalOverflow);
    }
  }, {
    key: "viewModel",
    get: function get() {
      return this.getAttribute('viewModel');
    },
    set: function set(viewModel) {
      this.setAttribute('viewModel', viewModel);
    }
  }, {
    key: "visibleHeight",
    get: function get() {
      return this.getAttribute('visibleHeight');
    },
    set: function set(visibleHeight) {
      this.setAttribute('visibleHeight', visibleHeight);
    }
  }, {
    key: "visibleLeft",
    get: function get() {
      return this.getAttribute('visibleLeft');
    },
    set: function set(visibleLeft) {
      this.setAttribute('visibleLeft', visibleLeft);
    }
  }, {
    key: "visibleTop",
    get: function get() {
      return this.getAttribute('visibleTop');
    },
    set: function set(visibleTop) {
      this.setAttribute('visibleTop', visibleTop);
    }
  }, {
    key: "visibleWidth",
    get: function get() {
      return this.getAttribute('visibleWidth');
    },
    set: function set(visibleWidth) {
      this.setAttribute('visibleWidth', visibleWidth);
    }
  }, {
    key: "weight",
    get: function get() {
      return this.getAttribute('weight');
    },
    set: function set(weight) {
      this.setAttribute('weight', weight);
    }
  }, {
    key: "weighted",
    get: function get() {
      return this.getAttribute('weighted');
    },
    set: function set(weighted) {
      this.setAttribute('weighted', weighted);
    }
  }, {
    key: "width",
    get: function get() {
      return this.getAttribute('width');
    },
    set: function set(width) {
      this.setAttribute('width', width);
    }
  }, {
    key: "x",
    get: function get() {
      return this.getAttribute('x');
    },
    set: function set(x) {
      this.setAttribute('x', x);
    }
  }, {
    key: "xtype",
    get: function get() {
      return this.getAttribute('xtype');
    },
    set: function set(xtype) {
      this.setAttribute('xtype', xtype);
    }
  }, {
    key: "y",
    get: function get() {
      return this.getAttribute('y');
    },
    set: function set(y) {
      this.setAttribute('y', y);
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.getAttribute('zIndex');
    },
    set: function set(zIndex) {
      this.setAttribute('zIndex', zIndex);
    }
  }, {
    key: "platformConfig",
    get: function get() {
      return this.getAttribute('platformConfig');
    },
    set: function set(platformConfig) {
      this.setAttribute('platformConfig', platformConfig);
    }
  }, {
    key: "responsiveConfig",
    get: function get() {
      return this.getAttribute('responsiveConfig');
    },
    set: function set(responsiveConfig) {
      this.setAttribute('responsiveConfig', responsiveConfig);
    }
  }, {
    key: "align",
    get: function get() {
      return this.getAttribute('align');
    },
    set: function set(align) {
      this.setAttribute('align', align);
    }
  }, {
    key: "fitToParent",
    get: function get() {
      return this.getAttribute('fitToParent');
    },
    set: function set(fitToParent) {
      this.setAttribute('fitToParent', fitToParent);
    }
  }, {
    key: "config",
    get: function get() {
      return this.getAttribute('config');
    },
    set: function set(config) {
      this.setAttribute('config', config);
    }
  }, {
    key: "onactivate",
    get: function get() {
      return this.getAttribute('onactivate');
    },
    set: function set(onactivate) {
      this.setAttribute('onactivate', onactivate);
    }
  }, {
    key: "onactiveItemchange",
    get: function get() {
      return this.getAttribute('onactiveItemchange');
    },
    set: function set(onactiveItemchange) {
      this.setAttribute('onactiveItemchange', onactiveItemchange);
    }
  }, {
    key: "onadd",
    get: function get() {
      return this.getAttribute('onadd');
    },
    set: function set(onadd) {
      this.setAttribute('onadd', onadd);
    }
  }, {
    key: "onadded",
    get: function get() {
      return this.getAttribute('onadded');
    },
    set: function set(onadded) {
      this.setAttribute('onadded', onadded);
    }
  }, {
    key: "onbeforeactiveItemchange",
    get: function get() {
      return this.getAttribute('onbeforeactiveItemchange');
    },
    set: function set(onbeforeactiveItemchange) {
      this.setAttribute('onbeforeactiveItemchange', onbeforeactiveItemchange);
    }
  }, {
    key: "onbeforebottomchange",
    get: function get() {
      return this.getAttribute('onbeforebottomchange');
    },
    set: function set(onbeforebottomchange) {
      this.setAttribute('onbeforebottomchange', onbeforebottomchange);
    }
  }, {
    key: "onbeforecenteredchange",
    get: function get() {
      return this.getAttribute('onbeforecenteredchange');
    },
    set: function set(onbeforecenteredchange) {
      this.setAttribute('onbeforecenteredchange', onbeforecenteredchange);
    }
  }, {
    key: "onbeforedisabledchange",
    get: function get() {
      return this.getAttribute('onbeforedisabledchange');
    },
    set: function set(onbeforedisabledchange) {
      this.setAttribute('onbeforedisabledchange', onbeforedisabledchange);
    }
  }, {
    key: "onbeforedockedchange",
    get: function get() {
      return this.getAttribute('onbeforedockedchange');
    },
    set: function set(onbeforedockedchange) {
      this.setAttribute('onbeforedockedchange', onbeforedockedchange);
    }
  }, {
    key: "onbeforeheightchange",
    get: function get() {
      return this.getAttribute('onbeforeheightchange');
    },
    set: function set(onbeforeheightchange) {
      this.setAttribute('onbeforeheightchange', onbeforeheightchange);
    }
  }, {
    key: "onbeforehiddenchange",
    get: function get() {
      return this.getAttribute('onbeforehiddenchange');
    },
    set: function set(onbeforehiddenchange) {
      this.setAttribute('onbeforehiddenchange', onbeforehiddenchange);
    }
  }, {
    key: "onbeforehide",
    get: function get() {
      return this.getAttribute('onbeforehide');
    },
    set: function set(onbeforehide) {
      this.setAttribute('onbeforehide', onbeforehide);
    }
  }, {
    key: "onbeforeleftchange",
    get: function get() {
      return this.getAttribute('onbeforeleftchange');
    },
    set: function set(onbeforeleftchange) {
      this.setAttribute('onbeforeleftchange', onbeforeleftchange);
    }
  }, {
    key: "onbeforemaxHeightchange",
    get: function get() {
      return this.getAttribute('onbeforemaxHeightchange');
    },
    set: function set(onbeforemaxHeightchange) {
      this.setAttribute('onbeforemaxHeightchange', onbeforemaxHeightchange);
    }
  }, {
    key: "onbeforemaxWidthchange",
    get: function get() {
      return this.getAttribute('onbeforemaxWidthchange');
    },
    set: function set(onbeforemaxWidthchange) {
      this.setAttribute('onbeforemaxWidthchange', onbeforemaxWidthchange);
    }
  }, {
    key: "onbeforeminHeightchange",
    get: function get() {
      return this.getAttribute('onbeforeminHeightchange');
    },
    set: function set(onbeforeminHeightchange) {
      this.setAttribute('onbeforeminHeightchange', onbeforeminHeightchange);
    }
  }, {
    key: "onbeforeminWidthchange",
    get: function get() {
      return this.getAttribute('onbeforeminWidthchange');
    },
    set: function set(onbeforeminWidthchange) {
      this.setAttribute('onbeforeminWidthchange', onbeforeminWidthchange);
    }
  }, {
    key: "onbeforeorientationchange",
    get: function get() {
      return this.getAttribute('onbeforeorientationchange');
    },
    set: function set(onbeforeorientationchange) {
      this.setAttribute('onbeforeorientationchange', onbeforeorientationchange);
    }
  }, {
    key: "onbeforerightchange",
    get: function get() {
      return this.getAttribute('onbeforerightchange');
    },
    set: function set(onbeforerightchange) {
      this.setAttribute('onbeforerightchange', onbeforerightchange);
    }
  }, {
    key: "onbeforescrollablechange",
    get: function get() {
      return this.getAttribute('onbeforescrollablechange');
    },
    set: function set(onbeforescrollablechange) {
      this.setAttribute('onbeforescrollablechange', onbeforescrollablechange);
    }
  }, {
    key: "onbeforeshow",
    get: function get() {
      return this.getAttribute('onbeforeshow');
    },
    set: function set(onbeforeshow) {
      this.setAttribute('onbeforeshow', onbeforeshow);
    }
  }, {
    key: "onbeforestorechange",
    get: function get() {
      return this.getAttribute('onbeforestorechange');
    },
    set: function set(onbeforestorechange) {
      this.setAttribute('onbeforestorechange', onbeforestorechange);
    }
  }, {
    key: "onbeforetofront",
    get: function get() {
      return this.getAttribute('onbeforetofront');
    },
    set: function set(onbeforetofront) {
      this.setAttribute('onbeforetofront', onbeforetofront);
    }
  }, {
    key: "onbeforetopchange",
    get: function get() {
      return this.getAttribute('onbeforetopchange');
    },
    set: function set(onbeforetopchange) {
      this.setAttribute('onbeforetopchange', onbeforetopchange);
    }
  }, {
    key: "onbeforewidthchange",
    get: function get() {
      return this.getAttribute('onbeforewidthchange');
    },
    set: function set(onbeforewidthchange) {
      this.setAttribute('onbeforewidthchange', onbeforewidthchange);
    }
  }, {
    key: "onblur",
    get: function get() {
      return this.getAttribute('onblur');
    },
    set: function set(onblur) {
      this.setAttribute('onblur', onblur);
    }
  }, {
    key: "onbottomchange",
    get: function get() {
      return this.getAttribute('onbottomchange');
    },
    set: function set(onbottomchange) {
      this.setAttribute('onbottomchange', onbottomchange);
    }
  }, {
    key: "oncenteredchange",
    get: function get() {
      return this.getAttribute('oncenteredchange');
    },
    set: function set(oncenteredchange) {
      this.setAttribute('oncenteredchange', oncenteredchange);
    }
  }, {
    key: "onchilddoubletap",
    get: function get() {
      return this.getAttribute('onchilddoubletap');
    },
    set: function set(onchilddoubletap) {
      this.setAttribute('onchilddoubletap', onchilddoubletap);
    }
  }, {
    key: "onchildlongpress",
    get: function get() {
      return this.getAttribute('onchildlongpress');
    },
    set: function set(onchildlongpress) {
      this.setAttribute('onchildlongpress', onchildlongpress);
    }
  }, {
    key: "onchildmouseenter",
    get: function get() {
      return this.getAttribute('onchildmouseenter');
    },
    set: function set(onchildmouseenter) {
      this.setAttribute('onchildmouseenter', onchildmouseenter);
    }
  }, {
    key: "onchildmouseleave",
    get: function get() {
      return this.getAttribute('onchildmouseleave');
    },
    set: function set(onchildmouseleave) {
      this.setAttribute('onchildmouseleave', onchildmouseleave);
    }
  }, {
    key: "onchildsingletap",
    get: function get() {
      return this.getAttribute('onchildsingletap');
    },
    set: function set(onchildsingletap) {
      this.setAttribute('onchildsingletap', onchildsingletap);
    }
  }, {
    key: "onchildtap",
    get: function get() {
      return this.getAttribute('onchildtap');
    },
    set: function set(onchildtap) {
      this.setAttribute('onchildtap', onchildtap);
    }
  }, {
    key: "onchildtaphold",
    get: function get() {
      return this.getAttribute('onchildtaphold');
    },
    set: function set(onchildtaphold) {
      this.setAttribute('onchildtaphold', onchildtaphold);
    }
  }, {
    key: "onchildtouchcancel",
    get: function get() {
      return this.getAttribute('onchildtouchcancel');
    },
    set: function set(onchildtouchcancel) {
      this.setAttribute('onchildtouchcancel', onchildtouchcancel);
    }
  }, {
    key: "onchildtouchend",
    get: function get() {
      return this.getAttribute('onchildtouchend');
    },
    set: function set(onchildtouchend) {
      this.setAttribute('onchildtouchend', onchildtouchend);
    }
  }, {
    key: "onchildtouchmove",
    get: function get() {
      return this.getAttribute('onchildtouchmove');
    },
    set: function set(onchildtouchmove) {
      this.setAttribute('onchildtouchmove', onchildtouchmove);
    }
  }, {
    key: "onchildtouchstart",
    get: function get() {
      return this.getAttribute('onchildtouchstart');
    },
    set: function set(onchildtouchstart) {
      this.setAttribute('onchildtouchstart', onchildtouchstart);
    }
  }, {
    key: "ondeactivate",
    get: function get() {
      return this.getAttribute('ondeactivate');
    },
    set: function set(ondeactivate) {
      this.setAttribute('ondeactivate', ondeactivate);
    }
  }, {
    key: "ondeselect",
    get: function get() {
      return this.getAttribute('ondeselect');
    },
    set: function set(ondeselect) {
      this.setAttribute('ondeselect', ondeselect);
    }
  }, {
    key: "ondestroy",
    get: function get() {
      return this.getAttribute('ondestroy');
    },
    set: function set(ondestroy) {
      this.setAttribute('ondestroy', ondestroy);
    }
  }, {
    key: "ondisabledchange",
    get: function get() {
      return this.getAttribute('ondisabledchange');
    },
    set: function set(ondisabledchange) {
      this.setAttribute('ondisabledchange', ondisabledchange);
    }
  }, {
    key: "ondisclose",
    get: function get() {
      return this.getAttribute('ondisclose');
    },
    set: function set(ondisclose) {
      this.setAttribute('ondisclose', ondisclose);
    }
  }, {
    key: "ondockedchange",
    get: function get() {
      return this.getAttribute('ondockedchange');
    },
    set: function set(ondockedchange) {
      this.setAttribute('ondockedchange', ondockedchange);
    }
  }, {
    key: "onerased",
    get: function get() {
      return this.getAttribute('onerased');
    },
    set: function set(onerased) {
      this.setAttribute('onerased', onerased);
    }
  }, {
    key: "onfloatingchange",
    get: function get() {
      return this.getAttribute('onfloatingchange');
    },
    set: function set(onfloatingchange) {
      this.setAttribute('onfloatingchange', onfloatingchange);
    }
  }, {
    key: "onfocus",
    get: function get() {
      return this.getAttribute('onfocus');
    },
    set: function set(onfocus) {
      this.setAttribute('onfocus', onfocus);
    }
  }, {
    key: "onfocusenter",
    get: function get() {
      return this.getAttribute('onfocusenter');
    },
    set: function set(onfocusenter) {
      this.setAttribute('onfocusenter', onfocusenter);
    }
  }, {
    key: "onfocusleave",
    get: function get() {
      return this.getAttribute('onfocusleave');
    },
    set: function set(onfocusleave) {
      this.setAttribute('onfocusleave', onfocusleave);
    }
  }, {
    key: "onfullscreen",
    get: function get() {
      return this.getAttribute('onfullscreen');
    },
    set: function set(onfullscreen) {
      this.setAttribute('onfullscreen', onfullscreen);
    }
  }, {
    key: "onheightchange",
    get: function get() {
      return this.getAttribute('onheightchange');
    },
    set: function set(onheightchange) {
      this.setAttribute('onheightchange', onheightchange);
    }
  }, {
    key: "onhiddenchange",
    get: function get() {
      return this.getAttribute('onhiddenchange');
    },
    set: function set(onhiddenchange) {
      this.setAttribute('onhiddenchange', onhiddenchange);
    }
  }, {
    key: "onhide",
    get: function get() {
      return this.getAttribute('onhide');
    },
    set: function set(onhide) {
      this.setAttribute('onhide', onhide);
    }
  }, {
    key: "oninitialize",
    get: function get() {
      return this.getAttribute('oninitialize');
    },
    set: function set(oninitialize) {
      this.setAttribute('oninitialize', oninitialize);
    }
  }, {
    key: "onitemaction",
    get: function get() {
      return this.getAttribute('onitemaction');
    },
    set: function set(onitemaction) {
      this.setAttribute('onitemaction', onitemaction);
    }
  }, {
    key: "onitemdoubletap",
    get: function get() {
      return this.getAttribute('onitemdoubletap');
    },
    set: function set(onitemdoubletap) {
      this.setAttribute('onitemdoubletap', onitemdoubletap);
    }
  }, {
    key: "onitemlongpress",
    get: function get() {
      return this.getAttribute('onitemlongpress');
    },
    set: function set(onitemlongpress) {
      this.setAttribute('onitemlongpress', onitemlongpress);
    }
  }, {
    key: "onitemmouseenter",
    get: function get() {
      return this.getAttribute('onitemmouseenter');
    },
    set: function set(onitemmouseenter) {
      this.setAttribute('onitemmouseenter', onitemmouseenter);
    }
  }, {
    key: "onitemmouseleave",
    get: function get() {
      return this.getAttribute('onitemmouseleave');
    },
    set: function set(onitemmouseleave) {
      this.setAttribute('onitemmouseleave', onitemmouseleave);
    }
  }, {
    key: "onitemsingletap",
    get: function get() {
      return this.getAttribute('onitemsingletap');
    },
    set: function set(onitemsingletap) {
      this.setAttribute('onitemsingletap', onitemsingletap);
    }
  }, {
    key: "onitemswipe",
    get: function get() {
      return this.getAttribute('onitemswipe');
    },
    set: function set(onitemswipe) {
      this.setAttribute('onitemswipe', onitemswipe);
    }
  }, {
    key: "onitemtap",
    get: function get() {
      return this.getAttribute('onitemtap');
    },
    set: function set(onitemtap) {
      this.setAttribute('onitemtap', onitemtap);
    }
  }, {
    key: "onitemtaphold",
    get: function get() {
      return this.getAttribute('onitemtaphold');
    },
    set: function set(onitemtaphold) {
      this.setAttribute('onitemtaphold', onitemtaphold);
    }
  }, {
    key: "onitemtouchcancel",
    get: function get() {
      return this.getAttribute('onitemtouchcancel');
    },
    set: function set(onitemtouchcancel) {
      this.setAttribute('onitemtouchcancel', onitemtouchcancel);
    }
  }, {
    key: "onitemtouchend",
    get: function get() {
      return this.getAttribute('onitemtouchend');
    },
    set: function set(onitemtouchend) {
      this.setAttribute('onitemtouchend', onitemtouchend);
    }
  }, {
    key: "onitemtouchmove",
    get: function get() {
      return this.getAttribute('onitemtouchmove');
    },
    set: function set(onitemtouchmove) {
      this.setAttribute('onitemtouchmove', onitemtouchmove);
    }
  }, {
    key: "onitemtouchstart",
    get: function get() {
      return this.getAttribute('onitemtouchstart');
    },
    set: function set(onitemtouchstart) {
      this.setAttribute('onitemtouchstart', onitemtouchstart);
    }
  }, {
    key: "onleftchange",
    get: function get() {
      return this.getAttribute('onleftchange');
    },
    set: function set(onleftchange) {
      this.setAttribute('onleftchange', onleftchange);
    }
  }, {
    key: "onmaxHeightchange",
    get: function get() {
      return this.getAttribute('onmaxHeightchange');
    },
    set: function set(onmaxHeightchange) {
      this.setAttribute('onmaxHeightchange', onmaxHeightchange);
    }
  }, {
    key: "onmaxWidthchange",
    get: function get() {
      return this.getAttribute('onmaxWidthchange');
    },
    set: function set(onmaxWidthchange) {
      this.setAttribute('onmaxWidthchange', onmaxWidthchange);
    }
  }, {
    key: "onminHeightchange",
    get: function get() {
      return this.getAttribute('onminHeightchange');
    },
    set: function set(onminHeightchange) {
      this.setAttribute('onminHeightchange', onminHeightchange);
    }
  }, {
    key: "onminWidthchange",
    get: function get() {
      return this.getAttribute('onminWidthchange');
    },
    set: function set(onminWidthchange) {
      this.setAttribute('onminWidthchange', onminWidthchange);
    }
  }, {
    key: "onmove",
    get: function get() {
      return this.getAttribute('onmove');
    },
    set: function set(onmove) {
      this.setAttribute('onmove', onmove);
    }
  }, {
    key: "onmoved",
    get: function get() {
      return this.getAttribute('onmoved');
    },
    set: function set(onmoved) {
      this.setAttribute('onmoved', onmoved);
    }
  }, {
    key: "onnavigate",
    get: function get() {
      return this.getAttribute('onnavigate');
    },
    set: function set(onnavigate) {
      this.setAttribute('onnavigate', onnavigate);
    }
  }, {
    key: "onorientationchange",
    get: function get() {
      return this.getAttribute('onorientationchange');
    },
    set: function set(onorientationchange) {
      this.setAttribute('onorientationchange', onorientationchange);
    }
  }, {
    key: "onpainted",
    get: function get() {
      return this.getAttribute('onpainted');
    },
    set: function set(onpainted) {
      this.setAttribute('onpainted', onpainted);
    }
  }, {
    key: "onpositionedchange",
    get: function get() {
      return this.getAttribute('onpositionedchange');
    },
    set: function set(onpositionedchange) {
      this.setAttribute('onpositionedchange', onpositionedchange);
    }
  }, {
    key: "onrefresh",
    get: function get() {
      return this.getAttribute('onrefresh');
    },
    set: function set(onrefresh) {
      this.setAttribute('onrefresh', onrefresh);
    }
  }, {
    key: "onremove",
    get: function get() {
      return this.getAttribute('onremove');
    },
    set: function set(onremove) {
      this.setAttribute('onremove', onremove);
    }
  }, {
    key: "onremoved",
    get: function get() {
      return this.getAttribute('onremoved');
    },
    set: function set(onremoved) {
      this.setAttribute('onremoved', onremoved);
    }
  }, {
    key: "onrenderedchange",
    get: function get() {
      return this.getAttribute('onrenderedchange');
    },
    set: function set(onrenderedchange) {
      this.setAttribute('onrenderedchange', onrenderedchange);
    }
  }, {
    key: "onresize",
    get: function get() {
      return this.getAttribute('onresize');
    },
    set: function set(onresize) {
      this.setAttribute('onresize', onresize);
    }
  }, {
    key: "onrightchange",
    get: function get() {
      return this.getAttribute('onrightchange');
    },
    set: function set(onrightchange) {
      this.setAttribute('onrightchange', onrightchange);
    }
  }, {
    key: "onscrollablechange",
    get: function get() {
      return this.getAttribute('onscrollablechange');
    },
    set: function set(onscrollablechange) {
      this.setAttribute('onscrollablechange', onscrollablechange);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
    }
  }, {
    key: "onshow",
    get: function get() {
      return this.getAttribute('onshow');
    },
    set: function set(onshow) {
      this.setAttribute('onshow', onshow);
    }
  }, {
    key: "onstorechange",
    get: function get() {
      return this.getAttribute('onstorechange');
    },
    set: function set(onstorechange) {
      this.setAttribute('onstorechange', onstorechange);
    }
  }, {
    key: "ontofront",
    get: function get() {
      return this.getAttribute('ontofront');
    },
    set: function set(ontofront) {
      this.setAttribute('ontofront', ontofront);
    }
  }, {
    key: "ontopchange",
    get: function get() {
      return this.getAttribute('ontopchange');
    },
    set: function set(ontopchange) {
      this.setAttribute('ontopchange', ontopchange);
    }
  }, {
    key: "onupdatedata",
    get: function get() {
      return this.getAttribute('onupdatedata');
    },
    set: function set(onupdatedata) {
      this.setAttribute('onupdatedata', onupdatedata);
    }
  }, {
    key: "onwidthchange",
    get: function get() {
      return this.getAttribute('onwidthchange');
    },
    set: function set(onwidthchange) {
      this.setAttribute('onwidthchange', onwidthchange);
    }
  }]);

  function ExtBoundlistComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtBoundlistComponent.METHODS();
    _this.XTYPE = ExtBoundlistComponent.XTYPE(); //this.PROPERTIES = ExtBoundlistComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtBoundlistComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtBoundlistComponent.EVENTS();
    return _this;
  }

  var _proto = ExtBoundlistComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtBoundlistComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-boundlist', ExtBoundlistComponent);
  });
})();