ruby -rwebrick -e "WEBrick::HTTPServer.new( DocumentRoot: '.', Port: 3000, RequestCallback: Proc.new{|req,res| res['Access-Control-Allow-Origin'] = '*' } ).start"

