#!/usr/bin/env bash

case "$1" in
  start)
    yarn --silent start
    ;;
  *)
    exec $*
    ;;
esac
