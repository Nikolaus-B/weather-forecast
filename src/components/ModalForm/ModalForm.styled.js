import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 2px solid #f3f4f8;
`;

export const ModalText = styled.p`
  font-weight: 500;
  font-size: medium;
`;

export const CloseBtn = styled.button`
  font-weight: 300;
  font-size: large;
  border: none;
  background-color: transparent;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #93abae;
  }
`;
