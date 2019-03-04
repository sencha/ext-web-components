import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.css';

export default class MainComponent {

  constructor() {
    var navTreeRoot = {
      id: '/',
      text: 'All',
      children: window.menu
    }
    this.treeStore = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: navTreeRoot
    })

    // var me = this;
    // setTimeout(function() {
    //   var hash = window.location.hash.substr(1)
    //   if (hash == '') {
    //     var node = me.dataviewNavCmp.getStore().getNodeById('components')
    //     me.dataviewNavCmp.setData(node.childNodes)
    //     me.showSelection();
    //   }
    //   else {
    //     var node = me.dataviewNavCmp.getStore().getNodeById(hash)
    //     me.dataviewNavCmp.setData(node.childNodes)
    //     console.log(node.childNodes)
    //     me.showRouter();
    //   }
    // }, 1000);

  }

  afterAllLoaded() {
    if (
      this.codeButtonCmp != undefined &&
      this.dataviewBreadcrumbCmp != undefined &&
      this.treelistCmp != undefined &&
      this.treePanelCmp != undefined &&
      this.selectionCmp != undefined &&
      this.dataviewNavCmp != undefined &&
      this.router != undefined &&
      this.codePanelCmp != undefined &&
      this.tabPanelCmp != undefined
      ) {
        var me = this;
        //setTimeout(function() {
          var hash = window.location.hash.substr(1)
          if (hash == '') {
            //var node = me.dataviewNavCmp.getStore().getNodeById('components')
            //console.dir(me.dataviewNavCmp.getStore())
            var node = me.dataviewNavCmp.getStore().findNode('text','All');
            me.dataviewNavCmp.setData(node.childNodes)
            this.breadcrumb = this.generateBreadcrumb(node);
            this.dataviewBreadcrumbCmp.setData(this.breadcrumb)
            me.showSelection();
          }
          else {
            //var node = me.dataviewNavCmp.getStore().getNodeById(hash)
            var node = me.dataviewNavCmp.getStore().findNode('hash',hash);
            me.dataviewNavCmp.setData(node.childNodes)
            this.breadcrumb = this.generateBreadcrumb(node);
            this.dataviewBreadcrumbCmp.setData(this.breadcrumb)
            console.log(node.childNodes)
            me.showRouter();
            me.setCodeTabs();
          }
        //}, 1000);
    }
  }

  readyCodeButton(event) {
    this.codeButtonCmp = event.detail.cmp
    this.afterAllLoaded()
  }

  generateBreadcrumb = (node) => {
    console.log(node)
    try {
      const path = [];
      do {
        path.unshift({
//          isLeaf: !node.childNodes.length,
          text: node.get("text"),
          path: node.get("id"),
          divider: '&nbsp;>&nbsp;'
        });
      } while (node = node.parentNode)
      path[path.length-1].divider = ''
      return path
    }
    catch(e) {
      console.log('generateBreadcrumb')
      console.error(e)
    }
  };

  readyDataviewBreadcrumb(event) {
    this.dataviewBreadcrumbCmp = event.detail.cmp
    var tpl = `
    <div class="app-toolbar">
      {text} <span>{divider}</span>
    </div>`
    this.dataviewBreadcrumbCmp.setItemTpl(tpl)
    //this.dataviewBreadcrumbCmp.setStore(this.treeStore)
    
    // //var node = this.dataviewBreadcrumbCmp.getStore().findNode('hash', window.initHash);
    // var node = this.dataviewBreadcrumbCmp.getStore().findNode('hash','components');

    // this.breadcrumb = this.generateBreadcrumb(node);
    // this.dataviewBreadcrumbCmp.setData(this.breadcrumb)
    this.afterAllLoaded()
  }

  readyTreePanel(event) {
    this.treePanelCmp = event.detail.cmp
    this.afterAllLoaded()
  }

  readyTreelist(event) {
    this.treelistCmp = event.detail.cmp
    this.treelistCmp.setStore(this.treeStore)
    var node = this.treelistCmp.getStore().findNode('hash', window.initHash);
    this.treelistCmp.setSelection(node);
    this.afterAllLoaded()
  }

  readySelection(event) {
    this.selectionCmp = event.detail.cmp
    var bodyStyle = `
    backgroundSize: 20px 20px;
    borderWidth: 0px;
    backgroundColor: #e8e8e8;
    backgroundImage: 
      linear-gradient(0deg, #f5f5f5 1.1px, transparent 0), 
      linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)`
    this.selectionCmp.setBodyStyle(bodyStyle)
    this.afterAllLoaded();
  }

  readyDataviewNav(event) {
    this.dataviewNavCmp = event.detail.cmp
    this.dataviewNavCmp.setStyle({'background':'top','display':'block','text-align':'center'})
    var tpl = `
    <div class="app-thumbnail">
      <div class="app-thumbnail-icon-wrap">
        <div class="app-thumbnail-icon {iconCls}"></div>
      </div>
      <div class="app-thumbnail-text">{text}</div>
      <div class="{premiumClass}"></div>
    </div>`
    this.dataviewNavCmp.setItemTpl(tpl)
    this.dataviewNavCmp.setStore(this.treeStore)
    this.afterAllLoaded()
  }

  readyRouter(event) {
    this.router = event.target;
    this.afterAllLoaded()
  }

  readyCodePanel(event) {
    this.codePanelCmp = event.detail.cmp
    this.afterAllLoaded()
  }

  readyTabPanel(event) {
    this.tabPanelCmp = event.detail.cmp
    this.afterAllLoaded()
  }

  dataviewBreadcrumbClick = (event) => {
    console.log(event)
    var record = event.detail.location.record;
    this.navigate(record);
  }

  dataviewNavClick = (event) => {
    var record = event.detail.location.record;
    this.navigate(record);
  }

  selectionchange(event) {
    var record = event.detail.record;
    this.navigate(record);
  }

  navigate(record) {
    if (record == null) {
      return
    }
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {
      this.showRouter();
      window.location.hash = '#' + hash
      this.setCodeTabs()
    }
    else {
      console.log(hash)
      var node = this.dataviewNavCmp.getStore().getNodeById(hash)
      console.log(node)
      this.dataviewNavCmp.setData(node.childNodes)
      this.showSelection();
    }
  }

  showSelection() {
    this.selectionCmp.setHidden(false);
    this.router.hidden = true;
    this.codeButtonCmp.setHidden(true);
  }

  showRouter() {
    this.selectionCmp.setHidden(true);
    this.router.hidden = false;
    this.codeButtonCmp.setHidden(false);
  }

  doClickToolbar(event) {
    var collapsed = this.treePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.treePanelCmp.setCollapsed(collapsed)
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  filterNav = (event) => {
    var value = event.detail.newValue
    this.filterRegex = new RegExp(`(${Ext.String.escapeRegex(value)})`, 'i');
    this.treelistCmp.getStore().filterBy(record => this.containsMatches(record));
  }

  toggleCode() {
    var collapsed = this.codePanelCmp.getHidden()
    if(collapsed == true) { collapsed = false }
    else { collapsed = true }
    this.codePanelCmp.setHidden(collapsed)
  }

  toggleTree() {
    var collapsed = this.treePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.treePanelCmp.setCollapsed(collapsed)
  }




  csscomponent = (file) => {
  if (file.endsWith(".html")) {return 'html'}
  if (file.endsWith(".js")) {return 'js'}
  }

  setCodeTabs() {
    var me = this
    if(me.tabPanelCmp != undefined) {
      var hash = window.location.hash.substr(1)
      var currentRoute = {}
      window.routes.forEach((route) => {
        if(hash == '') {
          if (route.default == true) {currentRoute = route}
        }
        else {
          if (route.hash == hash) {currentRoute = route}
        }
      });
      window[currentRoute.hash] = new currentRoute.component()
      var codeMap = _code[currentRoute.hash]
      me.tabPanelCmp.removeAll()
      var file = ''
      file = currentRoute.component.name + '.html'
      if (codeMap[file] != undefined ) {
        me.tabPanelCmp.add({title: file,
          xtype: 'panel',ui: 'code-panel',layout: 'fit',userSelectable: true,scrollable: true,
          tab: {ui: 'app-code-tab', flex: 0, minWidth: 250},
          html: `<pre><code class='code'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        })
      }
      file = currentRoute.component.name + '.js'
      if (codeMap[file] != undefined ) {
        me.tabPanelCmp.add({title: file,
          xtype: 'panel',ui: 'code-panel',layout: 'fit',userSelectable: true,scrollable: true,
          tab: {ui: 'app-code-tab', flex: 0, minWidth: 250},
          html: `<pre><code class='code'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        })
      }
      file = currentRoute.component.name + '.css'
      if (codeMap[file] != undefined ) {
        me.tabPanelCmp.add({title: file,
          xtype: 'panel',ui: 'code-panel',layout: 'fit',userSelectable: true,scrollable: true,
          tab: {ui: 'app-code-tab', flex: 0, minWidth: 250},
          html: `<pre><code class='code'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        })
      }
      setTimeout(function() {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightBlock(block);
        });
      },50);
    }
  }


}


      // //mjg order these html, js. css
      // //let codeMapR = new Map([codeMap].reverse());
      // Object.keys(codeMap).map((file) => {
      //   console.log(file)
      //   //me.tabPanelCmp.insert(0, {
      //   me.tabPanelCmp.add({
      //     xtype: 'panel',
      //     ui: 'code-panel',
      //     layout: 'fit',
      //     userSelectable: true,
      //     scrollable: true,
      //     tab: {ui: 'app-code-tab', flex: 0, minWidth: 250},
      //     title: file,
      //     //html: `<pre><code mwlHighlightJs id='${file}' class='code ${this.csscomponent(file)}'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
      //     html: `<pre><code class='code'>${codeMap[file].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
      //   })
      // })

