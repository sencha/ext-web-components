import Ext_grid_HeaderContainer_Component from '../../../Ext/grid/HeaderContainer';

export default class Ext_grid_column_Template_Component extends Ext_grid_HeaderContainer_Component {
//events
//configs

static XTYPE() {return 'gridcolumn'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"cell":["object"],
"computedWidth":["number"],
"dataIndex":["string"],
"defaultEditor":["object","Ext.field.Field"],
"defaultWidth":["number"],
"depends":["string[]"],
"editable":["boolean"],
"editor":["object","string"],
"editorDefaults":["object"],
"exportRenderer":["boolean","function","string"],
"exportStyle":["Ext.exporter.file.Style","Ext.exporter.file.Style[]"],
"exportSummaryRenderer":["boolean","function","string"],
"filter":["object","boolean"],
"formatter":["string"],
"groupable":["boolean"],
"grouper":["function","string","object","Ext.util.Grouper"],
"groupHeaderTpl":["string","string[]","Ext.XTemplate"],
"hideable":["boolean"],
"hideShowMenuItem":["Ext.menu.CheckItem","object"],
"ignore":["boolean"],
"ignoreExport":["boolean"],
"locked":["boolean","string"],
"menu":["Ext.menu.Menu","object"],
"menuDisabled":["boolean"],
"renderer":["function","string"],
"resizable":["boolean"],
"scope":["object"],
"scratchCell":["Ext.grid.cell.Cell","object"],
"sortable":["boolean"],
"sorter":["function","string","object","Ext.util.Sorter"],
"summary":["string"],
"summaryCell":["object"],
"summaryDataIndex":["string"],
"summaryFormatter":["string"],
"summaryRenderer":["function","string"],
"text":["string"],
"tpl":["string","string[]","Ext.XTemplate"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'autoSize',function: function() { return this.ext.autoSize() } },
{ name:'ensureEditor',function: function() { return this.ext.ensureEditor() } },
{ name:'getSortParam',function: function() { return this.ext.getSortParam() } },
{ name:'getVisibleIndex',function: function() { return this.ext.getVisibleIndex() } },
{ name:'isHideable',function: function() { return this.ext.isHideable() } },
{ name:'onColumnMenuGroupChange',function: function(menu,groupName,value) { return this.ext.onColumnMenuGroupChange(menu,groupName,value) } },
{ name:'setSortState',function: function(sorter) { return this.ext.setSortState(sorter) } },
{ name:'sort',function: function(direction,mode) { return this.ext.sort(direction,mode) } },
{ name:'toggleSortState',function: function() { return this.ext.toggleSortState() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_Template_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_Template_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_grid_column_Template_Component.METHODS(),
            Ext_grid_column_Template_Component.XTYPE(),
            Ext_grid_column_Template_Component.PROPERTIESOBJECT(),
            Ext_grid_column_Template_Component.EVENTS()
        )
        this.XTYPE = Ext_grid_column_Template_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Template_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_grid_column_Template_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_column_Template_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
