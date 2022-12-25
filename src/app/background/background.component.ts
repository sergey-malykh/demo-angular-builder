import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalLoggerService } from "../manager/local-logger.service";

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  constructor(public localLoggerService: LocalLoggerService) {
  }
}
