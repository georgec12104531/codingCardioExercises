def array_sum_iter(arr)
  arr.reduce(0, :+)
end

def array_sum_rec(arr)
  return 0 if arr.empty?
   array_sum_rec(arr[0...-1]) + arr[-1]
end
