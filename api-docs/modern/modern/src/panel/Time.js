/**
 * This component presents a time selection view with different interaction modes
 * depending on the device and configuration options. Default time view is analog
 * clock face.
 *
 * Time panel is mostly used as a picker by {@link Ext.field.Time} but can also be
 * created and used directly.
 *
 * @since 6.6.0
 *
 * Example usage:
 * 
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container padding={10} layout='{"auto"}'>
 *          <ext-timepanel shadow/>
 *      </ext-container>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-timepanel.component';
 * 
 *      export default class TimeComponent {}
 *      ```
 */