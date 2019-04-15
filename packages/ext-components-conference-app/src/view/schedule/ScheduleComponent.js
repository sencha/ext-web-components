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
    this.itemTpl = `<div className="app-list-content">
                   <div className="app-list-text">
                      <div className="app-list-item-title" dangerouslySetInnerHTML={title}/>
                      <div className="app-list-item-details">{detail}</div> 
                      <div className="app-list-item-details">{categoryName} - {location.name}</div>
                      {start_time}
                   </div>
               </div>`
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

  firstListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Monday, November 7' }]
      }
    );
    this.list1 = event.detail.cmp;
    this.list1.setStore(store);
    console.log(this.itemTpl);

    this.list1.setItemTpl(this.itemTpl)
  }

  secondListReady(event) {
    const store = Ext.create(
      'Ext.data.ChainedStore',
      {
        ...this.storeDefaults,
        filters: [{ property: 'date', value: 'Tuesday, November 8' }]
      }
    );
    this.list2 = event.detail.cmp;
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
    this.list3 = event.detail.cmp;
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
