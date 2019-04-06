## cordova-honeywell-scanner-simplified-test-app
This is a dedicated Ionic application that implements the [cordova-honeywell-scanner-simplified](https://www.npmjs.com/package/cordova-honeywell-scanner-simplified) plugin for testing purposes.

### Install

After cloning this repo, also clone [npmjs-cordova-honeywell-scanner-simplified](https://github.com/dorumrr/npmjs-cordova-honeywell-scanner-simplified)

then run: `npm run dev-setup`

You can perform a clean reinstall by running `npm run dev-reinstall`

### Run directly on device when connected via USB
Run [`abd devices`](https://developer.android.com/studio/command-line/adb) in your terminal. Your device id should be listed (disconnect and reconnect if not listed).

`npm start` OR `ionic cordova run android -l`

### Build apk
Ionic: `ionic cordova build android`