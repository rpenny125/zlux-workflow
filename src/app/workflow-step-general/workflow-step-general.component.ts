import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  Angular2InjectionTokens,
  } from 'pluginlib/inject-resources';
import { logger } from '../shared/logger';
import { Observable } from 'rxjs/Observable';
import { WizardStepType } from '../shared/wizard-step';
import { Workflow } from '../shared/workflow';
import { WorkflowStep } from '../shared/workflow-step';
import { WorkflowStepPluginAction } from '../shared/workflow-step-plugin-action';
import { WorkflowVariable } from '../shared/workflow-variable';
import { LoggerService } from '../shared/logger-service';
import { ZosmfLoginService } from '../shared/zosmf-login.service';
import { ZosmfWorkflowService } from '../shared/zosmf-workflow-service';
import 'rxjs/add/operator/do';


@Component({
  selector: "workflow-step-general",
  templateUrl: "./workflow-step-general.component.html",
  styleUrls: [
    "./workflow-step-general.component.css",
    "../css/workflow-common-styles.css"
  ],
  providers: []
})

export class WorkflowStepGeneralComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input() step: WorkflowStep;

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
