
// must be rakte hobe
const seat = document.getElementById('total-seat');
//const seat_booked = document.getElementById('seat-booked');
//const total_price = document.getElementById('total-price');
const grand_totalPrice = document.getElementById('grand-total')


// get all seat button
const allSeatButton = document.getElementsByClassName('seat');
let count = 0;
const avalable = 40 - count;
let totalprice = 0
for (const seatButon of allSeatButton) {
    //console.log(seatButon);

    seatButon.addEventListener('click', function (event) {

        seatButon.classList.add("bg-green-500")

        if (count <= 3) {
            count = count + 1;
            // appending alliment
            const name = event.target.parentNode.childNodes[1].innerText;
            const category = "Economoy";
            const price = 550;
            const selectedContainer = document.getElementById('book-seat');
    
            const div = document.createElement("div");
            div.classList.add("flex");
            div.classList.add("justify-between");
            div.classList.add("py-3");
            div.classList.add('text-xl')
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            p1.innerText = name;
            p2.innerText = category;
            p3.innerText = price;
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            selectedContainer.appendChild(div);
            //appent element finished
            totalprice = parseInt(totalprice + 550);
            //total price 
            setInnetText("total-price", totalprice);
            setInnetText('seat-booked', count);

            //avalable set
            const avalable = 40 - count;
            seat.innerText = avalable;


        }
        else {
            alert('You Cannot Buy More Than 4 Seats');

        };
        this.disabled = true;
        setInnetText('grand-total', totalprice)

    })
    //seatButon.classList.add('bg-green-500');
};

//apply section

// discount cupoon section ///
document.getElementById('apply').addEventListener('click', function () {
    this.disabled = true;
    const cuponField = document.getElementById('cupun-text').value;
    if (cuponField === "Couple20") {
        discount('grand-total', 20);
        const inputField = document.getElementById('cupun-text');
        inputField.classList.add('hidden');
        // modal re vai  //
        const showModal = document.getElementById('next-btn');
        showModal.addEventListener('click', function () {
            my_modal_5.showModal();
            // console.log("modal ");
        })

    }
    else if (cuponField === "NEW15") {
        discount('grand-total', 15);
        const inputField = document.getElementById('cupun-text');
        inputField.classList.add('hidden')
    }
    else {
        alert("Invalid Cupon Code");
        document.getElementById('cupun-text').value = "";
    }

})


//  functions

function discount(id, n) {
    const grandTotal = document.getElementById(id);
    const grandTotalValue = parseInt(grandTotal.innerText);
    grandTotal.innerText = grandTotalValue - (grandTotalValue * n / 100);
}

function setInnetText(id, value) {
    document.getElementById(id).innerText = value;
}

