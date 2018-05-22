// const employeeDatabase = require("./database")
const APIManager = require("./APIManager")
const componentFactory = require("./componentFactory")
const appendinator = require("./appendinator")

// HTML hook/anchor to push things to DOM
const contentHook = document.querySelector(".employee")
// Card Section - Parent of all child elements (h1, sections)
const section = componentFactory("section", "", "card")
// Section is a child of Fragment
const fragment = document.createDocumentFragment()


// FUnction to loop through database and create DOM elements
const contactListDisplay = APIManager.getAllObjects("employees").then(employee => {

    employee.forEach(currentEmployee => {
        // h1 element for currentEmployee name
        const name = componentFactory("h1", `${currentEmployee.name}`, "employee_name")

        // ajax call to DEPARTMENTS
        APIManager.getAllObjects("department").then(department => {
            //  match FOREIGN KEY for deptID in EMPLOYEE to PRIMARY KEY in DEPARTMENT
            const arrayOfEmployees = department.find(dept => dept.id === currentEmployee.departmentId)

			// create section element for Department Name
			const departments = componentFactory("section", `${arrayOfEmployees.name}`, "employee_department")

            // ajax call to COMPUTERS
            APIManager.getAllObjects("computers").then(computers => {
                //  match FOREIGN KEY for compID in EMPLOYEE to PRIMARY KEY in COMPUTER
				const arrayOfComputers = computers.find(comp => comp.id === currentEmployee.computerId)

				// create section element for Computer Name
                const computer = componentFactory("section", `${arrayOfComputers.name}`, "employee_computer")

                // log name + department name + computer name
				console.log(currentEmployee.name, arrayOfEmployees.name, arrayOfComputers.name)

				// Calls appending factory function to push elements to DOM
                appendinator(section, name)
                appendinator(section, departments)
                appendinator(section, computer)
				appendinator(fragment, section)
				appendinator(contentHook, fragment)

            })
        })
    })
})

module.exports = contactListDisplay