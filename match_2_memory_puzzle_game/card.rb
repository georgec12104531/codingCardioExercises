class Card 
    
  attr_accessor :face_value, :status
  
  def initialize(face_value)
    @face_value = face_value
    @status = false 
  end
  
  def hide
    @status = false if @status == true
  end
  
  def reveal
    @status = true if @status == false 
  end
  
  def compare(other_card)
    if self.face_value == other_card.face_value
      self.status = nil
      other_card.status = nil
    else
      self.status = false
      other_card.status = false
    end
  end
  
  
  
end
