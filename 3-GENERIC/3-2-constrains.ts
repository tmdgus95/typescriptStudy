{
  const obj = {
    name: "tmdgus",
    age: 30,
  };
  const obj2 = {
    animal: "🐕",
  };

  console.log(getValue(obj, "name")); // tmdgus
  console.log(getValue(obj, "age")); // 30
  console.log(getValue(obj2, "animal")); // 🐕
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
