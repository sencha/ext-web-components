class CustomEvent extends HTMLElement {
    connectedCallback() {
        const isHidden = this.getAttribute("hide");
        const eventData = this.getAttribute("event");
        const data = JSON.parse(eventData);
        const header = this.getAttribute('header') || true;
        const flex = this.getAttribute('flex') || undefined;
        const day = data && data.date && data.date.match(/(Monday|Tuesday|Wednesday)/)[1];
        const tools = JSON.stringify({
            close: () => {
                window.location.hash = '/schedule';
            },
        });
        let horizontalRule = '';
        if (data.description) {
            horizontalRule = '<hr/>';
        }

        const innerDescription = data.description;
        let innerPanel = '';
        if (data) {
            innerPanel = `
                <div>
                    <div class="app-event-name">${data.title}</div>
                    <div class="app-event-time">${day} ${data.start_time} - ${data.end_time}</div>
                    <div class="app-event-location">${data.location.name}</div>
                    ${horizontalRule}
                    <div class="app-event-abstract">${innerDescription}</div>
                </div>
            `;
        }
        this.innerHTML = `
            <ext-panel
                padding="20"
                height="100%"
               
            >
              
            </ext-panel>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }

    static get observedAttributes() {
        return ['hide','event'];
    }
}

window.customElements.define('custom-event', CustomEvent);
