export default function taskBlock(trueOrFalse) {
  let task = false; // using let to allow reassignment
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
