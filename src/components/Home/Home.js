import React, { useEffect } from 'react'
import Form from '../Form/Form'
import DataTable from '../Table/DataTable'
import Modal from '../Modal/Modal'
import { useContextReducer } from '../../Context/Context';

export default function Home() {
  const [state, dispatch] = useContextReducer();
  // useEffect(() => {
  //   // const data = localStorage.getItem("tableValues");
  //   // if (data) {
  //   //   dispatch({ type: "ADD_TABLE_VALUES", payload: JSON.parse(data) });
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   // localStorage.setItem("tableValues", JSON.stringify(state.tableValues));
  // }, [state.tableValues]);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
    { state.isModalOpen && <Modal />}
    {/* <Modal /> */}
      <Form />
      <DataTable />
    </div>
  )
}
