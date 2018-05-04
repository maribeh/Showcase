import { Injectable } from "@angular/core";
import { PostRobot } from "./post-robot.model";

const POST_ROBOT_INSTANCE: any = require("post-robot");

@Injectable()
export class PostRobotService {
  getInstance(): PostRobot {
    return POST_ROBOT_INSTANCE;
  }
}

export const EVENT_NAME = "loadDynamicFrame";
export const EVENT_DOMAIN = "http://localhost:8080";
