const seatLeft = document.getElementById("seat-left");
let totalSeats = 40;

const seatChoosen = document.getElementById("seat-choosen");
let choosenSeat = 0;

const seatInfo = document.getElementById("seat-info");

const couponInput = document.getElementById("coupon-input");
const couponApplyBtn = document.getElementById("coupon-apply-btn");

const totalPriceEle = document.getElementById("total-price");
let totalPrice = 0;

const discountedPriceEle = document.getElementById("discounted-price");
let discountedPrice = 0;

const grandTotalEle = document.getElementById("grand-total");
let grandTotal = 0;

const phoneNumber = document.getElementById("number");

let maxCapacity = 0;

// click

for (const seat of seats) {
  const seatNumber = seat.innerText;
  seat.onclick = function () {
    //  seat color

    const colorClassCheck = seat.classList.contains("bg-[var(--base)]");
    if (colorClassCheck == false) {
      //  4 seats only
      maxCapacity++;

      if (maxCapacity <= 4) {
        seat.classList.add("bg-[var(--base)]");

        // decrease the total seat no
        totalSeats--;
        seatLeft.innerText = totalSeats;

        // increase choosen seat no
        choosenSeat++;
        seatChoosen.innerText = choosenSeat;

        // add the seat
        seatInfo.innerHTML += `<tr class='${seatNumber} , seat-information'>
                    <td id = 'seat-number'>${seatNumber}</td>
                    <td id = 'seat-class'>Economy</td>
                    <td id = 'fare'>550</td>
                </tr>`;

        // enable/disable the discount section
        if (maxCapacity == 4) {
          couponInput.removeAttribute("disabled");
          couponApplyBtn.removeAttribute("disabled");
        } else {
          couponInput.setAttribute("disabled", "");
          couponApplyBtn.setAttribute("disabled", "");
        }

        // count Total price
        totalPrice += 550;
        totalPriceEle.innerText = totalPrice;

        grandTotalEle.innerText = totalPrice;

        //  click event
        couponApplyBtn.onclick = function () {
          // NEW15
          if (couponInput.value === "NEW15") {
            document
              .getElementById("discount-container")
              .classList.remove("hidden");

            discountedPrice = totalPrice * 0.15;
            discountedPriceEle.innerText = discountedPrice;

            grandTotal = totalPrice - discountedPrice;
            grandTotalEle.innerText = grandTotal;

            // hide the discount coupon
            document
              .getElementById("discount-input-container")
              .classList.add("hidden");
          }

          // couple 20
          else if (couponInput.value === "Couple 20") {
            document
              .getElementById("discount-container")
              .classList.remove("hidden");

            discountedPrice = totalPrice * 0.2;
            discountedPriceEle.innerText = discountedPrice;

            grandTotal = totalPrice - discountedPrice;
            grandTotalEle.innerText = grandTotal;

            // hide the discount coupon
            document
              .getElementById("discount-input-container")
              .classList.add("hidden");
          }

          // error
          else {
            alert("You have put an incorrect coupon");
            couponInput.value = "";
          }
        };

        // next button
        if (maxCapacity > 0) {
          // check the number input
          phoneNumber.onkeyup = function () {
            const phoneNumberValue = phoneNumber.value;

            if (!Number.isNaN(Number(phoneNumberValue))) {
              console.log("hello");
              document.getElementById("nextBtn").removeAttribute("disabled");
            } else {
              document.getElementById("nextBtn").setAttribute("disabled", "");
            }
          };
        }
      } else {
        alert("You can choose 4 seat maximum");
        maxCapacity--;
        console.log(maxCapacity);
      }
    } else {
      seat.classList.remove("bg-[var(--base)]");

      totalSeats++;
      seatLeft.innerText = totalSeats;

      choosenSeat--;
      seatChoosen.innerText = choosenSeat;

      // remove the seat
      console.log(seatInfo);

      const seatsWithClassInTable =
        document.getElementsByClassName("seat-information");
      for (const seatWithClassInTable of seatsWithClassInTable) {
        const checkSeat = seatWithClassInTable.classList.contains(
          `${seatNumber}`
        );

        if (checkSeat == true) {
          seatWithClassInTable.classList.add("hidden");
        }
      }

      //  capacity
      maxCapacity--;
      console.log(maxCapacity);

      // enable/disable the discount
      if (maxCapacity == 4) {
        couponInput.removeAttribute("disabled");
        couponApplyBtn.removeAttribute("disabled");
      } else {
        couponInput.setAttribute("disabled", "");
        couponApplyBtn.setAttribute("disabled", "");
        document.getElementById("nextBtn").setAttribute("disabled", "");

        phoneNumber.value = "";
      }

      //  Total price
      totalPrice -= 550;
      totalPriceEle.innerText = totalPrice;

      grandTotalEle.innerText = totalPrice;
    }
  };
}

function reload() {
  window.location.reload();
}
