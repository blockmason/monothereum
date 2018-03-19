#!/usr/bin/env bash

SCRIPTS_DIR=$(cd "$(dirname "$0")"; pwd)
BASE_DIR=$(dirname "${SCRIPTS_DIR}")

BABEL=${BASE_DIR}/node_modules/.bin/babel

"${BABEL}" \
  --source-root="${BASE_DIR}/src" \
  --out-dir="${BASE_DIR}/lib" \
  "${BASE_DIR}/src"
