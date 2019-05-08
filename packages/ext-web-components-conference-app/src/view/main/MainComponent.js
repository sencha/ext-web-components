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

    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      }
    });
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
    else {
      schedule.resetSchedule();
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

  onSelectItem(combo, newValue) {
    if (newValue) {
      localStorage.setItem('record', JSON.stringify(newValue.data));
      if (newValue.data.date) {
        switch(newValue.data.date.match(/(Monday|Tuesday|Wednesday)/)[1])
        {
          case 'Monday' :
            schedule.tabpanelCmp.setActiveItem(0);
            schedule.list1.setDefaultFocus(newValue.data.location.id);
            schedule.list1.focus();
            break;
          case 'Tuesday' :
            schedule.tabpanelCmp.setActiveItem(1);
            schedule.list2.setDefaultFocus(newValue.data.location.id);
            schedule.list1.focus();
            break;
          case 'Wednesday' :
            schedule.tabpanelCmp.setActiveItem(2);
            schedule.list3.setDefaultFocus(newValue.data.location.id);
            schedule.list1.focus();
            break;
          default :
            schedule.tabpanelCmp.setActiveItem(0);
        }
      }
      const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
      this.navigate(scheduleNode)
      this.navTreelistCmp.setSelection(scheduleNode);
      schedule.containerCmp2.setHidden(false);
      schedule.containerCmp2.setData(JSON.parse(localStorage.getItem('record')));
    }
  }

  onSearch(queryPlan) {
    let { query } = queryPlan;
    query = (query || '').toLowerCase();

    this.query = query;
    this.store.clearFilter();
    this.store.filterBy(record => {
      const { title, speakers } = record.data;

      return query.trim().split(/\s+/).some(token => {
        return title.toLowerCase().indexOf(token) >= 0 ||
          (speakers && speakers.some(speaker => speaker.name.toLowerCase().indexOf(token) >= 0));
      })
    });

    this.searchComboBox.setStore(this.store);


    this.searchComboBox.expand();
    return false;
  }

  comboboxReady(event) {
    const tpl = `
    <div>
      <div class="app-event-name">{title}</div>
      <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
      <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
      <div class="app-event-location">{location.name}</div>
      {[values.description ? '<hr/><div class="app-event-abstract" >' + values.description + '</div>' : '']}
    </div>
    `;
    this.searchComboBox = event.detail.cmp;
<<<<<<< HEAD
    this.searchComboBox.setStore(this.store);
    this.searchComboBox.setItemTpl(tpl);
    this.searchComboBox.on('beforequery', this.onSearch.bind(this));
    this.searchComboBox.on('select', this.onSelectItem.bind(this));
=======

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

>>>>>>> 2d407b2195ee11d8c3baec02af17773ae6786bdc
  }
}
