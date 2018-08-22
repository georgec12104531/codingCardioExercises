class Board
  attr_accessor :grid, :card_array
  def initialize(grid=4)
    @grid = Array.new(grid) {Array.new(grid)}
    self.generate_cards
    self.populate
    system("clear")
  end
  
  def populate
    counter = 0 
    (@grid.length).times do |row|
      (@grid.length).times do |col|
        @grid[row][col] = @card_array[counter]
        counter += 1
      end
    end
  end
  
  def generate_cards 
    @card_array = []
    (grid.length**2/2).times do |i|
      @card_array.push(Card.new(i+1))
      @card_array.push(Card.new(i+1))
    end
    card_array.shuffle!
  end
  
  
  
  def render
    system("clear")
    @grid.length.times do |row_num|
      print self.display_row(row_num)
      puts ""
    end
  end
  
  def display_row(row_num)
    output_array = []
    @grid[row_num].map do |card|
      if card == nil
        output_array << nil    
      elsif card.status == true 
        output_array << card.face_value.to_s 
      elsif card.status.nil?
        output_array << nil
      else 
        output_array << "X"
      end  
    end 
    output_array
  end
  
  def [](pos)
    row, col = pos
    @grid[row][col]
  end
  
  def []=(pos)
    row, col = pos 
    @grid[row][col]
  end
  
  def over?
    @grid.flatten.all? { |card| card.status.nil? }
  end
  
  def reveal(pos)
    row, col = pos
    (@grid[row][col]).status = true  
  end
  
end
