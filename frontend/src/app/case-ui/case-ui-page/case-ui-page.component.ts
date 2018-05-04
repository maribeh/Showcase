import {
  Component,
  OnDestroy,
  OnInit
} from "@angular/core";
import {
  EVENT_DOMAIN,
  EVENT_NAME,
  PostRobotService
} from "../case-ui-common/api/post-robot/post-robot.service";
import { PostRobotData } from "../case-ui-common/api/post-robot/post-robot.model";
import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";

@Component({
  selector: "educama-case-ui-page",
  templateUrl: "./case-ui-page.component.html",
  styleUrls: [ "./case-ui-page.component.scss" ]
})
export class CaseUiPageComponent implements OnInit, OnDestroy {
  dynamicFrameUrl: SafeResourceUrl;

  private dynamicFrameUrlListener: any;

  constructor(private postRobotService: PostRobotService,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.dynamicFrameUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("http://localhost:4201/");
    this.dynamicFrameUrlListener = this.postRobotService.getInstance()
                                       .on(EVENT_NAME, { domain: EVENT_DOMAIN }, (event: PostRobotData<any>) => {
                                         this.dynamicFrameUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(event.data.url);
                                       });
  }

  ngOnDestroy(): void {
    this.dynamicFrameUrlListener.cancel();
  }
}
