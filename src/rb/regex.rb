puts "Is '^[0-9]+$' mathed by '123456'?"
if "123456" =~ /^[0-9]+$/
    puts "yes"
else
    puts "no"
end

puts "Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'"
matches = "abcdef-12345".match(/^([a-z]+)\-(\d+)$/).captures
puts "Found #{matches.length} groups."
matches.each_with_index{ |match, groupIndex| 
    puts "[#{groupIndex}] = #{match}" 
}