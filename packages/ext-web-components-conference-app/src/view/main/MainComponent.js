import './MainComponent.html';
import ScheduleComponent from '../schedule/ScheduleComponent.js';
export default class MainComponent {

  constructor() {
    const navTreeRoot = {
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
    this.wait = 3;
    this.back = false;
    this.collapsed = false;
    this.isInitial = true;

    if (Ext.os.is.Phone) {
      this.collapsed = true;
    }
  }

  afterAllLoaded() {
    this.wait = this.wait - 1;

    if (this.wait == 0) {
      let hash = window.location.hash.substr(1);

      if (hash == '') {
        hash = 'schedule';
      }

      const node = this.navTreelistCmp.getStore().findNode('hash', hash);
      this.navTreelistCmp.setSelection(node);
      this.navigate(node);
    }
  }

  readyNavTreePanel(event) {
    this.navTreePanelCmp = event.detail.cmp;
    this.afterAllLoaded('readyNavTreePanel');
  }

  readyNavTreelist(event) {
    this.navTreelistCmp = event.detail.cmp
    this.navTreelistCmp.setStore(this.treeStore)
    this.afterAllLoaded('readyNavTreelist')
  }

  readyRouter(event) {
    this.router = event.target;
    this.afterAllLoaded('readyRouter')
  }

  navTreelistSelectionChange(event) {
    const record = event.detail.record;
    this.navigate(record);
  }

  titleReady(event) {
    this.title = event.detail.cmp;
  }

  scheduleTitle(title) {
    this.title.setTitle(title);
    this.title.setTitleAlign('center');
  }

  backButton() {
    this.back = true;
    this.navButton.setIconCls('md-icon-arrow-back');
  }

  navigate(record) {
    if (record == null) {
      console.log('it was null')
      return
    }
    window.title = record.data.text;
    const hash = record.data.hash
    const childNum = record.childNodes.length

    if (childNum == 0 && hash != undefined) {
      window.location.hash = '#' + hash;
    } else {
      this.dataviewNavCmp.setData(node.childNodes)
    }

    if (Ext.os.is.Phone) {
      console.log(window.title);
      this.title.setTitle(window.title);
      this.title.setTitleAlign('center');

      let collapsed = this.navTreePanelCmp.getCollapsed();

      if (collapsed === true) {
        collapsed = false;
      } else {
        collapsed = true;
      }
      this.navTreePanelCmp.setCollapsed(collapsed)
    }
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) {
      node.expand();
    }

    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  toggleTree(event) {

    if (this.back == false) {
      let collapsed = this.navTreePanelCmp.getCollapsed();

      if (collapsed == true) {
        collapsed = false;
      } else {
        collapsed = true;
      }
      this.navTreePanelCmp.setCollapsed(collapsed);
    }
    else if (this.back == true && window.title == 'Schedule') {
      schedule.resetSchedule();
      this.back = false;
    }
    else if (this.back == true && window.title == 'Calendar') {
      calendar.resetSchedule();
      this.back = false;
    }
  }

  toggleButtonReady(event) {
    this.navButton = event.detail.cmp;
    this.navButtonIcon = event.detail.cmp.initialConfig.iconCls;
    console.log(this.navButtonIcon);

    if (Ext.os.is.Phone) {
      this.navButton.setHidden(false);
    } else {
      this.navButton.setHidden(true);
    }
  }

  comboboxReady(event) {
    this.searchComboBox = event.detail.cmp;

    if (Ext.os.is.Phone) {
      this.searchComboBox.setHidden(true);
    } else {
      this.searchComboBox.setHidden(false);
    }
  }
  searchReady(event) {
    this.searchIcon = event.detail.cmp;

    if (Ext.os.is.Phone) {
      this.searchIcon.setHidden(false);
    } else {
      this.searchIcon.setHidden(true);
    }

  }
}
