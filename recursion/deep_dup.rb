
class Array

  def deep_dup
    dup_array = []
    self.each do |el|
      if el.is_a? Array
        dup_array += [el.deep_dup]
      else
        dup_array += [el]
      end
    end
    dup_array
  end

end
