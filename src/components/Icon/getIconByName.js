import {
  faBars,
  faMapMarkerAlt, faRedo, faSearch, faSpinner, faTimes, faTimesCircle, faUserCircle,
  faAngleLeft, faAngleRight, faShareAlt, faShareAltSquare, faCaretRight,
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
}[name]);

export default getIconByName;
