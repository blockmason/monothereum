#!/usr/bin/env bash

SCRIPTS_DIR="$(cd "$(dirname "$0")"; pwd)"
BASE_DIR="$(dirname "${SCRIPTS_DIR}")"

ESLINT="${BASE_DIR}/node_modules/.bin/eslint"

"${ESLINT}" "${BASE_DIR}/src" $*
