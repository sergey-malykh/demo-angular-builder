import { Component, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Builder } from "../builder/builder";
import { TitleService } from "../title/title.service";
import { LocalLoggerService } from "./local-logger.service";

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [
    LocalLoggerService,
  ]
})
export class ManagerComponent implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef, private injector: Injector,
              private builder: Builder,
              private titleService: TitleService) {
  }

  ngOnInit(): void {
    this.builder.addTitle('default title', 'header').addCat().create(this.injector, this.viewContainerRef)
  }

  createComponentWithTitle(title: string): void {
    this.builder.addTitle(title, 'header').addBackground().create(this.injector, this.viewContainerRef)
  }

  setTitleEverywhere(title: string): void {
    this.titleService.setTitle(title);
  }

}
