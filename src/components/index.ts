import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ButtonComponent} from './button/button.component';
import {CommonHttpService} from './common.http.service';
import {TextInputComponent} from './textinput/textinput.component';
import {ButtonDropdownComponent} from './buttondropdown/button.dropdown.component';
import {ButtonSplitDropdownComponent} from './buttondropdown/button.split.dropdown.component';
import {DropdownItemComponent} from './buttondropdown/dropdown.item.component';
import {ButtonGroupActionComponent} from './buttongroup/buttongroup.action.component';
import {ButtonGroupComponent} from './buttongroup/buttongroup.component';
import {CheckBoxGroup} from './checkgroup/checkbox.component';
import {DateTimeComponent} from './datetimepicker/datetimepicker.component';
import {DropDownComponent} from './dropdown/dropdown';
import {EmailInputComponent} from './emailinput/emailinput.component';
import {NumberInputComponent} from './numberinput/numberinput.component';
import {PasswordInputComponent} from './passwordinput/passwordinput.component';
import {ProgressComponent} from './progress/progress.component';
import {RadioGroupComponent} from './radiogroup/radiogroup.component';
import {RatingInputComponent} from './ratinginput/ratinginput.component';
import {TextAreaComponent} from './textareainput/textareainput.component';
import {TypeAheadComponent} from './typeahead/autocomplete.component';
import {TabPaneComponent} from './tabpane/tabpane.component';
import {TabComponent} from './tabpane/tabpill.component';
import {VerticalLeftTabPaneComponent} from './tabpane/verticallefttab.component';
import {VerticalRightTabPaneComponent} from './tabpane/verticalrighttab.component';
import {DataTableComponent} from './datatable/datatable.component';
import {ColumnComponent} from './datatable/column.component';
import {FilterComponent} from './datatable/datatable.filter.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ItemSelectorComponent} from './itemselector/itemselector.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarSubMenuComponent} from './navbar/navbarsubmenu.component';
import {SideNavBarComponent} from './navbar/sidenavbar.component';
import {FilterTreeViewComponent} from './treeview/filtertreeview';
import {TreeViewComponent} from './treeview/treeview.component';
import {TreeDataTableComponent} from './treedatatable/treedatatable.component';
import {PaneActionComponent} from "./panes/paneaction.component";
import {PaneBodyComponent} from "./panes/panebody.component";
import {PaneHeaderComponent} from "./panes/paneheader.component";
import {WindowPaneComponent} from "./panes/windowpane.component";
import {DialogComponent} from "./panes/dialog.component";
import {CardComponent} from "./panes/card.component";
import {ListBoxComponent} from "./listbox/listbox.component";
import {BarChartComponent} from "./modules/charts/barchart/bar.chart.component";
import {ChartLegendComponent} from "./modules/charts/chartlegend/chart.legend.component";
import {ChartTitleComponent} from "./modules/charts/charttitle/chart.title.component";
import {PieChartComponent} from "./modules/charts/piechart/pie.chart.component";
import {ChartAreaComponent} from "./modules/charts/chartarea/chart.area.component";
import {LineChartComponent} from "./modules/charts/linechart/line.chart.component";
import {AreaChartComponent} from "./modules/charts/areachart/area.chart.component";
import {ColumnChartComponent} from "./modules/charts/columnchart/column.chart.component";
import {DonutChartComponent} from "./modules/charts/donutchart/donut.chart.component";
import {GaugeChartComponent} from "./modules/charts/gaugechart/gauge.chart.component";
import {GeoChartComponent} from "./modules/charts/geochart/geo.chart.component";
import {HistogramChartComponent} from "./modules/charts/histogramchart/histogram.chart.component";
import {ChartLoaderService} from "./modules/charts/chart.loader.service";
import {TimeLineChartComponent} from "./modules/charts/timelinechart/timeline.chart.component";
import {NotifyComponent} from "./notify/notify.component";

export * from './button/button.component';
export * from './common.http.service';
export * from './textinput/textinput.component';
export * from './baseclass/form.base.class';
export * from './checkgroup/checkbox.component';
export * from './datetimepicker/datetimepicker.component';
export * from './dropdown/dropdown';
export * from './emailinput/emailinput.component';
export * from './numberinput/numberinput.component';
export * from './passwordinput/passwordinput.component';
export * from './progress/progress.component';
export * from './radiogroup/radiogroup.component';
export * from './ratinginput/ratinginput.component';
export * from './textareainput/textareainput.component';
export * from './typeahead/autocomplete.component';

/*Button exports*/
export * from './buttongroup/buttongroup.action.component'
export * from './buttongroup/buttongroup.component';
export * from './buttondropdown/dropdown.item.component';
export * from './buttondropdown/button.dropdown.component';
export * from './buttondropdown/button.split.dropdown.component';

/*tab exports*/

