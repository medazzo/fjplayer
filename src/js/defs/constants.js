/**
 * @module Constants
 */
export const FJCONFIG_CLASS = 'FJClass';
export const FJCONFIG_TYPE = 'FJType';
export const FJCONFIG_TITLE = 'FJTitle';
export const FJCONFIG_SRC = 'FJSrc';
export const FJCONFIG_POSTER = 'FJPoster';
export const FJCONFIG_ADS_LINK_URL = 'FJAdsLinkUrl';
export const FJCONFIG_CAN_ESCAPE = 'FJCanEscape';
export const FJCONFIG_THUMBS = 'FJThumbs';
export const FJCONFIG_SUBTITLES = 'FJSubtitles';
export const FJCONFIG_ADS = 'FJAds';
export const FJCONFIG_AUDIOS = 'FJAudios';
export const FJCONFIG_OVERLAYS = 'FJOverlays';
export const FJCONFIG_DRM = 'FJDrm';
export const FJCONFIG_LABEL = 'FJLabel';
export const FJCONFIG_LANG = 'FJLang';
export const FJCONFIG_DATA = 'FJData';
export const FJCONFIG_URL = 'FJUrl';
export const FJCONFIG_DURATION = 'FJDuration';
export const FJCONFIG_SHOW_AT = 'FJShowAt';

export const FJCONFIG_DRM_LICENSE_SERVER = 'FjLicenseServer';


export const FJCONFIG_TRUE = 'true';
export const FJCONFIG_FALSE = 'false';
export const FJCONFIG_BOOLEAN = { FJCONFIG_TRUE, FJCONFIG_FALSE };

export const FJCONFIG_CLASS_VOD = 'vod';
export const FJCONFIG_CLASS_LIVE = 'live';
export const FJCONFIG_CLASSES = [FJCONFIG_CLASS_LIVE, FJCONFIG_CLASS_VOD];

export const FJCONFIG_TYPE_MP4 = 'video/mp4';
export const FJCONFIG_TYPE_DASH = 'dash';
export const FJCONFIG_TYPES = [FJCONFIG_TYPE_MP4, FJCONFIG_TYPE_DASH];

export const FJCONFIG_ADS_CLASS_PRE_ROLL = 'pre-roll';
export const FJCONFIG_ADS_CLASS_MID_ROLL = 'mid-roll';
export const FJCONFIG_ADS_CLASS_POST_ROLL = 'post-roll';
export const FJCONFIG_ADS_CLASSES = [FJCONFIG_ADS_CLASS_PRE_ROLL,
    FJCONFIG_ADS_CLASS_MID_ROLL, FJCONFIG_ADS_CLASS_POST_ROLL
];

export const AdsEnum = {
    ADS_PRE_ROLL: 'ADS_PRE_ROLL',
    ADS_MID_ROLL: 'ADS_MID_ROLL',
    ADS_POST_ROLL: 'ADS_POST_ROLL'
};


const PlayerEvents = {
    STREAM_LOADED: 'STREAM_LOADED',
    TRACKS_ADDED: 'TRACKS_ADDED',
    PLAYBACK_ERROR: 'PLAYBACK_ERROR',
    PLAYBACK_STARTED: 'PLAYBACK_STARTED',
    PLAYBACK_PAUSED: 'PLAYBACK_PAUSED',
    PLAYBACK_SEEKING: 'PLAYBACK_SEEKING',
    PLAYBACK_SEEKED: 'PLAYBACK_SEEKED',
    PLAYBACK_ENDED: 'PLAYBACK_ENDED',
    PLAYBACK_TIME_UPDATE: 'PLAYBACK_TIME_UPDATE'
};

const AdsEvents = {
    ADS_USER_CLICKED: 'ADS_USER_CLICKED',
    ADS_PLAYBACK_STARTED: 'ADS_PLAYBACK_STARTED',
    ADS_PLAYBACK_ENDED: 'ADS_PLAYBACK_ENDED',
    ADS_PLAYBACK_ERROR: 'ADS_PLAYBACK_ERROR'
};

const OverlayEvents = {
    OVERLAY_USER_CLICKED: 'OVERLAY_USER_CLICKED',
    OVERLAY_STARTED: 'OVERLAY_STARTED',
    OVERLAY_ENDED: 'OVERLAY_ENDED',
    OVERLAY_ERROR: 'OVERLAY_ERROR',
    OVERLAY_SKIPPED: 'OVERLAY_SKIPPED'
};


export { PlayerEvents, AdsEvents, OverlayEvents }