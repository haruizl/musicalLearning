import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import DocumentTypesList from "./DocumentTypesList";

function Login() {
    const [documentNumber, setDocumentNumber] = useState("");
    const [documentType, setDocumentType] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8085/api/v1/user/login", {
            documentType: documentType,
            documentNumber: documentNumber,
            password: password,
            }).then(({ data }) => {
              if(data.message === "Login Success"){
                navigate('/home');
              }else{
                alert("Incorrect credentials not match");
              }
            });
        }
         catch (err) {
          alert(err);
        }
      
      }
    return (
       <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>
             <div class="row">
             <div class="col-sm-6">
 
            <form>
        <div class="form-group d-flex flex-column">
          <label>Document Type</label>
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
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>
            </div>
            </div>
            </div>
     </div>
    );
  }
  
  export default Login;