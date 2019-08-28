import Ext_list_AbstractTreeItem_Component from '../../Ext/list/AbstractTreeItem';

export default class Ext_list_TreeItem_Component extends Ext_list_AbstractTreeItem_Component {
//events
//configs

static XTYPE() {return 'treelistitem'}
static PROPERTIESOBJECT() { return {
"rowCls":["string"],
"rowClsProperty":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_list_TreeItem_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_list_TreeItem_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_list_TreeItem_Component.METHODS(),
            Ext_list_TreeItem_Component.XTYPE(),
            Ext_list_TreeItem_Component.PROPERTIESOBJECT(),
            Ext_list_TreeItem_Component.EVENTS()
        )
        this.XTYPE = Ext_list_TreeItem_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_list_TreeItem_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_list_TreeItem_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_list_TreeItem_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
