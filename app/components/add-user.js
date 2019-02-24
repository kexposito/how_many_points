import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service'


export default Component.extend({
  store: service('store'),
  paperToaster: service(),

  openServiceToast(message) {
    get(this, 'paperToaster').show(message, {
      duration: 2000,
      position: "bottom right",
      toastClass: this.get('toastClass')
    });
  },

  actions: {
    saveMember() {
      this.store.createRecord('user', {
        username: this.username,
        points: 0
      });
      get(this, 'close')()
        this.openServiceToast(`You add: ${this.username} to the game`)
        },

    closeDialog() {
      get(this, 'close')();
    },
  }
});
