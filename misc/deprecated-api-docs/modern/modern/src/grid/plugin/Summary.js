/**
 * @class Ext.grid.plugin.Summary
 * @extend Ext.plugin.Abstract
 * @alias plugin.summaryrow
 * @alias plugin.gridsummaryrow
 * @alias plugin.gridsummary
 *
 * This {@link Ext.grid.Grid grid} plugin manages a bottom-docked summary {@link #row row}.
 *
 * By default, the column's {@link Ext.grid.column.Column#cfg!dataIndex dataIndex} is used
 * to read from the {@link Ext.data.Store#getSummaryRecord summary record} as controlled by
 * the model's {@link Ext.data.Model#cfg!summary summary} definition. To use a different
 * field, the {@link Ext.grid.column.Column#cfg!summaryDataIndex summaryDataIndex} can be
 * specified.
 *
 * The {@link Ext.grid.column.Column#cfg!summary summary} config can be used to perform
 * column-specific summarization. The `summary` config uses one of the registered summary
 * types (see below). Custom summary types can be defined, or a column-specific algorithm
 * can be provided with a {@link Ext.grid.column.Column#cfg!summaryRenderer summaryRenderer}.
 *
 * ## Summary Types
 *
 * The `summary` type can be one of the predefined summary types:
 *
 * + {@link Ext.data.summary.Average average}
 * + {@link Ext.data.summary.Count count}
 * + {@link Ext.data.summary.Max max}
 * + {@link Ext.data.summary.Min min}
 * + {@link Ext.data.summary.Sum sum}
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container width="100%" height="100%">
 *    <ext-grid
 *      shadow="true"
 *      height="275"
 *      plugins='["gridsummaryrow"]'
 *      onready="summaryGrid.onGridReady"
 *      fullscreen="true"
 *      variableHeights="true"
 *    >
 *        <ext-column text="First Name" dataIndex="fname" flex="1"></ext-column>
 *        <ext-column text="Last Name" dataIndex="lname" flex="1"></ext-column>
 *        <ext-column text="Talent" dataIndex="talent" flex="1"></ext-column>
 *        <ext-column text="Wins" dataIndex="wins" flex="1" summary="sum"></ext-column>
 *    </ext-grid>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-grid.component';
 *import '@sencha/ext-web-components/dist/ext-column.component';
 *
 *Ext.require('Ext.grid.plugin.Summary');
 *
 *export default class SummaryGridComponent {
 *    constructor() {
 *       this.store = new Ext.data.Store({
 *          data: [
 *              { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster', 'wins': 150 },
 *              { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery', 'wins': 120 },
 *              { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All', 'wins': 90 },
 *              { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert', 'wins': 70 },
 *              { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower', 'wins': 60   }
 *          ]
 *       });
 *    }
 *
 *    onGridReady(event) {
 *        this.summaryGridCmp = event.detail.cmp;
 *        this.summaryGridCmp.setStore(this.store);
 *    }
 *}
 *
 * window.summaryGrid = new SummaryGridComponent();
 *```
 */

/**
 * @cfg {Ext.grid.SummaryRow/Object} row
 * The configuration object for the docked summary row managed by this plugin.
 * @since 6.5.0
 * @accessor
 */