export * from './tabpane/tabpill.component'
export * from './tabpane/tabpane.component'
export * from './tabpane/verticallefttab.component'
export * from './tabpane/verticalrighttab.component'

export * from './datatable/datatable.filter.component';
export * from './datatable/datatable.component';
export * from './datatable/column.component';

export * from './carousel/carousel.component'

export * from './itemselector/itemselector.component'

export * from './navbar/sidenavbar.component';
export * from './navbar/navbarsubmenu.component';
export * from './navbar/navbar.component'

export * from './treeview/filtertreeview';
export * from './treeview/treeview.component';
export * from './treedatatable/treedatatable.component';

/*pane exports*/

export *  from "./panes/paneaction.component";
export *  from "./panes/panebody.component";
export *  from "./panes/paneheader.component";
export *  from "./panes/windowpane.component";
export *  from "./panes/dialog.component";
export *  from "./panes/card.component";


export *  from "./listbox/listbox.component";

/* charts export*/
export * from "./modules/charts/chart.loader.service";
export * from "./modules/charts/barchart/bar.chart.component";
export * from "./modules/charts/chartlegend/chart.legend.component";
export * from "./modules/charts/charttitle/chart.title.component";
export * from "./modules/charts/piechart/pie.chart.component";
export * from "./modules/charts/chartarea/chart.area.component";
export * from "./modules/charts/linechart/line.chart.component";
export * from "./modules/charts/areachart/area.chart.component";
export * from "./modules/charts/columnchart/column.chart.component";
export * from "./modules/charts/donutchart/donut.chart.component";
export * from "./modules/charts/gaugechart/gauge.chart.component";
export * from "./modules/charts/geochart/geo.chart.component";
export * from "./modules/charts/histogramchart/histogram.chart.component";
export * from "./modules/charts/timelinechart/timeline.chart.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ButtonComponent,
    TextInputComponent,
    ButtonDropdownComponent,
    ButtonSplitDropdownComponent,
    DropdownItemComponent,
    ButtonGroupActionComponent,
    ButtonGroupComponent,
    CheckBoxGroup,
    DateTimeComponent,
    DropDownComponent,
    EmailInputComponent,
    NumberInputComponent,
    PasswordInputComponent,
    ProgressComponent,
    RadioGroupComponent,
    RatingInputComponent,
    TextAreaComponent,
    TypeAheadComponent,
    TabPaneComponent,
    TabComponent,
    VerticalLeftTabPaneComponent,
    VerticalRightTabPaneComponent,
    DataTableComponent,
    ColumnComponent,
    FilterComponent,
    CarouselComponent,
    ItemSelectorComponent,
    NavbarComponent,
    NavbarSubMenuComponent,
    SideNavBarComponent,
    FilterTreeViewComponent,
    TreeViewComponent,
    TreeDataTableComponent,
    PaneActionComponent,
    PaneBodyComponent,
    PaneHeaderComponent,
    WindowPaneComponent,
    DialogComponent,
    CardComponent,
      ListBoxComponent,
    NotifyComponent,
    //for charts
    ChartLegendComponent,
    ChartTitleComponent,
    ChartAreaComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
    DonutChartComponent,
    GaugeChartComponent,
    GeoChartComponent,
    HistogramChartComponent,
    TimeLineChartComponent

  ],
  exports: [
    ButtonComponent,
    TextInputComponent,
    ButtonDropdownComponent,
    ButtonSplitDropdownComponent,
    DropdownItemComponent,
    ButtonGroupActionComponent,
    ButtonGroupComponent,
    CheckBoxGroup,
    DateTimeComponent,
    DropDownComponent,
    EmailInputComponent,
    NumberInputComponent,
    PasswordInputComponent,
    ProgressComponent,
    RadioGroupComponent,
    RatingInputComponent,
    TextAreaComponent,
    TypeAheadComponent,
    TabPaneComponent,
    TabComponent,
    VerticalLeftTabPaneComponent,
    VerticalRightTabPaneComponent,
    DataTableComponent,
    ColumnComponent,
    FilterComponent,
    CarouselComponent,
    ItemSelectorComponent,
    NavbarComponent,
    NavbarSubMenuComponent,
    SideNavBarComponent,
    FilterTreeViewComponent,
    TreeViewComponent,
    TreeDataTableComponent,
    PaneActionComponent,
    PaneBodyComponent,
    PaneHeaderComponent,
    WindowPaneComponent,
    DialogComponent,
    CardComponent,
      ListBoxComponent,
    NotifyComponent,
    ChartLegendComponent,
    ChartTitleComponent,
    ChartAreaComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
    DonutChartComponent,
    GaugeChartComponent,
    GeoChartComponent,
    HistogramChartComponent,
    TimeLineChartComponent
  ]
})
export class AmexioWidgetModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AmexioWidgetModule,
      providers: [CommonHttpService,ChartLoaderService]
    };
  }
}
