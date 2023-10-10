import { useState } from "react";
import Header from "../../components/Header/Header";

import more from "../../assets/icons/more.png";
import Summary from "../../components/Summary/Summary";
import { petList } from "../../content";



const Dashboard = () => {
  const [selectedPetInfo, setSelectedPetInfo] = useState(null);

  const handleRowClick = (e, id) => {
    setSelectedPetInfo(id);
  };

  const selectedPet = petList.find((pet) => pet.id === selectedPetInfo);

  return (
    <>
      <Header />
      <section className="dashboard">
        <h1 className="dashboard__title">Dashboard</h1>
        <table className="dashboard__container">
          <thead>
            <tr className="dashboard__row">
              <th className="dashboard__category">Pet</th>
              <th className="dashboard__category">Type</th>
              <th className="dashboard__category">Appointment</th>
              <th className="dashboard__category">More</th>
            </tr>
          </thead>
          <tbody>
            {petList.map((e) => (

              <tr className="dashboard__row" key={e.id}>
                <td className="dashboard__table">{e.name}</td>
                <td className="dashboard__table">{e.type}</td>
                <td className="dashboard__table">{e.appointment}</td>
                <td className="dashboard__table">
                  <img
                    src={more}
                    onClick={(event) => handleRowClick(event, e.id)}
                    className="dashboard__more"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Summary selectedPet={selectedPet} />


      </section>
    </>
  );
};

export default Dashboard;
