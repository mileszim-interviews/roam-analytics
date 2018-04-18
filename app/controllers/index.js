import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  stateFilter: '',

  query: computed('stateFilter', function() {
    return this.get('stateFilter').toLowerCase() || '';
  }),

  filteredStates: computed('model.[]', 'query', function() {
    const { model, query } = this.getProperties('model', 'query');
    return model.filter(s => s.state.toLowerCase().includes(query));
  }),

  filteredStatesCountArray: computed.mapBy('filteredStates', 'count'),
  total: computed.sum('filteredStatesCountArray')
});
