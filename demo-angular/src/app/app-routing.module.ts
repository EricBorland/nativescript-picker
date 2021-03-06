import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { GettingStartedExampleComponent } from "./examples/getting-started/getting-started-example.component";
import { StylingExampleComponent } from "./examples/styling/styling-example.component";
import { ValueAPIExampleComponent } from "./examples/value-api/value-api.component";
import { ReactiveFormsExampleComponent } from "./examples/reactive-forms/reactive-forms-example.component";
import { NavigationComponent } from "./navigation/navigation.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: NavigationComponent },
    { path: "items/getting-started-example", component: GettingStartedExampleComponent },
    { path: "items/styling-example", component: StylingExampleComponent },
    { path: "items/value-api-example", component: ValueAPIExampleComponent },
    { path: "items/reactive-forms-example", component: ReactiveFormsExampleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
