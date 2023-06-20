import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ImageCard from './components/ImageCard'

function App() {
  const [issues, setIssues] = useState([])

  const sendSearch = (search) => {
    fetch(`https://api.github.com/repos/facebook/react/${search}`)
    .then(response => response.json())
    .then((results)=> {
      console.log(results)
      setIssues(results)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetch(`https://api.github.com/repos/facebook/react/issues`)
    .then(response => response.json())
    .then((results )=> {
      console.log(results)
      setIssues(results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <div className = "App">
        <SearchBar handleSearch={sendSearch} />
        <div className = "grid-cards">
          {
            issues.map((issue) => (
              <ImageCard
              id={issue.id}
              title={issue.title}
              key={issue.id}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
