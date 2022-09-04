import { useState, useEffect } from "react";
const WorkmateForm = () => {

const [teams, setTeams] = useState(null);
const [positions, setPositions] = useState(null);
const [filteredPositions, setFilteredPositions] = useState(null);

    useEffect(()=>{

    // fetching teams
      const teamsApi = async ()=>{
        const res = await fetch('https://pcfy.redberryinternship.ge/api/teams');
        const teams = await res.json();
        setTeams(teams.data);
        // console.log(teams.data);
      }
      teamsApi();

   // fetching positions
  const positionsApi = async ()=>{
    const resPositions = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const positions = await resPositions.json();
    setPositions(positions.data);
    // console.log('positions: ',positions.data);
  }
  positionsApi(); 

    }, [])

    const handleChange = (event)=>{
        // console.log(event.target.value);
        setFilteredPositions( positions.filter((position) =>  position.team_id == event.target.value ) ); 
        // positions.map((position)=>console.log(position));
      }

    return ( 
        <form className="workmate-form">
            <div className="form-element">
                <div className="names-block">
                    <label htmlFor="firstname">სახელი</label>
                    <input type="text" id="firstname" placeholder="გრიშა"/>
                    <span className="hint">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>

                <div className="names-block lastname">
                    <label htmlFor="lastname">გვარი</label>
                    <input type="text" id="" placeholder="ბაგრატიონი"/>
                    <span className="hint">მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>
            </div>

            <select name="" id="" onChange={ (event)=>{handleChange(event)} }>
                <option  value="" disabled selected hidden>თიმი</option>
                {/* displaying teams from api */}
                {teams && teams.map((team)=>(
                    <option key={team.id} value={team.id}>{team.name}</option>
                ))}
                </select> 

            <select name="" id="" >
                <option  value="" disabled selected hidden>პოზიცია</option>
                {/* displaying fillteredPositions */}
                {filteredPositions && filteredPositions.map((position)=>(
                    <option key={position.id} value={position.id}>{position.name}</option>
                ))}
                </select>

            <div className="form-element mail">
                <label htmlFor="email" >მეილი</label>
                <input type="email" id="email" placeholder="grish666@redberry.ge" />
                <span className="hint">უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>

            <div className="form-element telephone">
                <label htmlFor="telephone" >ტელეფონის ნომერი</label>
                <input type="text" id="telephone" placeholder="+995 598 00 07 01" />
                <span className="hint">უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>

            <div className="btn-container">
            <button id="nextbtn">შემდეგი</button>
            </div>
        </form>
     );
}
 
export default WorkmateForm;