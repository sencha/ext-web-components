import Ext_Container_Component from '../../Ext/Container';

export default class Ext_dataview_NestedList_Component extends Ext_Container_Component {
//events
get onback(){return this.getAttribute('onback')};set onback(onback){this.setAttribute('onback',onback)}
get onbeforeload(){return this.getAttribute('onbeforeload')};set onbeforeload(onbeforeload){this.setAttribute('onbeforeload',onbeforeload)}
get onbeforeselectionchange(){return this.getAttribute('onbeforeselectionchange')};set onbeforeselectionchange(onbeforeselectionchange){this.setAttribute('onbeforeselectionchange',onbeforeselectionchange)}
get oncontainertap(){return this.getAttribute('oncontainertap')};set oncontainertap(oncontainertap){this.setAttribute('oncontainertap',oncontainertap)}
get ondeselect(){return this.getAttribute('ondeselect')};set ondeselect(ondeselect){this.setAttribute('ondeselect',ondeselect)}
get onitemdoubletap(){return this.getAttribute('onitemdoubletap')};set onitemdoubletap(onitemdoubletap){this.setAttribute('onitemdoubletap',onitemdoubletap)}
get onitemtap(){return this.getAttribute('onitemtap')};set onitemtap(onitemtap){this.setAttribute('onitemtap',onitemtap)}
get onleafitemtap(){return this.getAttribute('onleafitemtap')};set onleafitemtap(onleafitemtap){this.setAttribute('onleafitemtap',onleafitemtap)}
get onlistchange(){return this.getAttribute('onlistchange')};set onlistchange(onlistchange){this.setAttribute('onlistchange',onlistchange)}
get onload(){return this.getAttribute('onload')};set onload(onload){this.setAttribute('onload',onload)}
get onselect(){return this.getAttribute('onselect')};set onselect(onselect){this.setAttribute('onselect',onselect)}
get onselectionchange(){return this.getAttribute('onselectionchange')};set onselectionchange(onselectionchange){this.setAttribute('onselectionchange',onselectionchange)}
//configs

static XTYPE() {return 'nestedlist'}
static PROPERTIESOBJECT() { return {
"allowDeselect":["boolean"],
"backButton":["object"],
"backText":["string"],
"cardSwitchAnimation":["string","object","boolean"],
"detailCard":["Ext.Component"],
"detailContainer":["Ext.Container"],
"displayField":["string"],
"emptyText":["string"],
"lastActiveList":["any"],
"lastNode":["any"],
"layout":["string"],
"listConfig":["object"],
"loadingText":["string"],
"onItemDisclosure":["boolean","function"],
"store":["Ext.data.TreeStore","string"],
"title":["string"],
"toolbar":["Ext.Toolbar","object","boolean"],
"updateTitleText":["boolean"],
"useTitleAsBackText":["boolean"],
"variableHeights":["boolean"],
}}
static EVENTS() { return [
{name:'back',parameters:'undefined,node,lastActiveList,detailCardActive'},
{name:'beforeload',parameters:'undefined,store,operation'},
{name:'beforeselectionchange',parameters:'undefined,list,node,selections'},
{name:'containertap',parameters:'undefined,list,e'},
{name:'deselect',parameters:'undefined,list,selections'},
{name:'itemdoubletap',parameters:'undefined,list,index,target,record,e'},
{name:'itemtap',parameters:'undefined,list,index,target,record,e'},
{name:'leafitemtap',parameters:'undefined,list,index,target,record,e'},
{name:'listchange',parameters:'undefined,listitem'},
{name:'load',parameters:'undefined,store,records,successful,operation'},
{name:'select',parameters:'undefined,list,selections'},
{name:'selectionchange',parameters:'undefined,list,selections'},
]}
static METHODS() { return [
{ name:'getItemTextTpl',function: function(node) { return this.ext.getItemTextTpl(node) } },
{ name:'getList',function: function(node) { return this.ext.getList(node) } },
{ name:'getTitleTextTpl',function: function(node) { return this.ext.getTitleTextTpl(node) } },
{ name:'goToLeaf',function: function(node) { return this.ext.goToLeaf(node) } },
{ name:'goToNode',function: function(node) { return this.ext.goToNode(node) } },
{ name:'goToNodeReverseAnimation',function: function(node) { return this.ext.goToNodeReverseAnimation(node) } },
{ name:'onBackTap',function: function() { return this.ext.onBackTap() } },
{ name:'onChildTap',function: function(list,location) { return this.ext.onChildTap(list,location) } },
{ name:'renderTitleText',function: function(node,forBackButton) { return this.ext.renderTitleText(node,forBackButton) } },
{ name:'setToolbarTitle',function: function(newTitle) { return this.ext.setToolbarTitle(newTitle) } },
{ name:'syncToolbar',function: function(forceDetail) { return this.ext.syncToolbar(forceDetail) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_NestedList_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_NestedList_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_dataview_NestedList_Component.METHODS(),
            Ext_dataview_NestedList_Component.XTYPE(),
            Ext_dataview_NestedList_Component.PROPERTIESOBJECT(),
            Ext_dataview_NestedList_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_NestedList_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_NestedList_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_NestedList_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_NestedList_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
