import {Component} from "@angular/core";
import {TaskService, TaskType} from "../core/task.service";

@Component({
  selector: "app-active-tasks",
  templateUrl: "./active-tasks.component.html",
  styleUrls: ["./active-tasks.component.scss"]
})
export class ActiveTasksComponent {
  constructor(private taskService: TaskService) {
  }

  public retrieveActiveTasks(): string[] {
    return this.taskService.getTasks(TaskType.ACTIVE);
  }
}
