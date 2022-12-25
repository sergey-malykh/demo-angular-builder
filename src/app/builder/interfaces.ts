import { Injector, StaticProvider, Type } from "@angular/core";

export interface InstanceSettings<T> {
  providers: StaticProvider[],
  loader: Promise<T>
}

export interface Brick {
  loader: Promise<Type<unknown>>,
  position: string,
}
