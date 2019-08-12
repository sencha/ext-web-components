import Ext_Button_Component from '../Ext/Button';

export default class Ext_SplitButton_Component extends Ext_Button_Component {
//events
get onarrowclick(){return this.getAttribute('onarrowclick')};set onarrowclick(onarrowclick){this.setAttribute('onarrowclick',onarrowclick)}
//configs

static XTYPE() {return 'splitbutton'}
static PROPERTIESOBJECT() { return {
"arrowHandler":["function"],
}}
static EVENTS() { return [
{name:'arrowclick',parameters:'undefined,e'},
]}
static METHODS() { return [
{ name:'doTap',function: function(me,e) { return this.ext.doTap(me,e) } },
]}

constructor() {
    super (
        Ext_SplitButton_Component.METHODS(),
        Ext_SplitButton_Component.XTYPE(),
        Ext_SplitButton_Component.PROPERTIESOBJECT(),
        Ext_SplitButton_Component.EVENTS()
    )
    this.XTYPE = Ext_SplitButton_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_SplitButton_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_SplitButton_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_SplitButton_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-splitbutton', Ext_SplitButton_Component);
  });
})();

