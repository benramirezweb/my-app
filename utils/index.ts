export function maxLength(max: number) {
  return function(value: string) {
    return value.length <= max;
  }
}

export function wrapWith(symbol: string) {
  return function(text: string) {
    return `${symbol}${text}${symbol}`;
  }
}

export function multiplyBy(factor: number) {
  return function(n: number) {
    return n * factor;
  }
}

export function suma(a: number, b: number): number {
  return a + a;
}

export function saludar(nombre: string): string {
  return 'hola' + nombre;
}

export function activar(flag: boolean): boolean {
  return !flag;
}

export function listaDeNombre(nombres: string[]): number {
  return nombres.length;
}

type userType = {
  id: number;
  nombre: string;
};

export function imprimirUsuario(usuario: userType): userType {
  console.log(usuario.id);
  return {
    id: 0,
    nombre: 'test'
  }
};

type darkModeType = {
  darkMode?: boolean
};

export function config(options: darkModeType): darkModeType {
  return {
    darkMode: false
  }
}

export function ejecutar(fn: ()=>number): number {
  return fn();
}

export function recibeNumber(funct : (x: number)=> number): number {
  console.log('test');
  return funct(2);
}

export function identidad<T>(valor: T): T {
  return valor;
}

export function printID(id: number | string): (number | string){
  console.log(id);
  return '0';
};

export const aceptaNull = (value?: number | null): void => {
  console.log(value);
};

// export function fetchData(): Promise<string> {
//   return 'yes';
// };

// const wrapWith = (symbol: string) => (text: string) => `${symbol}${text}${symbol}`;
