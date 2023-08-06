import Form from '../Form/Form'

export default function Home() {
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

  return (
    <div>
      <Form />
    </div>
  )
}
