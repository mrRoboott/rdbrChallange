const WorkmateForm = () => {
    
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
            <select name="" id="" ><option  value="">თიმი</option></select> 
            <select name="" id="" ><option  value="">პოზიცია</option></select>

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