import { Component, inject, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
import { BRICKS } from "../builder/injectors";

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {
  bricks = inject(BRICKS);
  header: Type<unknown> | undefined;
  body: Type<unknown> | undefined;

  ngOnInit(): void {
    this.bricks.forEach(brick => {
      brick.loader.then(component => {
        if (brick.position === 'header') {
          this.header = component;
        } else {
          this.body = component;
        }
      })
    })
  }
}
