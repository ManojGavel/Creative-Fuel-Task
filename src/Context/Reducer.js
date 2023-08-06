export const initialState = {
tableValues: [],
isModalOpen: false,
modalValues: [],
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
        default:
            return state;
    }
}