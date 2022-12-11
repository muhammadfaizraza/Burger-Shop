import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs,Tooltip,ArcElement,Legend } from "chart.js";
import Loader from '../layout/Loader'


ChartJs.register(Tooltip,ArcElement,Legend)

const Box = ({ title, value }) => (
  <div>
    <h3>{value} </h3>
    <p> {title} </p>
  </div>
);

const Dashboard = () => {
const loading =true

  const data = {
    labels:["preparing","shipped","Delivered"],
    datasets:[
      {
      label: "# of Orders",
      data: [2, 3, 4],
      backgroundColor: [
        "rgba(159,63,176,0.1)",
        "rgba(78,63,176,0.2)",
        "rgba(156,0,60,0.3)",
      ],
      borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],

    }]
    
  };

  return (
    <section className="dashboard">
{
  loading == false ? <>      <main>
  <article>
    <Box title="Users" value={213} />
    <Box title="Orders" value={2113} />
    <Box title="Income" value={23} />
  </article>
  <section>
    <div>
      <Link to="/admin/orders">View Order</Link>
      <Link to="/admin/users">View Users</Link>
    </div>

    <aside>
      <Doughnut data={data} />
    </aside>
  </section>
</main>
</>:<Loader/>
}
    </section>
  );
};

export default Dashboard;
