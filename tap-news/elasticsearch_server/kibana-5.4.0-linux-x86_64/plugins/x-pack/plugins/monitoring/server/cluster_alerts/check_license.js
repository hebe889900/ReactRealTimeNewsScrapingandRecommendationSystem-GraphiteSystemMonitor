import { includes } from 'lodash';

/**
 * Function to do the work of checking license for cluster alerts feature support
 * Can be used to power XpackInfo license check results as well as checking license of monitored clusters
 *
 * @param {String} type License type if a valid license. {@code null} if license was deleted.
 * @param {Boolean} active Indicating that the overall license is active
 * @param {String} clusterSource 'monitoring' or 'production'
 * @param {Boolean} watcher {@code true} if Watcher is provided (or if its availability should not be checked)
 */
export function checkLicense(type, active, clusterSource, watcher = true) {
  // return object, set up with safe defaults
  const licenseInfo = {
    clusterAlerts: { enabled: false }
  };

  // Disabled because there is no license
  if (!type) {
    return Object.assign(licenseInfo, {
      message: `Cluster Alerts is not enabled because the ${clusterSource} cluster's license could not be determined.`
    });
  }

  // Disabled because the license type is not valid (basic)
  if (!includes([ 'trial', 'standard', 'gold', 'platinum' ], type)) {
    return  Object.assign(licenseInfo, {
      message: `Cluster Alerts is not fully enabled because the ${clusterSource} cluster's current license [${type}] is not supported.`
    });
  }

  // Disabled because the license is inactive
  if (!active) {
    return Object.assign(licenseInfo, {
      message: `Cluster Alerts is not enabled because the ${clusterSource} cluster's current license [${type}] is not active.`
    });
  }

  // Disabled because Watcher is not enabled (it may or may not be available)
  if (!watcher) {
    return Object.assign(licenseInfo, { message: 'Cluster alerts is not enabled because Watcher is disabled.' });
  }

  return Object.assign(licenseInfo, { clusterAlerts: { enabled: true } });
}

/**
 * Function to "generate" license check results for {@code xpackInfo}.
 *
 * @param {Object} xpackInfo license information for the _Monitoring_ cluster
 * @param {Function} _checkLicense Method exposed for easier unit testing
 * @returns {Object} Response from {@code checker}
 */
export function checkLicenseGenerator(xpackInfo, _checkLicense = checkLicense) {
  let type;
  let active = false;
  let watcher = false;

  if (xpackInfo && xpackInfo.license) {
    const watcherFeature = xpackInfo.feature('watcher');

    if (watcherFeature) {
      watcher = watcherFeature.isEnabled();
    }

    type = xpackInfo.license.getType();
    active = xpackInfo.license.isActive();
  }

  return _checkLicense(type, active, 'monitoring', watcher);
}
