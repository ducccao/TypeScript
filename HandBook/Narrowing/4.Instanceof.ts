function logVl(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toDateString());
  } else {
    console.log(x.toUpperCase());
  }
}
