#!/usr/bin/expect -f
 
set timeout -1

spawn login client

expect "Password:"
 
send -- "client\r"

interact