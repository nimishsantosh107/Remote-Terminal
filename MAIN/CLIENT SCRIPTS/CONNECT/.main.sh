#!/bin/bash

if grep -q 0 .CONNECT/tmate/tmate_status
then
	#condition 0
  	echo 1 > .CONNECT/tmate/tmate_status
	~/.CONNECT/connect/connect.sh
else
	#condition 1
  	echo 0 > .CONNECT/tmate/tmate_status
  	~/.CONNECT/connect/connect-data.sh &
fi
