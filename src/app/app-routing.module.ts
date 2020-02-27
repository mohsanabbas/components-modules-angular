import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
const routes: Routes = [
  {
    path: "collection",
    loadChildren: () =>
      import("./collections/collections.module").then(m => m.CollectionsModule)
  },
  {
    path: "elements",
    loadChildren: () =>
      import("./elements/elements.module").then(m => m.ElementsModule)
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
