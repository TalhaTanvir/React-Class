import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import MainLayout from "../Layouts/Main";

export default function ApiTester() {
  const [students, setStudents] = useState([
    { name: "Talah", Age: 22 },
    { name: "Usman", Age: 30 },
    { name: "Mubbashir", Age: 50, phone: "12343534534" },
    { name: "Ayub", Age: 102 },
  ]);
  const [loading, setIsLoading] = useState(true);

  const studentsWithoutPhone = students.filter((student) => !student.phone);

  return (
    <MainLayout>
      <div className="h-screen grid place-content-center m-4">
        <div className="border  min-w-20 min-h-20 bg-neutral-200 p-6 space-y-3 rounded-2xl">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 rounded-2xl">
            {studentsWithoutPhone.map((student, index) => {
              return (
                <div key={index} className="p-4 bg-neutral-300">
                  <div className="flex flex-col gap-4 border p-2">
                    <div className="flex gap-2">
                      <span>Name:</span>
                      <span>{student.name}</span>
                    </div>
                    <div className="flex  gap-2">
                      <span>Email:</span>
                      <span>{student.Age}</span>
                    </div>
                    {student.phone && (
                      <div className="flex  gap-2">
                        <span>Phone:</span>
                        <span>{student.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
