import "./Home.css";
import { Link } from "react-router-dom";
import { CreateEmployeeForm } from "../../components";

/**
 * Home page component.
 * @component
 * @returns {JSX.Element} JSX.Element
 */
export default function Home() {
  return (
    <div className="Home">
      <section className="Home__left">
        <CreateEmployeeForm />
      </section>
      <section className="Home__right">
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </section>
    </div>
  );
}
