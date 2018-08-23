def fib_it(n)
  fib = [1, 1]
  while fib.length < n
    fib.push(fib[-1] + fib[-2])
  end
  fib[n - 1]
end

def fib_rec(n)
  return 1 if n == 1 || n == 2
  fib_rec(n - 1) + fib_rec(n - 2)
end
