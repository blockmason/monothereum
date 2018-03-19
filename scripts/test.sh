#!/usr/bin/env bash

SCRIPTS_DIR="$(cd "$(dirname "$0")"; pwd)"
BASE_DIR="$(dirname "${SCRIPTS_DIR}")"

MOCHA="${BASE_DIR}/node_modules/.bin/mocha"

(
  cd "${BASE_DIR}/src"
  find . -type f -name spec.js \
  | NODE_ENV=test xargs "${MOCHA}" \
    $* \
    --ui='bdd' \
    --require='babel-register' \
    --require='babel-polyfill' \
    spec.setup.js
)
