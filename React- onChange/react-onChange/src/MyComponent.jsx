import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState(" ");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange() {setName(event.target.value);}
    function handleQuantityChange() {setQuantity(event.target.value);}
    function handleCommentChange() {setComment(event.target.value);}
    function handlePaymentChange() {setPayment(event.target.value);}
    function handleShippingChange() {setShipping(event.target.value);}

    return (

        <div>
            <input value={name} onChange={handleNameChange}/>
            <p> Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p> Quantity: {quantity}</p>

            <textarea value={comment}
                      onChange={handleCommentChange}
                      name="comment"
                      placeholder={"Enter Delivery Details"}
            />
            <p> Delivery Instructions : <br/> {comment} </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value={""}>Select Option..</option>
                <option value={"Cash"}>Cash</option>
                <option value={"Debit Card"}>Debit Card</option>
                <option value={"Credit Card"}>Credit Card</option>
                <option value={"Gift Card"}>Gift Card</option>
            </select>
            <p> Payment: {payment}</p>

            <label>
                <input value={"Pick Up"}
                       checked={shipping === "Pick Up"}
                       onChange={handleShippingChange}
                       type="radio"/>
                Pick-Up
            </label>

            <label>
                <input value={"Delivery"}
                       checked={shipping === "Delivery"}
                       onChange={handleShippingChange}
                       type="radio"/>
                Delivery
            </label>

            <p> Shipping: {shipping}</p>

        </div>
    );
}

export default MyComponent;