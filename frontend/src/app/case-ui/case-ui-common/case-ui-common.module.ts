import {NgModule} from "@angular/core";
import {CASE_UI_ROUTING} from "./routes/case-ui.routes";
import { PostRobotService } from "./api/post-robot/post-robot.service";

@NgModule({
  imports: [
    CASE_UI_ROUTING
  ],
  providers: [
    PostRobotService
  ]
})
export class CaseUiCommonModule {
}
