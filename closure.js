// Closure helps to preserve/freeze state

const makeAdder = (x) => {
  const add = (y) => {
    return x + y
  }

  return add;
}

const plusFour = makeAdder(4)


console.log(plusFour(4))
console.log(plusFour(10))
