import {
  faMapMarkerAlt, faRedo, faSearch, faSpinner, faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const getIconByName = (name) => ({
  mapMarkerAlt: faMapMarkerAlt,
  search: faSearch,
  closeCircle: faTimesCircle,
  refresh: faRedo,
  loading: faSpinner,
}[name]);

export default getIconByName;
