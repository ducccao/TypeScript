function logName(obj: { firstName: string; last?: string }) {
  if (obj.last !== undefined) {
    console.log(obj.firstName, obj.last.toUpperCase());
  }

  console.log(obj.firstName, obj.last?.toLowerCase());
}
logName({ firstName: "duc" });
logName({ firstName: "duc", last: "cao" });
