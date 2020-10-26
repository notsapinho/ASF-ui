import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  faWrench, faBars, faLaptop, faUsers, faFileAlt, faTachometerAlt, faPowerOff, faPause, faCogs, faClock,
  faTimesCircle, faCheckCircle, faEdit, faTimes, faSquare, faMoon, faPalette, faPlay, faQuestion, faPlus,
  faSpinner, faKey, faTrash, faCloudDownloadAlt, faSignOutAlt, faAngleDown, faLanguage, faGamepad, faClone,
  faCalendarCheck, faLock, faBookOpen, faExclamation, faCodeBranch, faHourglassEnd, faHourglassHalf, faHourglassStart,
  faRedoAlt, faClipboard, faPuzzlePiece, faUndoAlt, faEye, faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

library.add(faWrench, faBars, faLaptop, faUsers, faFileAlt, faTachometerAlt, faPowerOff, faPause, faCogs,
  faClock, faTimesCircle, faCheckCircle, faEdit, faTimes, faSquare, faMoon, faPalette, faPlay, faQuestion,
  faPlus, faSpinner, faKey, faTrash, faCloudDownloadAlt, faSignOutAlt, faAngleDown, faLanguage, faGamepad,
  faClone, faCalendarCheck, faLock, faGithub, faBookOpen, faExclamation, faCodeBranch, faHourglassEnd, faHourglassHalf,
  faHourglassStart, faRedoAlt, faClipboard, faPuzzlePiece, faUndoAlt, faEye, faEyeSlash);

export default {
  install(Vue) {
    Vue.component('FontAwesomeIcon', FontAwesomeIcon);
    Vue.component('FontAwesomeLayers', FontAwesomeLayers);
  },
};
