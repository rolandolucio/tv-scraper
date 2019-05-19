#!/bin/bash

# This file is intented to be use in CI/CD flows

# To execute 
# $ chmod +x env-load.sh
# $ source ./env-load.sh [mode]
# Source file must have the form
# ENV_VAR='VAR_VALUE'  //NO spaces

# if your .env file is in the form
# export ENV_VAR='VAR_VALUE'
# you could just source the file

cmd="$1"
case "$cmd" in 
  prod)
    echo "Production File, .env-prod"
    file=.env-prod
  ;;
  staging)
    echo "Staging File, .env-staging"
    file=.env-staging
  ;;
  dev)
    echo "Development File, .env-dev"
    echo "Recommended to use Docker" 
    file=.env-dev
  ;;
  *)
    echo "Local Dev, .env"
    echo "Valid Envs: prod, staging, dev "
    echo "Rename .env to .env-[env] when done"
    file=.env
    #exit 1
  ;;
esac

echo "Env Vars Loading"
while read line; do
  var1=${line/\'}
  var2=${var1/\'}
  echo ${var2}
  export ${var2//[$'\t\r\n']}
done < $file
echo "Env Vars loaded"