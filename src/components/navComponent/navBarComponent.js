import React, {useState} from 'react';
import './navBarStyle.css'
import {Autocomplete, TextField} from "@mui/material";
import Login from '../../modal/login_modal/login'

const NavBarComponent = (props) => {

    const [AuthorizationVisible, setAuthorizationVisible] = useState(false)
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);



    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div className="header">
           <div className="container">
               <div className="title">Online Cinema</div>
               <div className="navSearch">
                   <Autocomplete
                       freeSolo
                       id="custom-autocomplete"
                       disableClearable
                       sx={{width: 550, background:"white", borderRadius:1 }}
                       options={top100Films.map((option) => option.title)}
                       renderInput={(params) => (
                           <TextField
                               value={searchValue}
                               onChange={handleSearchInputChanges}
                               {...params}
                               placeholder='Search'
                               InputProps={{
                                   ...params.InputProps,
                                   type: 'search',
                               }}
                           />
                       )}
                   />
                   <input onClick={callSearchFunction} type="submit" value="SEARCH" className="searchBTN" />
               </div>
               <div className="nav">
                   <a className="navA">Home</a>
                   <a className="navA">Catalog</a>
                   <a className="navA">About Us</a>
                   <button className="navA" onClick={()=> setAuthorizationVisible(true)}>Login</button>
               </div>
           </div>
            <Login show={AuthorizationVisible} onHide={() => setAuthorizationVisible(false)} />
        </div>
    );
};


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];
export default NavBarComponent;