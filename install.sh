#!/usr/bin/env sh
echo "This script downloads Sencha Touch 2"

echo
echo "###############################"
echo "#"
echo "# Downloading Sencha Touch 2"
echo "#"
echo "###############################"
curl http://cdn.sencha.io/touch/sencha-touch-2.0.0-gpl.zip --output sencha.zip

# Extract the contents of the zip file
unzip sencha.zip -d .

# Rename the folder
mv sencha-touch-2.0.0-gpl/ touch2/

# Remove the zip file
rm sencha.zip

