This version of the Colorado Lottery giving back section is templated using 11ty (https://www.11ty.dev/docs/):

Assets to be copied from static/public folders are managed in **eleventy.js**

**Shell:**
nvm use 16

**Setup:**
mkdir build-11ty
cd build-11ty
npm init -y

**Build:**
npx @11ty/eleventy --watch

**Upload:**
TODO: This is clunky.
Rename the _site/giving-back folder (assets, en, es) to "_site/build". Compress the **build** folder into a single .zip file for upload. The uploading looks for a single folder called "build" and unpacks its contents into the /giving-back/ directory.