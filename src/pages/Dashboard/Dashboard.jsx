import Header from "../../components/Header/Header";
import { petList } from "../../content/pet-list";

const Dashboard = () => {
  const renderPets = petList.map((e) => {
    return (
      <>
        <tr key={e.id}>
          <td>{e.name}</td>
          <td>{e.type}</td>
          <td>{e.appointment}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <table>
          <tr>
            <th>Pet</th>
            <th>Type</th>
            <th>Next Appointment</th>
          </tr>
          {renderPets}
        </table>
      </section>
    </>
  );
};

export default Dashboard;
