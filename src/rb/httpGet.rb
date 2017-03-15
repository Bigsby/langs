require "net/http"

data = Net::HTTP.get("langs.bigsbyspot.org", "/files/webcall.txt")
puts data