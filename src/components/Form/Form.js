import React, { useState } from "react";
import classes from "./form.module.css";
export default function Form() {
  const [testType, setTestType] = useState("");
  const [testName, setTestName] = useState("");
  const [testerEmail, setTesterEmail] = useState("");
  const [testerPhone, setTesterPhone] = useState("");
  const [alternateMobileNo, setAlternateMobileNo] = useState("");
  const [testTypeList, setTestTypeList] = useState([
    "PHP",
    "NODE JS",
    "REACT JS",
  ]);
  const [addTestBtnCliked, setAddTestBtnCliked] = useState(false);
  const [isTestTypeListAdd, setTestTypeListAdd] = useState(false);
  const [warning, setWarning] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedTestType, setSelectedTestType] = useState("");
  
  const isSubmitButtonActive = testerPhone.length===9 && testName.length>3 && testerEmail.includes 

  const alternateMobileNoChangeHandler = (val) => {
    if (val.target.value.length > 10) {
        setAlternateMobileNo(val.target.value);
        } else {
            setWarning({
                type: "warning",
                message: "phone no is wrong",
            });
        }
    };

  const emailChangeHandler = (val) => {
    setTesterEmail(val.target.value);
    if (val.target.value.includes("@") && val.target.value.includes(".com")) {
      setTesterEmail(val.target.value);
    } else {
      setWarning({
        type: "warning",
        message: "email is wrong",
      });
    }
  };

  const addTestType = (val) => {
    if (testTypeList.includes(val.target.value.toUpperCase())) {
      console.log("testTypeList is wrong", testTypeList);
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
      setTestTypeList((testTypeList) => [...testTypeList, testType]);
      setTestType("");
    }
    setAddTestBtnCliked(true);
  };
  const setTesterPhoneNo = (val) => {
    if (val.target.value.length < 10) {
      setTesterPhone(val.target.value);
    } else {
      setWarning({
        type: "warning",
        message: "phone no is wrong",
      });
    }
    console.log(testerPhone)
  };
  React.useEffect(() => {
    // console.log("testType", testType);
    // console.log("testName", testName);
    // console.log("testerEmail", testerEmail);
    // console.log("testerPhone", testerPhone);
    // console.log("alternateMobileNo", alternateMobileNo);
    // console.log("testTypeList", testTypeList);
    // if (testTypeList.includes(testType)) {
    //   console.log("testTypeList", testTypeList);
    // } else {
    //   console.log("testTypeList", testTypeList);
    // }
    // console.log("isSubmitButtonActive" ,isSubmitButtonActive)
    if (warning) {
      setTimeout(() => {
        setWarning(false);
        setAddTestBtnCliked(false);
      }, 3000);
      return () => {
        clearTimeout();
      };
    }
  }, []);

  const ErrorWarning = () => (
    <div className={`${classes.errorWarning}`}>
      <span>{warning.type} !</span>
      <span>{warning.message}</span>
    </div>
  );

  return (
    <div>
      <form className={classes.form}>
        <div className={classes.warning}>{warning && <ErrorWarning />}</div>

        <h1>Form</h1>
        <div className={classes.Row}>
          <div className={classes.rowCh}>
            <label htmlFor="test_name">Test Name *</label>
            <input
              onChange={(val) => {
                setTestName(val.target.value);
              }}
              type="text"
              id="test_name"
              className={classes.input}
            />
          </div>
          <div className={classes.rowCh}>
            <label htmlFor="test_type">Test Type</label>
            <div className={classes.testType}>
              <select
                onChange={(val) => {
                  setSelectedTestType(val.target.value);
                }}
                id="test_type"
              >
                {testTypeList.map((testType, i) => (
                  <option key={i} value={testType}>
                    {" "}
                    {testType}{" "}
                  </option>
                ))}
              </select>
              {isTestTypeListAdd && (
                <input
                  className={classes.addTest}
                  type="text"
                  placeholder="Add test type"
                  onChange={addTestType}
                />
              )}
              <div>
                <button
                  onClick={addTestTypeBtn}
                  className={classes.testAddBtn}
                  disabled={disabled}
                >
                  {" "}
                  Add test type
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
              onChange={emailChangeHandler}
              id="tester_email"
              type="email"
            />
          </div>
          <div className={classes.rowCh}>
            <label htmlFor="tester_phone">Tester phone *</label>
            <input
              onChange={setTesterPhoneNo}
            //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              title="Please enter valid phone no"
            //   maxLength={`10`}
              id="tester_phone"
              type="tel"
            />
          </div>
        </div>
        <div className={classes.Row}>
          <div className={classes.rowCh}>
            <label  htmlFor="Alternate_mobile_no">Alternate mobile no</label>
            <input maxLength={`10`}  onChange={alternateMobileNoChangeHandler} type="tel" />
          </div>
        </div>
        <div>
          <button disabled={!isSubmitButtonActive}  className={classes.button}>Submmit</button>
        </div>
      </form>
    </div>
  );
}
