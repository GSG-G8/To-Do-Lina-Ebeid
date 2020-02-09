let todoFunctions = require("./main.js");
// let  = functions.todoFunctions;

const todoArr = [
  { id: 1, description: "task1", done: false },
  { id: 2, description: "task10", done: true }
];

describe("testing generate id", () => {
  test("return [{id,Name,detailes,time}] when array = []", () => {
    const actual = todoFunctions.generateId();
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

describe("testing clone array", () => {
  test("should return the same array", () => {
    const actual = todoFunctions.cloneArrayOfObjects([
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true }
    ]);
    const expected = [
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("testing add new object", () => {
  test("should return the array + the new object", () => {
    const todos = [
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true }
    ];
    const newTodo = { id: 7, description: "taskooo1", done: false };
    const actual = todoFunctions.addTodo(todos, newTodo);
    const expected = [
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true },
      { id: 7, description: "taskooo1", done: false }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("testing delete todo by id", () => {
  test("should delete the object with the given id", () => {
    const todos = [
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true }
    ];
    const actual = todoFunctions.deleteTodo(todos, 1);
    const expected = [{ id: 2, description: "task10", done: true }];
    expect(actual).toEqual(expected);
  });
});



describe("testing mark todo by id", () => {
  test("should toggle the done value for the given id", () => {
    const todos = [
      { id: 1, description: "task1", done: false },
      { id: 2, description: "task10", done: true }
    ];
    const actual = todoFunctions.markTodo(todos, 1);
    const expected = [
      { id: 1, description: "task1", done: true },
      { id: 2, description: "task10", done: true }
    ];
    expect(actual).toEqual(expected);
  });
});
