import './MainComponent.html';

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
        if (this.wait === 0) {
            let hash = window.location.hash.substr(1);

            if (hash === '') {
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

        if (Ext.os.is.Phone) {
            let collapsed = this.navTreePanelCmp.getCollapsed();

            if (collapsed) {
                collapsed = false;
            } else {
                collapsed = true;
            }

            this.navTreePanelCmp.setCollapsed(collapsed);
        }
    }

    readyNavTreelist(event) {
        this.navTreelistCmp = event.detail.cmp;
        this.navTreelistCmp.setStore(this.treeStore);
        this.afterAllLoaded('readyNavTreelist');
    }

    readyRouter(event) {
        this.router = event.target;
        this.afterAllLoaded('readyRouter');
    }

    navTreelistSelectionChange(event) {
        const record = event.detail.record;
        this.navigate(record);
    }

    titleReady(event) {
        this.title = event.detail.cmp;
    }

    scheduleTitle(title, titleOriginator) {
        this.title.setTitle(title);
        this.title.setTitleAlign('center');

        window.titleOriginator = titleOriginator;
    }

    backButton() {
        this.back = true;
        this.navButton.setIconCls('md-icon-arrow-back');
    }

    navigate(record) {
        if (record === null) {
            console.log('it was null');
            return;
        }

        const hash = record.data.hash;
        const childNum = record.childNodes.length;

        if (childNum === 0 && hash != undefined) {
            window.location.hash = '#' + hash;
        } else {
            this.dataviewNavCmp.setData(node.childNodes);
        }

        if (Ext.os.is.Phone) {
            this.title.setTitle(record.data.text);
            this.title.setTitleAlign('center');
            this.navTreePanelCmp.setCollapsed(true);
        }
    }

    containsMatches(node) {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) {node.expand();}

        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree() {
        let title = this.title.getTitle();

        if (this.back === false) {
            let collapsed = this.navTreePanelCmp.getCollapsed();

            if (collapsed) {
                collapsed = false;
            } else {
                collapsed = true;
            }

            this.navTreePanelCmp.setCollapsed(collapsed);
        } else {
            if (title ==='Schedule') {
                schedule.resetSchedule();
                this.back = false;
            } else if (title === 'Speakers') {
                speakers.resetSpeakers();
                this.back = false;
            } else if (title === 'Calendar') {
                calendar.resetCalendar();
                this.back = false;
            } else {
                const tempTitle = window.titleOriginator;

                if (tempTitle ==='Schedule') {
                    const scheduleNode = main.navTreelistCmp.getStore().findNode('hash', 'schedule');
                    window.main.navigate(scheduleNode);
                    window.main.navTreelistCmp.setSelection(scheduleNode);
                    schedule.resetSchedule();
                    this.back = false;
                } else if (tempTitle === 'Speakers') {
                    const speakersNode = main.navTreelistCmp.getStore().findNode('hash', 'speakers');
                    window.main.navigate(speakersNode);
                    window.main.navTreelistCmp.setSelection(speakersNode);
                    speakers.resetSpeakers();
                    this.back = false;
                } else if (tempTitle === 'Calendar') {
                    const calendarNode = main.navTreelistCmp.getStore().findNode('hash', 'calendar');
                    window.main.navigate(calendarNode);
                    window.main.navTreelistCmp.setSelection(calendarNode);
                    calendar.resetCalendar();
                    this.back = false;
                }
            }
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
        if (newValue.data.date) {
            localStorage.setItem('record', JSON.stringify(newValue.data));

            if (window.schedule) {
                switch(newValue.data.date.match(/(Monday|Tuesday|Wednesday)/)[1])
                {
                case 'Monday' :
                    schedule.tabpanelCmp.setActiveItem(0);
                    break;
                case 'Tuesday' :
                    schedule.tabpanelCmp.setActiveItem(1);
                    break;
                case 'Wednesday' :
                    schedule.tabpanelCmp.setActiveItem(2);
                    break;
                default :
                    schedule.tabpanelCmp.setActiveItem(0);
                }

                const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
                this.navigate(scheduleNode);
                this.navTreelistCmp.setSelection(scheduleNode);

                schedule.sidePanel.setHidden(false);
                schedule.sideContainer.setData(JSON.parse(localStorage.getItem('record')));
            } else {
                const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
                this.navigate(scheduleNode);
                this.navTreelistCmp.setSelection(scheduleNode);
            }
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
            });
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
      </div>
    `;
        this.searchComboBox = event.detail.cmp;
        this.searchComboBox.setStore(this.store);
        this.searchComboBox.setItemTpl(tpl);
        this.searchComboBox.on('beforequery', this.onSearch.bind(this));
        this.searchComboBox.on('select', this.onSelectItem.bind(this));

        if (Ext.os.is.Phone) {
            this.searchComboBox.setHidden(true);
        } else {
            this.searchComboBox.setHidden(false);
        }
    }

    comboboxReady1(event) {
        const tpl = `
            <div>
              <div class="app-event-name">{title}</div>
              <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
              <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
              <div class="app-event-location">{location.name}</div>
            </div>
        `;
        this.searchComboBox1 = event.detail.cmp;
        this.searchComboBox1.setStore(this.store);
        this.searchComboBox1.setItemTpl(tpl);
        this.searchComboBox1.setStyle({ 'border-bottom': '1px solid #767676' });
        this.searchComboBox1.setCls('styled-placeholder');
    }

  onShow = () => setTimeout(() => {
      this.searchComboBox1.focus();
      this.searchComboBox1.select();
  }, 250);

  onSearchIconClick() {
      this.sheetCmp.setDisplayed(true);
  }

  searchReady(event) {
      this.searchIcon = event.detail.cmp;
      this.searchIcon.on('tap', this.onSearchIconClick.bind(this));

      if (Ext.os.is.Phone) {
          this.searchIcon.setHidden(false);
      } else {
          this.searchIcon.setHidden(true);
      }
  }

  sheetReady(event) {
      this.sheetCmp = event.detail.cmp;
      this.sheetCmp.setHeight('100%');
      this.sheetCmp.setWidth('100%');
  }

  closebuttonHandler() {
      this.sheetCmp.setDisplayed(false);
  }

  listReady(event) {
      this.listCmp = event.detail.cmp;
      this.listCmp.setStore(this.store);

      const itemTpl = `
          <div class="app-list-content">
              <div class="app-list-text">
                  <div class="app-list-item-title">{title}</div>
                  <div class="app-list-item-details">{[values.speakerNames ? '<span>by ' + values.speakerNames + '</span>' : '']}</div>
                  <div class="app-list-item-details">{categoryName} - {location.name}</div>
                  <div class="app-list-item-details">{[(values.date).match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time}</div>
              </div>
              <div
                  onclick="schedule.onFavoriteClick(this)"
                  data-favorite={[ values.favorite ? "on" : "off" ]}
                  data-id="{id}"
                  class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
              >
              </div>
          </div>
      `;
      this.listCmp.setItemTpl(itemTpl);
  }

  onItemTap(event) {
      this.scheduleTitle('Schedule', 'Schedule');
      schedule.banner.setHidden(true);
      this.backButton();
      schedule.tabpanelCmp.setHidden(true);
      schedule.sidePanel.setHeader(false);
      this.sheetCmp.setDisplayed(false);
      this.sheetCmp.setHidden(true);
      schedule.sidePanel.setHidden(false);

      localStorage.setItem('record', JSON.stringify(event.detail.record.data));
      const scheduleNode = main.navTreelistCmp.getStore().findNode('hash', 'schedule');
      window.main.navigate(scheduleNode);
      window.main.navTreelistCmp.setSelection(scheduleNode);

      this.title.setTitle('Schedule');
  }
}
