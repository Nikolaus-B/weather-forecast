import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/cities/citiesSlice";
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
        <Form>
          <label>
            <span>*</span> City
            <Field name="city" />
          </label>
          <ErrorMessage component={"span"} name="city" />

          <Field name="dateStart">
            {({ field, form }) => (
              <DatePicker
                id="dateStart"
                {...field}
                selected={field.value}
                onChange={(val) => form.setFieldValue("dateStart", val)}
              />
            )}
          </Field>

          <Field name="dateEnd">
            {({ field, form }) => (
              <DatePicker
                id="dateEnd"
                {...field}
                selected={field.value}
                onChange={(val) => form.setFieldValue("dateEnd", val)}
              />
            )}
          </Field>

          <button type="reset">Clear</button>
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

UserForm.propTypes;
