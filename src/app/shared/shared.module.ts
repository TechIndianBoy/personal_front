import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuardService } from "../services/auth/auth-guard.service";
import { AuthenticationCheckService } from "../services/auth/authentication-check.service";
import { CKEditorModule } from "ckeditor4-angular";
import { ColorSketchModule } from "ngx-color/sketch";
import { ColorBlockModule } from "ngx-color/block";
import { CarouselConfig, CarouselModule } from "ngx-bootstrap/carousel";
import { TabsetConfig, TabsModule } from "ngx-bootstrap/tabs";
import { AccordionConfig, AccordionModule } from "ngx-bootstrap/accordion";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataTableModule } from "angular2-datatable";
import { ProgressbarConfig, ProgressbarModule } from 'ngx-bootstrap/progressbar';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DataTableModule,
    NgbModule,
    NgxUiLoaderModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    ColorSketchModule,
    ColorBlockModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  exports: [
    NgbModule,
    DataTableModule,
    NgxUiLoaderModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    ColorSketchModule,
    ColorBlockModule,
    CarouselModule,
    TabsModule,
    AccordionModule,
    ModalModule,
    ProgressbarModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: CarouselConfig,
          useValue: { interval: 1500, noPause: true, showIndicators: true },
        },
        { provide: AccordionConfig, useValue: { closeOthers: true } },
        { provide: ProgressbarConfig, useValue: { animate: false } },
        TabsetConfig,
        AuthGuardService,
        AuthenticationCheckService,
        // ToastService,
        DatePipe,
      ],
    };
  }
}
