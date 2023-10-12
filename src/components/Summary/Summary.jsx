const Summary = ({ selectedPet }) => {
  return (
    <section className="summary">
      <h2 className="summary__title">Summary</h2>
      {selectedPet && (
        <>
          <div className="summary__container summary__container--name">
            <h3 className="summary__subtitle"> {selectedPet.name}</h3>
            <div className="summary__details">
              <p className="summary__text">
                {`Your pet ${selectedPet.name} is a ${selectedPet.type}!`}{" "}
              </p>
            </div>
          </div>
          <div className="summary__container summary__container--vaccine">
            <h3 className="summary__subtitle">Vaccine History</h3>
            <div className="summary__details">
              {selectedPet.vaccine.map((x) => {
                return (
                  <table key={x.id}>
                    <thead>
                      <tr>
                        <th className="summary__date">{x.date}</th>
                        <th className="summary__type">{x.type}</th>
                      </tr>
                    </thead>
                  </table>
                );
              })}
            </div>
          </div>
          <div className="summary__container summary__container--appointment">
            <h3 className="summary__subtitle"> Appointments</h3>
            <div className="summary__details">
              <p className="summary__text">
                <strong>Next: </strong>
                {selectedPet.appointment}
              </p>
              <p className="summary__text">
                <strong>Last: </strong> {selectedPet.lastAppointment}
              </p>
            </div>
          </div>
          <div className="summary__container summary__container--notes">
            <h3 className="summary__subtitle">Notes</h3>
            <div className="summary__details">
              <p className="summary__text">{selectedPet.note}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Summary;
