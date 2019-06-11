#!/bin/bash

if grep -q 0 .CONNECT/.tmate_status
then
	#condition 0
	echo 0
  	echo 1 > .CONNECT/.tmate_status
  	tmate
else
	#condition 1
  	echo 1
  	echo 0 > .CONNECT/.tmate_status
  	sleep 3
  	tmate show-messages
fi