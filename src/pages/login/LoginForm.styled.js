import styled from 'styled-components';

export const Form = styled.form`
  width: 290px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px auto auto auto;
  border: 2px solid #7a5770;
  border-radius: 14px;
  padding: 100px 20px;
`;

export const Label = styled.label`
  margin-bottom: 20px;
  align-self: flex-start;
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-left: 10px;
  border: 0;
  border-bottom: 2px solid #7a5770;
  color: blueviolet;
`;

export const InfoLogin = styled.h2`
  text-align: center;
`;
