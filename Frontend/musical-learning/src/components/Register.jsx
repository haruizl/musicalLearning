import {  useState } from "react";
import axios from "axios";
import DocumentTypesList from './DocumentTypesList';

function Register() {
  
    const [documentNumber, setDocumentNumber] = useState("");
    const [documentType, setDocumentType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/user/save", {
          documentNumber: documentNumber,
          documentType: documentType,
          email: email,
          password: password,
          });
          alert("User Registation Successfully");
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
            <h1>User Registation</h1>
    
    <form>
        <div class="form-group d-flex flex-column">
          <label>Document type</label>
          <select name="documentType" onChange={(event) => {setDocumentType(event.target.value);}}>
            <option value="">Select</option>
            <DocumentTypesList />
          </select>
        </div>
        <div class="form-group">
          <label>Document number</label>
          <input type="text"  class="form-control" id="documentNumber" placeholder="Enter Document Number"
          
          value={documentNumber}
          onChange={(event) => {
            setDocumentNumber(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
     </div>
    );
  }
  
  export default Register;