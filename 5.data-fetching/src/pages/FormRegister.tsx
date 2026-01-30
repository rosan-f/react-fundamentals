import { useForm } from "react-hook-form";
import { axiosIstance } from "../lib/axios";
import axios from "axios";
import { useState } from "react";

type Employee = {
  name: string;
  position: string;
  department: string;
  email: string;
  salary: number;
  isActive: boolean;
};

const FormRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Employee>();

  const onSubmit = async (data: Employee) => {
    // reset feedback state setiap submit
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await axiosIstance.post("/employees", data);

      setSuccessMessage("Data employee berhasil ditambahkan");
      reset(); // reset form setelah sukses
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || "Gagal menambahkan employee",
        );
      } else {
        setErrorMessage("Unexpected error occurred");
      }
    }
  };

  return (
    <>
      <h1>Employee Form</h1>

      {/* FEEDBACK */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {isSubmitting && <p>Loading...</p>}

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
        }}
      >
        {/* NAME */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Name wajib diisi",
            minLength: {
              value: 3,
              message: "Minimal 3 karakter",
            },
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        {/* POSITION */}
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          {...register("position", {
            required: "Position wajib diisi",
          })}
        />
        {errors.position && (
          <p style={{ color: "red" }}>{errors.position.message}</p>
        )}

        {/* DEPARTMENT */}
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          {...register("department", {
            required: "Department wajib diisi",
          })}
        />
        {errors.department && (
          <p style={{ color: "red" }}>{errors.department.message}</p>
        )}

        {/* EMAIL */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email wajib diisi",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Format email tidak valid",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* SALARY */}
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          type="number"
          {...register("salary", {
            required: "Salary wajib diisi",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Salary tidak boleh negatif",
            },
          })}
        />
        {errors.salary && (
          <p style={{ color: "red" }}>{errors.salary.message}</p>
        )}

        {/* IS ACTIVE */}
        <p>Status</p>
        <label>
          <input
            type="radio"
            value="true"
            {...register("isActive", {
              setValueAs: (v) => v === "true",
              required: "Status wajib dipilih",
            })}
          />
          Aktif
        </label>

        <label>
          <input
            type="radio"
            value="false"
            {...register("isActive", {
              setValueAs: (v) => v === "true",
            })}
          />
          Non Aktif
        </label>
        {errors.isActive && (
          <p style={{ color: "red" }}>{errors.isActive.message}</p>
        )}

        {/* SUBMIT */}
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default FormRegister;
