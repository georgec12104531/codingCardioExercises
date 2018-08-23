
def merge_arr(arr1, arr2)
  result = []
  until arr1.empty? || arr2.empty?
    if arr1[0] < arr2[0]
      result << arr1.shift
    else
      result << arr2.shift
    end
  end

  if arr1.empty?
    result += arr2
  elsif arr2.empty?
    result += arr1
  end
  result
end

def merge_sort(arr)
  return arr if arr.length <= 1
  mid_i = arr.length / 2
  left = arr[0...mid_i] # [1, 2]
  right = arr[mid_i..-1]

  sub_left = merge_sort(left)
  sub_right = merge_sort(right)

  merge_arr(sub_left, sub_right)
end
