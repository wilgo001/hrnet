import { Header, Navigation } from "../../components";
import useCreateModal from "../../plugins/modal/Modal";
import Select from '../../plugins/select/Select';
import { DatePicker } from 'date-picker-library';
import { useState } from "react";
import { addEmployee } from "../../redux/employeeSlice";
import { useDispatch } from "react-redux/es/exports";

const DEPARTMENT = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Ressources",
    "Legal"
]

const STATES = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

export const TYPE_NAMES = {
    firstName: 'First Name',
    lastName: 'Last Name',
    birthDate: 'Birth Date',
    startDate: 'Start Date',
    street:'Street',
    city: 'City',
    state: 'State',
    zipCode: 'ZipCode',
    department: 'Department',
}

const DATA_TYPE = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street:'',
    city: '',
    state: '',
    zipCode: '',
    department: '',
}

const Home = () => {
    const [employee, setEmployee] = useState(DATA_TYPE);
    const dispatch = useDispatch();
    const links = [{title:'View Current Employees', path:'/employees'}];
    const { modal, toggle } = useCreateModal({text: 'Employee Created!',classNames: '', callBack: null});
 
    const submit = (e) => {
        dispatch(addEmployee(employee));
        setEmployee(DATA_TYPE);
        e.preventDefault();
        toggle();
    }

    const onChange = (value, fieldName) => {
        let newEmployee = employee;
        switch(fieldName) {
            case TYPE_NAMES.firstName :
                newEmployee.firstName = value;
                break;
            case TYPE_NAMES.lastName :
                newEmployee.lastName = value;
                break;
            case TYPE_NAMES.birthDate :
                newEmployee.birthDate = value;
                break;
            case TYPE_NAMES.startDate :
                newEmployee.startDate = value;
                break;
            case TYPE_NAMES.street :
                newEmployee.street = value;
                break;
            case TYPE_NAMES.city :
                newEmployee.city = value;
                break;
            case TYPE_NAMES.state :
                newEmployee.state = value;
                break;
            case TYPE_NAMES.zipCode :
                newEmployee.zipCode = value;
                break;
            case TYPE_NAMES.department :
                newEmployee.department = value;
                break;
            default:
                break;
        }
        setEmployee(newEmployee);
    }
    return(
        <div className="main">
            <Header title='HRnet' />
            <Navigation links={links} />
            <form onSubmit={(e) => {submit(e)}}>
                <h2>Create Employees</h2>
                <label htmlFor={TYPE_NAMES.firstName}>First Name</label>
                <input type='text' id={TYPE_NAMES.firstName} onChange={(e) => onChange(e.target.value, TYPE_NAMES.firstName)}/>
                <label htmlFor={TYPE_NAMES.lastName}>Last Name</label>
                <input type='text' id={TYPE_NAMES.lastName} onChange={(e) => onChange(e.target.value, TYPE_NAMES.lastName)}/>
                <label htmlFor={TYPE_NAMES.birthDate}>Date of birth</label>
                <DatePicker id={TYPE_NAMES.birthDate} onChange={(value) => onChange(value, TYPE_NAMES.birthDate)}/>
                <label htmlFor={TYPE_NAMES.startDate}>Date of start</label>
                <DatePicker id={TYPE_NAMES.startDate} onChange={(value) => onChange(value, TYPE_NAMES.startDate)}/>
                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor={TYPE_NAMES.street}>Street</label>
                    <input type='text' id={TYPE_NAMES.street} onChange={(e) => onChange(e.target.value, TYPE_NAMES.street)} />
                    <label htmlFor={TYPE_NAMES.city}>City</label>
                    <input type='text' id={TYPE_NAMES.city} onChange={(e) => onChange(e.target.value, TYPE_NAMES.city)} />
                    <label htmlFor={TYPE_NAMES.state}>State</label>
                    <Select name='States' options={STATES} id={TYPE_NAMES.state} onChange={(value) => onChange(value, TYPE_NAMES.state)} />
                    <label htmlFor={TYPE_NAMES.zipCode}>ZIP Code</label>
                    <input type='text' id={TYPE_NAMES.zipCode} onChange={(e) => onChange(e.target.value, TYPE_NAMES.zipCode)} />
                </fieldset>
                <label htmlFor={TYPE_NAMES.department}>Department</label>
                <Select name='Department' options={DEPARTMENT} id={TYPE_NAMES.department} onChange={(value) => onChange(value, TYPE_NAMES.department)} />
                <input type="submit" value="Save"/>
            </form>
            {modal}
        </div>
    )
}

export default Home;