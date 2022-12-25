import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalLoggerService } from "../manager/local-logger.service";

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {
constructor(public localLoggerService: LocalLoggerService) {
}
}
