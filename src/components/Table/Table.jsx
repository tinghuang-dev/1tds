import React from 'react';
import styled from 'styled-components';
import {
  border, layout, space, typography,
} from 'styled-system';

const StyledTable = styled.table.attrs({
  width: '100%',
  border: '@1',
  borderColor: 'border',
})`
  border-collapse: collapse;

  ${border}
`;

const TableRow = styled.tr.attrs({
  borderTop: '@1',
  borderColor: 'border',
})`
  ${border}
`;

const TableData = styled.td.attrs({
  height: '50px',
  py: 'sm',
  px: 'md',
})`
  ${space}
  ${layout}
`;

const TableHead = styled.th.attrs({
  height: '50px',
  px: 'md',
  fontWeight: 'bold',
  textAlign: 'left',
})`
  ${typography}
  ${space}
  ${layout}
`;

export default function Table({
  data,
  rows,
}) {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            {Object.keys(data).map((key) => (
              <TableHead key={key}>{data[key].title}</TableHead>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index} // eslint-disable-line react/no-array-index-key
            >
              {Object.keys(data).map((key) => (
                <TableData
                  key={key}
                  width={data[key].width || 'auto'}
                >
                  {data[key].render ? data[key].render(row) : row[key]}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
