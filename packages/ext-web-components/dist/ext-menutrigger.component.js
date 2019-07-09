import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import ExtBase from './base';
export var ExtMenutriggerComponent =
/*#__PURE__*/
function (_ExtBase) {
  _inheritsLoose(ExtMenutriggerComponent, _ExtBase);

  ExtMenutriggerComponent.XTYPE = function XTYPE() {
    return 'menutrigger';
  };

  ExtMenutriggerComponent.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "alignSelf": ["string"],
      "alwaysOnTop": ["boolean", "number"],
      "ariaAttributes": ["object"],
      "ariaDescribedBy": ["string"],
      "ariaLabel": ["string"],
      "ariaLabelledBy": ["string"],
      "bind": ["object", "string"],
      "border": ["boolean"],
      "cls": ["string", "string[]"],
      "constrainAlign": ["string", "Ext.util.Region", "Ext.dom.Element"],
      "controller": ["string", "object", "Ext.app.ViewController"],
      "defaultListenerScope": ["boolean"],
      "destroyMenu": ["boolean"],
      "disabled": ["boolean"],
      "field": ["Ext.field.Text"],
      "flex": ["number", "string", "object"],
      "floated": ["boolean"],
      "focusCls": ["string"],
      "focusOnTap": ["boolean"],
      "group": ["string"],
      "handler": ["function", "string"],
      "height": ["number", "string"],
      "hidden": ["boolean"],
      "hideMode": ["'clip'", "'display'", "'offsets'", "'opacity'", "'visibility'"],
      "iconCls": ["string"],
      "id": ["string"],
      "instanceCls": ["string", "string[]"],
      "itemId": ["string"],
      "keyMap": ["object"],
      "keyMapEnabled": ["boolean"],
      "keyMapTarget": ["string"],
      "listeners": ["object"],
      "margin": ["number", "string"],
      "menu": ["Ext.menu.Menu", "string", "object"],
      "menuAlign": ["string"],
      "name": ["string"],
      "nameable": ["boolean"],
      "plugins": ["array", "Ext.enums.Plugin", "object", "Ext.plugin.Abstract"],
      "publishes": ["string", "string[]", "object"],
      "reference": ["string"],
      "relative": ["boolean"],
      "renderTo": ["Ext.dom.Element"],
      "repeat": ["boolean", "object"],
      "ripple": ["boolean", "object", "string"],
      "scope": ["object"],
      "session": ["boolean", "object", "Ext.data.Session"],
      "shadow": ["boolean"],
      "shareableName": ["boolean"],
      "shim": ["boolean"],
      "side": ["'left'", "'right'"],
      "style": ["string", "object"],
      "toFrontOnShow": ["boolean"],
      "touchAction": ["object"],
      "translatable": ["object"],
      "triggers": ["any"],
      "twoWayBindable": ["string", "string[]", "object"],
      "ui": ["string", "string[]"],
      "userCls": ["string", "string[]"],
      "viewModel": ["string", "object", "Ext.app.ViewModel"],
      "width": ["number", "string"],
      "x": ["number"],
      "y": ["number"],
      "platformConfig": "Object",
      "responsiveConfig": "Object",
      "align": "Obyect",
      "fitToParent": "Boolean",
      "config": "Object"
    };
  };

  ExtMenutriggerComponent.EVENTS = function EVENTS() {
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
      parameters: 'menutrigger'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'menutrigger,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'menutrigger,event'
    }, {
      name: 'focusenter',
      parameters: 'menutrigger,event'
    }, {
      name: 'focusleave',
      parameters: 'menutrigger,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'tofront',
      parameters: 'menutrigger'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  ExtMenutriggerComponent.METHODS = function METHODS() {
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
      name: 'activatePlugin',
      "function": function _function(type) {
        return this.ext.activatePlugin(type);
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
      name: 'applyBind',
      "function": function _function(binds, currentBindings) {
        return this.ext.applyBind(binds, currentBindings);
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
      name: 'applyViewModel',
      "function": function _function(viewModel) {
        return this.ext.applyViewModel(viewModel);
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
      name: 'doUninheritUi',
      "function": function _function() {
        return this.ext.doUninheritUi();
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
      name: 'getElementConfig',
      "function": function _function() {
        return this.ext.getElementConfig();
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
      name: 'getPlugin',
      "function": function _function(id) {
        return this.ext.getPlugin(id);
      }
    }, {
      name: 'getRefOwner',
      "function": function _function() {
        return this.ext.getRefOwner();
      }
    }, {
      name: 'getSize',
      "function": function _function() {
        return this.ext.getSize();
      }
    }, {
      name: 'getTabIndex',
      "function": function _function() {
        return this.ext.getTabIndex();
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
      name: 'hasListener',
      "function": function _function(eventName) {
        return this.ext.hasListener(eventName);
      }
    }, {
      name: 'initBindable',
      "function": function _function() {
        return this.ext.initBindable();
      }
    }, {
      name: 'initConfig',
      "function": function _function(instanceConfig) {
        return this.ext.initConfig(instanceConfig);
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
      name: 'initInheritedState',
      "function": function _function(inheritedState, inheritedStateInner) {
        return this.ext.initInheritedState(inheritedState, inheritedStateInner);
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
      name: 'insertFloatedDom',
      "function": function _function(needsShow) {
        return this.ext.insertFloatedDom(needsShow);
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
      name: 'isSuspended',
      "function": function _function(event) {
        return this.ext.isSuspended(event);
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
      name: 'link',
      "function": function _function(name, value) {
        return this.ext.link(name, value);
      }
    }, {
      name: 'lookupController',
      "function": function _function(skipThis) {
        return this.ext.lookupController(skipThis);
      }
    }, {
      name: 'lookupNameHolder',
      "function": function _function(skipThis) {
        return this.ext.lookupNameHolder(skipThis);
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
      name: 'onRender',
      "function": function _function() {
        return this.ext.onRender();
      }
    }, {
      name: 'owns',
      "function": function _function(element) {
        return this.ext.owns(element);
      }
    }, {
      name: 'processElementConfig',
      "function": function _function() {
        return this.ext.processElementConfig();
      }
    }, {
      name: 'publishState',
      "function": function _function(property, value) {
        return this.ext.publishState(property, value);
      }
    }, {
      name: 'realign',
      "function": function _function(component, alignment, options) {
        return this.ext.realign(component, alignment, options);
      }
    }, {
      name: 'relayEvents',
      "function": function _function(origin, events, prefix) {
        return this.ext.relayEvents(origin, events, prefix);
      }
    }, {
      name: 'removeAfterListener',
      "function": function _function() {
        return this.ext.removeAfterListener();
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
      name: 'replaceCls',
      "function": function _function(oldCls, newCls, prefix, suffix) {
        return this.ext.replaceCls(oldCls, newCls, prefix, suffix);
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
      name: 'watchConfig',
      "function": function _function(name, fn, scope) {
        return this.ext.watchConfig(name, fn, scope);
      }
    }];
  };

  _createClass(ExtMenutriggerComponent, [{
    key: "alignSelf",
    get: function get() {
      return this.getAttribute('alignSelf');
    },
    set: function set(alignSelf) {
      this.setAttribute('alignSelf', alignSelf);
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
    key: "controller",
    get: function get() {
      return this.getAttribute('controller');
    },
    set: function set(controller) {
      this.setAttribute('controller', controller);
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
    key: "destroyMenu",
    get: function get() {
      return this.getAttribute('destroyMenu');
    },
    set: function set(destroyMenu) {
      this.setAttribute('destroyMenu', destroyMenu);
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
    key: "field",
    get: function get() {
      return this.getAttribute('field');
    },
    set: function set(field) {
      this.setAttribute('field', field);
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
    key: "focusCls",
    get: function get() {
      return this.getAttribute('focusCls');
    },
    set: function set(focusCls) {
      this.setAttribute('focusCls', focusCls);
    }
  }, {
    key: "focusOnTap",
    get: function get() {
      return this.getAttribute('focusOnTap');
    },
    set: function set(focusOnTap) {
      this.setAttribute('focusOnTap', focusOnTap);
    }
  }, {
    key: "group",
    get: function get() {
      return this.getAttribute('group');
    },
    set: function set(group) {
      this.setAttribute('group', group);
    }
  }, {
    key: "handler",
    get: function get() {
      return this.getAttribute('handler');
    },
    set: function set(handler) {
      this.setAttribute('handler', handler);
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
    key: "hideMode",
    get: function get() {
      return this.getAttribute('hideMode');
    },
    set: function set(hideMode) {
      this.setAttribute('hideMode', hideMode);
    }
  }, {
    key: "iconCls",
    get: function get() {
      return this.getAttribute('iconCls');
    },
    set: function set(iconCls) {
      this.setAttribute('iconCls', iconCls);
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
    key: "instanceCls",
    get: function get() {
      return this.getAttribute('instanceCls');
    },
    set: function set(instanceCls) {
      this.setAttribute('instanceCls', instanceCls);
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
    key: "listeners",
    get: function get() {
      return this.getAttribute('listeners');
    },
    set: function set(listeners) {
      this.setAttribute('listeners', listeners);
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
    key: "menu",
    get: function get() {
      return this.getAttribute('menu');
    },
    set: function set(menu) {
      this.setAttribute('menu', menu);
    }
  }, {
    key: "menuAlign",
    get: function get() {
      return this.getAttribute('menuAlign');
    },
    set: function set(menuAlign) {
      this.setAttribute('menuAlign', menuAlign);
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
    key: "plugins",
    get: function get() {
      return this.getAttribute('plugins');
    },
    set: function set(plugins) {
      this.setAttribute('plugins', plugins);
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
    key: "reference",
    get: function get() {
      return this.getAttribute('reference');
    },
    set: function set(reference) {
      this.setAttribute('reference', reference);
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
    key: "repeat",
    get: function get() {
      return this.getAttribute('repeat');
    },
    set: function set(repeat) {
      this.setAttribute('repeat', repeat);
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
    key: "scope",
    get: function get() {
      return this.getAttribute('scope');
    },
    set: function set(scope) {
      this.setAttribute('scope', scope);
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
    key: "side",
    get: function get() {
      return this.getAttribute('side');
    },
    set: function set(side) {
      this.setAttribute('side', side);
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
    key: "toFrontOnShow",
    get: function get() {
      return this.getAttribute('toFrontOnShow');
    },
    set: function set(toFrontOnShow) {
      this.setAttribute('toFrontOnShow', toFrontOnShow);
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
    key: "translatable",
    get: function get() {
      return this.getAttribute('translatable');
    },
    set: function set(translatable) {
      this.setAttribute('translatable', translatable);
    }
  }, {
    key: "triggers",
    get: function get() {
      return this.getAttribute('triggers');
    },
    set: function set(triggers) {
      this.setAttribute('triggers', triggers);
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
    key: "viewModel",
    get: function get() {
      return this.getAttribute('viewModel');
    },
    set: function set(viewModel) {
      this.setAttribute('viewModel', viewModel);
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
    key: "y",
    get: function get() {
      return this.getAttribute('y');
    },
    set: function set(y) {
      this.setAttribute('y', y);
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
    key: "onbeforedisabledchange",
    get: function get() {
      return this.getAttribute('onbeforedisabledchange');
    },
    set: function set(onbeforedisabledchange) {
      this.setAttribute('onbeforedisabledchange', onbeforedisabledchange);
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
    key: "onbeforetofront",
    get: function get() {
      return this.getAttribute('onbeforetofront');
    },
    set: function set(onbeforetofront) {
      this.setAttribute('onbeforetofront', onbeforetofront);
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
    key: "ondisabledchange",
    get: function get() {
      return this.getAttribute('ondisabledchange');
    },
    set: function set(ondisabledchange) {
      this.setAttribute('ondisabledchange', ondisabledchange);
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
    key: "ontofront",
    get: function get() {
      return this.getAttribute('ontofront');
    },
    set: function set(ontofront) {
      this.setAttribute('ontofront', ontofront);
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

  function ExtMenutriggerComponent() {
    var _this;

    _this = _ExtBase.call(this) || this;
    _this.METHODS = ExtMenutriggerComponent.METHODS();
    _this.XTYPE = ExtMenutriggerComponent.XTYPE(); //this.PROPERTIES = ExtMenutriggerComponent.PROPERTIES()

    _this.PROPERTIESOBJECT = ExtMenutriggerComponent.PROPERTIESOBJECT();
    _this.EVENTS = ExtMenutriggerComponent.EVENTS();
    return _this;
  }

  var _proto = ExtMenutriggerComponent.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _ExtBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _ExtBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return ExtMenutriggerComponent;
}(ExtBase);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-menutrigger', ExtMenutriggerComponent);
  });
})();