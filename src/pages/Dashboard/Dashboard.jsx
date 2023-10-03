import { useState } from "react";

import Header from "../../components/Header/Header";
import { petList } from "../../content/pet-list";
import { petDetails } from "../../content/pet-details";

const Dashboard = () => {
  const [selectedPetInfo, setSelectedPetInfo] = useState(null);

  const selected = (e) => {
    return (
      <div>
        <p>hi</p>
      </div>
    );
    console.log(e.currentTarget);
  };

  const renderPets = petList.map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.name}</td>
        <td>{e.type}</td>
        <td>{e.appointment}</td>
        <td>
          <img src={e.icon} onClick={selected} className="dashboard__more" />
        </td>
      </tr>
    );
  });
  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <table className="dashboard__container">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Type</th>
              <th>Appointment</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>{renderPets}</tbody>
          {selectedPetInfo && selected}
        </table>
      </section>
    </>
  );
};

export default Dashboard;
