import "./ScheduleComponent.html";

export default class ScheduleComponent {
  constructor() {
    this.favorites = localStorage.getItem('favoriteEvents') || [];
    this.store = Ext.create('Ext.data.Store', {
      autoLoad: true,
      proxy: {
        type: 'ajax',
        url: 'resources/schedule.json'
      },
      listeners: {
        load: store => store.each(record => record.set('favorite', this.favorites.indexOf(record.getId()) !== -1))
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

    // this.itemTpl = createTpl({ 
    //   getQuery: this.getQuery, 
    //   showTime
    // });
  }

  // createTpl({ getQuery, showTime=true }) {
  //   return data => {
  //       const mark = (text) => {
  //           const query = getQuery();
  //           return query ? highlight(query, text) : { __html: text};
  //       }

  //       const day = data.date && data.date.match(/(Monday|Tuesday|Wednesday)/)[1];
  //       const detail = data.speakerNames ? `<span>by <span dangerouslySetInnerHTML=${mark(data.speakerNames)}/></span>` : '';
  //       const showTimeDiv = showTime && `<div className="app-list-item-details">${day} ${data.start_time}</div>`;
  //       return (`
  //           <div className="app-list-content">
  //               <div className="app-list-text">
  //                   <div className="app-list-item-title" dangerouslySetInnerHTML=${mark(data.title)}/>
  //                   <div className="app-list-item-details">${detail}</div> 
  //                   <div className="app-list-item-details">${data.categoryName} - ${data.location.name}</div>
  //                   ${showTimeDiv}
  //               </div>
                
  //           </div>
  //       `)
  //   }
  // }

  // onItemTap = (list, index, target, record) => {
  //   if (record) {
  //       self.location.hash = `/schedule/${record.id}`;
  //   }

  //   if (this.props.onSelect) {
  //       this.props.onSelect(record);
  //   }
  // }

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
    this.speakerName = this.record.speakerNames ? `by ${this.record.speakerNames}` : this.record.category;
    this.speakerChild = Ext.create({
      xtype: 'container',
      html: `
              <div>
                <div class="app-event-name">${this.record.title}</div>
                <div class="app-event-speaker">${this.speakerName}</div>
                <div class="app-event-time">{day} ${this.record.start_time} - ${this.record.end_time}</div>
                <div class="app-event-location">${this.record.location.name}</div>
                { data.description && <hr/> }
                <div className="app-event-abstract" dangerouslySetInnerHTML={{ __html: data.description }}/>
              </div>
                    `,
    });
    this.sideContainer.add(this.speakerChild);
    this.containerCmp.add(this.sideContainer);
  }

  onFavoriteClick(id) {
    const record = this.store.findRecord('id', id);
    let favorites;

    if (this.state.favorites.indexOf(id) === -1) {
      record.set('favorite', true);
      favorites = [...this.state.favorites, id];
    } else {
      record.set('favorite', false);
      favorites = this.state.favorites.filter(e => e !== id);
    }

    this.state.favorites = favorites;

    localStorage.setItem('favoriteEvents', JSON.stringify(favorites));
  }

  myfunc(event) {
    Ext.get(e.target).ripple(e, { bound: false, color: '#999' });
    this.onFavoriteClick();
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
                      <div class="app-list-item-details">{detail}</div> 
                      <div class="app-list-item-details">{categoryName} - {location.name}</div>
                      {start_time}
                   </div>
                   <div
                      onclick="schedule.myfunc(event)"
                      data-id=""
                      data-favorite="on"
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
