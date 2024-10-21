#!/bin/bash

npm run build
cp -rf dist/* ../rim-host/static/.
