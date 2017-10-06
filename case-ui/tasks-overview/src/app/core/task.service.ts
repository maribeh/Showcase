import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
  public getTasks(type: TaskType): string[] {
    switch (type) {
      case TaskType.AVAILABLE:
        return ["Task One", "Task Two", "Task Three"];
      case TaskType.ACTIVE:
        return ["Task Four", "Task Five"];
      case TaskType.COMPLETED:
        return ["Task Six", "Task Seven", "Task Eight", "Task Nine"];
    }
  }
}

export enum TaskType {
  AVAILABLE, ACTIVE, COMPLETED
}
