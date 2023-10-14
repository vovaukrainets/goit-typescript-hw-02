let some: unknown;
some = "Text";
let str: string;
str = some as string;

if (typeof some === "string") {
  str = some as string;
} else {
  console.log("Змінна 'some' не є рядком.");
}

export {};
