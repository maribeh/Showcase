import {NgModule} from "@angular/core";
import {TaskService} from "./task.service";

@NgModule({
  providers: [
    TaskService
  ]
})
export class CoreModule {
}
