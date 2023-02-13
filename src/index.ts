type GetterFunCallback = (keyName: string, value: any) => void;
type SetterFunCallback = (keyName: string, prevValue: any, currValue: any) => void;
type GetReturnType = () => any;
type SetTypeType = (val: any) => any;
interface GetSetType {
  set: SetTypeType,
  get: GetReturnType
}
export default function ObjectWatcher(
    sourceObj:any, 
    getCallback:GetterFunCallback = () => {}, 
    setCallback: SetterFunCallback = () => {}) {

  let targetOb: any = {};
  function GetterSetter(key: string, val: any):GetSetType {
      const keyName = key;
      let value = val;
      return {
          get: function() {
              console.log(' get called ', key, 'isObject ', !isObject(value));
               if(!isObject(value)) {
                getCallback(keyName, value);
              }
              return value;
          },
          set: function(val:any) {
              setCallback(keyName, value, val);
              value = val;    
          }
      }
  }

  function isObject(obj:any): boolean {
    return typeof obj === 'object' && obj !== null
  }

  function recursiveTraversal(sourceObj: any, target: any) {
    if(isObject(sourceObj)) {
      const keys: string[] = Object.keys(sourceObj);
      for(let i = 0; i < keys.length; i++) {
        const key:string = keys[i];
        const val:any = sourceObj[keys[i]];
          if(isObject(val)) {
            target[key] = {};

            Object.defineProperty(target, key, GetterSetter(key, val));
            recursiveTraversal(val, target[key]);
          }

          Object.defineProperty(target, key, GetterSetter(key, val));
      }
    }
  }

  if(isObject(sourceObj)) {
    // create flat object and then
    recursiveTraversal(sourceObj, targetOb);
  } else {
    console.error(`${sourceObj} is not a valid object`)
  }
  return targetOb;
};
