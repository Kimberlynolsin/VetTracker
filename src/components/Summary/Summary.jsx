const Summary = ({ selectedPet }) => {
  return (
    <section className="summary">
      <h2 className="summary__title">Summary</h2>
      {selectedPet && (
        <>
          <table className="summary__table">
            <thead>
              <tr>
                <th className="summary__category">Name</th>
                <th className="summary__category">Type</th>
                <th className="summary__category">Upcoming Checkup</th>
                <th className="summary__category">Last Checkup</th>
                <th className="summary__category">Recent Vaccine</th>
                <th className="summary__category">Checkup Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="summary__details">{selectedPet.name}</td>
                <td className="summary__details">{selectedPet.type}</td>
                <td className="summary__details">{selectedPet.appointment}</td>
                <td className="summary__details"> {selectedPet.lastAppointment}</td>
                <td className="summary__details">{selectedPet.vaccine}</td>
                <td className="summary__details">{selectedPet.note}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default Summary;
