
export const objLocalStorage = {

  save: ( name: string, object: Object ): void | never => {
    try {
      if ( typeof object === 'object' ) {
        const stringObject: string = JSON.stringify(object);
        localStorage.setItem( name, stringObject );
        return
      }
      throw new Error();

    } catch (error) {
      console.log(error);
    }
  },
  
  get: < T >( name: string ): T | null => {
    try {
      const object = localStorage.getItem(name);
      if (!object) throw new Error();
      const parsedObject = JSON.parse(object as string);
      if ( typeof parsedObject === 'object' ) {
        return parsedObject;
      }
      throw new Error();

    } catch (error) {
      console.log(error)
      return null;
    }
  },

  remove: ( name: string ) => {
    localStorage.removeItem(name);
  }
  
}