import React from 'react'
import { useGlobal } from "./context-api"
import Cocktailslist from './cocktails-list'
import "./css.css"
function Home() {
  const d = useGlobal()
  const newValue = React.useRef("");
  const valueChane = () => {
    d.setSearchitem(newValue.current.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault();
  }
  React.useEffect(() => {
    newValue.current.focus()
  }, [])
  return (
    <div className='container-fluid' >
      <div className='row d-flex justify-content-center'>
        <div className='col-8 d-flex justify-content-center'>
          <form onSubmit={handlesubmit}>
            <label><h1>Search Drink </h1></label><br />
            <div className='d-flex justify-content-center' >
              <input ref={newValue} onChange={valueChane} type="text" />
            </div>
          </form>
        </div>
      </div><br />
      <Cocktailslist />
    </div>
  )
}

export default Home