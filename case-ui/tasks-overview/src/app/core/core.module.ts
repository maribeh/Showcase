import { NgModule } from "@angular/core";
import { TaskService } from "./task/task.service";
import { WindowRefService } from "./window-ref/window-ref.service";
import { PostRobotService } from "./post-robot/post-robot.service";

@NgModule({
  providers: [
    TaskService,
    WindowRefService,
    PostRobotService
  ]
})
export class CoreModule {
}
