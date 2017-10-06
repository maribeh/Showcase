import {Component} from "@angular/core";
import {TaskService, TaskType} from "../core/task.service";

@Component({
  selector: "app-completed-tasks",
  templateUrl: "./completed-tasks.component.html",
  styleUrls: ["./completed-tasks.component.scss"]
})
export class CompletedTasksComponent {
  constructor(private taskService: TaskService) {
  }

  public retrieveCompletedTasks(): string[] {
    return this.taskService.getTasks(TaskType.COMPLETED);
  }
}
