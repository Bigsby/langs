folders = Array.new
files = Array.new

folderPath = File.join(Dir.getwd, "../files")
Dir.foreach(folderPath) do |childItem|
    if childItem == "." || childItem == ".."
        next
    end

    if File.directory?(File.join(folderPath, childItem))
        folders.push(childItem)
    end
    if File.file?(File.join(folderPath, childItem))
        files.push(childItem)
    end
end

folders.each{ |folder| puts "/#{folder}" }

files.each() do |file|
    fileSize = File.new(File.join(folderPath, file)).stat.size
    puts "#{file},#{fileSize}B"
end