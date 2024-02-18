const seats = document.querySelectorAll(".seat");
const couponInput = document.getElementById("coupon-input");
const seatContainer = document.getElementById("seat-info");
const couponApplyBtn = document.getElementById("coupon-apply-btn");

let maxCap = 4;
let seatCount = 0;
let price = 0;
let totalSeats = 40;
let selectedSeat = 0;

for (const seat of seats) {
  function seatClicked() {
    // set bg color to seat
    seat.classList.add("bg-[var(--base)]");
    maxCap--;

    // limit user to choose max 4 seats
    if (maxCap < 0) {
      alert("You can only choose 4 seats");
      seat.classList.remove("bg-[var(--base)]");
    } else {
      seatContainer.innerHTML += ``;
    }

    // add seat data to the table
    const seatNumber = seat.id;
    // const seatContainer = document.getElementById('seat-info');
    seatContainer.innerHTML += `<tr>
            <td id = 'seat-number'>${seatNumber}</td>
            <td id = 'seat-class'>Economy</td>
            <td id = 'fare'>550</td>
        </tr>`;

    // show how many seat user has choose
    const totalSeat = document.getElementById("total-seat");
    seatCount++;
    totalSeat.innerText = seatCount;

    // calculate the total price
    const totalPrice = document.getElementById("total-price");
    price += 550;
    totalPrice.innerText = price;

    // set the left seats on the bus info
    const seatLeft = document.getElementById("seat-left");
    totalSeats--;
    seatLeft.innerText = totalSeats;

    selectedSeat++;

    // enable the discount section if user choose 4 seats

    if (selectedSeat == 4) {
      couponApplyBtn.removeAttribute("disabled");
      couponInput.removeAttribute("disabled");
    }

    // if the user input is NEW15, user will get 15%
    // check input

    couponApplyBtn.onclick = function () {
      if (couponInput.value == "NEW15") {
        const discountedPrice = price * 0.15;
        console.log(discountedPrice);
      }
    };
  }

  seat.addEventListener("click", seatClicked);
}
