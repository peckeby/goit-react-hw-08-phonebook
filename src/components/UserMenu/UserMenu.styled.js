import { AddContactBtn } from 'components/ContactForm/ContactForm.styled';
import styled from 'styled-components';

export const MenuDiv = styled.div`
  width: 290px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px auto auto auto;
  border: 2px solid #7a5770;
  border-radius: 14px;
  padding: 20px;
`;

export const MenuEmail = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const LogOutBtn = styled(AddContactBtn)`
  width: 90px;
  padding: 10px;
`;
