import Ember from 'ember';
import PagingActions from 'hospitalrun/mixins/paging-actions';
export default Ember.Component.extend(PagingActions, {
  classNames: ['paging-buttons'],
  paginationProps: null
});
