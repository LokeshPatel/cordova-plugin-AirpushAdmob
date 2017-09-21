# cordova-plugin-AirpushAdmob

### Plugin Install :

 ```
           cordova plugin add https://github.com/LokeshPatel/cordova-plugin-AirpushAdmob
 ```



### Initialization and set App ID and Api Key

#### Air push "App Id" and "API Key" Registering your Android application: [www.airpush.com](www.airpush.com)
 
#### Add following code after onDeviceReady is called
 ``` 
          function callbackSuccess(result){
              console.log(result)
            }
          function callbackFail (error){
               console.log(error)
            }
            CDVAirpushAdmob.setAppId(<appid>, callbackSuccess,callbackFail);

           CDVAirpushAdmob.setApiKey("<ApiKey>",callbackSuccess,callbackFail);
 ```
#### Note : App id should be a number


### Enable caching in index.html:
 ```
         CDVAirpushAdmob.setCache(x,callbackSuccess,callbackFail);
 ```

### Show Cache
```
        CDVAirpushAdmob.showCache("",callbackSuccess,callbackFail);
```

### 360 Ad
```
         CDVAirpushAdmob.call360(callbackSuccess,callbackFail);
```

### 360 Ad Remove
```
         CDVAirpushAdmob.remove360(callbackSuccess,callbackFail);
```

### Adding Inline 360 Ads
```
         CDVAirpushAdmob.callInline(callbackSuccess,callbackFail);
```

### Adding remove Inline
```
         CDVAirpushAdmob.removeInline(callbackSuccess,callbackFail);
```


### Using SmartWall in your application:

#### Airpush’s SmartWall is comprised of the following five sub Ad Formats:
#### Dialog Overlay Ad
#### AppWall Ad
#### Rich Media Interstitial Ad
#### Video Ad
#### Landing Page Ad

```
   function callbackSuccess(result){
		  	console.log(result)
	  }
	  function callbackFail (error){
		    console.log(error)
   }

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Smartwall,callbackSuccess,callbackFail);

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Overlay,callbackSuccess,callbackFail);

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Appwall,callbackSuccess,callbackFail);

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Interstitial,callbackSuccess,callbackFail);

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.Video,callbackSuccess,callbackFail);

      CDVAirpushAdmob.airpushSmartWallAd(CDVAirpushAdmob.wallFormats.LandingPage,callbackSuccess,callbackFail);

```

#### Also add "CDVAirpushAdmob.wallFormats.Smartwall" values direct like "smartwall","video","overlay" .. etc

#### Cordova plugin AirpushAdmob development based on API Reference AirPush Cordova doc.

#### More Details:[AirPush plugin Docs](http://docs.airpush.com/index.php/Cordova_plugin_Bundle1_SDK_9.0)
