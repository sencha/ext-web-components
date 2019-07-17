/**
 * @class Ext.Progress
 * @extend Ext.Gadget
 * @xtype progress
 * @xtype progressbarwidget
 * @mixin Ext.ProgressBase
 *
 * A simple progress bar widget.
 *
 * You are responsible for showing, updating (via {@link #setValue}) and clearing the
 * progress bar as needed from your own code. This method is most appropriate when you
 * want to show progress throughout an operation that has predictable points of interest
 * at which you can update the control.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-panel layout='{ "type": "vbox", "align": "center" }'>
 *    <ext-progress
 *      value="0"
 *      text="Loading: 0"
 *      width="75%"
 *      onready="progress.progressBar1Ready"
 *    >
 *      <ext-container
 *        style='{"marginTop": "20"}'
 *        html="<span>Loading: 0%</span>"
 *        onready="progress.innnerContainerReady"
 *      >
 *      </ext-container>
 *    </ext-progress>
 *    <ext-progress
 *      value="0"
 *      width="75%"
 *      onready="progress.progressBar2Ready"
 *    >
 *    </ext-progress>
 *<ext-panel>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-panel.component';
 *import '@sencha/ext-web-components/dist/ext-progress.component';
 *
 *export default class ProgressComponent {
 *  constructor() {
 *    this.progress = 0;
 *  }
 *
 *  progressBar1Ready = (event) => {
 *    this.progressBar1Cmp = event.detail.cmp;
 *  }
 *
 *  progressBar2Ready = (event) => {
 *    this.progressBar2Cmp = event.detail.cmp;
 *
 *    setInterval(() => {
 *      this.progress += 1;
 *
 *      if (this.progress > 100) {
 *        this.progress = 0;
 *      }
 *
 *      this.progressBar1Cmp.setValue(this.progress);
 *      this.progressBar1Cmp.setText(`Loading: ${this.progress}`);
 *      this.innnerContainerCmp.setHtml(`Loading: ${this.progress}`);
 *      this.progressBar2Cmp.setValue(this.progress);
 *    }, 100);
 *  }
 *
 *  innnerContainerReady = (event) => {
 *    this.innnerContainerCmp = event.detail.cmp;
 *  }
 *}
 *```
 */

/**
 * @cfg {String} [text=null]
 * The background text
 */

/**
 * @cfg {Boolean} [animate=false]
 * Specify as `true` to have this progress bar animate to new extent when updated.
 */
