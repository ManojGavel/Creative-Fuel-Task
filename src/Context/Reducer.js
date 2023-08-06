const dummyData = [// Example 1
{
  Test_type: "PHP",
  Test_name: "John",
  Tester_email: "john@example.com",
  Tester_phone: "1234567890",
  Alternate_mobile_no: "",
  date: "8/7/2023",
  id: "t9jq8686u",
  lastUpdationDate: ""
}
,
// Example 2
{
  Test_type: "NODE JS",
  Test_name: "Jane",
  Tester_email: "jane@example.com",
  Tester_phone: "0987654321",
  Alternate_mobile_no: "",
  date: "8/7/2023",
  id: "t9jq8686v",
  lastUpdationDate: ""
}
,
// Example 3
{
  Test_type: "REACT JS",
  Test_name: "Bob",
  Tester_email: "bob@example.com",
  Tester_phone: "5555555555",
  Alternate_mobile_no: "",
  date: "8/7/2023",
  id: "t9jq8686w",
  lastUpdationDate: ""
}
];
export const initialState = {
tableValues: [...dummyData],
isModalOpen: false,
modalValues: [],
testTypeList: [
"PHP",
"NODE JS",
"REACT JS",
]
};
export const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TABLE_VALUES":
            return {
                ...state,
                tableValues: [...state.tableValues, action.payload],
            };
        case "setModalOpen":
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                modalValues: action.payload,
            };
        case "updateValues":
            return {
                ...state,
                tableValues: state.tableValues.map((row) => {
                    if (row.id === action.payload.id) {
                        return {
                            ...row,
                            Test_type: action.payload.ModalTestType,
                            Test_name: action.payload.ModalTest_Name,
                            Tester_email: action.payload.ModalTester_email,
                            Tester_phone: action.payload.ModalTester_phone,
                            Alternate_mobile_no: action.payload.ModalAlternate_mobile_no,
                            lastUpdationDate: new Date().toLocaleDateString(),
                        };
                    }
                    return row;
                }),

               
            };
            case "deleteRow":
                return {
                    ...state,
                    tableValues: state.tableValues.filter((row) => row.id !== action.payload),
                };
            case "addTestType":
                return {
                    ...state,
                    testTypeList: [...state.testTypeList, action.payload],
                };
        default:
            return state;
    }
}