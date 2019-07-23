#!/bin/sh

MW=$(cd .. && pwd)
EXTERNAL=$MW/docs/static/external
EXAMPLES=$MW/docs/static/examples
rm -rf $EXTERNAL

# Copy README over
cat $MW/README.md | grep -v 'project website' > $MW/docs/pages/index.md
cat $MW/RELEASING.md > $MW/docs/docs/guides/releasing.md
cat $MW/CONTRIBUTING.md > $MW/docs/docs/guides/contributing.md
cat $MW/docs/README.md > $MW/docs/docs/guides/contributing-to-the-docs.md

# Copy over Palette demo
DIR=$EXAMPLES/tabs/palette/demo
mkdir -p $DIR
cp -r $MW/examples/tabs/palette/demo/* $DIR

# Copy over example data demo
DIR=$EXAMPLES/data/demo
mkdir -p $DIR
cp -r $MW/examples/data/demo/* $DIR

# Copy over documentation from @misk/* packages
for dir in $MW/packages/@misk/*/; do
  dir=${dir%*/}      # remove the trailing "/"
  PKG=${dir##*/}    # print everything after the final "/"
  cp $dir/*.md $MW/docs/docs/packages/$PKG/
done
