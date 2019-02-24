import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service'


export default Component.extend({
  store: service('store'),
  paperToaster: service(),
  newpoints: 0,

  openServiceToast(message) {
    get(this, 'paperToaster').show(message, {
      duration: 2000,
      position: "bottom right",
      toastClass: this.get('toastClass')
    });
  },

  actions: {
    addPoints(newPoints) {
      set(this.user, 'points', Number(this.user.points) + Number(newPoints))

      get(this, 'close')()
        this.openServiceToast(`You add: ${newPoints} to ${this.user.username}`)
    },

    closeDialog() {
      get(this, 'close')();
    },
  }
});
