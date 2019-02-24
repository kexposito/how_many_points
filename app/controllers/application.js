import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
leftSideBarLockedOpen: true,
addUserDialog: false,
addPointsDialog: false,
welcomeDialog: true,

  actions: {
    showAddUserDialog() {
      set(this, 'addUserDialog', true);
    },

    showAddPointsDialog(user) {
      set(this, 'selectedUser', user)
      set(this, 'addPointsDialog', true);
    },

    toggle(propName) {
      this.toggleProperty(propName);
   },

    closeModal() {
      set(this, 'addUserDialog', false);
      set(this, 'addPointsDialog', false);
    },

    closeAlertDialog() {
      set(this, 'welcomeDialog', false);
    }
  }
})