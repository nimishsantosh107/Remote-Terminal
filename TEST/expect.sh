#!/usr/bin/expect -f
 
set timeout -1
 
spawn ./shellscript.sh
 
expect "LOL:\r"
 
send -- "4 6\r"
 
expect eof
