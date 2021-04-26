import {
  faBars, faMapMarkerAlt, faRedo, faSearch, faSpinner, faTimes, faTimesCircle, faUserCircle,
  faAngleLeft, faAngleRight, faShareAlt, faShareAltSquare, faCaretRight, faCheckCircle,
  faArrowLeft, faMapMarkedAlt, faStore, faStoreAlt, faMapPin,
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
  angleLeft: faAngleLeft,
  angleRight: faAngleRight,
  share: faShareAlt,
  shareSquare: faShareAltSquare,
  caretRight: faCaretRight,
  checkCircle: faCheckCircle,
  return: faArrowLeft,
  switchMap: faMapMarkedAlt,
  storeMark: faStore,
  storeMarkAlt: faStoreAlt,
  mapPin: faMapPin,
}[name]);

export default getIconByName;
