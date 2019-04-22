import hljs from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import './MainComponent.css';
import './MainComponent.html';

Ext.require([
  'Ext.data.TreeStore'
])

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
    this.wait = 5;

    if (Ext.os.is.Phone) {
      this.collapsed = true;
    }
  }

  //DEBUG:
  readyTitleBar(event) {
    this.titleBarCmp = event.detail.cmp;
    this.titleBarCmp.updateTitle("Build: " + BUILD_VERSION);
  }

  afterAllLoaded(f) {
    this.wait = this.wait - 1
    //console.log('***wait*** ' + this.wait )

    if (this.wait == 0) {
      var hash = window.location.hash.substr(1)
      if (hash == '') {hash = 'all'}
      var node = this.navTreelistCmp.getStore().findNode('hash',hash);
      this.navTreelistCmp.setSelection(node);
      this.navigate(node);
    }
  }

  readyCodeButton(event) {
    //console.log('readyCodeButton')
    this.codeButtonCmp = event.detail.cmp
    //this.afterAllLoaded()
  }

  readyDataviewBreadcrumb(event) {
    //console.log('readyDataviewBreadcrumb')
    this.dataviewBreadcrumbCmp = event.detail.cmp
    var tpl = `
    <div class="app-toolbar">
      {text} <span>{divider}</span>
    </div>`
    this.dataviewBreadcrumbCmp.setItemTpl(tpl)
    this.afterAllLoaded('readyDataviewBreadcrumb')
  }

  readyNavTreePanel(event) {
    //console.log('readyNavTreePanel')
    this.navTreePanelCmp = event.detail.cmp;

    if(Ext.os.is.Phone) {
      this.navTreePanelCmp.setWidth('100%');
    }
    //this.afterAllLoaded('readyNavTreePanel')
  }

  readyNavTreelist(event) {
    //console.log('readyNavTreelist')
    this.navTreelistCmp = event.detail.cmp
    this.navTreelistCmp.setStore(this.treeStore)
    this.afterAllLoaded('readyNavTreelist')
  }

  readySelection(event) {
    //console.log('readySelection')
    this.selectionCmp = event.detail.cmp
    var bodyStyle = `
    backgroundSize: 20px 20px;
    borderWidth: 0px;
    backgroundColor: #e8e8e8;
    backgroundImage:
      linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
      linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)`
    this.selectionCmp.setBodyStyle(bodyStyle)
    //this.afterAllLoaded('readySelection');
  }

  readyDataviewNav(event) {
    //console.log('readyDataviewNav')
    this.dataviewNavCmp = event.detail.cmp
    this.dataviewNavCmp.setStyle({'background':'top','display':'block','text-align':'center'})

    if(Ext.os.is.Phone) {
      this.dataviewNavCmp.setCentered(false);
    }

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
    //console.log('readyRouter')
    this.router = event.target;
    this.afterAllLoaded('readyRouter')
  }

  readyCodePanel(event) {
    //console.log('readyCodePanel')
    this.codePanelCmp = event.detail.cmp
    //this.afterAllLoaded('readyCodePanel')
  }

  readyTabPanel(event) {
    //console.log('readyTabPanel')
    this.tabPanelCmp = event.detail.cmp
    this.afterAllLoaded('readyTabPanel')
  }

  generateBreadcrumb = (node) => {
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

  dataviewBreadcrumbClick = (event) => {
    var hash = event.detail.location.record.data.hash;
    var record = this.dataviewNavCmp.getStore().findNode('hash',hash);
    this.navigate(record);
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
      //console.log('it was null')
      return
    }
    var hash = record.data.hash
    var childNum = record.childNodes.length
    if (childNum == 0 && hash != undefined) {

      var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
      this.dataviewBreadcrumbCmp.setData(this.generateBreadcrumb(node))

      window.location.hash = '#' + hash
      this.showRouter();
    }
    else {
      var node = this.dataviewNavCmp.getStore().findNode('hash',hash);
      this.dataviewBreadcrumbCmp.setData(this.generateBreadcrumb(node))
      this.dataviewNavCmp.setData(node.childNodes)
      this.showSelection();
    }

    if(Ext.os.is.Phone) {
      this.navTreePanelCmp.setCollapsed(true);
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

    if(Ext.os.is.Phone) {
      this.navTreePanelCmp.setCollapsed(true)
    }

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
    let collapsed = this.navTreePanelCmp.getCollapsed();

    if (collapsed == true) {
      collapsed = false;
    } else {
      collapsed = true;
    }
    this.navTreePanelCmp.setCollapsed(collapsed);
  }

  setCodeTabs() {
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
    //var codeItem = currentRoute.hash.toLowerCase()
    var codeMap = _code[currentRoute.hashlower]
    this.tabPanelCmp.removeAll()
    var componentName = currentRoute.hash + 'Component'

    this.setTab(codeMap, componentName + '.html')
    this.setTab(codeMap, componentName + '.js',)
    this.setTab(codeMap, componentName + '.scss',)
    this.setTab(codeMap, componentName + '.css',)
    this.setTab(codeMap, componentName + 'Data.js')
    this.setTab(codeMap, componentName + 'Dummy.js')
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  setTab(codeMap, file) {
    var codeMapFile = codeMap[file]
    if (codeMapFile != undefined ) {
      this.tabPanelCmp.add(
        {
          xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: true, scrollable: true,
          tab: {ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250},
          html: `<pre><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
        }
      )
    }
  }

}
