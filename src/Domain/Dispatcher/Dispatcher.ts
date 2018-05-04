import { inject,injectable } from "inversify";
import "reflect-metadata";

export const DispatcherInjectType = Symbol();
@injectable()
export class Dispatcher{

}