import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mapTo, startWith, timer } from "rxjs";

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {
  loading$ = timer(1500).pipe(
    mapTo(false),
    startWith(true),
  )
}
