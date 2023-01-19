import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Seats from './Seats';
import { SuccessToast, ErrorToast } from './toast';

const API_URL = 'https://codebuddy.review';
const Home = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [rowNo, setRowNo] = useState(null);

  // Book seats
  const onSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedSeats?.map(v => v?.id)),
    };
    fetch(`${API_URL}/submit`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data?.errorType) {
          ErrorToast('Server Error');
        } else {
          SuccessToast('Seat booked successfully');
        }
      })
      .catch(() => {
        ErrorToast('Server Error');
      });
  };

  // Check prime number
  const isPrime = num => {
    let flag = true;
    for (let i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }

    return flag;
  };

  // Check reserve if prime number
  const checkReserve = arr => {
    if (arr) {
      const res = arr?.map(seat => ({
        ...seat,
        seats: seat?.seats?.map(item => ({
          ...item,
          isReserved: item?.isReserved ? item?.isReserved : isPrime(item?.seatNumber),
        })),
      }));
      setSeats(res);
    }
  };

  // Fetch seats
  const fetchSeats = num => {
    fetch(`${API_URL}/seats?count=${num}`)
      .then(res => res.json())
      .then(json => {
        checkReserve(json?.data?.seats);
        setSelectedSeats([]);
      });
  };

  // select seats for booking
  const onSeatClicked = item => {
    if (selectedSeats?.length + 1 > 5 && !selectedSeats.some(e => e.id === item?.id)) {
      ErrorToast('You can select maximum 5 seats');
    } else if (selectedSeats.some(e => e.id === item?.id)) {
      setSelectedSeats(selectedSeats?.filter(v => v?.id !== item?.id));
    } else {
      setSelectedSeats([...selectedSeats, { ...item }]);
    }
  };

  // Calculate price
  const totalPrice = () => {
    let total = 0;
    for (const v of selectedSeats) {
      total += (v?.row + 1) * 10 + 20;
    }

    return total;
  };

  // Check row number >=3 & <=10
  const checkAvailability = () => {
    if (rowNo >= 3 && rowNo <= 10) {
      fetchSeats(rowNo);
    } else {
      ErrorToast('Row number should be greater than equal to 3 and less than equal to 10');
    }
  };

  return (
    <div className="main container">
      <div className="p-5 mb-5 mt-5 text-center">
        <Form className="form-css">
          <Form.Control
            value={rowNo}
            type="number"
            placeholder="Number of rows"
            onChange={e => setRowNo(e?.target?.value)}
          />
          <Button className="submit-btn" onClick={() => checkAvailability()} variant="primary">
            Submit
          </Button>
        </Form>
        <ul className="seat-label-line">
          <li>
            <div className="seat-label" />
            <small>Available</small>
          </li>
          <li>
            <div className="seat-label selected" />
            <small>Selected</small>
          </li>
          <li>
            <div className="seat-label reserved" />
            <small>Reserved</small>
          </li>
        </ul>
        {seats?.map(seat => (
          <div className="row" key={seat?.id}>
            {seat?.seats?.map(item => (
              <Seats
                value={item}
                isReserved={item?.isReserved}
                key={item?.id}
                seatNo={`${item?.row + 1}:${item?.seatNumber}`}
                status={
                  item?.isReserved
                    ? 'reserved'
                    : selectedSeats.some(e => e.id === item?.id)
                    ? 'selected'
                    : ''
                }
                onClick={() => onSeatClicked(item)}
              />
            ))}
          </div>
        ))}
        <h3 className="screen-here">Screen Here</h3>
        <p className="price">
          Selected {selectedSeats?.length} seats and the total price is ${totalPrice()}
        </p>
        <div>
          <Button disabled={!(selectedSeats?.length > 0)} onClick={onSubmit}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
