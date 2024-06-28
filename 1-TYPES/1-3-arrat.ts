{
  //Array
  const fruits: string[] = ["⚽️", "🏀"];
  const scroes: Array<number> = [1, 2, 4];
  function printArray(fruits: readonly string[]) {}

  //Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 124];
  student[0]; // name
  student[1]; // 124
  const [name, age] = student;
}
