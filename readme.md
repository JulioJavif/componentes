compilar con:
- ionic capacitor copy android
- ionic capacitor sync android
para capacitor.

Live reload:
- ionic capacitor run android -l --host=YOUR_IP_ADDRESS

Disable capacitor:
- ionic integrations disable capacitor

Config cordoba:
-- Instalar valiables de entorno: https://cordova.apache.org/docs/en/11.x/guide/platforms/android/index.html#setting-environment-variables
-- Instalar gradle manualmente: https://gradle.org/install/#manually
- ionic integrations enable cordova --quiet
- ionic cordova platform remove android
- ionic cordova platform add android
- ng add @ionic/cordova-builders

- ionic cordova prepare android
- ionic cordova run android -l