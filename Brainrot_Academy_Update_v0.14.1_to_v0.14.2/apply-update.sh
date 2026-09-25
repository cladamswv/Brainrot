#!/usr/bin/env bash
set -euo pipefail
UPDATE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cp -a "$UPDATE_DIR/payload/." ./
echo "Updated to v0.14.2. Running tests..."
npm test
