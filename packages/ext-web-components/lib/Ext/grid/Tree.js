import Ext_grid_Grid_Component from '../../Ext/grid/Grid';

export default class Ext_grid_Tree_Component extends Ext_grid_Grid_Component {
//events
get onbeforecheckchange(){return this.getAttribute('onbeforecheckchange')};set onbeforecheckchange(onbeforecheckchange){this.setAttribute('onbeforecheckchange',onbeforecheckchange)}
get onbeforeload(){return this.getAttribute('onbeforeload')};set onbeforeload(onbeforeload){this.setAttribute('onbeforeload',onbeforeload)}
get onbeforenodecollapse(){return this.getAttribute('onbeforenodecollapse')};set onbeforenodecollapse(onbeforenodecollapse){this.setAttribute('onbeforenodecollapse',onbeforenodecollapse)}
get onbeforenodeexpand(){return this.getAttribute('onbeforenodeexpand')};set onbeforenodeexpand(onbeforenodeexpand){this.setAttribute('onbeforenodeexpand',onbeforenodeexpand)}
get oncheckchange(){return this.getAttribute('oncheckchange')};set oncheckchange(oncheckchange){this.setAttribute('oncheckchange',oncheckchange)}
get onload(){return this.getAttribute('onload')};set onload(onload){this.setAttribute('onload',onload)}
get onnodecollapse(){return this.getAttribute('onnodecollapse')};set onnodecollapse(onnodecollapse){this.setAttribute('onnodecollapse',onnodecollapse)}
get onnodeexpand(){return this.getAttribute('onnodeexpand')};set onnodeexpand(onnodeexpand){this.setAttribute('onnodeexpand',onnodeexpand)}
//configs

static XTYPE() {return 'tree'}
static PROPERTIESOBJECT() { return {
"expanderFirst":["boolean"],
"expanderOnly":["boolean"],
"folderSort":["boolean"],
"selectOnExpander":["boolean"],
"singleExpand":["boolean"],
}}
static EVENTS() { return [
{name:'beforecheckchange',parameters:'undefined,checked,current,record,e'},
{name:'beforeload',parameters:'store,operation'},
{name:'beforenodecollapse',parameters:'node,record'},
{name:'beforenodeexpand',parameters:'row,record'},
{name:'checkchange',parameters:'cell,checked,record,e'},
{name:'load',parameters:'undefined,records,successful,operation,node'},
{name:'nodecollapse',parameters:'node,record'},
{name:'nodeexpand',parameters:'row,record'},
]}
static METHODS() { return [
{ name:'collapseAll',function: function(callback,scope) { return this.ext.collapseAll(callback,scope) } },
{ name:'collapseNode',function: function(record,deep,callback,scope) { return this.ext.collapseNode(record,deep,callback,scope) } },
{ name:'expandAll',function: function(callback,scope) { return this.ext.expandAll(callback,scope) } },
{ name:'expandNode',function: function(record,deep,callback,scope) { return this.ext.expandNode(record,deep,callback,scope) } },
{ name:'getChecked',function: function() { return this.ext.getChecked() } },
{ name:'getCheckedChildItems',function: function(childNodes,checked) { return this.ext.getCheckedChildItems(childNodes,checked) } },
{ name:'getRootNode',function: function() { return this.ext.getRootNode() } },
{ name:'setRootNode',function: function(root) { return this.ext.setRootNode(root) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_Tree_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_Tree_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_Tree_Component.METHODS(),
            Ext_grid_Tree_Component.XTYPE(),
            Ext_grid_Tree_Component.PROPERTIESOBJECT(),
            Ext_grid_Tree_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_Tree_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_Tree_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_Tree_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_Tree_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
