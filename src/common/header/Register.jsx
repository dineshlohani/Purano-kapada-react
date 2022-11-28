


const Register = () => {
  return (
   <div className="form">
        <h2>Register</h2>
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
      <div className="input-container">
         <label>Phone number </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
  );
};

export default Register;
