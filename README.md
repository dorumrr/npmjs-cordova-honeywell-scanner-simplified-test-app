## cordova-honeywell-scanner-simplified-test-app
This is a dedicated Ionic application that implements the [cordova-honeywell-scanner-simplified](https://www.npmjs.com/package/cordova-honeywell-scanner-simplified) plugin for testing purposes.

### Install
Ionic: `npm run dev-setup-ionic`

Cordova: `npm run dev-setup-cordova`

### Run directly on device whenz connected via USB
Run [`abd devices`](https://developer.android.com/studio/command-line/adb) in your terminal. Your device id should be listed (disconnect and reconnect if not listed).

Ionic: `ionic cordova run android`

Cordova: `cordova run android`

Add `-l` to preview live changes.

### Build apk
Ionic: `ionic cordova build android`

Cordova: `cordova build android`
