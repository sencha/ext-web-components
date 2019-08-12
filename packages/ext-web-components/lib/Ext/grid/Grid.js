import Ext_dataview_List_Component from '../../Ext/dataview/List';

export default class Ext_grid_Grid_Component extends Ext_dataview_List_Component {
//events
get onbeforecomplete(){return this.getAttribute('onbeforecomplete')};set onbeforecomplete(onbeforecomplete){this.setAttribute('onbeforecomplete',onbeforecomplete)}
get onbeforeedit(){return this.getAttribute('onbeforeedit')};set onbeforeedit(onbeforeedit){this.setAttribute('onbeforeedit',onbeforeedit)}
get onbeforeselectionextend(){return this.getAttribute('onbeforeselectionextend')};set onbeforeselectionextend(onbeforeselectionextend){this.setAttribute('onbeforeselectionextend',onbeforeselectionextend)}
get onbeforestartedit(){return this.getAttribute('onbeforestartedit')};set onbeforestartedit(onbeforestartedit){this.setAttribute('onbeforestartedit',onbeforestartedit)}
get oncanceledit(){return this.getAttribute('oncanceledit')};set oncanceledit(oncanceledit){this.setAttribute('oncanceledit',oncanceledit)}
get oncanceledit(){return this.getAttribute('oncanceledit')};set oncanceledit(oncanceledit){this.setAttribute('oncanceledit',oncanceledit)}
get oncellselection(){return this.getAttribute('oncellselection')};set oncellselection(oncellselection){this.setAttribute('oncellselection',oncellselection)}
get oncolumnadd(){return this.getAttribute('oncolumnadd')};set oncolumnadd(oncolumnadd){this.setAttribute('oncolumnadd',oncolumnadd)}
get oncolumnhide(){return this.getAttribute('oncolumnhide')};set oncolumnhide(oncolumnhide){this.setAttribute('oncolumnhide',oncolumnhide)}
get oncolumnmenucreated(){return this.getAttribute('oncolumnmenucreated')};set oncolumnmenucreated(oncolumnmenucreated){this.setAttribute('oncolumnmenucreated',oncolumnmenucreated)}
get oncolumnmove(){return this.getAttribute('oncolumnmove')};set oncolumnmove(oncolumnmove){this.setAttribute('oncolumnmove',oncolumnmove)}
get oncolumnremove(){return this.getAttribute('oncolumnremove')};set oncolumnremove(oncolumnremove){this.setAttribute('oncolumnremove',oncolumnremove)}
get oncolumnresize(){return this.getAttribute('oncolumnresize')};set oncolumnresize(oncolumnresize){this.setAttribute('oncolumnresize',oncolumnresize)}
get oncolumnselection(){return this.getAttribute('oncolumnselection')};set oncolumnselection(oncolumnselection){this.setAttribute('oncolumnselection',oncolumnselection)}
get oncolumnshow(){return this.getAttribute('oncolumnshow')};set oncolumnshow(oncolumnshow){this.setAttribute('oncolumnshow',oncolumnshow)}
get oncolumnsort(){return this.getAttribute('oncolumnsort')};set oncolumnsort(oncolumnsort){this.setAttribute('oncolumnsort',oncolumnsort)}
get oncomplete(){return this.getAttribute('oncomplete')};set oncomplete(oncomplete){this.setAttribute('oncomplete',oncomplete)}
get onedit(){return this.getAttribute('onedit')};set onedit(onedit){this.setAttribute('onedit',onedit)}
get onselectionextenderdrag(){return this.getAttribute('onselectionextenderdrag')};set onselectionextenderdrag(onselectionextenderdrag){this.setAttribute('onselectionextenderdrag',onselectionextenderdrag)}
get onspecialkey(){return this.getAttribute('onspecialkey')};set onspecialkey(onspecialkey){this.setAttribute('onspecialkey',onspecialkey)}
get onstartedit(){return this.getAttribute('onstartedit')};set onstartedit(onstartedit){this.setAttribute('onstartedit',onstartedit)}
get onvalidateedit(){return this.getAttribute('onvalidateedit')};set onvalidateedit(onvalidateedit){this.setAttribute('onvalidateedit',onvalidateedit)}
//configs

static XTYPE() {return 'grid'}
static PROPERTIESOBJECT() { return {
"columnLines":["boolean"],
"columnMenu":["object"],
"columnResize":["boolean"],
"columns":["Ext.grid.column.Column[]"],
"columnsMenuItem":["Ext.grid.menu.Columns"],
"enableColumnMove":["boolean"],
"groupHeader":["object","Ext.dataview.ItemHeader"],
"hideHeaders":["boolean"],
"hideScrollbar":["boolean"],
"infinite":["boolean"],
"itemConfig":["object","Ext.grid.Row"],
"itemsFocusable":["any"],
"multiColumnSort":["boolean"],
"pinnedHeader":["object"],
"reserveScrollbar":["boolean"],
"rowNumbers":["boolean","object"],
"scrollable":["boolean","string","object"],
"scrollToTopOnRefresh":["boolean"],
"selectable":["Ext.grid.selection.Model"],
"sortable":["boolean"],
"striped":["boolean"],
"title":["string"],
"titleBar":["object"],
}}
static EVENTS() { return [
{name:'beforecomplete',parameters:'editor,value,startValue,The'},
{name:'beforeedit',parameters:'sender,location'},
{name:'beforeselectionextend',parameters:'grid,An,extension'},
{name:'beforestartedit',parameters:'editor,boundEl,value,The'},
{name:'canceledit',parameters:'editor,value,startValue'},
{name:'canceledit',parameters:'sender,location'},
{name:'cellselection',parameters:'grid,selection'},
{name:'columnadd',parameters:'undefined,column,index'},
{name:'columnhide',parameters:'undefined,column'},
{name:'columnmenucreated',parameters:'grid,column,menu'},
{name:'columnmove',parameters:'undefined,column,fromIndex,toIndex'},
{name:'columnremove',parameters:'undefined,column'},
{name:'columnresize',parameters:'undefined,column,width'},
{name:'columnselection',parameters:'grid,selection'},
{name:'columnshow',parameters:'undefined,column'},
{name:'columnsort',parameters:'undefined,column,direction'},
{name:'complete',parameters:'editor,value,startValue,The'},
{name:'edit',parameters:'sender,location'},
{name:'selectionextenderdrag',parameters:'grid,An,extension'},
{name:'specialkey',parameters:'editor,field,event'},
{name:'startedit',parameters:'editor,boundEl,value,The'},
{name:'validateedit',parameters:'sender,location'},
]}
static METHODS() { return [
{ name:'generateSelectorFunctions',function: function() { return this.ext.generateSelectorFunctions() } },
{ name:'getColumns',function: function(selector) { return this.ext.getColumns(selector) } },
{ name:'getSelection',function: function() { return this.ext.getSelection() } },
{ name:'mapToCell',function: function(value,column) { return this.ext.mapToCell(value,column) } },
{ name:'mapToRowBody',function: function(value) { return this.ext.mapToRowBody(value) } },
{ name:'registerActionable',function: function(actionable) { return this.ext.registerActionable(actionable) } },
{ name:'unregisterActionable',function: function(actionable) { return this.ext.unregisterActionable(actionable) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_Grid_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_Grid_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_Grid_Component.METHODS(),
            Ext_grid_Grid_Component.XTYPE(),
            Ext_grid_Grid_Component.PROPERTIESOBJECT(),
            Ext_grid_Grid_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_Grid_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_Grid_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_Grid_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_Grid_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
