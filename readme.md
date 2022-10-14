compilar con:
- ionic capacitor copy android
- ionic capacitor sync android
para capacitor.

Live reload:
- ionic capacitor run android -l --host=YOUR_IP_ADDRESS

Disable capacitor:
- ionic integrations disable capacitor

Config cordoba:
- ionic integrations enable cordoba --quiet
- ionic cordova platform remove android
- ionic cordova platform add android
- ng add @ionic/cordova-builders

- ionic cordova prepare android