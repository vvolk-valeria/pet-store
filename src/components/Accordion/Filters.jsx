import { useState } from "react";
// import { useDispatch } from "react-redux";
 import { useNavigate } from "react-router-dom";
//import { useSelector } from 'react-redux';
import {
  CheckboxIcon,
} from "../../icons/icons";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import css from "./AuthForm.module.scss";
import { ErrorMessage, Form, Formik, Field } from "formik";
import { schemaSignUp } from "../../helpers/schemes";
//import { register } from '../../redux/auth/operations';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  policy: false,
  remember: false,
};

const Filters = () => {
   

//  const [passwordShow, setPasswordShow] = useState(false);



  const handleSubmit = async (formData, { resetForm }) => {
    console.log("formData", formData);

    // const newUser = {
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   email: formData.email,
    //   password: formData.password,
    //   policy: formData.policy,
    //   remember: formData.remember,
    // };
    // console.log("newUser", newUser);
    // resetForm();
    // // dispatch(addNewUser(newUser));
    // onClose();
    // navigate('/user/account');
    return;
  };

  return (
    <>
      <Formik
        // validationSchema={schemaSignUp}
       // initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props) => (
          
        <Form className={css.form}>

             
       
              <label className={css.checkbox}>
                {props.values.policy ? (
                  <div className={css.checkbox__icon_true}>
                    <CheckboxIcon />
                  </div>
                ) : (
                  <div className={css.checkbox__icon_false}>
                    <CheckboxIcon />
                  </div>
                )}

                <Field
                  className={css.checkbox__field}
                  type="checkbox"
                  name="policy"
                  id="policy"
                  required
                />

                <span className={css.checkbox__text}>
                  I agree to the processing of my data.
                </span>
              </label>


            <button type="submit" className={css.button}>
             Ok
            </button>
          

          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;