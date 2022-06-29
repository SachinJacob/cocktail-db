import React from 'react'
import { useGlobal } from "./context-api"
import Cartitem from './Cartitem';
function Cart() {
  const value = useGlobal()
  const [loadingnew, setLoadingnew] = React.useState(true);
  if (value.addtocart.length === 0) {
    return (
      <div>
        <br />
        <div className='d-flex justify-content-center'><h1>YOUR BAG</h1></div>
        <div className='d-flex justify-content-center'><h2>Your cart is empty!</h2></div>
      </div>
    )
  }
  return (
    <div>
      <div id='card-text'><br />
        <div className='d-flex justify-content-center'><h1>YOUR BAG</h1></div>
        <div className='container' id='cart'><br />
          <div className='row'>
            {
              value.addtocart.map((item) => {
                return (
                  <Cartitem key={item} item={item} setLoadingnew={setLoadingnew}/>
                )
              })}
            <hr />
          </div>
          {!loadingnew &&  <div className='row d-flex justify-content-evenly'>
            <div className='col-4 d-flex justify-content-center'>
              <h2>TOTAL : </h2>
            </div>
            <div className='col-5 d-flex justify-content-center'>
              <h2>${ }</h2>
            </div>
          </div>}
          
        </div><br />
        {!loadingnew && <div className='d-flex justify-content-center'>
          <button type="button" className="btn btn-outline-danger" onClick={() => value.setAddtocart([])}>CLEAR BAG</button>
        </div>}
        
        <br />
      </div>

    </div>
  )
}

export default Cart