

//  const seata = document.getElementById('A1');
//  console.log(seata);

// id diye fanction add kora


// seat left 40 er teke koyta ace

//      const seat_number = parseInt(seat);
//      console.log(parseInt(seat));

//      //seat bikri hoice 















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

    seatButon.addEventListener('click', function (e) {
        
        // total seat bokking
        //4 ter besi seat kata jabe na
        // const tergetText = e.target.parentNode.childNodes[1].innerText ;
        // console.log(tergetText);

        if (count <= 3) {
            count = count + 1;
            // appending alliment
            
            //appent element finished
            totalprice = totalprice + 550;
            //total price 
            setInnetText("total-price", totalprice);
            setInnetText('seat-booked', count);

            //avalable set
            const avalable = 40 - count;
            seat.innerText = avalable;

            seatButon.disabled = true;
            seatButon.classList.add('bg-green-500')
        }
        else {
            alert('4 is enoug');

        };





    });
    // const placeName = seatButon.terget.parentNode;
    // console.log(placeName);


    }


function setInnetText(id, value) {
    document.getElementById(id).innerText = value;
}

