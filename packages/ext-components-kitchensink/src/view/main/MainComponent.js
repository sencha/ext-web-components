import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.css';

export default class MainComponent {

  constructor() {
    var navTreeRoot = {
      hash: 'all',
      iconCls: 'x-fa fa-home',
      leaf: false,
      text: 'All',
      children: window.menu
    };
    this.treeStore = Ext.create('Ext.data.TreeStore', {
      rootVisible: true,
      root: navTreeRoot
    });
    this.wait = 7;
  }

  afterAllLoaded(f) {
//    console.log(f)
    this.wait = this.wait - 1;
//    console.log('***wait*** ' + this.wait )
    if (this.wait == 0) {
      console.log('window.location.hash')
      console.log(window.location.hash)
      var hash = window.location.hash.substr(1)
      if (hash == '') {hash = 'all'}
//      var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
//      this.navigate(node);
    }
  }

  readyCodeButton(event) {
    this.codeButtonCmp = event.detail.cmp
    this.afterAllLoaded()
  }

  generateBreadcrumb = (node) => {
    console.log('generateBreadcrumb')
    try {
      const path = [];
      do {
        path.unshift({
          isLeaf: !node.childNodes.length,
          text: node.get("text"),
          hash: node.get("text").toLowerCase().replace(/\s/g, ''),
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
    this.afterAllLoaded('readyDataviewBreadcrumb')
  }

  readyNavTreePanel(event) {
    this.navTreePanelCmp = event.detail.cmp
    this.afterAllLoaded('readyNavTreePanel')
  }

  readyNavTreelist(event) {
    this.navTreelistCmp = event.detail.cmp
    this.navTreelistCmp.setStore(this.treeStore)
    this.afterAllLoaded('readyNavTreelist')
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
    this.afterAllLoaded('readySelection');
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
    this.afterAllLoaded('readyDataviewNav')
  }

  readyRouter(event) {
    this.router = event.target;
    this.afterAllLoaded('readyRouter')
  }

  readyCodePanel(event) {
    this.codePanelCmp = event.detail.cmp
    this.afterAllLoaded('readyCodePanel')
  }

  readyTabPanel(event) {
    this.tabPanelCmp = event.detail.cmp
    this.afterAllLoaded('readyTabPanel')
  }

  dataviewBreadcrumbClick = (event) => {
    var hash = event.detail.location.record.data.hash;
//var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
    var node = this.navTreelistCmp.getStore().findNode('hash',hash);

    this.navigate(node);
  }

  dataviewNavClick = (event) => {
    var record = event.detail.location.record;
    this.navigate(record);
  }

  navTreelistSelectionChange(event) {
    var record = event.detail.record;
    this.navigate(record);
  }

  navigate(record) {
    if (record == null) {
      console.log('it was null')
      return
    }
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {

//      var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
      var node = this.navTreelistCmp.getStore().findNode('hash',hash);


      //this.breadcrumb = this.generateBreadcrumb(node);
      //this.dataviewBreadcrumbCmp.setData(this.breadcrumb)

      this.showRouter();
      window.location.hash = '#' + hash
    }
    else {

      //var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
      var node = this.navTreelistCmp.getStore().findNode('hash',hash);

      //this.breadcrumb = this.generateBreadcrumb(node);
      //this.dataviewBreadcrumbCmp.setData(this.breadcrumb)

      //this.dataviewNavCmp.setData(node.childNodes)

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
    this.setCodeTabs()
  }

  doClickToolbar(event) {
    var collapsed = this.navTreePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else {collapsed = true}
    this.navTreePanelCmp.setCollapsed(collapsed)
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
    this.navTreelistCmp.getStore().filterBy(record => this.containsMatches(record));
  }

  toggleCode() {
    var collapsed = this.codePanelCmp.getHidden()
    if(collapsed == true) { collapsed = false }
    else { collapsed = true }
    this.codePanelCmp.setHidden(collapsed)
  }

  toggleTree() {
    var collapsed = this.navTreePanelCmp.getCollapsed()
    if (collapsed == true){collapsed = false} else{collapsed = true}
    this.navTreePanelCmp.setCollapsed(collapsed)
  }

  csscomponent = (file) => {
  if (file.endsWith(".html")) {return 'html'}
  if (file.endsWith(".js")) {return 'js'}
  }

  setCodeTabs() {
    var me = this
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
    //window[currentRoute.hash] = new currentRoute.component()
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




    // if (
    //   this.codeButtonCmp != undefined &&
    //   this.dataviewBreadcrumbCmp != undefined &&
    //   this.navTreelistCmp != undefined &&
    //   this.navTreePanelCmp != undefined &&
    //   this.selectionCmp != undefined &&
    //   this.dataviewNavCmp != undefined &&
    //   this.router != undefined &&
    //   this.codePanelCmp != undefined &&
    //   this.tabPanelCmp != undefined
    // ) {


      // console.log(this.codeButtonCmp)
      // console.log(this.dataviewBreadcrumbCmp)
      // console.log(this.navTreelistCmp)
      // console.log(this.navTreePanelCmp)
      // console.log(this.selectionCmp)
      // console.log(this.dataviewNavCmp)
      // console.log(this.router)
      // console.log(this.codePanelCmp)
      // console.log(this.tabPanelCmp)