const Seats = props => {
  const { status, isReserved, seatNo } = props;

  return (
    <div {...props} className={`seat ${status} ${!isReserved && 'seat-select'}`}>
      <p className="seat-no-css">{seatNo}</p>
    </div>
  );
};

export default Seats;
