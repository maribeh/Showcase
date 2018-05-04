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
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: [ "./available-tasks.component.scss" ]
})
export class AvailableTasksComponent {
  constructor(private taskService: TaskService,
              private postRobotService: PostRobotService) {
  }

  retrieveAvailableTasks(): Task[] {
    return this.taskService.getTasks(TaskType.AVAILABLE);
  }

  loadDynamicFrame(src: string): void {
    this.postRobotService.getInstance()
        .send(window.top, EVENT_NAME, { url: src }, { domain: EVENT_DOMAIN }).then(() => {
    });
  }
}
