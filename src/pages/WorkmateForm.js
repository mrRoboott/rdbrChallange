const WorkmateForm = () => {
    
    return ( 
        <div className="form-container workmate">
            <form>

            <label>სახელი</label>
            <input type="text" name="" id="" placeholder="გრიშა"/>
            <p></p>
            
            <label>გვარი</label>
            <input type="text" name="" id="" placeholder="ბაგრატიონი"/>

            <select name="" id=""><option value="">თიმი</option></select>

            <select name="" id=""><option value="">პოზიცია</option></select>

            <label>მეილი</label>
            <input type="text" name="" id="" placeholder="grish666@redberry.ge"/>

            <label>ტელეფონის ნომერი</label>
            <input type="text" name="" id="" placeholder="+995 598 00 07 01"/>

            </form>
        </div>
     );
}
 
export default WorkmateForm;