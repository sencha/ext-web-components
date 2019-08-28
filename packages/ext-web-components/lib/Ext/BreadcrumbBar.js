import Ext_Toolbar_Component from '../Ext/Toolbar';

export default class Ext_BreadcrumbBar_Component extends Ext_Toolbar_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get onselectionchange(){return this.getAttribute('onselectionchange')};set onselectionchange(onselectionchange){this.setAttribute('onselectionchange',onselectionchange)}
//configs

static XTYPE() {return 'breadcrumbbar'}
static PROPERTIESOBJECT() { return {
"btnCls":["string"],
"buttonConfig":["object"],
"buttonUI":["string"],
"displayField":["string"],
"menu":["Ext.menu.Menu","boolean","object"],
"publishes":["string","string[]","object"],
"selection":["Ext.data.TreeModel","string"],
"showIcons":["boolean"],
"showMenuIcons":["boolean"],
"store":["Ext.data.TreeStore"],
"twoWayBindable":["string","string[]","object"],
"useSplitButtons":["boolean"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,node,prevNode'},
{name:'selectionchange',parameters:'undefined,node,prevNode'},
]}
static METHODS() { return [
{ name:'getMenuItems',function: function(nodeId) { return this.ext.getMenuItems(nodeId) } },
{ name:'getSelection',function: function() { return this.ext.getSelection() } },
{ name:'handleMenu',function: function(buttons,refreshMenuItems,forceCreate) { return this.ext.handleMenu(buttons,refreshMenuItems,forceCreate) } },
{ name:'onButtonTap',function: function(button,e) { return this.ext.onButtonTap(button,e) } },
{ name:'onMenuClick',function: function(menu,item,e) { return this.ext.onMenuClick(menu,item,e) } },
{ name:'onStoreClear',function: function() { return this.ext.onStoreClear() } },
{ name:'onStoreDataChange',function: function() { return this.ext.onStoreDataChange() } },
{ name:'removeAllBreadcrumbButtons',function: function() { return this.ext.removeAllBreadcrumbButtons() } },
{ name:'setSelection',function: function(node) { return this.ext.setSelection(node) } },
{ name:'updateButtonOnDataChange',function: function() { return this.ext.updateButtonOnDataChange() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_BreadcrumbBar_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_BreadcrumbBar_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_BreadcrumbBar_Component.METHODS(),
            Ext_BreadcrumbBar_Component.XTYPE(),
            Ext_BreadcrumbBar_Component.PROPERTIESOBJECT(),
            Ext_BreadcrumbBar_Component.EVENTS()
        )
        this.XTYPE = Ext_BreadcrumbBar_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_BreadcrumbBar_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_BreadcrumbBar_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_BreadcrumbBar_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
