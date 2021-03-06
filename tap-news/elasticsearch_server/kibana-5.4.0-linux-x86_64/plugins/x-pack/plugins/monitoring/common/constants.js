/**
 * The Monitoring API version is the expected API format that we export and expect to import.
 * @type {string}
 */
export const MONITORING_SYSTEM_API_VERSION = '2';
/**
 * The name of the Kibana System ID used to publish and lookup Kibana stats through the Monitoring system.
 * @type {string}
 */
export const KIBANA_SYSTEM_ID = 'kibana';
/**
 * The name of the Kibana System ID used to lookup Kibana stats through the Monitoring system.
 * @type {string}
 */
export const LOGSTASH_SYSTEM_ID = 'logstash';
/**
 * The type name used within the Monitoring index to publish Kibana stats.
 * @type {string}
 */
export const KIBANA_STATS_TYPE = 'kibana_stats';

/*
 * Values for column sorting in table options
 * @type {number} 1 or -1
 */
export const SORT_ASCENDING = 1;
export const SORT_DESCENDING = -1;

/*
 * config options for welcome banner / allow phone home
 * @type {string}
 */
export const CONFIG_SHOW_BANNER = 'xPackMonitoring:showBanner';
export const CONFIG_ALLOW_REPORT = 'xPackMonitoring:allowReport';

/*
 * Chart colors
 * @type {string}
 */
export const CHART_LINE_COLOR = '#d2d2d2';
export const CHART_TEXT_COLOR = '#9c9c9c';

/*
 * Number of cluster alerts to show on overview page
 * @type {number}
 */
export const CLUSTER_ALERTS_SEARCH_SIZE = 3;
