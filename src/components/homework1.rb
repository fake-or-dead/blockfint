inputs = %w{123456 123567 123678 123789 123890 111456 122456 121456 234567 111567}

(0..10).each{ inputs << "%06d" % (rand() * 1000000).to_i.to_s}


def lotteryDupplicateLast3Digits(inputs)
  puts inputs
  answer = Hash.new(0)
  inputs.each{|x| answer["#{x.to_s.chars.last(3).join}"] += 1 }
  puts answer.select{|k, v| v > 1 }
end

lotteryDupplicateLast3Digits(inputs)
