import {
  faBars,
  faMapMarkerAlt, faRedo, faSearch, faSpinner, faTimes, faTimesCircle, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const getIconByName = (name) => ({
  mapMarkerAlt: faMapMarkerAlt,
  search: faSearch,
  close: faTimes,
  closeCircle: faTimesCircle,
  refresh: faRedo,
  loading: faSpinner,
  menu: faBars,
  userCircle: faUserCircle,
}[name]);

export default getIconByName;
