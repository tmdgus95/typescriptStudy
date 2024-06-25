{
  //JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  //TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  //JavaScript
  function jsFetchNum(id) {
    //code...
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //TypeScript
  function FetchNum(id: string): Promise<number> {
    //code...
    //code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("jo", "tmdgus");
  printName("joa");
  printName("jos", undefined);

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumber(...number: number[]) {
    console.log(number.reduce((a, b) => a + b, 0));
  }
  addNumber(1, 2);
  addNumber(1, 2, 3);
}
