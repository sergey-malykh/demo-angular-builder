import { Injectable, Injector, Type, ViewContainerRef } from "@angular/core";
import { BRICKS } from "./injectors";
import { Brick, InstanceSettings } from "./interfaces";
import { InstanceComponent } from "../instance/instance.component";
import { TITLE } from "../title/title.component";

@Injectable({
  providedIn: "root"
})
export class Builder {
  private instance: InstanceSettings<Type<InstanceComponent>>;

  constructor() {
    this.instance = this.reset();
  }

  reset(): InstanceSettings<Type<InstanceComponent>> {
    return {
      providers: [],
      loader: import('../instance/instance.component').then(c => c.InstanceComponent)
    }
  }

  create(parentInjector: Injector, viewContainerRef: ViewContainerRef): Promise<boolean> {
    const injector = Injector.create({
      providers: this.instance.providers,
      parent: parentInjector
    });
    return this.instance.loader.then(instance => {
      viewContainerRef.createComponent(instance, {
        injector
      });
      return true;
    }).catch((e) => {
      console.error(e);
      return false;
    }).finally(() => this.instance = this.reset())
  }

  addTitle(title: string, position: 'header' | 'body'): Builder {
    const value: Brick = {
      loader: import('../title/title.component').then(c => c.TitleComponent),
      position,
    };
    this.instance.providers.push([
      {
        provide: BRICKS,
        useValue: value,
        multi: true,
      },
      {
        provide: TITLE,
        useValue: title,
      }
    ])
    return this;
  }

  addCat(): Builder {
    const value: Brick = {
      loader: import('../cat/cat.component').then(c => c.CatComponent),
      position: 'body',
    };
    this.instance.providers.push([
      {
        provide: BRICKS,
        useValue: value,
        multi: true,
      }
    ])
    return this;
  }

  addBackground(): Builder {
    const value: Brick = {
      loader: import('../background/background.component').then(c => c.BackgroundComponent),
      position: 'body',
    };
    this.instance.providers.push([
      {
        provide: BRICKS,
        useValue: value,
        multi: true,
      }
    ])
    return this;
  }
}
