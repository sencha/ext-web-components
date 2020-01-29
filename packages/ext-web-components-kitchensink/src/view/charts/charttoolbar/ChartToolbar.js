Ext.require([
    'Ext.chart.theme.Blue',
    'Ext.chart.theme.Green',
    'Ext.chart.theme.Muted',
    'Ext.chart.theme.Red',
    'Ext.chart.theme.Sky',
    'Ext.chart.theme.Yellow'
]);

export default class ChartToolbar extends HTMLElement {
    constructor() {
        super();
        this.theme = 'default';
    }

    connectedCallback() {
        const theme = this.getAttribute('theme');
        const show = this.getAttribute('show');
        const preview = this.getAttribute('onDownloadButtonReady') || false;
        const onlyMidnight = this.getAttribute('onlyMidnight') || false;
        const refresh = this.getAttribute('onRefreshButtonReady') || false;
        const onStack = this.getAttribute('onStackButtonReady') || false;
        const onGroup = this.getAttribute('onGroupButtonReady') || false;
        const onPan = this.getAttribute('onPanButtonReady') || false;
        const onZoom = this.getAttribute('onZoomButtonReady') || false;
        const onCrosshair = this.getAttribute('onCrosshairButtonReady') || false;
        const supportsTouch = this.getAttribute('supportsTouch');
        const onMenuItemReady = this.getAttribute('onItemReady');
        const onThemeChange = this.getAttribute('onThemeChange');
        this.innerHTML = `
            <ext-container layout="hbox">
                <ext-button
                    hidden=${!(theme || show)}
                    margin="0 10 0 0"
                    iconCls="x-fa fa-picture-o"
                    text="Theme"
                    ui="action"
                >
                    <ext-menu>
                        <ext-menuitem

                            text="Default"
                            iconCls="x-font-icon md-icon-done"
                            itemId="0"
                        >
                        </ext-menuitem>
                        <ext-menuitem

                            text="Green"
                            hidden=${onlyMidnight}
                            itemId="1"
                        >
                        </ext-menuitem>
                        <ext-menuitem

                            onclick=${this.getAttribute('onThemeChange')}
                            text="Midnight"
                            itemId="2"
                        >
                        </ext-menuitem>
                        <ext-menuitem

                            hidden=${onlyMidnight}
                            text="Muted"
                            itemId="3">
                        </ext-menuitem>
                        <ext-menuitem
                            hidden=${onlyMidnight}

                            text="Red"
                            itemId="4">
                        </ext-menuitem>
                        <ext-menuitem
                            hidden=${onlyMidnight}

                            text="Sky"
                            itemId="5">
                        </ext-menuitem>
                        <ext-menuitem
                            text="Yellow"
                            hidden=${onlyMidnight}
                            itemId="6"
                        >
                        </ext-menuitem>
                    </ext-menu>
                </ext-button>
                <ext-button
      
                    hidden=${!preview}
                    margin="0 10 0 0"
                    ui="action"
                    iconCls="x-fa fa-eye"
                    text="Preview"
                    platformConfig='{
                        "desktop": {
                            "text": "DOWNLOAD",
                            "iconCls": "x-fa fa-download"
                        }}'
                >
                </ext-button>
                <ext-button
             
                    ontap=${this.getAttribute('onRefreshTap')}
                    hidden=${!refresh}
                    ui="action"
                    margin="0 10 0 0"
                    iconCls="x-fa fa-refresh"
                    text="REFRESH"
                >
                </ext-button>
                <ext-spacer></ext-spacer>
                <ext-segmentedbutton
                    hidden=${!(onGroup || onStack)}
                    margin="0 10 0 0"
                >
                    <ext-button
                        xonready=${onStack}
                        iconCls="x-fa fa-bars"
                        text="STACK"
                    >
                    </ext-button>
                    <ext-button
                        xonready=${onGroup}
                        iconCls="x-fa fa-bar-chart"
                        text="GROUP"
                    >
                    </ext-button>
                </ext-segmentedbutton>

                <ext-segmentedbutton
                    hidden=${!(onPan || onZoom) || supportsTouch}
                >
                    <ext-button
                        xonready=${onPan}
                        iconCls="x-fa fa-arrows"
                        text="PAN"
                        value="false"
                    >
                    </ext-button>
                    <ext-button
                        xonready=${onZoom}
                        iconCls="x-fa fa-search-plus"
                        text="ZOOM"
                        value="true"
                    >
                    </ext-button>
                    <ext-button
                        hidden=${!onCrosshair}
                        xonready=${onCrosshair}
                        iconCls="x-fa fa-crosshairs"
                        text="CROSSHAIR"
                        value="crosshair"
                    >
                    </ext-button>
                </ext-segmentedbutton>
            </ext-container>
        `;
    }
}

window.customElements.define('chart-toolbar', ChartToolbar);
