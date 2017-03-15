require "net/http"

content = Net::HTTP.get("langs.bigsbyspot.org", "/files/webcall.txt")

puts content