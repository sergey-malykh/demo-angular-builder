import { Component, Inject, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
import { BRICK } from "../builder/injectors";
import { Brick } from "../builder/interfaces";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.scss']
})
export class InstanceComponent implements OnInit {
  header: Type<unknown> | undefined;
  body: Type<unknown> | undefined;

  constructor(@Inject(BRICK) public bricks: Brick[]) {
  }

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
