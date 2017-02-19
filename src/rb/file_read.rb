puts File.read("../files/content.txt")

multilineFileStream = File.new("../files/multipleLines.txt")

while (line = multilineFileStream.gets)
    puts "- #{line}"
end