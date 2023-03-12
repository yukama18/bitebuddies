// import PropTypes from 'prop-types'
import { useState } from "react";
// import Axios from "axios";

const CreateAccount = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className="header">
      <img src="bitebuddieslogo.png" alt="bitebuddies logo" width="100" />
      <h1>bitebuddies</h1>
    </div>

    <div className="menu">
      <button type="button">about us</button>
      <button type="button">temp 1</button>
      <button type="button">temp 2</button>
      <button type="button">create an account/login</button>
    </div>

    <br />

    <div className="account-info">
      <p>register here!!!!</p>
      <label>first name:</label>
      <input
        type="text"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />

      <label>last name:</label>
      <input
        type="text"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <label>email:</label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <label>password:</label>
      <input
        type="text"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      {/* <p>confirm password:</p>
      <input type="text" /> */}
    </div>
    </>
  )
}

// CreateAccount.defaultProps = {
//   name: 'foodie'
// }

// CreateAccount.propTypes = {
//   name: PropTypes.string
// }

export default CreateAccount
