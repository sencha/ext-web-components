/**
 * @class Ext.layout.Fit
 * @extend Ext.layout.Auto
 * This is a layout for container that contain a single item that automatically expands to
 * fill the container. This class is intended to be extended or created via the layout:'fit'
 * {@link Ext.container.Container#layout} config, and should generally not need to be created
 * directly via the new keyword.
 *
 * Fit layout does not have any direct config options (other than inherited ones). To fit a
 * panel to a container using Fit layout, simply set `layout: 'fit'` on the container and
 * add a single panel to it.
 * 
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container width="300" height="150" layout="fit">
 *          <ext-panel title="Inner Panel" bodyPadding="20" border="false">
 *               This is the inner panel content
 *          </ext-panel>
 *      </ext-container>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *      import '@sencha/ext-web-components/dist/ext-spinnerfield.component';
 * 
 *      export default class FitComponent {}
 *      ```
 */
