export default function getActiveLinkProps(pathname) {
  return function getLinkProps(href) {
    return {
      variant: pathname === href ? 'primary' : 'text',
      href,
    };
  };
}
