def bsearch(sorted, target)
  mid_i = sorted.length / 2 #1
  return mid_i if sorted[mid_i] == target
  return nil if sorted.length == 1 and sorted[0] != target
  if sorted[mid_i] > target
    index = bsearch(sorted[0...mid_i], target)
  else
    index = bsearch(sorted[mid_i..-1], target)
    return nil if index.nil?
    index + mid_i
  end
end


#[1, 2], 3 => 1


if __FILE__ == $0
  p bsearch([1, 2, 3], 1) # => 0
  p bsearch([2, 3, 4, 5], 3) # => 1
  p bsearch([2, 4, 6, 8, 10], 6) # => 2

  p bsearch([1, 3, 4, 5, 9], 5) # => 3
  p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5

  p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
  p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
end
