function pow(x, n) {
  if (typeof x !== "number" || typeof n !== "number") {
    throw new TypeError("must be number");
  } else if (!Number.isInteger(x) || !Number.isInteger(n)) {
    throw new RangeError("Number must be integer");
  } else if (x < 0 || n < 0) {
    throw new RangeError(
      "the number must be positive, that is, the number must be greater than zero."
    );
  }
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
try {
  console.log(pow(3, 3));
} catch (err) {
  console.log(err);
}
console.log("If error, somthing after error");
