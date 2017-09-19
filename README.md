# cordova-plugin-AirpushAdmob


# Install plugin

## Master branch:

 ```
           cordova plugin add https://github.com/LokeshPatel/cordova-plugin-AirpushAdmob
 ```

## Initialization and set AppID and Key

### Add the below code in index.js script to your assets/www folder (or javascripts folder, wherever you want really) and reference it in your main index.html file. Add following code after onDeviceReady is called
 ```
           CDVAirpushAdmob.setAppId(29011, callbackSuccess,callbackFail);
           CDVAirpushAdmob.setApiKey(1361616622473125425,callbackSuccess,callbackFail);
 ```

## Enable caching in index.html:
 ```
         CDVAirpushAdmob.setCache(x,callbackSuccess,callbackFail);
 ```

## Show Cache
```
        CDVAirpushAdmob.showCache("",callbackSuccess,callbackFail);
```

## 360 Ad
```
         CDVAirpushAdmob.call360(callbackSuccess,callbackFail);
```

## 360 Ad Remove
```
         CDVAirpushAdmob.remove360(callbackSuccess,callbackFail);
```

## Adding Inline 360 Ads
```
         CDVAirpushAdmob.callInline(callbackSuccess,callbackFail);
```

## Adding remove Inline
```
         CDVAirpushAdmob.removeInline(callbackSuccess,callbackFail);
```


## Using SmartWall in your application:
### Airpush’s SmartWall is comprised of the following five sub Ad Formats:
### Dialog Overlay Ad
### AppWall Ad
### Rich Media Interstitial Ad
### Video Ad
### Landing Page Ad

```
CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Smartwall,callbackSuccess,callbackFail);

CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Overlay,callbackSuccess,callbackFail);

CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Appwall,callbackSuccess,callbackFail);

CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Interstitial,callbackSuccess,callbackFail);

CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Video,callbackSuccess,callbackFail);

CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.LandingPage,callbackSuccess,callbackFail);

```
