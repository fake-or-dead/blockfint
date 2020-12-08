
def check_metrics(metrics = [[]])
  sets = {}
  diagonal_first = [0, 1, 2, 3].zip([0, 1, 2, 3])
  diagonal_last = [3, 2, 1, 0].zip([0, 1, 2, 3])
  metrics.each_with_index do |row_data, row_index|

    sets[:"row-#{row_index}"] ||= "" 
    sets[:"diagonal_first"] ||= ""
    sets[:"diagonal_last"] ||= ""

    row_data.each_with_index do |column_data, column_index|
      value = column_data.to_s.capitalize

      sets[:"column-#{column_index}"] ||= ""
      sets[:"column-#{column_index}"] += value
      sets[:"row-#{row_index}"] += value

      sets[:"diagonal_first"] += value if diagonal_first.include?([row_index, column_index])
      sets[:"diagonal_last"] += value if diagonal_last.include?([row_index, column_index])
    end
  end
  p sets

  return "both" if(sets.has_value?("OOOO") && sets.has_value?("XXXX"))
  return "O" if(sets.has_value?("OOOO"))
  return "X" if(sets.has_value?("XXXX"))
  return "none"
end

metrics = [%w{x O X x}, %w{o X x X}, %w{X x o X}, %w{x o X o}]
p metrics
check_metrics metrics

metrics2 = [%w{x x X o}, %w{x o x o}, %w{X o X O}, %w{x o O o}]
p metrics2
check_metrics metrics2