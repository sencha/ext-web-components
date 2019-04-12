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
    alert('m here')
    this.containerCmp = event.detail.cmp;
  }

  onItemTap(location, eopts) {
    console.log(eopts);
    this.record = eopts.record.data;
    this.speakerId = eopts.record.id;
    if (this.sideContainer) {
      this.sideContainer.remove(this.speakerChild);
      this.containerCmp.remove(this.sideContainer);
    }

    this.sideContainer = Ext.create({
      xtype: 'panel',
      flex: '1',
      layout: 'vbox',
      padding: '20',
    });
    this.speakerChild = Ext.create({
      xtype: 'container',
      html: `
                <div class="app-speaker-ct">
                            <img class="app-speaker-image" src=${this.record.avatar_url}></img>
                            <div class="app-speaker-text">
                                <div class="app-speaker-name">${this.record.name}</div>
                                <div class="app-speaker-title">${this.record.title}</div>
                                <div class="app-speaker-company">${this.record.company}</div>
                                <div class="app-speaker-bio">${this.record.bio}</div>
                            </div>
                        </div>
                    `,
    });
    this.sideContainer.add(this.speakerChild);
    this.containerCmp.add(this.sideContainer);
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
