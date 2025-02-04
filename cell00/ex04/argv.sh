#!/bin/bash

# Check if no arguments are passed
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through up to 3 arguments and print them
    count=0
    for arg in "$@"; do
        echo "$arg"
        count=$((count + 1))
        # Break the loop if 3 arguments have been printed
        if [ $count -eq 3 ]; then
            break
        fi
    done
fi
