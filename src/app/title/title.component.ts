import { Component, inject, Inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService } from "./title.service";
import { skip, startWith, tap } from "rxjs";

export const TITLE = new InjectionToken<string>('title');

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  private title = inject(TITLE);
  title$ = this.titleService.title$.pipe(
    skip(1),
    startWith(this.title),
  );

  constructor(private titleService: TitleService) {
  }
}
