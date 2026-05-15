import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignup = async () => {

    try {

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      console.log(result)

      alert("Signup successful!")

    } catch (error) {

      console.error("Error:", error)

      alert("Something went wrong")
    }
  }

  return (
    <>
      <section id="center">

        <h1>Signup Form</h1>

        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <br /><br />

        <button onClick={handleSignup}>
          Signup
        </button> 

      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App