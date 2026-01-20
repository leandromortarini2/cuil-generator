import React, { useState } from "react";
import { calculateCUIL, type Gender } from "../utils/fnTransformDni";
import CustomeTitle from "./CustomeTitle";
import CustomeInput from "./input/CustomeInput";
import CustomeButton from "./CustomeButton";
import Select from "./input/Select";

export const CuilGenerator: React.FC = () => {
  const [dni, setDni] = useState("");
  const [gender, setGender] = useState<Gender>("Masculino");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    if (dni.length >= 7) {
      const cuil = calculateCUIL(dni, gender);
      setResult(cuil);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center w-full gap-5">
      <CustomeTitle
        title="Generador de CUIL"
        type="h2"
        font="semibold"
        color="text-secondary"
      />
      <hr className="h-1 w-76 text-gray-300" />
      <CustomeInput
        type="text"
        label="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
        placeholder="Ingresa el numero de DNI"
        width="w-76"
        colorBorder="border-gray-300"
      />
      <Select
        value={gender}
        onChange={(e) => setGender(e.target.value as Gender)}
        options={["Masculino", "Femenino"]}
        width="w-76"
        label="Sexo"
        colorBorder="border-gray-300"
      ></Select>
      <CustomeButton
        text="Generar CUIL"
        onClick={handleCalculate}
        claseButton="primary"
        width="w-76"
        sizeText="text-base tracking-wider"
      />
      {result && (
        <CustomeTitle
          title={`CUIL: ${result}`}
          type="h1"
          font="semibold"
          color="text-cuartity"
        />
      )}
    </div>
  );
};
