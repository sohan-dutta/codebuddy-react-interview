const Seats = ({ status, isReserved, onClick, value, seatNo }) => {
  const onPress = v => {
    if (!v?.isReserved) {
      onClick(v);
    }
  };

  return (
    <div
      className={`seat ${status} ${!isReserved && 'seat-select'}`}
      onClick={() => onPress(value)}
    >
      <p className="seat-no-css">{seatNo}</p>
    </div>
  );
};

export default Seats;
