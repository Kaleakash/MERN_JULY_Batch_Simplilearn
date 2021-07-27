import ProjectDetails from "./ProjectDetails";
function EmployeeDetails() {
    const id=100;
    var fname="Ajay";
    let age = 21;
    return(
        <div>
            <h2>This is Employee Details</h2>
            <p>
                Id is {id}, Name is {fname} and Age is {age}
            </p>
            <br/>
            <ProjectDetails></ProjectDetails>
        </div>
    )
}

export default EmployeeDetails;