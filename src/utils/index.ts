

export const objLocalStorage = {

  save: ( name: string, object: Object ): void | never => {
    if ( typeof object === 'object' ) {
      const stringObject: string = JSON.stringify(object);
      localStorage.setItem( name, stringObject );
      return
    }
    throw new Error();
  },
  
  get: < T >( name: string ): T | never => {
    const object = localStorage.getItem(name);
    const parsedObject = JSON.parse(object as string);
    if ( typeof parsedObject === 'object' ) {
      return parsedObject;
    }
    throw new Error();
  },

  remove: ( name: string ) => {
    localStorage.removeItem(name);
  }
}


