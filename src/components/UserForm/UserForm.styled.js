import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;
  padding: 20px 30px 0px 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)``;

export const FormErrorMessage = styled(ErrorMessage)`
  color: red;
`;
export const FormSpan = styled.span`
  color: red;
`;

export const ButtonContainer = styled.div`
  margin-top: auto;
`;

export const ClearButton = styled.button``;

export const SaveButton = styled.button``;
