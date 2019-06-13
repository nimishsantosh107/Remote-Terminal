#!/bin/bash

sleep 2
#create tmate_data
tmate show-messages | grep "web sesion" | tail -n1 > /Users/client/.CONNECT/tmate/tmate_data

#write to link.json
LINK=$(cat ~/.CONNECT/tmate/tmate_data)
cat > /Users/client/.CONNECT/tmate/link.json <<EOF
    {
      "link": "$LINK"
    }
EOF

#clear tmate_data
echo ""> /Users/client/.CONNECT/tmate/tmate_data

#send POST
#LINK SUBJECT TO CHANGE
curl -X POST -H "Content-Type: application/json" -d @/Users/client/.CONNECT/tmate/link.json http://localhost:3000/link






