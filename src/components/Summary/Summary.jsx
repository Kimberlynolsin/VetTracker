const Summary = ({ selectedPet }) => {
  return (
    <section>
      <h2 className="dashboard__pet__summary">Summary</h2>
      {selectedPet && (
        <>
          <table>
            <thead>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Upcoming Checkup</td>
              <td>Last Checkup</td>
              <td>Recent Vaccine</td>
              <td>Checkup Notes</td>
            </tr>
            </thead>
          </table>
        </>
      )}
      
      {/* <p className="summary__text">Name: {selectedPet.name}</p>
      <p className="summary__text">Type: {selectedPet.type}</p>
      <p className="summary__text">
        Upcoming Checkup: {selectedPet.appointment}
      </p>
      <p className="summary__text">
        Last Checkup: {selectedPet.lastAppointment}
      </p>
      <p className="summary__text">Recent Vaccine: {selectedPet.vaccine}</p>
      <p className="summary__text">Checkup Notes: {selectedPet.note}</p>  */}
    </section>
  );
};

export default Summary;
