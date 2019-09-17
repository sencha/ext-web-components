class ExtGrid2 extends HTMLElement {
    get config() {
        console.log('get')
        return this.getAttribute('config')
    };
    set config(val) {
        console.log('set')
        if (val) {
            this.setAttribute('config', val)
        } else {
            this.removeAttribute('config')
        }
    }

    get onready() {
        console.log('get')
        return this.getAttribute('onready')
    };
    set onready(val) {
        console.log('set')
        if (val) {
            this.setAttribute('onready', val)
        }
        else {
            this.removeAttribute('onready')
        }
    }


    static get observedAttributes() {return ['config', 'onready']};

    attributeChangedCallback(attr, oldVal, newVal) {
        //console.log('attr: ' + attr)

        if (/^on/.test(attr)) {
            if (newVal) {
                //console.log('newVal: ' + newVal)
                this.addEventListener('ready', function (event) {
                    //console.log('eventlistener')
                    //console.log(event)
                    var functionString = newVal;
                    // todo: error check for only 1 dot
                    var r = functionString.split('.');
                    //console.log(r)
                    //console.log(window['mjg'])
                    var obj = r[0];
                    var func = r[1];
                    if (obj && func) {
                        //console.log(window[obj])
                        //window[obj][func](event);
                        window[obj](event);
                    }
                });
            }
        }
    }

    connectedCallback() {
        console.log('connectedCallback')
        console.log(this.attributes.config)
        console.log(this.getAttribute('config'))
        //console.log(this.onready)

        var o = JSON.parse(this.config)
        o.xtype = 'grid'
        console.dir(this)
        o.renderTo = this
        this.ext = Ext.create(o)
        this.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.ext}}))
        console.log('after dispatch')
    }
}

Ext.onReady(function() {
    window.customElements.define('ext-grid2', ExtGrid2)
})