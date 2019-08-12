import Ext_Container_Component from '../../../Ext/Container';

export default class Ext_ux_google_Map_Component extends Ext_Container_Component {
//events
get oncenterchange(){return this.getAttribute('oncenterchange')};set oncenterchange(oncenterchange){this.setAttribute('oncenterchange',oncenterchange)}
get onmaprender(){return this.getAttribute('onmaprender')};set onmaprender(onmaprender){this.setAttribute('onmaprender',onmaprender)}
get onmarkerclick(){return this.getAttribute('onmarkerclick')};set onmarkerclick(onmarkerclick){this.setAttribute('onmarkerclick',onmarkerclick)}
get onmarkerdblclick(){return this.getAttribute('onmarkerdblclick')};set onmarkerdblclick(onmarkerdblclick){this.setAttribute('onmarkerdblclick',onmarkerdblclick)}
get onmarkerdrag(){return this.getAttribute('onmarkerdrag')};set onmarkerdrag(onmarkerdrag){this.setAttribute('onmarkerdrag',onmarkerdrag)}
get onmarkerdragend(){return this.getAttribute('onmarkerdragend')};set onmarkerdragend(onmarkerdragend){this.setAttribute('onmarkerdragend',onmarkerdragend)}
get onmarkerdragstart(){return this.getAttribute('onmarkerdragstart')};set onmarkerdragstart(onmarkerdragstart){this.setAttribute('onmarkerdragstart',onmarkerdragstart)}
get onmarkermousedown(){return this.getAttribute('onmarkermousedown')};set onmarkermousedown(onmarkermousedown){this.setAttribute('onmarkermousedown',onmarkermousedown)}
get onmarkermouseout(){return this.getAttribute('onmarkermouseout')};set onmarkermouseout(onmarkermouseout){this.setAttribute('onmarkermouseout',onmarkermouseout)}
get onmarkermouseover(){return this.getAttribute('onmarkermouseover')};set onmarkermouseover(onmarkermouseover){this.setAttribute('onmarkermouseover',onmarkermouseover)}
get onmarkermouseup(){return this.getAttribute('onmarkermouseup')};set onmarkermouseup(onmarkermouseup){this.setAttribute('onmarkermouseup',onmarkermouseup)}
get onmarkerrightclick(){return this.getAttribute('onmarkerrightclick')};set onmarkerrightclick(onmarkerrightclick){this.setAttribute('onmarkerrightclick',onmarkerrightclick)}
get ontypechange(){return this.getAttribute('ontypechange')};set ontypechange(ontypechange){this.setAttribute('ontypechange',ontypechange)}
get onzoomchange(){return this.getAttribute('onzoomchange')};set onzoomchange(onzoomchange){this.setAttribute('onzoomchange',onzoomchange)}
//configs

static XTYPE() {return 'map'}
static PROPERTIESOBJECT() { return {
"geo":["Ext.util.Geolocation"],
"map":["google.maps.map"],
"mapListeners":["object"],
"mapOptions":["object"],
"markers":["Ext.data.Store","object","Ext.data.Model[]","Ext.ux.google.map.Marker"],
"markerTemplate":["object","Ext.util.ObjectTemplate"],
"useCurrentLocation":["boolean","Ext.util.Geolocation"],
}}
static EVENTS() { return [
{name:'centerchange',parameters:'undefined,map,center'},
{name:'maprender',parameters:'undefined,map'},
{name:'markerclick',parameters:'map,info'},
{name:'markerdblclick',parameters:'map,info'},
{name:'markerdrag',parameters:'map,info'},
{name:'markerdragend',parameters:'map,info'},
{name:'markerdragstart',parameters:'map,info'},
{name:'markermousedown',parameters:'map,info'},
{name:'markermouseout',parameters:'map,info'},
{name:'markermouseover',parameters:'map,info'},
{name:'markermouseup',parameters:'map,info'},
{name:'markerrightclick',parameters:'map,info'},
{name:'typechange',parameters:'undefined,map,mapType'},
{name:'zoomchange',parameters:'undefined,map,zoomLevel'},
]}
static METHODS() { return [
{ name:'addMapListeners',function: function() { return this.ext.addMapListeners() } },
{ name:'fitMarkersInView',function: function(records) { return this.ext.fitMarkersInView(records) } },
{ name:'onCenterChange',function: function() { return this.ext.onCenterChange() } },
{ name:'onGeoError',function: function() { return this.ext.onGeoError() } },
{ name:'onGeoUpdate',function: function(geo) { return this.ext.onGeoUpdate(geo) } },
{ name:'onPainted',function: function() { return this.ext.onPainted() } },
{ name:'onTilesLoaded',function: function() { return this.ext.onTilesLoaded() } },
{ name:'onTypeChange',function: function() { return this.ext.onTypeChange() } },
{ name:'onZoomChange',function: function() { return this.ext.onZoomChange() } },
{ name:'setMapCenter',function: function(coordinates) { return this.ext.setMapCenter(coordinates) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_ux_google_Map_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_ux_google_Map_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_ux_google_Map_Component.METHODS(),
            Ext_ux_google_Map_Component.XTYPE(),
            Ext_ux_google_Map_Component.PROPERTIESOBJECT(),
            Ext_ux_google_Map_Component.EVENTS()
        )
        this.XTYPE = Ext_ux_google_Map_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_ux_google_Map_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_ux_google_Map_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_ux_google_Map_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
