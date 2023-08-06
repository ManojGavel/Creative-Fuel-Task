import * as Yup from 'yup';     // import Yup from 'yup';

export const FormdataSchema = Yup.object({
    Test_name: Yup.string().min(3 , 'Too Short!').max(50 , 'Too Long!').required('Required'),
    Tester_email: Yup.string().email('Invalid email format').required('Required'),
    Tester_phone: Yup.string().min(10, "Please enter a valid phone number").required("A phone number is required"),
    Alternate_mobile_no:Yup.string().min(10, "Please enter a valid phone number").required("Mobile number is required").test("not-equal", "Mobile numbers cannot be equal", function (value) {
      return value !== this.parent.Tester_phone;
    })
})
export const updateForm = Yup.object({
    ModalTest_Name: Yup.string().min(3 , 'Too Short!').max(50 , 'Too Long!').required('Required'),
    ModalTester_email: Yup.string().email('Invalid email format').required('Required'),
    ModalTester_phone: Yup.string().min(10, "Please enter a valid phone number").required("A phone number is required"),
    ModalAlternate_mobile_no:Yup.string().min(10, "Please enter a valid phone number").required("Mobile number is required").test("not-equal", "Mobile numbers cannot be equal", function (value) {
      return value !== this.parent.Tester_phone;
    })
})