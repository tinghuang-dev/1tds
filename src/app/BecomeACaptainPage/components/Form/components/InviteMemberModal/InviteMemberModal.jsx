import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import ContactContent from './components/ContactContent';
import LinkContent from './components/LinkContent';

const CallToAction = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 30px;
`;

const LinkWrapper = styled.div`
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
`;

const VIEW_SHARE_BY = {
  LINK: 'LINK',
  CONTACT: 'CONTACT',
};

export default function InviteMemberModal({ onClose }) {
  const [currentView, setCurrentView] = useState(VIEW_SHARE_BY.CONTACT);

  const [contacts, setContacts] = useState([]);

  const handleContactAdd = (contact) => {
    setContacts((prevState) => {
      const contactArray = [...prevState];
      contactArray.push(contact);

      return contactArray;
    });
  };

  const handleContactDelete = (target) => (event) => {
    event.preventDefault();

    const newContactArray = contacts.filter((contact) => contact !== target);
    setContacts(newContactArray);
  };

  return (
    <Modal title="邀请团员" onClose={onClose}>
      {currentView === VIEW_SHARE_BY.CONTACT && (
        <>
          <ContactContent
            contacts={contacts}
            onContactAdd={handleContactAdd}
            onContactDelete={handleContactDelete}
          />
          <LinkWrapper>
            通过
            {' '}
            <Button variant="naked" onClick={() => setCurrentView(VIEW_SHARE_BY.LINK)}>
              链接或图片
            </Button>
            {' '}
            分享
          </LinkWrapper>
        </>
      )}

      {currentView === VIEW_SHARE_BY.LINK && (
        <>
          <LinkContent />
          <LinkWrapper>
            通过
            {' '}
            <Button variant="naked" onClick={() => setCurrentView(VIEW_SHARE_BY.CONTACT)}>
              联系方式
            </Button>
            {' '}
            邀请团员
          </LinkWrapper>
        </>
      )}

      <CallToAction>
        <Button>
          完成注册
        </Button>
      </CallToAction>
    </Modal>
  );
}
