import Ext_Component_Component from '../Ext/Component';

export default class Ext_Container_Component extends Ext_Component_Component {
//events
get onactivate(){return this.getAttribute('onactivate')};set onactivate(onactivate){this.setAttribute('onactivate',onactivate)}
get onactiveItemchange(){return this.getAttribute('onactiveItemchange')};set onactiveItemchange(onactiveItemchange){this.setAttribute('onactiveItemchange',onactiveItemchange)}
get onadd(){return this.getAttribute('onadd')};set onadd(onadd){this.setAttribute('onadd',onadd)}
get onbeforeactiveItemchange(){return this.getAttribute('onbeforeactiveItemchange')};set onbeforeactiveItemchange(onbeforeactiveItemchange){this.setAttribute('onbeforeactiveItemchange',onbeforeactiveItemchange)}
get ondeactivate(){return this.getAttribute('ondeactivate')};set ondeactivate(ondeactivate){this.setAttribute('ondeactivate',ondeactivate)}
get onmove(){return this.getAttribute('onmove')};set onmove(onmove){this.setAttribute('onmove',onmove)}
get onremove(){return this.getAttribute('onremove')};set onremove(onremove){this.setAttribute('onremove',onremove)}
get onrenderedchange(){return this.getAttribute('onrenderedchange')};set onrenderedchange(onrenderedchange){this.setAttribute('onrenderedchange',onrenderedchange)}
//configs

static XTYPE() {return 'container'}
static PROPERTIESOBJECT() { return {
"activeItem":["Ext.Component","object","string","number"],
"autoDestroy":["boolean"],
"autoSize":["boolean"],
"bodyCls":["string","string[]"],
"cardSwitchAnimation":["string","object","boolean"],
"control":["object"],
"defaultFocus":["string"],
"defaults":["object"],
"defaultType":["string"],
"innerCls":["string"],
"items":["array","object"],
"layout":["object","string"],
"manageBorders":["boolean"],
"masked":["boolean","string","object","Ext.Mask","Ext.LoadMask"],
"weighted":["boolean"],
}}
static EVENTS() { return [
{name:'activate',parameters:'newActiveItem,undefined,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'undefined,item,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'deactivate',parameters:'oldActiveItem,undefined,newActiveItem'},
{name:'move',parameters:'undefined,item,toIndex,fromIndex'},
{name:'remove',parameters:'undefined,item,index'},
{name:'renderedchange',parameters:'undefined,item,rendered'},
]}
static METHODS() { return [
{ name:'add',function: function(newItems) { return this.ext.add(newItems) } },
{ name:'animateActiveItem',function: function(activeItem,animation) { return this.ext.animateActiveItem(activeItem,animation) } },
{ name:'applyActiveItem',function: function(activeItem,currentActiveItem) { return this.ext.applyActiveItem(activeItem,currentActiveItem) } },
{ name:'applyControl',function: function(selectors) { return this.ext.applyControl(selectors) } },
{ name:'applyItemDefaults',function: function(item) { return this.ext.applyItemDefaults(item) } },
{ name:'applyMasked',function: function(masked) { return this.ext.applyMasked(masked) } },
{ name:'doAdd',function: function(item,instanced) { return this.ext.doAdd(item,instanced) } },
{ name:'doInsert',function: function(index,item,instanced) { return this.ext.doInsert(index,item,instanced) } },
{ name:'factoryItem',function: function(item) { return this.ext.factoryItem(item) } },
{ name:'findDefaultFocus',function: function() { return this.ext.findDefaultFocus() } },
{ name:'getAt',function: function(index) { return this.ext.getAt(index) } },
{ name:'getComponent',function: function(component) { return this.ext.getComponent(component) } },
{ name:'getDockedComponent',function: function(component) { return this.ext.getDockedComponent(component) } },
{ name:'getDockedItems',function: function() { return this.ext.getDockedItems() } },
{ name:'getFirstReferences',function: function() { return this.ext.getFirstReferences() } },
{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
{ name:'getInnerItems',function: function() { return this.ext.getInnerItems() } },
{ name:'getMaxHeightElement',function: function() { return this.ext.getMaxHeightElement() } },
{ name:'getPositionedItemTarget',function: function(item) { return this.ext.getPositionedItemTarget(item) } },
{ name:'getRefItems',function: function(deep) { return this.ext.getRefItems(deep) } },
{ name:'has',function: function(item) { return this.ext.has(item) } },
{ name:'hasInnerItem',function: function(item) { return this.ext.hasInnerItem(item) } },
{ name:'indexOf',function: function(item) { return this.ext.indexOf(item) } },
{ name:'insert',function: function(index,item) { return this.ext.insert(index,item) } },
{ name:'insertAfter',function: function(item,relativeToItem) { return this.ext.insertAfter(item,relativeToItem) } },
{ name:'insertBefore',function: function(item,relativeToItem) { return this.ext.insertBefore(item,relativeToItem) } },
{ name:'insertFirst',function: function(item) { return this.ext.insertFirst(item) } },
{ name:'insertInner',function: function(item,index) { return this.ext.insertInner(item,index) } },
{ name:'insertLast',function: function(item) { return this.ext.insertLast(item) } },
{ name:'mask',function: function(mask) { return this.ext.mask(mask) } },
{ name:'onFirstItemAdd',function: function(item) { return this.ext.onFirstItemAdd(item) } },
{ name:'onItemAdd',function: function(item,index) { return this.ext.onItemAdd(item,index) } },
{ name:'onItemMove',function: function(item,toIndex,fromIndex) { return this.ext.onItemMove(item,toIndex,fromIndex) } },
{ name:'onItemRemove',function: function(item,index,destroying) { return this.ext.onItemRemove(item,index,destroying) } },
{ name:'remove',function: function(which,destroy) { return this.ext.remove(which,destroy) } },
{ name:'removeAll',function: function(destroy,everything) { return this.ext.removeAll(destroy,everything) } },
{ name:'removeAt',function: function(index,destroy) { return this.ext.removeAt(index,destroy) } },
{ name:'removeInner',function: function(item) { return this.ext.removeInner(item) } },
{ name:'removeInnerAt',function: function(index) { return this.ext.removeInnerAt(index) } },
{ name:'unmask',function: function() { return this.ext.unmask() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Container_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Container_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Container_Component.METHODS(),
            Ext_Container_Component.XTYPE(),
            Ext_Container_Component.PROPERTIESOBJECT(),
            Ext_Container_Component.EVENTS()
        )
        this.XTYPE = Ext_Container_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Container_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Container_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Container_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
