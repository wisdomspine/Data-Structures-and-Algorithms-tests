export abstract class BaseModel<T extends BaseModel = BaseModel<unknown>>{
  constructor(args: Partial<T>){
    Object.assign(this, args)
  }
}