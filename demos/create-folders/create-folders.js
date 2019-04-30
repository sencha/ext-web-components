const fs = require('fs')
const path = require('path')

function createFolders(items, folderPath) {
  items.forEach(function(item){
    item.hash = item.text.toLowerCase().replace(/\s/g, '')
    item.folderPath = folderPath + item.hash + '/';
    var folder = path.join(__dirname, item.folderPath)
//    console.log('mkdir:         ' + folder)
    fs.mkdirSync(folder)
     
    if (item.children == undefined) {

      console.log(
`import ${item.component.name} from '${item.folderPath}${item.component.name}.js';`
      )

      var htmlData = 
`<ext-button 
  text="${item.hash}"
  onready="${item.hash}.readyButton1"
  ontap="${item.hash}.tapButton1">
</ext-button>
`
      var htmlFile = path.join(__dirname, item.folderPath + item.component.name + '.html')
//      console.log('writefileSync: ' + htmlFile)
      fs.writeFileSync(htmlFile,htmlData)

      var jsData = 
`import './${item.component.name}.css';

export default class ${item.component.name} {

  constructor () {
    console.log('in ${item.component.name} constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}
`
      var jsFile = path.join(__dirname, item.folderPath + item.component.name + '.js')
//      console.log('writefileSync: ' + jsFile)
      fs.writeFileSync(jsFile,jsData)
      
      var cssData = 
`.${item.component.name} {
  display: block;
  font-size: 16px;
  color: #abb2bf;
  background: #282c34;
}
`
      var cssFile = path.join(__dirname, item.folderPath + item.component.name + '.css')
//      console.log('writefileSync: ' + cssFile)
      fs.writeFileSync(cssFile,cssData)
    }
    else {
      createFolders(item.children, item.folderPath)
    }
  })
}

function run() {
  var menu = getMenu();
  createFolders(menu, './src/viewtest/');
}

run()

