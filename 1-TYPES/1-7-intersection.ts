{
  // Intersecion Types: &

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.employeeId, person.name);
  }

  internWork({ employeeId: 2, name: "tmdgus", score: 1, work: () => {} });
}
