import uiModules from 'ui/modules';
import template from './sortable_column.html';
import './sortable_column.less';

const app = uiModules.get('xpack/watcher');

app.directive('sortableColumn', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: template,
    scope: {
      field: '@',
      sortField: '=',
      sortReverse: '=',
      onSortChange: '=',
    },
    controllerAs: 'sortableColumn',
    bindToController: true,
    controller: class SortableColumnController {
      toggle = () => {
        if (this.sortField === this.field) {
          this.onSortChange(this.field, !this.sortReverse);
        } else {
          this.onSortChange(this.field, false);
        }
      }

      get isSortedAscending() {
        return (this.sortField === this.field) && (!this.sortReverse);
      }

      get isSortedDescending() {
        return (this.sortField === this.field) && (this.sortReverse);
      }
    }
  };
});
