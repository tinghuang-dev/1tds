import { useRouter } from 'next/router';

const useGetActiveLinkProps = () => {
  const { pathname } = useRouter();

  return (href) => ({
    variant: pathname === href ? 'primary' : 'text',
    href,
  });
};

export default useGetActiveLinkProps;
