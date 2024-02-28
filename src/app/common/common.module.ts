import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonRoutingModule } from "./common-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { CarouselComponent } from "./signin/carousel/carousel.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SigninComponent, CarouselComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonRoutingModule,
    CarouselModule.forRoot(),
  ],
})
export class CommonAppModule {}
