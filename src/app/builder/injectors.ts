import { InjectionToken } from "@angular/core";
import { Brick } from "./interfaces";

export const BRICKS = new InjectionToken<Brick[]>('bricks');
