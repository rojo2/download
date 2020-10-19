#!/bin/bash
if [[ -z $NIGHTWATCH_DOWNLOADS ]]; then
  echo "Specify \$NIGHTWATCH_DOWNLOADS"
  exit 1
fi

#&& nightwatch -c nightwatch.conf.js
mkdir -p $NIGHTWATCH_DOWNLOADS \
  && rm -rf "${NIGHTWATCH_DOWNLOADS}/*" \
  && node nightwatch.js
