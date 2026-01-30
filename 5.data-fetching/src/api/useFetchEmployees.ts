import { useState } from "react";
import { axiosIstance } from "../lib/axios";

type Employee = {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  salary: string;
  isActive: boolean;
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [EmployeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setIsLoading(true);
      // const request = await fetch("http://127.0.0.1:2000/employees");
      // const responseJson = (await request.json()) as Employee[];

      const response = await axiosIstance.get<Employee[]>("/employees");
      setEmployees(response.data);

    } catch (error) {
      setEmployeesError((error as TypeError).message);

    } finally {
      setIsLoading(false);
      setEmployeesError("")

    }
  };

  return {
    employees,
    isLoading,
    EmployeesError,
    fetchEmployees
  };
};
