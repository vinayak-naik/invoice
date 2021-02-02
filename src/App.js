import "./App.css";
import Card from "./components/Card";
import Head from "./components/Head";

function App() {
  return (
    <>
      <Head />
      <Card percent={"40"} progress={'In Progress'} dueDate={'Next Milestone Date is 20th Dec'} rupees={'$6000'} payment={'Due'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
      <Card percent={"65"} progress={'In Progress'} dueDate={'Next Payment Due on 20th Dec'} rupees={'$4000'} payment={'Due'} total={'Recuring'} paid={'Monthly Paid : $10,000'}/>
      <Card percent={"100"} progress={'Completed'} rupees={'$10,000'} payment={'Paid'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
      <Card percent={"40"} progress={'In Progress'} dueDate={'Next Milestone Date is 20th Dec'} rupees={'$6000'} payment={'Due'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
      <Card percent={"100"} progress={'Completed'} rupees={'$10,000'} payment={'Paid'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
      <Card percent={"65"} progress={'In Progress'} dueDate={'Next Payment Due on 20th Dec'} rupees={'$4000'} payment={'Due'} total={'Recuring'} paid={'Monthly Paid : $10,000'}/>
      <Card percent={"100"} progress={'Completed'} rupees={'$10,000'} payment={'Paid'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
      <Card percent={"100"} progress={'Completed'} rupees={'$10,000'} payment={'Paid'} total={'Total Cost : $10,000'} paid={'Total Paid : $2,000'}/>
    </>
  );
}

export default App;
