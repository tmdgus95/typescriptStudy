{
  //Type Aliases
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "tmdgus",
    age: 95,
  };

  // String Literal Types
  type Name = "name";
  let tmdgusName: Name;
  tmdgusName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
