require_relative "board.rb"
require_relative "card.rb"
require_relative "humanplayer.rb"
require_relative "computerplayer.rb"

class Game 
  
  
  attr_accessor :board, :prev_guess, :player1, :player2, :current_player
  
  def initialize(player1,player2,grid=4)
    @player1 = player1
    @player2 = player2
    @current_player = @player1
     
    @board = Board.new(grid)
    @prev_guess = []
  end
  
  def play
    @board.render
    until @board.over?
      2.times do |turn|
        self.take_turn
      end
      self.pair?
      card1, card2 = self.get_card
      if player2.is_a? ComputerPlayer 
        player2.all_prev_guesses << card1
        player2.all_prev_guesses << card2
      end
      @prev_guess = []
    end
    system("clear")
    puts "Congratulations, you win"
  end
  
  def get_card
    card_one_pos, card_two_pos = @prev_guess[0], @prev_guess[1]
    x1, y1 = card_one_pos
    x2, y2 = card_two_pos
    return [board.grid[x1][y1], card_one_pos],[board.grid[x2][y2], card_two_pos]
    
  end
  
  def pair?
      card_one_pos, card_two_pos = @prev_guess[0], @prev_guess[1]
      x1, y1 = card_one_pos
      x2, y2 = card_two_pos
      board.grid[x1][y1].compare(board.grid[x2][y2])
  end
  
  def take_turn 
    if @current_player.is_a? HumanPlayer
      p "What position would you like to guess? (ex 0,0)"
      guess = gets.chomp.split(",").map(&:to_i)
      until valid_play?(guess)
        p "Invalid play, please enter a proper position (ex 0,0)"
        guess = gets.chomp.split(",").map(&:to_i)
      end
      board.reveal(guess)
      @prev_guess.push(guess)
      board.render
    else
      player2.take_turn 
    end
    if @current_player == player1
      @current_player = player2 
    else
      @current_player = player1
    end
    
  end
    
    
  def valid_play?(pos)
    x,y = pos
    return true if board.grid[x][y].status == false
    return false
  end  
end

if __FILE__ == $PROGRAM_NAME 
  p "What is your name?"
  player1_name = gets.chomp
  player1 = HumanPlayer.new(player1_name)
  p "Are you playing against a computer? (y/n)"
  if gets.chomp.downcase == "y"
    player2 = ComputerPlayer.new("Gary")
    new_game = Game.new(player1,player2)
  else
    p "Enter other player's name"
    player2_name = gets.chomp
    player2 = HumanPlayer.new(player2_name)
    new_game = Game.new(player1,player2)
  end
  new_game.play
end
