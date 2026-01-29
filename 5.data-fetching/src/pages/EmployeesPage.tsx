import { useState } from "react";

type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  salary: string;
  isActive: boolean;
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      const request = await fetch("http://127.0.0.1:2000/employees");
      const responseJson = (await request.json()) as Employee[];
      setEmployees(responseJson);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Data Fetching</h1>

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
              <tr>
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

      <button disabled={isLoading} onClick={fetchEmployees}>
        fetchEmployees{" "}
      </button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default EmployeesPage;
