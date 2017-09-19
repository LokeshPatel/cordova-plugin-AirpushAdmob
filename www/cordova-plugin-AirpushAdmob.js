
var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');


/**
 * This represents the Airpush Admob functionlity
 *
 * @constructor
 */
function CDVAirpushAdmob() {

  /*
  *  Using SmartWall in your application:
  *  Airpush’s SmartWall is comprised of the following five sub Ad Formats:
  *  SmartWall Ad
  *  Dialog Overlay Ad
  *  AppWall Ad
  *  Rich Media Interstitial Ad
  *  Video Ad
  *
  */
  CDVAirpushAdmob.prototype.wallFormats = {
       Smartwall:'smartwall',
       Overlay:'overlay',
       Appwall:'appwall',
       Interstitial:'interstitial',
       Video:'video'
  }
 /**
  * set AirpushAdmob configation setAppId
  *
  * @param {Variable} setAppId set Airpush application Apiid
  * @param {Function} successCallback function return success if key set successfully
  * @param {Function} errorCallback function return error when key not set and any error occures
  */
CDVAirpushAdmob.prototype.setAppId = function(setAppId,successCallback,errorCallback) {
    cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','setAppId',setAppId);
 };
 /**
  * set AirpushAdmob configation setApiKey
  *
  * @param {Variable} setApiKey set Airpush application  Api Key
  * @param {Function} successCallback function return success if key set successfully
  * @param {Function} errorCallback function return error when key not set and any error occures
  */
 CDVAirpushAdmob.prototype.setApiKey = function(setApiKey,successCallback,errorCallback) {
     cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','setApiKey',setApiKey);
  };

/**
 * set AirpushAdmob set Cache
 *
 * @param {VariableBoolean} value set value true or false
 * @param {Function} successCallback function return success if key set successfully
 * @param {Function} errorCallback function return error when key not set and any error occures
 */
 CDVAirpushAdmob.prototype.setCache = function(value,successCallback,errorCallback) {
       cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','setCache',value);
  };

  /**
   * When the ad is cached you need to use the following code to show it
   * AirpushAdmob show Cache
   * @param {Variable} action  need to set action on wall  'smartwall','overlay','appwall','interstitial','video'
   * @param {Function} successCallback function return success if key set successfully
   * @param {Function} errorCallback function return error when key not set and any error occures
   */
  CDVAirpushAdmob.prototype.showCache = function(action,successCallback,errorCallback) {
        cordova.exec(successCallback||null,errorCallback || null,'showCache',action);
   };

  /**
   *
   * Airpush Smart WallAd
   *
   * @param {Variable} action  need to set action on wall  'smartwall','overlay','appwall','interstitial','video'
   * @param {Function} successCallback function return success if key set successfully
   * @param {Function} errorCallback function return error when key not set and any error occures
   *
   * To start Overlay Dialog Ad: cordova.exec(null,null,'AirpushPlugin','airpushSmartWallAd','overlay');
   * To start AppWall Ad: cordova.exec(null,null,'AirpushPlugin','airpushSmartWallAd','appwall');
   * To start Rich Media Interstitial Ad: cordova.exec(null,null,'AirpushPlugin','airpushSmartWallAd','interstitial');
   * To start Video Ad: cordova.exec(null,null,'AirpushPlugin','airpushSmartWallAd','video');
   */
  CDVAirpushAdmob.prototype.airpushSmartWallAd = function(action,successCallback,errorCallback) {
        cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','airpushSmartWallAd',action);
   };


   /**
    *
    * set placement id for banner "Placement ID allows you to create multiple placements of the 360 Banners"
    *
    * @param {Variable} placementid set placement id If you do not have placement id you need to use 0
    * @param {Function} successCallback function return success if key set successfully
    * @param {Function} errorCallback function return error when key not set and any error occures
    */
   CDVAirpushAdmob.prototype.setPlacementId = function(placementid,successCallback,errorCallback) {
         cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','setPlacementId',placementid);
    };

    /**
     *
     * call 360 banner
     *
     * @param {Function} successCallback function return success if key set successfully
     * @param {Function} errorCallback function return error when key not set and any error occures
     */
    CDVAirpushAdmob.prototype.call360 = function(successCallback,errorCallback) {
          cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','call360','');
     };

   /**
   *
   * Remove 360 banner
   *
   * @param {Function} successCallback function return success if key set successfully
   * @param {Function} errorCallback function return error when key not set and any error occures
   */
    CDVAirpushAdmob.prototype.remove360 = function(successCallback,errorCallback) {
             cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','remove360','');
    };



     /**
      *
      * callInline "You just need to add the following to your html page."
      *
      * @param {Function} successCallback function return success if key set successfully
      * @param {Function} errorCallback function return error when key not set and any error occures
      *
      */
     CDVAirpushAdmob.prototype.callInline = function(successCallback,errorCallback) {
           cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','callInline','');
      };

     /**
      *
      * Remove Inline / Stop  Inline banner
      *
      * @param {Function} successCallback function return success if key set successfully
      * @param {Function} errorCallback function return error when key not set and any error occures
      *
      */
     CDVAirpushAdmob.prototype.removeInline = function(successCallback,errorCallback) {
           cordova.exec(successCallback||null,errorCallback || null,'AirpushPlugin','removeInline','');
      };
}

module.exports = new CDVAirpushAdmob();
