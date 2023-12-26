import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieSeats = () => {
  const restrictedChars = ["e", ".", "-", "+"];
  const [rows, setRows] = useState(3);
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchSeats(3);
  }, []);

  useEffect(() => {
    if (selectedSeats == null) return;
    let price = 0;
    let arr = Object.keys(selectedSeats);
    arr.forEach((e) => {
      price += (selectedSeats[e].row + 1) * 10 + 20;
    });
    setTotalPrice(price);
  }, [selectedSeats]);

  const fetchSeats = async (num) => {
    if (isNaN(num) || num < 3 || num > 10) {
      toast.error("Invalid number/out of range.");
      return;
    }
    num = Number(num);
    setRows(num);
    setSelectedSeats({});
    let resp = await fetch(`https://codebuddy.review/seats?count=${num}`);
    resp.json().then(
      (res) => {
        console.log(res.data);
        setSeats(res.data);
      },
      (err) => {
        console.error("SEATS LIST FETCH ERROR:", err);
      },
    );
  };

  const selectSeat = (seat) => {
    let tmp = selectedSeats ? { ...selectedSeats } : {};
    if (Object.keys(tmp).length >= 5) {
      toast.error("Maximum 5 seats can be selected");
      return;
    }
    if (tmp[seat.seatNumber]) {
      delete tmp[seat.seatNumber];
    } else {
      tmp[seat.seatNumber] = { ...seat };
    }
    setSelectedSeats(tmp);
  };

  const bookSeats = async () => {
    if (!totalPrice) return;
    let arr = Object.values(selectedSeats).map((seat) => seat.id);
    const resp = await fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(arr),
    });
    resp.json().then(
      () => {
        toast.success("Seats have been booked!");
      },
      (err) => {
        console.err("POST API SEND ERROR:", err);
      },
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mr-8">Rows:</div>
        {/* <div className="movie-rownum-container">
          <div
            className={"cursor-pointer p-4" + (rows > 3 ? "" : " elem-disabled")}
            onClick={() => updateRowCount(rows - 1)}
          >
            -
          </div>
          <div className="py-3">{rows}</div>
          <div
            className={"cursor-pointer p-4" + (rows < 10 ? "" : " elem-disabled")}
            onClick={() => updateRowCount(rows + 1)}
          >
            +
          </div>
        </div> */}
        <div className="movie-rownum-container">
          <button
            data-action="decrement"
            className={
              " h-full w-8 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700" +
              (rows > 3 ? "" : " elem-disabled")
            }
            onClick={() => setRows(rows - 1)}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="text-md md:text-basecursor-default flex w-full items-center bg-gray-300 text-center font-semibold text-gray-700  outline-none outline-none hover:text-black focus:text-black  focus:outline-none"
            value={rows}
            onKeyDown={(e) => {
              if (restrictedChars.includes(e.key)) e.preventDefault();
            }}
            onChange={(e) => setRows(e.target.value)}
          ></input>
          <button
            data-action="increment"
            className={
              "h-full w-8 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700" +
              (rows < 10 ? "" : " elem-disabled")
            }
            onClick={() => setRows(rows + 1)}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
        <button
          className="ml-8 rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700"
          onClick={() => fetchSeats(rows)}
        >
          Submit
        </button>
      </div>
      <div className="movie-seats-table">
        {seats.map((seatArr, i) => (
          <div key={i} className="seat-row">
            <div>Row {seats.length - i}</div>
            <div>
              {seatArr.seats.map((seat, j) => (
                <div
                  key={1000 * i + j}
                  className={
                    "seat" +
                    (seat.isReserved ? " reserved" : "") +
                    (selectedSeats && selectedSeats[seat.seatNumber] ? " selected" : "")
                  }
                  onClick={() => selectSeat(seat)}
                >
                  {seat.seatNumber}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="seat-legend">
          <div>Legend:</div>
          <div></div>
          <div>Seats Reserved</div>
          <div></div>
          <div>Seats Selected</div>
          <div></div>
          <div>Seats Not Selected</div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <div>Total cost of seats: ${totalPrice}</div>
          <button
            className={
              "ml-5 rounded bg-blue-500 px-4 py-1 text-white" + (totalPrice ? "" : " elem-disabled")
            }
            onClick={() => bookSeats()}
          >
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MovieSeats;
