function test(label, body) {
  if (!body()) return console.log(`Failed: ${label}`);
}

test("convert latin to uppercase", () => {
  return "hello".toUpperCase == "Hello";
});

test("convert persion to uppercase", () => {
  return "Χαίρετε".toUpperCase == "ΧΑΊΡΕΤΕ";
});
test("don't convert case-less characters", () => {
  return " ߈࠶ࢎఆ௷ ".toUpperCase() == " ߈࠶ࢎఆ௷ ";
});
