/**
 * Logstash Overview
 */
import { find } from 'lodash';
import uiRoutes from'ui/routes';
import uiModules from 'ui/modules';
import ajaxErrorHandlersProvider from 'plugins/monitoring/lib/ajax_error_handler';
import routeInitProvider from 'plugins/monitoring/lib/route_init';
import template from './index.html';

function getPageData($injector) {
  const $http = $injector.get('$http');
  const globalState = $injector.get('globalState');
  const url = `../api/monitoring/v1/clusters/${globalState.cluster_uuid}/logstash`;
  const timefilter = $injector.get('timefilter');
  const timeBounds = timefilter.getBounds();

  return $http.post(url, {
    timeRange: {
      min: timeBounds.min.toISOString(),
      max: timeBounds.max.toISOString()
    },
    metrics: [
      'logstash_cluster_events_input_rate',
      'logstash_cluster_events_output_rate',
      'logstash_cluster_events_latency'
    ]
  })
  .then(response => response.data)
  .catch((err) => {
    const Private = $injector.get('Private');
    const ajaxErrorHandlers = Private(ajaxErrorHandlersProvider);
    return ajaxErrorHandlers(err);
  });
}

uiRoutes.when('/logstash', {
  template,
  resolve: {
    clusters: function (Private) {
      const routeInit = Private(routeInitProvider);
      return routeInit();
    },
    pageData: getPageData
  }
});

const uiModule = uiModules.get('monitoring', [ 'monitoring/directives' ]);
uiModule.controller('logstashOverview', ($injector, $scope) => {
  const timefilter = $injector.get('timefilter');
  timefilter.enabled = true;

  const $route = $injector.get('$route');
  const globalState = $injector.get('globalState');
  $scope.cluster = find($route.current.locals.clusters, { cluster_uuid: globalState.cluster_uuid });
  $scope.pageData = $route.current.locals.pageData;

  const title = $injector.get('title');
  title($scope.cluster, 'Logstash');

  const $executor = $injector.get('$executor');
  $executor.register({
    execute: () => getPageData($injector),
    handleResponse: (response) => $scope.pageData = response
  });
  $executor.start();
  $scope.$on('$destroy', $executor.destroy);
});