import React, { Fragment, useMemo } from 'react';
import styled from 'styled-components';
import { v4 as uuidV4 } from 'uuid';
import ContactBar from './components/ContactBar';
import Form from './components/Form';

const BlockTitle = styled.div`
  margin: 32px 0px 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #202020;
  font-size: 20px;
`;

export default function ContactContent({
  contacts,
  onContactAdd,
  onContactDelete,
}) {
  const inputs = useMemo(() => [{
    key: uuidV4(),
    value: '',
  },
  ...contacts.map((c) => ({
    key: c,
    value: c,
  }))], [contacts]);

  return (
    <>
      {inputs.map(({ key, value }) => (
        <Fragment key={key}>
          {!value ? (
            <>
              <Form contacts={contacts} onSubmit={onContactAdd} />
              <BlockTitle>已添加</BlockTitle>
            </>
          ) : (
            <ContactBar onDelete={onContactDelete(key)}>
              {value}
            </ContactBar>
          )}
        </Fragment>
      ))}
    </>
  );
}
