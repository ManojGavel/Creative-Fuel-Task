import React, { useEffect } from "react";
import classes from "./modal.module.css";
import ReactDOM from "react-dom";
import { useContextReducer } from "../../Context/Context";
import { useFormik } from "formik";
import { updateForm } from "../Schema";

const Backdrop = (props) => {
  return <div className={classes.modal} onClick={props.onConfirm} />;
};

const Overlay = () => {
  const [state, dispatch] = useContextReducer();
  const [message, setMessage] = React.useState(null);
  const [modalInfo, setModalOInfo] = React.useState(state.modalValues);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
        ModalTest_Name: modalInfo.Test_name,
        ModalTestType: modalInfo.Test_name,
        ModalTester_email: modalInfo.Tester_email,
        ModalTester_phone: modalInfo.Tester_phone,
        ModalAlternate_mobile_no: modalInfo.Alternate_mobile_no,
      },
      validationSchema: updateForm,
      
        onSubmit: (values) => {
            dispatch({ type: "updateValues", payload: {...values,id:modalInfo.id} });
            setMessage({
                type: "success",
                message: "form submitted successfully",
                })
            console.log(values);
            values.ModalTest_Name = "";
            values.ModalTestType = "PHP";
            values.ModalTester_email = "";
            values.ModalTester_phone = "";
            values.ModalAlternate_mobile_no = "";
        },
        
        });
        console.log(values);

    // const setWarning = (type, message) => {
    //   setMessage({ type, message });
    //   setTimeout(() => {
    //     dispatch({ type: "setModalOpen" });
    //     setMessage(null);
    //   }, 3000);

    // };
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage(null);
                dispatch({ type: "setModalOpen" });
            }, 1500);
            return () => {
                clearTimeout();
            };
        }
    }, [message]);
//   const setUpdatedValues = () => {
//     console.log(modalInfo);
//     dispatch({ type: "updateValues", payload: modalInfo });
//     dispatch({ type: "setModalOpen" });
//   };
  const cancleUpdation = () => {
    dispatch({ type: "setModalOpen" });
  };

  return (
    <div className={`card ${classes.form}`}>
      <h3>Edit</h3>
      <div className={classes.warning}>
        {/* warning section */}
        {message && (
          <div
            className={`alert alert-${message.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{message.type}</strong>{" "}
            {<message className="message">{message.message}</message>}

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className={classes.mainForm}>
        <div className={classes.valParent}>
          <div className={classes.values}>
            <label className="form-label" htmlFor="modalName">
              name
            </label>
            <input
              type="text"
              id="modalName"
              onChange={handleChange}
              name="ModalTest_Name"
              onBlur={handleBlur}
              value={values.ModalTest_Name}
              className={classes.input}
            />
            {errors.ModalTest_Name && touched.ModalTest_Name ? <p className={classes.inputError}>{errors.ModalTest_Name}</p>:null}
          </div>
          <div className={classes.values}>
            <label className="form-label" htmlFor="modalSelect">
              Test type
            </label>
            <select
              onChange={handleChange}
              name="ModalTestType"
              onBlur={handleBlur}
              value={values.ModalTestType}
              className={classes.input}
              id="modalSelect"
            >
              <option value="PHP">PHP</option>
              <option value="NODE JS">NODE JS</option>
              <option value="REACT JS">REACT JS</option>
            </select>
          </div>
        </div>
        <div className={classes.valParent}>
          <div className={classes.values}>
            <label htmlFor="modalEmail" className="form-label">
              email
            </label>
            <input
              type="email"
              name="ModalTester_email"
              value={values.ModalTester_email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={classes.input}
              id="modalEmail"
            />
            {errors.ModalTester_email && touched.ModalTester_email ? <p className={classes.inputError}>{errors.ModalTester_email}</p>:null}
          </div>
          <div className={classes.values}>
            <label htmlFor="modalPhNo" className="form-label">
              Phone number
            </label>
            <input
              className={classes.input}
              onChange={handleChange}
              value={values.ModalTester_phone}
              name="ModalTester_phone"
              onBlur={handleBlur}
              type="tel"
              max={10}
              id="modalPhNo"
            />
            {errors.ModalTester_phone && touched.ModalTester_phone ? <p className={classes.inputError}>{errors.ModalTester_phone}</p>:null}
          </div>
        </div>
        <div className={classes.valParent}>
          <div className={classes.values}>
            <label htmlFor="AlterModalEmail" className="form-label">
              Alternate Mobile Nmber
            </label>
            <input
              onChange={handleChange}
              value={values.ModalAlternate_mobile_no}
              type="tel"
              className={classes.input}
              id="ModalAlternate_mobile_no"
              onBlur={handleBlur}
              name="ModalAlternate_mobile_no"
            />
            {errors.ModalAlternate_mobile_no && touched.ModalAlternate_mobile_no ? <p className={classes.inputError}>{errors.ModalAlternate_mobile_no}</p>:null}
          </div>
        </div>
        <div className={classes.valParent}>
          <button type="submit" className={classes.updateBtn}>
            Update
          </button>
          <button onClick={cancleUpdation} className={classes.updateBtn}>
            Cancle
          </button>

        </div>
      </form>
    </div>
  );
};
export default function Modal() {
  const [state, dispatch] = useContextReducer();
  const clickHandler = () => dispatch({ type: "setModalOpen" });

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={clickHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={clickHandler} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
