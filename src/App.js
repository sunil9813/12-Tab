import "./App.css"
import React, { useState, useEffect } from "react"
import imgLoading from "./image/loading.gif"

const url = "https://course-api.com/react-tabs-project"
function App() {
  const [loading, setLoading] = useState(true)
  const [items, setitems] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async () => {
    const response = await fetch(url)
    const newitems = await response.json()
    setitems(newitems)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <img src={imgLoading} alt='' />
      </div>
    )
  }
  const { company, dates, duties, title } = items[value]

  return (
    <>
      <main>
        <section>
          <div className='items'>
            <div className='button'>
              {items.map((item, index) => (
                <button key={item.id} onClick={() => setValue(index)} className={`btn ${index === value && "active"}`}>
                  {item.company}
                </button>
              ))}
            </div>
            <div className='content'>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p>{dates}</p>
              {duties.map((duty, index) => (
                <div className='desc'>
                  <i class='fa-solid fa-angles-right'></i>
                  <p>{duty}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