function getMenu() {
class ButtonComponent {}
class SegmentedButtonComponent {}
class SplitButtonComponent {}
class ColorPickerComponent {}
class CarouselComponent {}
class SimpleDragDropComponent {}
class ConstraintsDragDropComponent {}
class ProxiesDragDropComponent {}
class HandlesDragDropComponent {}
class GroupsDragDropComponent {}
class DataDragDropComponent {}
class FilesDragDropComponent {}
class DrawComponent {}
class CheckBoxFieldComponent {}
class ComboBoxFieldComponent {}
class MultiSelectComboBoxFieldComponent {}
class ContainerFieldComponent {}
class DatePickerFieldComponent {}
class EmailFieldComponent  {}
class FieldSetComponent {}
class FileFieldComponent {}
class FormPanelComponent {}
class NumberFieldComponent {}
class PasswordFieldComponent {}
class RadioFieldComponent {}
class SearchFieldComponent {}
class SelectFieldComponent {}
class SliderFieldComponent {}
class SpinnerFieldComponent {}
class TextAreaFieldComponent {}
class TextFieldComponent {}
class TimeFieldComponent {}
class ToggleFieldComponent {}
class URLFieldComponent {}
class ValidationComponent {}
class DefaultGaugeComponent {}
class NeedleGaugeComponent {}
class CardLayoutComponent {}
class CenterLayoutComponent {}
class FitLayoutComponent {}
class FormLayoutComponent {}
class hboxLayoutComponent {}
class ResizableLayoutComponent {}
class vboxLayoutComponent {}
class BasicListComponent {}
class DisclosureListComponent {}
class GroupedListComponent {}
class NestedListComponent {}
class PullRefreshListComponent {}
class PagingListComponent {}
class BasicAccordionSwiperComponent {}
class BasicStepSwiperComponent {}
class UndoableAccordionSwiperComponent {}
class UndoableStepSwiperComponent {}
class VideoComponent {}
class AudioComponent {}
class BasicPanelComponent {}
class ResizableHandleComponent {}
class CollapsiblePanelComponent {}
class BasicDatePanelComponent {}
class AdvancedDatePanelComponent {}
class TimePanelComponent {}
class DialogPopupComponent {}
class MessagePopupComponent {}
class ToastPopupComponent {}
class ProgressBarComponent {}
class RippleComponent {}
class SheetComponent {}
class BasicTabComponent {}
class BottomTabComponent {}
class IconTabComponent {}
class DesktopTabComponent {}
class ClosableTabComponent {}
class ScrollingTabComponent {}
class TabBarComponent {}
class TitleBarComponent {}
class ToolBarComponent {}
class ToolTipComponent {}
class TouchEventsComponent {}
class WizardComponent {}
class BasicGridComponent {}
class GroupedGridComponent {}
class LockingGridComponent {}
class EditableGridComponent {}
class XMLGridComponent {}
class GridToolsComponent {}
class RowExpanderComponent {}
class RowBodyComponent {}
class SummaryRowComponent {}
class GridFilteringComponent {}
class ViewOptionsComponent {}
class BigDataComponent {}
class SelectAndCopyComponent {}
class ReconfigureGridComponent {}
class ComponentsInCellsComponent {}
class StockTickerComponent {}
class TreeListComponent {}
class TreeComponent {}
class EditableTreeComponent {}
class TreeGridComponent {}
class TreeDecorationsComponent {}
class HeterogeneousTreeComponent {}
class CalendarPanelComponent {}
class CalendarMonthViewComponent {}
class CalendarWeekViewComponent {}
class CalendarDaysViewComponent {}
class CalendarTimezoneSupportComponent {}
class CalendarDragResizeValidationComponent {}
class BasicAreaComponent {}
class StackedAreaComponent {}
class FullStackedAreaComponent {}
class NegativeValuesAreaComponent {}
class BasicBarComponent {}
class StackedBarComponent {}
class FullStackedBarComponent {}
class BoxPlotComponent {}
class BasicColumnComponent {}
class StackedComponent {}
class ColumnWithRendererComponent {}
class MultiaxisColumnComponent {}
class Basic3DColumnComponent {}
class ThreeDGroupedComponent {}
class ThreeDStackedComponent {}
class NegativeValuesComponent {}
class ThreeDColumnWithRendererComponent {}
class CandlestickComponent {}
class OHLCComponent {}
class BasicGaugeChartComponent {}
class BasicLineComponent {}
class BasicMarkersComponent {}
class SplineComponent {}
class SplineMarkersComponent {}
class PlotComponent {}
class WithRendererComponent {}
class RealtimeComponent {}
class NavigatorComponent {}
class BasicPieComponent {}
class SpieComponent {}
class DonutComponent {}
class DoubleDonutComponent {}
class ThreeDPieComponent {}
class BasicRadarComponent {}
class FilledComponent {}
class MarkedComponent {}
class MultiaxisComponent {}
class BasicScatterComponent {}
class CustomIconsComponent {}
class BubbleComponent {}
class PurchasesByDayComponent {}
class SalesPerEmployeeComponent {}
class PivotHeatmapComponent {}
class ConfigurablePivotHeatmapComponent {}
class OrgChartComponent {}
class PackComponent {}
class SunburstComponent {}
class ZoomableSunburstComponent {}
class TreeHierarchyComponent {}
class TreeMapComponent {}
class TreeMapToolTipComponent {}
class ConfigurablePivotTreeMapComponent {}
class OutlineLayoutComponent {}
class CompactLayoutComponent {}
class TabularLayoutComponent {}
class CollapsibleComponent {}
class DataChangesComponent {}
class PivotGridWidgetsComponent {}
class DrilldownPluginComponent {}
class ConfiguratorPluginComponent {}
class RangeEditorPluginComponent {}
class ExporterPluginComponent {}

  return [
    { text: 'Components', navIcon: 'icon-buttons', children: [
      { text: 'Buttons', navIcon: 'icon-buttons', children: [
        { text: 'Button', component: ButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
        { text: 'SegmentedButton', component: SegmentedButtonComponent, layout: 'center', navIcon: 'icon-segmented-buttons' },
        { text: 'SplitButton', component: SplitButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
      ]},
      { text: 'ColorPicker', component: ColorPickerComponent, layout: 'center', navIcon: 'icon-color-picker' },
      { text: 'Carousel', component: CarouselComponent, navIcon: 'icon-carousel' },
      { text: 'Drag & Drop', navIcon: 'icon-drag-drop', children: [
        { text: 'Simple', component: SimpleDragDropComponent, navIcon: 'icon-drag-simple' },
        { text: 'Constraints', component: ConstraintsDragDropComponent, navIcon: 'icon-drag-constraint' },
        { text: 'Proxies', component: ProxiesDragDropComponent, navIcon: 'icon-drag-proxy' },
        { text: 'Handles', component: HandlesDragDropComponent, navIcon: 'icon-drag-handle' },
        { text: 'Groups', component: GroupsDragDropComponent, navIcon: 'icon-drag-group' },
        { text: 'Data', component: DataDragDropComponent, navIcon: 'icon-drag-data' },
        { text: 'Files', component: FilesDragDropComponent, navIcon: 'icon-drag-drop-element' }
      ]},
      { text: 'Draw', component: DrawComponent, layout: 'center', navIcon: 'icon-drawing' },
      { text: 'Forms', navIcon: 'icon-forms', children: [
        { text: 'CheckBoxField', component: CheckBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-CheckBoxField'  },
        { text: 'ComboBoxField', component: ComboBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-ComboBoxField'  },
        { text: 'MultiSelect ComboBoxField', component: MultiSelectComboBoxFieldComponent, layout: 'center', navIcon: 'icon-Forms-ComboBoxField'  },
        { text: 'ContainerField', component: ContainerFieldComponent, layout: 'center', navIcon: 'icon-Forms-ContainerField'  },
        { text: 'DatePickerField', component: DatePickerFieldComponent, layout: 'center', navIcon: 'icon-Forms-DatePickerField'  },
        { text: 'EmailField', component: EmailFieldComponent , layout: 'center', navIcon: 'icon-Forms-EmailField' },
        { text: 'FieldSet', component: FieldSetComponent, layout: 'center', navIcon: 'icon-Forms-FieldSet'  },
        { text: 'FileField', component: FileFieldComponent, layout: 'center', navIcon: 'icon-Forms-FileField'  },
        { text: 'FormPanel', component: FormPanelComponent, navIcon: 'icon-form-panel' },
        { text: 'NumberField', component: NumberFieldComponent, layout: 'center', navIcon: 'icon-Forms-NumberField' },
        { text: 'PasswordField', component: PasswordFieldComponent, layout: 'center', navIcon: 'icon-Forms-PasswordField' },
        { text: 'RadioField', component: RadioFieldComponent, layout: 'center', navIcon: 'icon-Forms-RadioField' },
        { text: 'SearchField', component: SearchFieldComponent, layout: 'center', navIcon: 'icon-Forms-SearchField' },
        { text: 'SelectField', component: SelectFieldComponent, layout: 'center', navIcon: 'icon-Forms-SelectField' },
        { text: 'SliderField', component: SliderFieldComponent, layout: 'center', navIcon: 'icon-Forms-SliderField' },
        { text: 'SpinnerField', component: SpinnerFieldComponent, layout: 'center', navIcon: 'icon-Forms-SpinnerField' },
        { text: 'TextAreaField', component: TextAreaFieldComponent, layout: 'center', navIcon: 'icon-Forms-TextAreaField' },
        { text: 'TextField', component: TextFieldComponent, layout: 'center', navIcon: 'icon-Forms-TextField' },
        { text: 'TimeField', component: TimeFieldComponent, navIcon: 'icon-form-panel' },
        { text: 'ToggleField', component: ToggleFieldComponent, layout: 'center', navIcon: 'icon-Forms-ToggleField' },
        { text: 'URLField', component: URLFieldComponent, layout: 'center', navIcon: 'icon-Forms-URLField' },
        { text: 'Validation', component: ValidationComponent, layout: 'auto', navIcon: 'icon-form-validation'}
      ]},
      { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
        { text: 'Default Gauge', component: DefaultGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' },
        { text: 'Needle Gauge', component: NeedleGaugeComponent, layout: 'center', navIcon: 'icon-gauge-charts' }
      ]},
      { text: 'Layouts', navIcon: 'icon-layouts', children: [
        { text: 'card', component: CardLayoutComponent, navIcon: 'icon-layout-card' },
        { text: 'center', component: CenterLayoutComponent, navIcon: 'icon-layout-center' },
        { text: 'fit', component: FitLayoutComponent, navIcon: 'icon-layout-fit' },
        { text: 'form', component: FormLayoutComponent, layout: 'auto', navIcon: 'icon-layout-form' },
        { text: 'hbox', component: hboxLayoutComponent, layout: 'auto', navIcon: 'icon-layout-horizontal-box' },
        { text: 'resizable', component: ResizableLayoutComponent, navIcon: 'icon-layout-box' },
        { text: 'vbox', component: vboxLayoutComponent, layout: 'auto', navIcon: 'icon-layout-vertical-box' }
      ]},
      { text: 'Lists', navIcon: 'icon-lists', children: [
        { text: 'Basic List', component: BasicListComponent, layout: 'center', navIcon: 'icon-basic-list' },
        { text: 'Disclosure', component: DisclosureListComponent, layout: 'center', navIcon: 'icon-disclosure-list' },
        { text: 'Grouped', component: GroupedListComponent, layout: 'center', navIcon: 'icon-grouped-list' },
        { text: 'NestedList', component: NestedListComponent, layout: 'center', navIcon: 'icon-nested-list' },
        { text: 'Pull Refresh', component: PullRefreshListComponent, layout: 'center', navIcon: 'icon-pullrefresh-list' },
        { text: 'Paging', component: PagingListComponent, layout: 'center', navIcon: 'icon-listpaging-list' },
        { text: 'Basic Accordion Swiper', component: BasicAccordionSwiperComponent, layout: 'center', navIcon: 'icon-basic-accordion-swiper'},
        { text: 'Basic Step Swiper', component: BasicStepSwiperComponent, layout: 'center', navIcon: 'icon-basic-step-swiper'},
        { text: 'Undoable Accordion Swiper', component: UndoableAccordionSwiperComponent, layout: 'center', navIcon: 'icon-undoable-accordion-swiper'},
        { text: 'Undoable Step Swiper', component: UndoableStepSwiperComponent, layout: 'center', navIcon: 'icon-undoable-step-swiper'}
      ]},
      { text: 'Media', navIcon: 'x-fa fa-video-camera', children: [
        { text: 'Video', navIcon: 'icon-video', component: VideoComponent },
        { text: 'Audio', navIcon: 'icon-audio', component: AudioComponent }
      ] },
      { text: 'Panels', navIcon: 'icon-panels', children: [
        { text: 'Basic Panels', component: BasicPanelComponent, layout: 'center', navIcon: 'icon-panels' },
        { text: 'Resizable Handle', component: ResizableHandleComponent, layout: 'fit', navIcon: 'icon-panel-handleresize', hidden: false },
        { text: 'Collapsible Panel', component: CollapsiblePanelComponent, layout: 'center', navIcon: 'icon-panel-collapsible' },
        { text: 'Basic Date Panel', component: BasicDatePanelComponent, layout: 'center', navIcon: 'icon-panel-date' },
        { text: 'Advanced Date Panel', component: AdvancedDatePanelComponent, layout: 'center', navIcon: 'icon-panel-date-adv', hidden: false },
        { text: 'Time Panel', component: TimePanelComponent, layout: 'center', navIcon: 'icon-panel-date-adv', hidden: false },
      ]},
      { text: 'Popups', navIcon: 'icon-windows', children: [
        { text: 'Dialog', component: DialogPopupComponent, layout: 'center', navIcon: 'icon-basic-dialog' },
        { text: 'Message', component: MessagePopupComponent, layout: 'center', navIcon: 'icon-overlays' },
        { text: 'Toast', component: ToastPopupComponent, layout: 'center', navIcon: 'icon-toast-view' }
      ]},
      { text: 'ProgressBar', component: ProgressBarComponent, layout: 'center', navIcon: 'icon-progress-decorated' },
      { text: 'Ripple', component: RippleComponent, layout: 'center', navIcon: 'icon-Ripple' },
      { text: 'Sheet', component: SheetComponent, layout: 'center', navIcon: 'icon-actionsheets' },
      { text: 'Tabs', navIcon: 'icon-tabs', children: [
        { text: 'Basic Tabs', component: BasicTabComponent, navIcon: 'icon-basic-tabs' },
        { text: 'Bottom Tabs', component: BottomTabComponent, navIcon: 'icon-bottom-tabs' },
        { text: 'Icon Tabs', component: IconTabComponent, navIcon: 'icon-icon-tabs' },
        { text: 'Desktop Tabs', component: DesktopTabComponent, navIcon: 'icon-Desktop-Tabs' },
        { text: 'Closable', component: ClosableTabComponent, navIcon: 'icon-Closable-Tabs' },
        { text: 'ScrollingTabs', component: ScrollingTabComponent, layout: 'center', navIcon: 'icon-Scrolling-Tabs' },
        { text: 'TabBar', component: TabBarComponent, layout: 'center', navIcon: 'icon-Tab-Bar' }
      ]},
      { text: 'TitleBar', component: TitleBarComponent, navIcon: 'icon-Title-Bar' },
      { text: 'Toolbar', component: ToolBarComponent, navIcon: 'icon-toolbar' },
      { text: 'ToolTip', component: ToolTipComponent, layout: 'center', navIcon: 'icon-tooltips'  },
      { text: 'Touch Events', component: TouchEventsComponent, navIcon: 'icon-touch-events' },
      //{ text: 'Transition', component: Transition, navIcon: 'icon-Transition' },
      { text: 'Wizard', component: WizardComponent, navIcon: 'icon-layout-card-indicator', layout: 'center' },
    ]},

    { text: 'Grids', navIcon: 'icon-grids', children: [
      { text: 'Core Features', navIcon: 'icon-grids', children: [
        { text: 'Basic Grid', component: BasicGridComponent, navIcon: 'icon-grids'},
        { text: 'Grouped Grid', component: GroupedGridComponent, navIcon: 'icon-grouped-grid'},
        { text: 'Locking Grid', component: LockingGridComponent, navIcon: 'icon-locking-grid'},
        { text: 'Editable Grid', component: EditableGridComponent, navIcon: 'icon-editable-grid'},
        { text: 'XML Grid', component: XMLGridComponent, navIcon: 'icon-xml-grid'}
      ]},
      { text: 'Add-ons', navIcon: 'icon-framing-buttons', children: [
        { text: 'Grid Tools', component: GridToolsComponent, navIcon: 'icon-grid-tools'},
        { text: 'Row Expander', component: RowExpanderComponent, navIcon: 'icon-row-expander-grid'},
        { text: 'Row Body', component: RowBodyComponent, navIcon: 'icon-row-body-grid'},
        { text: 'Summary Row', component: SummaryRowComponent, navIcon: 'icon-grid-summary'},
        { text: 'Grid Filtering', component: GridFilteringComponent, navIcon: 'icon-grid-filtering'},
        { text: 'View Options', component: ViewOptionsComponent, navIcon: 'icon-view-options-grid'}
      ]},
      { text: 'Advanced Features', navIcon: 'icon-grid-plugins', children:[
        { text: 'Big Data', component: BigDataComponent, navIcon: 'icon-big-data-grid' },
        { text: 'Select And Copy', component: SelectAndCopyComponent, navIcon: 'icon-flexible-selection-grid' },
        { text: 'Reconfigure Grid', component: ReconfigureGridComponent, navIcon: 'icon-reconfigure-grid' },
        { text: 'Components In Cells', component: ComponentsInCellsComponent, navIcon: 'icon-grid-tools' },
        { text: 'Stock Ticker', component: StockTickerComponent, navIcon: 'icon-ticker-grid' }
      ]}
  ]},

    { text: 'Trees', navIcon: 'icon-trees', children: [
      { text: 'TreeList', component: TreeListComponent, layout: 'center', navIcon: 'icon-tree-list' },
      { text: 'Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: TreeComponent, navIcon: 'icon-trees' },
      { text: 'Editable Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: EditableTreeComponent, navIcon: 'icon-tree-editable'},
      { text: 'Tree Grid', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: TreeGridComponent, navIcon: 'icon-tree-grid' },
      { text: 'Tree Decorations', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component:TreeDecorationsComponent, navIcon: 'icon-tree-decorations'},
      { text: 'Heterogeneous Tree', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', component: HeterogeneousTreeComponent, navIcon: 'icon-heterogeneous-tree'}
    ]},

    { text: 'Calendar', premium: false, navIcon: 'icon-calendar', children:[
      { text: 'Calendar Panel', component: CalendarPanelComponent, navIcon: 'icon-calendar-panel' },
      { text: 'Month View', component: CalendarMonthViewComponent, navIcon: 'icon-calendar-month-view' },
      { text: 'Week View', component: CalendarWeekViewComponent, navIcon: 'icon-calendar-week-view' },
      { text: 'Days View', component: CalendarDaysViewComponent, navIcon: 'icon-calendar-days-view' },
      { text: 'Timezone Support', component: CalendarTimezoneSupportComponent, navIcon: 'icon-calendar-timezone' },
      { text: 'Drag Resize Validation', component: CalendarDragResizeValidationComponent, navIcon: 'icon-calendar-validation' }
    ]},

    { text: 'Charts', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-charts', children: [
      { text: 'Area', navIcon: 'icon-area-basic', children: [
        { text: 'Basic Area', component: BasicAreaComponent, navIcon: 'icon-area-basic' },
        { text: 'Stacked Area', component: StackedAreaComponent, navIcon: 'icon-area-stacked'},
        { text: 'Full Stacked Area', component: FullStackedAreaComponent, navIcon: 'icon-area-stacked-100'},
        { text: 'Negative Values Area', component: NegativeValuesAreaComponent, navIcon: 'icon-area-negative'}
      ] },
      { text: 'Bar', navIcon: 'icon-bar-basic', children: [
        { text: 'Basic Bar', component: BasicBarComponent, navIcon: 'icon-bar-basic' },
        { text: 'Stacked Bar', component: StackedBarComponent, navIcon: 'icon-bar-stacked' },
        { text: 'Full Stacked Bar', component: FullStackedBarComponent, navIcon: 'icon-bar-stacked-100'}
      ] },
      { text: 'BoxPlot', component: BoxPlotComponent, navIcon: 'icon-boxplot-charts' },
      { text: 'Column', navIcon: 'icon-column-charts', children: [
        { text: 'Basic Column', component: BasicColumnComponent, navIcon: 'icon-column-basic' },
        { text: 'Stacked', component: StackedComponent, navIcon: 'icon-column-stacked' },
        { text: 'Column With Renderer', component: ColumnWithRendererComponent, navIcon: 'icon-column-renderer' },
        { text: 'Multiaxis Column', component: MultiaxisColumnComponent, navIcon: 'icon-column-multi-axis' }
      ] },
      { text: '3D Column', navIcon: 'icon-column-3d', children: [
        { text: 'Basic 3D Column', component: Basic3DColumnComponent, navIcon: 'icon-column-basic-3d' },
        { text: '3D Grouped', component: ThreeDGroupedComponent, navIcon: 'icon-column-grouped-3d' },
        { text: '3D Stacked', component: ThreeDStackedComponent, navIcon: 'icon-column-stacked-3d' },
        { text: 'Negative Values', component: NegativeValuesComponent, navIcon: 'icon-column-negative-3d' },
        { text: '3D Column With Renderer', component: ThreeDColumnWithRendererComponent, navIcon: 'icon-column-renderer-3d' }
      ]},
      { text: 'Financial', navIcon: 'icon-financial-charts', children: [
        { text: 'Candlestick', component: CandlestickComponent, navIcon: 'icon-financial-candlestick' },
        { text: 'OHLC', component: OHLCComponent, navIcon: 'icon-financial-ohlc' }
      ] },
      { text: 'Gauges', navIcon: 'icon-gauge-charts', children: [
        { text: 'Basic Gauge', component: BasicGaugeChartComponent, navIcon: 'icon-gauge-basic' }  
      ] }, 
      { text: 'Line', navIcon: 'icon-line-charts', children: [
        { text: 'Basic Line', component: BasicLineComponent, navIcon: 'icon-line-basic' },
        { text: 'Basic Markers', component: BasicMarkersComponent, navIcon: 'icon-line-markers' },
        { text: 'Spline', component: SplineComponent, navIcon: 'icon-line-spline' },
        { text: 'Spline Markers', component: SplineMarkersComponent, navIcon: 'icon-line-marked-spline' },
        { text: 'Plot', component: PlotComponent, navIcon: 'icon-line-plot' },
        { text: 'With Renderer', component: WithRendererComponent, navIcon: 'icon-line-renderer' },
        { text: 'Realtime', component: RealtimeComponent, navIcon: 'icon-line-real-time' }
      ] },
      { text: 'Navigator', component: NavigatorComponent, navIcon: 'icon-navigator-charts' },
      { text: 'Pie', navIcon: 'icon-pie-basic', children: [
        { text: 'Basic Pie', component: BasicPieComponent, navIcon: 'icon-pie-basic' },
        { text: 'Spie', component: SpieComponent, navIcon: 'icon-pie-custom' },
        { text: 'Donut', component: DonutComponent, navIcon: 'icon-pie-donut' },
        { text: 'Double Donut', component: DoubleDonutComponent, navIcon: 'icon-pie-double-donut' },
        { text: '3D Pie', component: ThreeDPieComponent, navIcon: 'icon-pie-3d' } 
      ] },
      { text: 'Radar', navIcon: 'icon-radar-charts', children: [
        { text: 'Basic Radar', component: BasicRadarComponent, navIcon: 'icon-radar-basic' },
        { text: 'Filled', component: FilledComponent, navIcon: 'icon-radar-filled' },
        { text: 'Marked', component: MarkedComponent, navIcon: 'icon-radar-marked' },
        { text: 'Multiaxis', component: MultiaxisComponent, navIcon: 'icon-radar-multi-axis' }
      ] },
      { text: 'Scatter', navIcon: 'icon-scatter-charts', children: [
        { text: 'Basic Scatter', component: BasicScatterComponent, navIcon: 'icon-scatter-basic' },
        { text: 'Custom Icons', component: CustomIconsComponent, navIcon: 'icon-scatter-custom-icons' },
        { text: 'Bubble', component: BubbleComponent, navIcon: 'icon-scatter-bubble' }
      ] }
    ]},

    { text: 'D3', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-d3', children: [
      { text: 'Heatmap', navIcon: 'icon-d3-heatmap', children: [
        { text: 'Purchases By Day', component: PurchasesByDayComponent, navIcon: 'icon-d3-view-heatmap-purchases' },
        { text: 'Sales Per Employee', component: SalesPerEmployeeComponent, navIcon: 'icon-d3-view-heatmap-sales' },
        { text: 'Pivot Heatmap', component: PivotHeatmapComponent, navIcon: 'icon-d3-view-heatmap-pivot' },
        { text: 'Configurable Pivot Heatmap', component: ConfigurablePivotHeatmapComponent, navIcon: 'icon-d3-view-heatmap-pivot-configurator' }
      ]},
      { text: 'Hierarchy', navIcon: 'icon-d3-hierarchy', children: [
        { text: 'Org Chart', component: OrgChartComponent, navIcon: 'icon-d3-view-sencha-tree' },
        { text: 'Pack', component: PackComponent, navIcon: 'icon-d3-view-pack' },
        { text: 'Sunburst', component: SunburstComponent, navIcon: 'icon-d3-view-sunburst' },
        { text: 'Zoomable Sunburst', component: ZoomableSunburstComponent, navIcon: 'icon-d3-view-sunburst-zoom' },
        { text: 'Tree', component: TreeHierarchyComponent, navIcon: 'icon-d3-view-tree' },
        { text: 'TreeMap', component: TreeMapComponent, navIcon: 'icon-d3-view-treemap' },
        { text: 'TreeMap Tooltip', component: TreeMapToolTipComponent, navIcon: 'icon-d3-view-treemap-tooltip' },
        { text: 'Configurable Pivot TreeMap', component: ConfigurablePivotTreeMapComponent, navIcon: 'icon-d3-view-treemap-pivot-configurator' }
      ]}
    ]},

    { text: 'Pivot Grids', premium: true, premiumClass: 'x-fa fa-star app-premium-indicator', navIcon: 'icon-pivot-grids', children: [
      { text: 'Outline Layout', component: OutlineLayoutComponent, navIcon: 'icon-outline-pivot-grid' },
      { text: 'Compact Layout', component: CompactLayoutComponent, navIcon: 'icon-compact-pivot-grid' },
      { text: 'Tabular Layout', component: TabularLayoutComponent, navIcon: 'icon-tabular-pivot-grid' },
      { text: 'Collapsible', component: CollapsibleComponent, navIcon: 'icon-collapsible-pivot-grid' },
      { text: 'Data Changes', component: DataChangesComponent, navIcon: 'icon-datachanges-pivot-grid' },
      { text: 'Pivot Grid Widgets', component: PivotGridWidgetsComponent, navIcon: 'icon-widgets-pivot-grid' },
      { text: 'Drilldown Plugin', component: DrilldownPluginComponent, navIcon: 'icon-drilldown-pivot-grid' },
      { text: 'Configurator Plugin', component: ConfiguratorPluginComponent, navIcon: 'icon-configurable-pivot-grid' },
      { text: 'Range Editor Plugin', component: RangeEditorPluginComponent, navIcon: 'icon-rangeeditor-pivot-grid' },
      { text: 'Exporter Plugin', component: ExporterPluginComponent, navIcon: 'icon-exporter-pivot-grid' }
    ]}

  ]
};