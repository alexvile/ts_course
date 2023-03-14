let age:number;
age=50;

let name1:string;
name1="Max";

let toggle:boolean;
toggle = true;

let notInitialize:undefined;
notInitialize=undefined;

let callback: (a: number) => number;

callback = (a) => {return 100 + a};

let anything:any;

anything= -20;
anything="Text";
anything={};

let some:unknown;
some = 'Abc';

let str: string;
if(typeof some === 'string') {
    str = some;
}

let person:[string, number];
person = ['Max', 21];

enum Status {LOADING, READY};

const page = {
    load: Status.READY,
}
if (page.load === Status.LOADING) {
    console.log('Страница загружается');
  }
  if (page.load === Status.READY) {
    console.log('Страница загружена');
  }

let union: string | number;
union = 500;
union = 'false';


let literal: 'enable' | "disable";
literal = 'disable';
literal = 'enable';

function showMessage(message:number):void {
    console.log(message);
};

 showMessage(3);

 function calc(num1:number, num2:number):number {
    return num1 + num2;
 };

 calc(1,3);

 function customError():never {
    throw new Error('Error');
 }

 type Page = {
    title: String,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?:{
        createAt: string,
        updateAt: string
    }
 }

 const page1:Page = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: '2021-01-01',
      updateAt: '2021-05-01',
    }
  }
  
  const page2:Page = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }