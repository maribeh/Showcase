import { Component } from "@angular/core";
import {
  Task,
  TaskService,
  TaskType
} from "../core/task/task.service";
import {
  EVENT_DOMAIN,
  EVENT_NAME,
  PostRobotService
} from "../core/post-robot/post-robot.service";

@Component({
  selector: "app-active-tasks",
  templateUrl: "./active-tasks.component.html",
  styleUrls: [ "./active-tasks.component.scss" ]
})
export class ActiveTasksComponent {
  constructor(private taskService: TaskService,
              private postRobotService: PostRobotService) {
  }

  retrieveActiveTasks(): Task[] {
    return this.taskService.getTasks(TaskType.ACTIVE);
  }

  loadDynamicFrame(src: string): void {
    this.postRobotService.getInstance()
        .send(window.top, EVENT_NAME, { url: src }, { domain: EVENT_DOMAIN }).then(() => {
    });
  }
}
