import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ElementsModule } from "./elements/elements.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CollectionsModule } from "./collections/collections.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElementsModule, CollectionsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
