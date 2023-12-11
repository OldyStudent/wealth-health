import "./CreateEmployeeForm.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { employeeActions } from "../../store/slices/Employee";
import { Select, Modal } from "antd";
import DatePicker from "s3d-react-datepicker";

/**
 * React component for creating an employee.
 * @component
 * @returns {JSX.Element} JSX.Element
 */
export default function CreateEmployeeForm() {
  const dispatch = useDispatch();

  // State variables
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Refs for date pickers
  const dateOfBirthRef = useRef();
  const startDateRef = useRef();

  /**
   * Handles the form submission to add a new employee.
   * @param {Event} event - The form submission event.
   */
  function handleEmployeeSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let formData = new FormData(form);

    const employee = {
      key: Date.now().toString(),
      ...Object.fromEntries(formData.entries()),
      state,
      department,
    };

    dispatch(employeeActions.addEmployee(employee));
    setIsModalVisible(true);

    // Reset the form
    form.reset();
    setState("");
    setDepartment("");
    dateOfBirthRef.current.resetDatePicker();
    startDateRef.current.resetDatePicker();
  }

  return (
    <div className="CreateEmployeeForm">
      <h2>CREATE EMPLOYEE</h2>
      <form onSubmit={handleEmployeeSubmit}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstname" />
        </div>

        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastname" />
        </div>

        <div>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            name="dateofbirth"
            options={datePickerOptions}
            ref={dateOfBirthRef}
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div>
            <label htmlFor="street">Street</label>
            <input id="street" type="text" name="street" />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input id="city" type="text" name="city" />
          </div>

          <div>
            <label htmlFor="state-button">State</label>

            <Select
              style={{ width: 250 }}
              options={stateList}
              name="state"
              value={state}
              onChange={setState}
            />
          </div>

          <div>
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" name="zipcode" />
          </div>
        </fieldset>

        <div>
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            name="startdate"
            options={datePickerOptions}
            ref={startDateRef}
          />
        </div>

        <div>
          <label htmlFor="department-button">Department</label>
          <Select
            options={departmentList}
            style={{ width: 250 }}
            value={department}
            name="department"
            onChange={setDepartment}
          />
        </div>

        <div className="CreateEmployeeForm__submit-container">
          <button type="submit">Save</button>
        </div>
      </form>

      <Modal
        title="Employee Created !"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { backgroundColor: "black" } }}
      >
        <p>Employee has been successfully created.</p>
      </Modal>
    </div>
  );
}

const stateList = [
  {
    label: "Alabama",
    value: "AL",
  },
  {
    label: "Alaska",
    value: "AK",
  },
  {
    label: "American Samoa",
    value: "AS",
  },
  {
    label: "Arizona",
    value: "AZ",
  },
  {
    label: "Arkansas",
    value: "AR",
  },
  {
    label: "California",
    value: "CA",
  },
  {
    label: "Colorado",
    value: "CO",
  },
  {
    label: "Connecticut",
    value: "CT",
  },
  {
    label: "Delaware",
    value: "DE",
  },
  {
    label: "District Of Columbia",
    value: "DC",
  },
  {
    label: "Federated States Of Micronesia",
    value: "FM",
  },
  {
    label: "Florida",
    value: "FL",
  },
  {
    label: "Georgia",
    value: "GA",
  },
  {
    label: "Guam",
    value: "GU",
  },
  {
    label: "Hawaii",
    value: "HI",
  },
  {
    label: "Idaho",
    value: "ID",
  },
  {
    label: "Illinois",
    value: "IL",
  },
  {
    label: "Indiana",
    value: "IN",
  },
  {
    label: "Iowa",
    value: "IA",
  },
  {
    label: "Kansas",
    value: "KS",
  },
  {
    label: "Kentucky",
    value: "KY",
  },
  {
    label: "Louisiana",
    value: "LA",
  },
  {
    label: "Maine",
    value: "ME",
  },
  {
    label: "Marshall Islands",
    value: "MH",
  },
  {
    label: "Maryland",
    value: "MD",
  },
  {
    label: "Massachusetts",
    value: "MA",
  },
  {
    label: "Michigan",
    value: "MI",
  },
  {
    label: "Minnesota",
    value: "MN",
  },
  {
    label: "Mississippi",
    value: "MS",
  },
  {
    label: "Missouri",
    value: "MO",
  },
  {
    label: "Montana",
    value: "MT",
  },
  {
    label: "Nebraska",
    value: "NE",
  },
  {
    label: "Nevada",
    value: "NV",
  },
  {
    label: "New Hampshire",
    value: "NH",
  },
  {
    label: "New Jersey",
    value: "NJ",
  },
  {
    label: "New Mexico",
    value: "NM",
  },
  {
    label: "New York",
    value: "NY",
  },
  {
    label: "North Carolina",
    value: "NC",
  },
  {
    label: "North Dakota",
    value: "ND",
  },
  {
    label: "Northern Mariana Islands",
    value: "MP",
  },
  {
    label: "Ohio",
    value: "OH",
  },
  {
    label: "Oklahoma",
    value: "OK",
  },
  {
    label: "Oregon",
    value: "OR",
  },
  {
    label: "Palau",
    value: "PW",
  },
  {
    label: "Pennsylvania",
    value: "PA",
  },
  {
    label: "Puerto Rico",
    value: "PR",
  },
  {
    label: "Rhode Island",
    value: "RI",
  },
  {
    label: "South Carolina",
    value: "SC",
  },
  {
    label: "South Dakota",
    value: "SD",
  },
  {
    label: "Tennessee",
    value: "TN",
  },
  {
    label: "Texas",
    value: "TX",
  },
  {
    label: "Utah",
    value: "UT",
  },
  {
    label: "Vermont",
    value: "VT",
  },
  {
    label: "Virgin Islands",
    value: "VI",
  },
  {
    label: "Virginia",
    value: "VA",
  },
  {
    label: "Washington",
    value: "WA",
  },
  {
    label: "West Virginia",
    value: "WV",
  },
  {
    label: "Wisconsin",
    value: "WI",
  },
  {
    label: "Wyoming",
    value: "WY",
  },
];

const departmentList = [
  { label: "Sales", value: "Sales" },
  { label: "Marketing", value: "Marketing" },
  { label: "Engineering", value: "Engineering" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "Legal", value: "Legal" },
];

const datePickerOptions = {
  lang: "fr",
  format: "DD/MM/YYYY",
};
