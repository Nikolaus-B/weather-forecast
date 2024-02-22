import * as Yup from "yup";
import { Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/cities/citiesSlice";
import {
  ButtonContainer,
  ClearButton,
  FormContainer,
  FormErrorMessage,
  FormField,
  FormSpan,
  Label,
  SaveButton,
} from "./UserForm.styled";
const CitiesSchema = Yup.object().shape({
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  dateStart: Yup.date().required("Required"),
  dateEnd: Yup.date().required("Required"),
});

export const UserForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        city: "",
        dateStart: new Date(),
        dateEnd: new Date(),
      }}
      validationSchema={CitiesSchema}
      onSubmit={(values, actions) => {
        dispatch(
          addCity({
            address: values.city,
            days: [
              { datetime: values.dateStart.toISOString().split("T", 1)[0] },
              { datetime: values.dateEnd.toISOString().split("T", 1)[0] },
            ],
          })
        );
        actions.resetForm();
        closeModal();
      }}
    >
      {() => (
        <FormContainer>
          <Label>
            <span>
              <FormSpan>*</FormSpan> City
            </span>
            <FormField name="city" />
          </Label>
          <FormErrorMessage component={"span"} name="city" />

          <Label>
            <span>
              <FormSpan>*</FormSpan> Start date
            </span>
            <FormField name="dateStart">
              {({ field, form }) => (
                <DatePicker
                  id="dateStart"
                  {...field}
                  selected={field.value}
                  onChange={(val) => form.setFieldValue("dateStart", val)}
                />
              )}
            </FormField>
          </Label>

          <Label>
            <span>
              <FormSpan>*</FormSpan> End date
            </span>
            <FormField name="dateEnd">
              {({ field, form }) => (
                <DatePicker
                  id="dateEnd"
                  {...field}
                  selected={field.value}
                  onChange={(val) => form.setFieldValue("dateEnd", val)}
                />
              )}
            </FormField>
          </Label>
          <ButtonContainer>
            <ClearButton type="reset">Clear</ClearButton>
            <SaveButton type="submit">Save</SaveButton>
          </ButtonContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

UserForm.propTypes;
