import {Component} from "@angular/core";
import {TaskService, TaskType} from "../core/task.service";

@Component({
  selector: "app-available-tasks",
  templateUrl: "./available-tasks.component.html",
  styleUrls: ["./available-tasks.component.scss"]
})
export class AvailableTasksComponent {
  constructor(private taskService: TaskService) {
  }

  public retrieveAvailableTasks(): string[] {
    return this.taskService.getTasks(TaskType.AVAILABLE);
  }
}
