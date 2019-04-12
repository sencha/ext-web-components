import "./ScheduleComponent.html";

export default class ScheduleComponent {
  constructor() {
    if (!localStorage.getItem('favoriteEvents')) {
      localStorage.setItem('favoriteEvents', JSON.stringify([]));
    }
    this.favorites = JSON.parse(localStorage.getItem('favoriteEvents'));
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      }
    });
    this.storeDefaults = {
      source: this.store,
      autoDestroy: true,
      grouper: {
        property: 'start_time',
        sortProperty: 'startDate'
      }
    };
    this.record = null;
  }

  containerready(event) {
    this.containerCmp = event.detail.cmp;
  }

  onItemTap(event) {
    this.record = event.detail.record.data;
    if (this.sideContainer) {
      this.sideContainer.remove(this.speakerChild);
      this.containerCmp.remove(this.sideContainer);
    }

    this.sideContainer = Ext.create({
      xtype: 'panel',
      flex: '1',
      padding: '20',
      header: 'true'
    });
    const day = this.record && this.record.date && this.record.date.match(/(Monday|Tuesday|Wednesday)/)[1];
    const description = this.record.description ? `<hr/>
    <div class="app-event-abstract" >${this.record.description}</div>` : '';
    const speakerName = this.record.speakerNames ? `by ${this.record.speakerNames}` : '';
    this.speakerChild = Ext.create({
      xtype: 'container',
      html: `
              <div>
                <div class="app-event-name">${this.record.title}</div>
                <div class="app-event-speaker">${speakerName}</div>
                <div class="app-event-time">${day} ${this.record.start_time} - ${this.record.end_time}</div>
                <div class="app-event-location">${this.record.location.name}</div>
                ${description}
              </div>
                    `,
    });
    this.sideContainer.add(this.speakerChild);
    this.containerCmp.add(this.sideContainer);
  }

  onFavoriteClick(event) {
    const data_id = event.currentTarget.dataset.id;
    Ext.get(event.target).ripple(event, { bound: false, color: '#999' });
    const record = this.store.findRecord('id', data_id);
    let favorites = [];
    const favoritesSet = JSON.parse(JSON.stringify(this.favorites));

    if (this.favorites.indexOf(data_id) === -1) {
      favorites = [...favoritesSet, data_id];
      event.target.setAttribute('data-favorite', "on");
      // record.set('favorite', true);
    } else {
      favorites = favoritesSet.filter(event => event !== data_id);
      event.target.setAttribute('data-favorite', "off");
      // record.set('favorite', false);
    }
    localStorage.setItem('favoriteEvents', JSON.stringify(favorites));
    this.favorites = favorites;
  }

  firstListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Monday, November 7' }]
      }
    );

    const itemTpl = `<div class="app-list-content">
                   <div class="app-list-text">
                      <div class="app-list-item-title">{title}</div>
                      <div class="app-list-item-details">{speakerNames}</div> 
                      <div class="app-list-item-details">{categoryName} - {location.name}</div>
                      <div class="app-list-item-details">{date} {start_time}</div> 
                   </div>
                   <div
                      onclick="schedule.onFavoriteClick(event)"
                      data-id="{id}"
                      data-favorite="{[ JSON.parse(localStorage.getItem('favoriteEvents')).indexOf(values.id) > -1 ? "on" : "off" ]}"
                      class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                    />
               </div>`
    this.list1 = event.detail.cmp;
    this.list1.setItemTpl(itemTpl);
    this.list1.setStore(store);
  }

  secondListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Tuesday, November 8' }]
      }
    );
    const itemTpl = `<div class="app-list-content">
                  <div class="app-list-text">
                    <div class="app-list-item-title">{title}</div>
                    <div class="app-list-item-details">{detail}</div> 
                    <div class="app-list-item-details">{categoryName} - {location.name}</div>
                    {start_time}
                  </div>
                  <div
                    onclick="schedule.onFavoriteClick(event)"
                    data-id="{id}"
                    data-favorite="{[ JSON.parse(localStorage.getItem('favoriteEvents')).indexOf(values.id) > -1 ? "on" : "off" ]}"
                    class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                  />
              </div>`
    this.list2 = event.detail.cmp;
    this.list2.setItemTpl(itemTpl);
    this.list2.setStore(store);
  }

  thirdListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Wednesday, November 9' }]
      }
    );
    const itemTpl = `<div class="app-list-content">
                  <div class="app-list-text">
                    <div class="app-list-item-title">{title}</div>
                    <div class="app-list-item-details">{detail}</div> 
                    <div class="app-list-item-details">{categoryName} - {location.name}</div>
                    {start_time}
                  </div>
                  <div
                    onclick="schedule.onFavoriteClick(event)"
                    data-id="{id}"
                    data-favorite="{[ JSON.parse(localStorage.getItem('favoriteEvents')).indexOf(values.id) > -1 ? "on" : "off" ]}"
                    class="x-item-no-tap x-font-icon md-icon-star app-list-tool app-favorite"
                  />
              </div>`
    this.list3 = event.detail.cmp;
    this.list3.setItemTpl(itemTpl);
    this.list3.setStore(store);
  }

  starListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'favorite', value: true }],
        grouper: {
          groupFn: (item) => `${item.get('date')}, ${item.get('start_time')}`,
          sortProperty: 'startDate'
        }
      }
    );
    this.listStar = event.detail.cmp;
    this.listStar.setStore(store);
  }
}
