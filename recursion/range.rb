def range(start, finish)
  return [] if finish <= start
  range(start, finish - 1) + [finish - 1]
end
