function do2(x?: string | null) {
  console.log(x!.toUpperCase());
}

do2("aasdasd");
do2(null);

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
