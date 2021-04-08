import React, { useState } from 'react';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import ContactContent from './components/ContactContent';
import LinkContent from './components/LinkContent';
import Box from '../../../../../../components/Box';
import inviteMembers from '../../../../../../apis/auth/inviteMembers';
import useMessage from '../../../../../../hooks/useMessage';

const VIEW_SHARE_BY = {
  LINK: 'LINK',
  CONTACT: 'CONTACT',
};

export default function InviteMemberModal({ onClose }) {
  const [currentView, setCurrentView] = useState(VIEW_SHARE_BY.CONTACT);

  const [contacts, setContacts] = useState([]);

  const [response, setResponse] = useState();

  const [touched, setTouched] = useState(false);

  const message = useMessage();

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

  const handleClick = () => {
    setResponse();
    setTouched(true);

    inviteMembers(contacts)
      .then(setResponse)
      .then(() => {
        onClose();
        message.success('邮件发送成功!');
      })
      .catch(setResponse);
  };

  return (
    <Modal title="邀请团员" onClose={onClose} size="default">
      <Box fontSize="lg" textAlign="center">
        可在任一时间/页面邀请，
        <Button variant="link" onClick={onClose}>点击跳过</Button>
        {' '}
        该步骤
      </Box>

      {currentView === VIEW_SHARE_BY.CONTACT && (
        <>
          <ContactContent
            contacts={contacts}
            onContactAdd={handleContactAdd}
            onContactDelete={handleContactDelete}
          />
          <Box fontSize="lg" mt="lg" textAlign="center">
            通过
            {' '}
            <Button variant="link" onClick={() => setCurrentView(VIEW_SHARE_BY.LINK)}>
              链接或图片
            </Button>
            {' '}
            分享
          </Box>
        </>
      )}

      {currentView === VIEW_SHARE_BY.LINK && (
        <>
          <LinkContent />
          <Box fontSize="lg" mt="lg" textAlign="center">
            通过
            {' '}
            <Button variant="link" onClick={() => setCurrentView(VIEW_SHARE_BY.CONTACT)}>
              联系方式
            </Button>
            {' '}
            邀请团员
          </Box>
        </>
      )}

      <Box textAlign="center" mt="lg">
        <Button
          loading={!response && touched}
          onClick={handleClick}
        >
          完成邀请
        </Button>
      </Box>
    </Modal>
  );
}
