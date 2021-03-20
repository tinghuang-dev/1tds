import { useRouter } from 'next/router';
import { uniq } from 'ramda';
import React from 'react';
import Box from '../Box';
import Flex from '../Flex';
import Icon from '../Icon';
import Link from '../Link';

export default function Pagination({
  pageSize,
  page,
  count,
}) {
  const { query, pathname } = useRouter();

  const pages = Math.ceil(count / pageSize);
  const currentPage = page + 1;

  const arr = uniq([1, currentPage - 1, currentPage, currentPage + 1, pages])
    .filter((v) => v > 0 && v <= pages);

  return (
    <Flex justifyContent="center">
      <Flex>
        <Box mx="sm" color="greys.@800">
          <Link
            variant="text"
            href={{
              pathname,
              query: {
                ...query,
                page: (() => {
                  const previousPage = page - 1;
                  return previousPage > 0 ? previousPage : 0;
                })(),
              },
            }}
          >
            <Icon variant="naked" name="angleLeft" />
          </Link>
        </Box>
        {arr.map((number, index) => (
          <React.Fragment key={number}>
            {(index !== 0 && arr[index - 1] !== number - 1) && (
              <Box mx="sm" color="greys.@500">
                ...
              </Box>
            )}
            <Box mx="sm" color="greys.@800">
              <Link
                variant={number === currentPage ? 'primary' : 'text'}
                href={{
                  pathname,
                  query: {
                    ...query,
                    page: number - 1,
                  },
                }}
              >
                {number}
              </Link>
            </Box>
          </React.Fragment>
        ))}
        <Box mx="sm" color="greys.@800">
          <Link
            variant="text"
            href={{
              pathname,
              query: {
                ...query,
                page: (() => {
                  const nextPage = page + 1;
                  const endPage = pages - 1;
                  return nextPage >= endPage ? endPage : nextPage;
                })(),
              },
            }}
          >
            <Icon variant="naked" name="angleRight" />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
