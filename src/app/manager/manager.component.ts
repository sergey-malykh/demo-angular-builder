import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Builder } from "../builder/builder";

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef, private injector: Injector,
              private builder: Builder) {
  }

  ngOnInit(): void {
    this.builder.addTitle('header').create(this.injector, this.viewContainerRef).then(console.log);

    setTimeout(() => {
      this.builder.addTitle('header').addCat().create(this.injector, this.viewContainerRef).then(console.log);
    }, 3000)
  }

}
