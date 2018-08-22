class ComputerPlayer
  attr_accessor :player, :previous_guesses, :next_guess, :all_positions, :avail_pos
  def initialize(computerName)
    @player = computerName
    @all_prev_guesses = []
    @next_guess = []
    @board_length = """"""""
    self.generate_all_positions
  end
  
  def take_turn
    #do everything
    self.generate_available_pos
    self.compare_prev_guesses
  end
  def compare_prev_guesses
    # [[Cardx,[0,0]],[Cardy,[0,1]]]
    
    (0...@all_prev_guesses.length-1).each do |i|
      card_one = @all_prev_guesses[i]
      if card_one[0].status == nil
        next
      end
      (i+1...@all_prev_guesses.length).each do |j|
        card_two = @all_prev_guesses[j]
        if card_two[0].status == nil
          next
        end
        if card1.compare_card_status(card2) && next_guess.empty?
          @next_guess << card_one[0]
          @next_guess << card_two[0]
        end
      end
    end
    if next_guess.empty?
      self.no_matched_guess
    else
      self.matched_guess
    end
  end
  
  def compare_card_status(other_card)
    return true if self.face_value == other_card.face_value
    return false
  end
  
  def matched_guess
    @next_guess[0].compare(@next_guess[1])
  end
  
  def no_matched_guess
    guess1_pos = @avail_pos.sample
    guess2_pos = nil
    x, y = guess1_pos
    guessed_card1 = Board.grid[x][y]
    @all_prev_guesses.each do |card|
      guess2_pos = card[1] if card[0].compare_card_status(guessed_card1)
    end
    if guess2_pos.nil? 
      guess2_pos = (@avail_pos - guess1_pos).sample
    end
    
    @all_prev_guesses << [guessed_card1,guess1_pos]
    
    x,y = guess2_pos
    guessed_card2 = Board.grid[x][y]
    @all_prev_guesses << [guessed_card2,guess2_pos]
    
    guessed_card1.compare(guessed_card2)
  end
  
  def generate_all_positions
    @all_positions = []
    (0...Board.grid.length).each do |i|
      (0...Board.grid.length).each do |j|
        @all_positions << [i,j]
      end
    end
  end
  
  def generate_available_pos
    previous_positions = @all_prev_guesses.select { |card| card[1] }
    @avail_pos = @all_positions - previous_positions
  end
end
