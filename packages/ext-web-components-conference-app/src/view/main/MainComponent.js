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

        this.favorites = JSON.parse(localStorage.getItem('favoriteEvents'));
        this.store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/schedule.json'
            },
            listeners: {
                load: store => store.each(record => {
                    if (this.favorites != null) {
                        record.set('favorite', this.favorites.indexOf(record.getId()) !== -1);
                    }
                })
            }
        });

        this.searchStore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/schedule.json'
            },
            listeners: {
                load: store => store.each(record => {
                    if (this.favorites != null) {
                        record.set('favorite', this.favorites.indexOf(record.getId()) !== -1);
                    }
                })
            }
        });
    }

    afterAllLoaded = () => {
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

    readyNavTreePanel = (event) => {
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

    readyNavTreelist = (event) => {
        this.navTreelistCmp = event.detail.cmp;
        this.navTreelistCmp.setStore(this.treeStore);
        this.afterAllLoaded('readyNavTreelist');
    }

    readyRouter = (event) => {
        this.router = event.target;
        this.afterAllLoaded('readyRouter');
    }

    navTreelistSelectionChange = (event) => {
        const record = event.detail.record;
        this.navigate(record);
    }

    titleReady = (event) => {
        this.title = event.detail.cmp;
    }

    scheduleTitle = (title, titleOriginator) => {
        this.title.setTitle(title);
        this.title.setTitleAlign('center');

        window.titleOriginator = titleOriginator;
    }

    backButton = () => {
        this.back = true;
        this.navButton.setIconCls('md-icon-arrow-back');
    }

    navigate = (record) => {
        if (record === null) {
            //console.log('it was null');
            return;
        }

        const hash = record.data.hash;
        const childNum = record.childNodes.length;

        if (childNum === 0 && hash != undefined) {
            window.location.hash = '#' + hash;
        }

        if (Ext.os.is.Phone) {
            this.title.setTitle(record.data.text);
            this.title.setTitleAlign('center');
            this.navTreePanelCmp.setCollapsed(true);
        }
    }

    containsMatches = (node) => {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) {node.expand();}

        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>');
        return found;
    }

    toggleTree = () => {
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
                window.schedule.resetSchedule();
                this.back = false;
            } else if (title === 'Speakers') {
                window.speakers.resetSpeakers();
                this.back = false;
            } else if (title === 'Calendar') {
                window.calendar.resetCalendar();
                this.back = false;
            } else {
                const tempTitle = window.titleOriginator;

                if (tempTitle ==='Schedule') {
                    const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
                    this.navigate(scheduleNode);
                    this.navTreelistCmp.setSelection(scheduleNode);
                    window.schedule.resetSchedule();
                    this.back = false;
                } else if (tempTitle === 'Speakers') {
                    const speakersNode = this.navTreelistCmp.getStore().findNode('hash', 'speakers');
                    this.navigate(speakersNode);
                    this.navTreelistCmp.setSelection(speakersNode);
                    window.speakers.resetSpeakers();
                    this.back = false;
                } else if (tempTitle === 'Calendar') {
                    const calendarNode = this.navTreelistCmp.getStore().findNode('hash', 'calendar');
                    this.navigate(calendarNode);
                    this.navTreelistCmp.setSelection(calendarNode);
                    window.calendar.resetCalendar();
                    this.back = false;
                }
            }
        }
    }

    toggleButtonReady = (event) => {
        this.navButton = event.detail.cmp;
        this.navButtonIcon = event.detail.cmp.initialConfig.iconCls;

        if (Ext.os.is.Phone) {
            this.navButton.setHidden(false);
        } else {
            this.navButton.setHidden(true);
        }
    }

    onSelectItem = (combobox, newValue) => {
        if (newValue.data.date) {
            localStorage.setItem('record', JSON.stringify(newValue.data));
            const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
            this.navTreelistCmp.setSelection(scheduleNode);
            window.schedule.sidePanel.setHidden(false);
            window.schedule.sideContainer.setData(JSON.parse(localStorage.getItem('record')));

            if (window.schedule) {
                switch(newValue.data.date.match(/(Monday|Tuesday|Wednesday)/)[1]) {
                case 'Monday' : {
                    window.schedule.tabpanelCmp.setActiveItem(0);
                    setTimeout(function() {
                        window.schedule.list1.setSelection(newValue);
                        const selectedLitsItem1 = document.querySelectorAll('[data-id="'+newValue.id+'"]')[0];
                        let coord1 = selectedLitsItem1.getBoundingClientRect();
                        window.schedule.list1.getScrollable().scrollTo(0, (coord1.y - 2000));
                    }, 1000);
                    break;
                }
                case 'Tuesday' : {
                    window.schedule.tabpanelCmp.setActiveItem(1);
                    setTimeout(function() {
                        window.schedule.list2.setSelection(newValue);
                        const selectedLitsItem2 = document.querySelectorAll('[data-id="'+newValue.id+'"]')[0];
                        let coord2 = selectedLitsItem2.getBoundingClientRect();
                        window.schedule.list2.getScrollable().scrollTo(0, coord2.y);
                    }, 1000);
                    break;
                }
                case 'Wednesday' : {
                    window.schedule.tabpanelCmp.setActiveItem(2);
                    setTimeout(function() {
                        window.schedule.list3.setSelection(newValue);
                        const selectedLitsItem3 = document.querySelectorAll('[data-id="'+newValue.id+'"]')[0];
                        let coord3 = selectedLitsItem3.getBoundingClientRect();
                        window.schedule.list3.getScrollable().scrollTo(0, coord3.y);
                    }, 1000);

                    break;
                }
                default :
                    window.schedule.tabpanelCmp.setActiveItem(0);
                }

                
            } else {
                const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
                console.log(scheduleNode, 'schedule');
                this.navigate(scheduleNode);
                this.navTreelistCmp.setSelection(scheduleNode);
            }
        }
    }

    onSearch = (queryPlan) => {
        let { query } = queryPlan;
        query = (query || '').toLowerCase();

        this.query = query;
        this.searchStore.clearFilter();

        this.searchStore.filterBy(record => {
            const { title, speakers } = record.data;

            return query.trim().split(/\s+/).some(token => {
                return title.toLowerCase().indexOf(token) >= 0 ||
                  (speakers && speakers.some(speaker => speaker.name.toLowerCase().indexOf(token) >= 0));
            });
        });

        this.searchComboBox.setStore(this.searchStore);
        this.searchComboBox.expand();
        return false;
    }

    comboboxReady = (event) => {
        const tpl = `
            <div>
              <div class="app-event-name" style="font-size:20px">{title}</div>
              <div class="app-event-speaker">{[values.speakerName ? 'by ' + values.speakerName : '']}</div>
              <div class="app-event-time">{[values && values.date && values.date.match(/(Monday|Tuesday|Wednesday)/)[1]]} {start_time} - {end_time}</div>
              <div class="app-event-location">{location.name}</div>
            </div>
        `;
        this.searchComboBox = event.detail.cmp;
        this.searchComboBox.setStore(this.searchStore);
        this.searchComboBox.setItemTpl(tpl);
        this.searchComboBox.on('beforequery', this.onSearch.bind(this));
        this.searchComboBox.on('select', this.onSelectItem.bind(this));

        if (Ext.os.is.Phone) {
            this.searchComboBox.setHidden(true);
        } else {
            this.searchComboBox.setHidden(false);
        }
    }

    mobileSearchChange = ({ detail }) => {
        const value = detail.newValue;
        let query = (value || '').toLowerCase();

        this.store.clearFilter();
        this.store.filterBy(record => {
            const { title, speakers } = record.data;

            return query.trim().split(/\s+/).some(token => {
                return title.toLowerCase().indexOf(token) >= 0 ||
                  (speakers && speakers.some(speaker => speaker.name.toLowerCase().indexOf(token) >= 0));
            });
        });

        this.searchComboBox.setStore(this.store);
    }

    onSearchIconClick = () => {
        this.sheetCmp.setDisplayed(true);
    }

    searchReady = (event) => {
        this.searchIcon = event.detail.cmp;
        this.searchIcon.on('tap', this.onSearchIconClick.bind(this));

        if (Ext.os.is.Phone) {
            this.searchIcon.setHidden(false);
        } else {
            this.searchIcon.setHidden(true);
        }
    }

    sheetReady = (event) => {
        this.sheetCmp = event.detail.cmp;
    }

    closeButtonHandler = () => {
        this.store.clearFilter();
        this.sheetCmp.setDisplayed(false);
    }

    mobileListReady = (event) => {
        this.mobileListCmp = event.detail.cmp;

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
        this.mobileListCmp.setItemTpl(itemTpl);
        this.mobileListCmp.setStore(this.store);
    }

    onItemTap = (event) => {
        this.store.clearFilter();
        this.scheduleTitle('Schedule', 'Schedule');
        window.schedule.banner.setHidden(true);
        this.backButton();
        window.schedule.tabpanelCmp.setHidden(true);
        window.schedule.sidePanel.setHeader(false);
        this.sheetCmp.setDisplayed(false);
        window.schedule.sidePanel.setHidden(false);

        localStorage.setItem('record', JSON.stringify(event.detail.record.data));
        const scheduleNode = this.navTreelistCmp.getStore().findNode('hash', 'schedule');
        this.navigate(scheduleNode);
        this.navTreelistCmp.setSelection(scheduleNode);
        window.schedule.sideContainer.setData(JSON.parse(localStorage.getItem('record')));
        this.title.setTitle('Schedule');
    }
}
