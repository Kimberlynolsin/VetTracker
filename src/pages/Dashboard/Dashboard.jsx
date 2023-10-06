import { useState } from "react";
import Header from "../../components/Header/Header";
import { petList } from "../../content";
import more from "../../assets/icons/more.png";

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
            <tr>
              <th>Pet</th>
              <th>Type</th>
              <th>Appointment</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {petList.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.type}</td>
                <td>{e.appointment}</td>
                <td>
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
        <div className="dashboard__pet__info">
          <h2 className="dashboard__pet__summary">Summary</h2>
          {selectedPet && (
            <>
              <p className="dashboard__pet__text">Name: {selectedPet.name}</p>
              <p className="dashboard__pet__text">Type: {selectedPet.type}</p>
              <p className="dashboard__pet__text">
                Upcoming Checkup: {selectedPet.appointment}
              </p>
              <p className="dashboard__pet__text">
                Last Checkup: {selectedPet.lastAppointment}
              </p>
              <p className="dashboard__pet__text">
                Recent Vaccine: {selectedPet.vaccine}
              </p>
              <p className="dashboard__pet__text">
                Checkup Notes: {selectedPet.note}
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
