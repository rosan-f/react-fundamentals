import { useFetchEmployees } from "../api/useFetchEmployees";
import FormRegister from "./FormRegister";

const EmployeesPage = () => {
  const { employees, EmployeesError, fetchEmployees, isLoading } =
    useFetchEmployees();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <FormRegister />
      </div>

      <div>
        <h1>Data Fetching</h1>
        <button disabled={isLoading} onClick={fetchEmployees}>
          fetchEmployees{" "}
        </button>
        {isLoading && <p>Loading...</p>}
        {EmployeesError && <p>{EmployeesError}</p>}

        <table border={1} cellSpacing={0} cellPadding={15}>
          <thead>
            <tr>
              <th>name</th>
              <th>position</th>
              <th>departmen</th>
              <th>email</th>
              <th>salary</th>
              <th>isActive</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  {employee.isActive ? <td>Aktif</td> : <td>Non aktif</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesPage;
