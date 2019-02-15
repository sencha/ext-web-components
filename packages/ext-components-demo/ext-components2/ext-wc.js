// function bootstrapModule(AppModule) {
//   Ext.application({
//     name: "$ExtAngularApp",
//     quickTips: true,
//     launch: () => {
//       var container = Ext.create({xtype:'container', layout: 'fit', padding: '10'})
//       Ext.Viewport.add([container])
//       container.add(grid)
//       // platformBrowserDynamic().bootstrapModule(AppModule)
//       //   .catch((err) => {
//       //     console.log(err)
//       //   })
//     }
//   })
// }

class ExtWc extends ExtBase {

  constructor() {
    super();
    //console.log('wc');
    //console.log(this);
    //console.log(this.parentElement)
    // window.customElements.define('ext-button', ExtButton)
    // window.customElements.define('ext-grid', ExtGrid)
    // window.customElements.define('ext-titlebar', ExtTitlebar)



    // var me = this;
    // Ext.application({
    //   name: "$ExtWebComponentsApp",
    //   //quickTips: true,
    //   launch: () => {
    //     // var o = {xtype:'panel',title:'root'}
    //     // me.ext=Ext.create(o)
    //     // Ext.Viewport.add([me.ext])
        
    //     window.customElements.define('ext-button', ExtButton)
    //     window.customElements.define('ext-grid', ExtGrid)
    //     window.customElements.define('ext-titlebar', ExtTitlebar)

    //     me.template = document.createElement('template');
    //     me.template.innerHTML = `<slot></slot>`;
    //   }
    // })

        //this.template.innerHTML = `<ext-grid></ext-grid>`;

        //var shadow = this.attachShadow({mode: 'open'});
        //var shadow = document.createElement('span');


        // var wrapper = document.createElement('span');
        // wrapper.appendChild(this.template.content.cloneNode(true));
        // shadow.appendChild(wrapper);
        // console.log(shadow)

    
        //this.attachShadow({ mode: 'open' });
        //var node = this.template.content.cloneNode(true)
        //console.log(node)
        //this.shadowRoot.appendChild(this.template.content.cloneNode(true));
//        var theSpan = document.createElement('span');
//        theSpan.appendChild(this.template.content.cloneNode(true));
        //console.log('*******')
        //console.log(theSpan)
//        var cn = me.template.content.cloneNode(true)
        //console.log( this.template)

//        console.log( this.template.children)
//        console.log(cn)
//        console.log(cn.toString())
//        var n = Ext.get(me.template.content.cloneNode(true))
//        console.log(n)
        //var child = Ext.create({xtype:'container', height:'100%', html:'<ext-button></ext-button>'})
        //this.ext.add(child)











  }

  connectedCallback() {
//    super.connectedCallback()

    var o = {
      xtype: 'panel',
      layout: 'fit',
      bodyPadding: '10',
      title: 'root'
    }
    super.connectedCallback(o)

    //console.log(this.isConnected);
    //console.log(this.template)







  }

  disconnectedCallback() {
    console.log('disconnectedCallback')
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('attributeChangedCallback')
  }

  adoptedCallback() {
    console.log('adoptedCallback')
  }

}
