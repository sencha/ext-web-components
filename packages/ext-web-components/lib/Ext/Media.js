import Ext_Component_Component from '../Ext/Component';

export default class Ext_Media_Component extends Ext_Component_Component {
//events
get onended(){return this.getAttribute('onended')};set onended(onended){this.setAttribute('onended',onended)}
get onmutedchange(){return this.getAttribute('onmutedchange')};set onmutedchange(onmutedchange){this.setAttribute('onmutedchange',onmutedchange)}
get onpause(){return this.getAttribute('onpause')};set onpause(onpause){this.setAttribute('onpause',onpause)}
get onplay(){return this.getAttribute('onplay')};set onplay(onplay){this.setAttribute('onplay',onplay)}
get onstop(){return this.getAttribute('onstop')};set onstop(onstop){this.setAttribute('onstop',onstop)}
get ontimeupdate(){return this.getAttribute('ontimeupdate')};set ontimeupdate(ontimeupdate){this.setAttribute('ontimeupdate',ontimeupdate)}
get onvolumechange(){return this.getAttribute('onvolumechange')};set onvolumechange(onvolumechange){this.setAttribute('onvolumechange',onvolumechange)}
//configs

static XTYPE() {return 'media'}
static PROPERTIESOBJECT() { return {
"autoPause":["boolean"],
"autoResume":["boolean"],
"controls":["boolean"],
"loop":["boolean"],
"media":["Ext.dom.Element"],
"muted":["boolean"],
"preload":["boolean"],
"url":["string"],
"volume":["number"],
}}
static EVENTS() { return [
{name:'ended',parameters:'undefined,time'},
{name:'mutedchange',parameters:'undefined,muted'},
{name:'pause',parameters:'undefined,time'},
{name:'play',parameters:'undefined'},
{name:'stop',parameters:'undefined'},
{name:'timeupdate',parameters:'undefined,time'},
{name:'volumechange',parameters:'undefined,volume'},
]}
static METHODS() { return [
{ name:'getCurrentTime',function: function() { return this.ext.getCurrentTime() } },
{ name:'getDuration',function: function() { return this.ext.getDuration() } },
{ name:'isPlaying',function: function() { return this.ext.isPlaying() } },
{ name:'onActivate',function: function() { return this.ext.onActivate() } },
{ name:'onDeactivate',function: function() { return this.ext.onDeactivate() } },
{ name:'pause',function: function() { return this.ext.pause() } },
{ name:'play',function: function() { return this.ext.play() } },
{ name:'setCurrentTime',function: function(time) { return this.ext.setCurrentTime(time) } },
{ name:'stop',function: function() { return this.ext.stop() } },
{ name:'toggle',function: function() { return this.ext.toggle() } },
{ name:'updateEnableControls',function: function(enableControls) { return this.ext.updateEnableControls(enableControls) } },
{ name:'updateLoop',function: function(loop) { return this.ext.updateLoop(loop) } },
{ name:'updateMuted',function: function(muted) { return this.ext.updateMuted(muted) } },
{ name:'updateUrl',function: function(newUrl) { return this.ext.updateUrl(newUrl) } },
{ name:'updateVolume',function: function(volume) { return this.ext.updateVolume(volume) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Media_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Media_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_Media_Component.METHODS(),
            Ext_Media_Component.XTYPE(),
            Ext_Media_Component.PROPERTIESOBJECT(),
            Ext_Media_Component.EVENTS()
        )
        this.XTYPE = Ext_Media_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Media_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_Media_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_Media_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
