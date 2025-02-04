#!/bin/bash

# Check if any arguments are supplied
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through the arguments and create directories
for arg in "$@"; do
    dir_name="ex$arg"
    mkdir -p "$dir_name"
done
