export default class Speaker extends HTMLElement {
    constructor() {
        super();

        let favorites = localStorage.getItem('favoriteEvents');
        favorites = favorites ? JSON.parse(favorites) : [];

        const scheduleStore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/schedule.json',
            },
            listeners: {
                load:
                    store => store
                        .each(record => record
                            .set('favorite', favorites.indexOf(record.getId()) !== -1)),
            },
        });

        this.store = Ext.create('Ext.data.ChainedStore', {
            autoDestroy: true,
            source: scheduleStore,
        });
    }

    connectedCallback() {
        // this.id = 'speakerPageId';
        this.mappedStore = this.store;

        const { parentComponentId } = this.attributes;
        const ele = document.getElementById(parentComponentId.value);
        const data = ele.record;

        // if (ele.record && data.sessions) {
        //     this.mappedStore.filter('id', data.sessions);
        // }

        this.innerHTML = `<ext-container flex="1" layout="vbox" padding="20">
                            <ext-container>
                                <div class="app-speaker-ct">
                                    <img class="app-speaker-image" src=${data.avatar_url}></img>
                                    <div class="app-speaker-text">
                                        <div class="app-speaker-name">${data.name}</div>
                                        <div class="app-speaker-title">${data.title}</div>
                                        <div class="app-speaker-company">${data.company}</div>
                                        <div class="app-speaker-bio">${data.bio}</div>
                                    </div>
                                </div>
                            </ext-container>
                            <h2 style={{marginTop: '40px', color: '#999' }}>Events</h2>
                            <ext-container shadow="true" layout="fit">
                            </ext-container>
                          </ext-container>`;
    }
}

window.customElement.define('speaker-page', Speaker);