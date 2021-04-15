import React from 'react';
import Box from '../Box';
import MessageBox from '../MessageBox';
import Flex from '../Flex';

export default function HintMessage() {
  return (
    <Box>
      <MessageBox variant="info" my="lg" color="#4F4F4F">
        <Flex borderBottom={1} mb="md">若一直无法收到验证消息</Flex>
        <li>
          检查填写的联系方式是否正确
        </li>
        <li>
          查阅”垃圾邮件“（可能被标记为广告）
        </li>
      </MessageBox>
    </Box>
  );
}
