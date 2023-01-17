import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return(
    <div>
    <form>
      <h1>Forgot</h1>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <Link to="/login">Login </Link>
    </div>
  )
}