#!/usr/bin/env bash

SCRIPTS_DIR=$(cd "$(dirname "$0")"; pwd)
BASE_DIR=$(dirname "${SCRIPTS_DIR}")

NODE=$(which node)

"${NODE}" "${BASE_DIR}/lib/index.js"
