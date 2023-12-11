import "./Employees.css";
import { Table } from "antd";
import { useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

/**
 * List Employee component.
 * @component
 * @returns {JSX.Element} JSX.Element
 */
export default function Employees() {
  // Fetches employee data from the Redux store
  const employees = useSelector((state) => state.employee);
  const [filteredData, setFilteredData] = useState(employees);

  /**
   * Handles the change in the search input and filters the employee data accordingly.
   * @param {ChangeEvent} event - The change event of the search input.
   */
  const onSearchChange = (event) => {
    const searchInput = event.target.value.toLowerCase();

    const filteredEmployees = employees.filter((employee) => {
      const values = Object.values(employee).map((value) =>
        value.toLowerCase(),
      );
      return values.some((value) => value.includes(searchInput));
    });
    setFilteredData(filteredEmployees);
  };

  return (
    <div className="Employees">
      <div>
        <h2 className="Employees__title">CURRENT EMPLOYEES</h2>
        <section>
          <div className="Employees__search">
            <Search
              placeholder="Search employees"
              onChange={onSearchChange}
              style={{ width: 250 }}
            />
          </div>

          <Table
            dataSource={filteredData}
            columns={columns}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: [10, 25, 50, 100],
            }}
          />
        </section>
      </div>
      <div className="Employees__navigation">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

// Columns configuration for the Ant Design Table component.
const columns = [
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
    sorter: (a, b) => a.firstname.localeCompare(b.firstname),
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
    sorter: (a, b) => a.lastname.localeCompare(b.lastname),
  },
  {
    title: "Date of Birth",
    dataIndex: "dateofbirth",
    key: "dateofbirth",
    sorter: (a, b) =>
      moment(a.dateofbirth, "DD/MM/YYYY", false) -
      moment(b.dateofbirth, "DD/MM/YYYY", false),
  },
  {
    title: "Street",
    dataIndex: "street",
    key: "street",
    sorter: (a, b) => a.street.localeCompare(b.street),
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => a.city.localeCompare(b.city),
  },
  {
    title: "Zip Code",
    dataIndex: "zipcode",
    key: "zipcode",
    sorter: (a, b) => a.zipcode.localeCompare(b.zipcode),
  },
  {
    title: "Start Date",
    dataIndex: "startdate",
    key: "startdate",
    sorter: (a, b) => new Date(a.startdate) - new Date(b.startdate),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a, b) => a.state.localeCompare(b.state),
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    sorter: (a, b) => a.department.localeCompare(b.department),
  },
];
