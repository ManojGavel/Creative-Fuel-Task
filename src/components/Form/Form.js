import React, { useEffect, useState } from "react";
import classes from "./form.module.css";
import { useContextReducer } from "../../Context/Context";
import { useFormik } from "formik";
import { FormdataSchema } from "../Schema";
import AddBoxIcon from '@mui/icons-material/AddBox';
export default function Form() {
  const [state, dispatch] = useContextReducer();
  const [testType, setTestType] = useState("");
  // const [testTypeList, setTestTypeList] = useState([
  //   "PHP",
  //   "NODE JS",
  //   "REACT JS",
  // ]);
  const [addTestBtnCliked, setAddTestBtnCliked] = useState(false);
  const [isTestTypeListAdd, setTestTypeListAdd] = useState(false);
  const [warning, setWarning] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const addTestType = (val) => {
    if (state.testTypeList.includes(val.target.value.toUpperCase())) {
      console.log("testTypeList is wrong", state.testTypeList);
      setWarning({
        type: "warning",
        message: "test type is already exist",
      });
      setDisabled(true);
    } else {
      setDisabled(false);
      setTestType(val.target.value.toUpperCase());
    }
  };

  const addTestTypeBtn = (e) => {
    e.preventDefault();
    setTestTypeListAdd((testType) => !testType);
    if (testType.trim() === "") {
      {
        addTestBtnCliked &&
          setWarning({
            type: "warning",
            message: "test type is empty",
          });
      }
    } else {
      setWarning({
        type: "success",
        message: "test type added successfully",
      });
      // setTestTypeList((testTypeList) => [...testTypeList, testType]);
      dispatch({ type: "addTestType", payload: testType });
      setTestType("");
    }
    setAddTestBtnCliked(true);
  };

  const ErrorWarning = () => (
    <div
      className={`alert alert-${warning.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{warning.type}!</strong> {warning.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );

  useEffect(() => {
    if (warning) {
      setTimeout(() => {
        setWarning(false);
        setAddTestBtnCliked(false);
      }, 3000);
      return () => {
        clearTimeout();
      };
    }
  }, [warning]);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        Test_name: "",
        Test_type: "PHP",
        Tester_email: "",
        Tester_phone: "",
        Alternate_mobile_no: "",
      },
      validationSchema: FormdataSchema,
      onSubmit: (values) => {
        dispatch({
          type: "ADD_TABLE_VALUES",
          payload: {
            id: Math.random().toString(36).substr(2, 9),
            ...values,
            date: new Date().toLocaleDateString(),
            lastUpdationDate: "",
          },
        });
        setWarning({
          type: "success",
          message: "Data added successfully",
        });
        values.Test_name = "";
        values.Test_type = "PHP";
        values.Tester_email = "";
        values.Tester_phone = "";
        values.Alternate_mobile_no = "";
      },
    });

  return (
    <div className={` mt-5 ${classes.bg}`}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Php Test Mast</h1>
        <div className={classes.warning}>{warning && <ErrorWarning />}</div>
        <div className={classes.Row}>
          <div className={classes.rowCh}> 
            <label htmlFor="test_name">Test Name *</label>
            <input
              name="Test_name"
              onChange={handleChange}
              value={values.Test_name}
              onBlur={handleBlur}
              type="text"
              id="test_name"
              className={`${classes.input} form-control`}
            />
            {errors.Test_name && touched.Test_name ? (
              <p className={classes.inputError}>{errors.Test_name}</p>
            ) : null}
          </div>
          <div className={classes.rowCh}>
            <label htmlFor="test_type">Test Type</label>
            <div className={classes.testType}>
              <select
                name="Test_type"
                defaultValue="PHP"
                onChange={handleChange}
                onBlur={handleBlur}
                id="test_type"
                className="rounded"
              >
                {state.testTypeList.map((testType, i) => (
                  <option key={i} value={testType}>
                    {" "}
                    {testType}{" "}
                  </option>
                ))}
              </select>
              {isTestTypeListAdd && (
                <input
                  type="text"
                  placeholder="Add test type"
                  onChange={addTestType}
                  value={testType}
                  className={classes.testTypeInput}
                />
              )}
              <div>
                <button
                  onClick={addTestTypeBtn}
                  className={`${classes.testAddBtn} btn btn-light`}
                  disabled={disabled}
                >
                  {" "}
                  Add test type <AddBoxIcon />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* form for add new test type will add here */}
        <div className={classes.Row}>
          <div className={classes.rowCh}>
            <label htmlFor="tester_email">Tester email *</label>
            <input
              name="Tester_email"
              onChange={handleChange}
              onBlur={handleBlur}
              id="tester_email"
              type="email"
              value={values.Tester_email}
              className={`${classes.input} form-control`}
            />
            {errors.Tester_email && touched.Tester_email ? (
              <p className={classes.inputError}>{errors.Tester_email}</p>
            ) : null}
          </div>
          <div className={classes.rowCh}>
            <label htmlFor="tester_phone">Tester phone *</label>
            <input
              name="Tester_phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Tester_phone}
              title="Please enter valid phone no"
              id="tester_phone"
              type="tel"
              className={`${classes.input} form-control`}
            />
            {errors.Tester_phone && touched.Tester_phone ? (
              <p className={classes.inputError}>{errors.Tester_phone}</p>
            ) : null}
          </div>
        </div>
        <div className={classes.Row}>
          <div className={classes.rowCh}>
            <label htmlFor="Alternate_mobile_no">Alternate mobile no</label>
            <input
              name="Alternate_mobile_no"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Alternate_mobile_no}
              type="tel"
              id="Alternate_mobile_no"
              className={`${classes.input} form-control`}
            />
            {errors.Alternate_mobile_no && touched.Alternate_mobile_no ? (
              <p className={classes.inputError}>{errors.Alternate_mobile_no}</p>
            ) : null}
          </div>
        </div>
        <div>
          <button disabled={!errors} className={classes.button}>
            Submmit
          </button>
        </div>
      </form>
    </div>
  );
}
