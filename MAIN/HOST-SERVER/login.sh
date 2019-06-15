#!/usr/bin/expect -f
 
set timeout 10

spawn login client

expect "Password:"
 
send -- "client\r"

interact