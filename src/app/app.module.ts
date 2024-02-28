import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./common/signin/signin.component";
import {
  HttpClientModule,
  HttpXhrBackend,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { HttpConfigInterceptor } from "./services/interceptor/http-loading-interceptor";
import { SharedModule } from "./shared/shared.module";
import { ToastComponent } from "./shared/toast/toast.component";
import { ToastService } from "./services/toast/toast.service";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
