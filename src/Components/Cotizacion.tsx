import React, { useCallback, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import GetApiMethod from "../Class/api.class.ts";
import { Reservations, Service } from "../Utils/type";

interface OptionType {
  label: string;
  value: string;
}

const CotizacionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Reservations>();

  const [data, setData] = useState<{ services: Service[] } | null>(null);

  const getData = useCallback(async () => {
    const api = new GetApiMethod();
    setData({
      services: await api.getServices(),
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const onSubmit: SubmitHandler<Reservations> = async (data) => {
    const api = new GetApiMethod();
    console.log(data);
  };
  const options: OptionType[] =
    data?.services.map((row) => ({
      label: row.name,
      value: `${row.id}`,
    })) || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-36 pt-16 max-sm:p-6">
        <div className="card p-10 bg-white rounded-lg flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-extrabold text-md md:text-2xl lg:text-4xl">
              Cotizar Servicio de Seguridad Privada
            </h2>
            <div className="border-b border-lightGray lg:w-96 w-64 mt-2" />
          </div>
          <div className="flex flex-row max-sm:flex-col justify-center items-center w-full gap-3 max-sm:items-start max-sm:w-full">
            <div className="w-full">
              <Controller
                name="service"
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, ref },
                  fieldState: { error },
                }) => (
                  <Select
                    options={options}
                    placeholder="Elige un servicio"
                    styles={{
                      control: (base) => ({
                        ...base,
                        padding: "0.5rem",
                        borderRadius: "3rem",
                        borderColor: error ? "red" : base.borderColor,
                        boxShadow:
                          "0 4px 6px -1px rgba(148, 163, 184, 0.5), 0 2px 4px -1px rgba(148, 163, 184, 0.3)",
                      }),
                    }}
                    onChange={(selectedOption) => {
                      onChange(selectedOption?.label);
                    }}
                    onBlur={onBlur}
                    value={value ? { label: value, value: value } : null}
                    ref={ref}
                  />
                )}
              />
            </div>
            <input
              className="py-3 px-4 w-36 shadow-md shadow-slate-400 rounded-full placeholder:font-normal placeholder:italic"
              type="text"
              placeholder="Cant. Personas"
              {...register("amount", { required: true })}
            />
            <div className="flex space-x-4 max-sm:flex-col max-sm:gap-2 max-sm:justify-start max-sm:items-start max-sm:w-full max-sm:space-x-0">
              <input
                className="py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic"
                type="datetime-local"
                placeholder="Hora de Inicio"
                {...register("startTime", { required: true })}
              />
              <input
                className="py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic"
                type="datetime-local"
                placeholder="Hora de Fin"
                {...register("endTime", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="bg-darkGray text-white p-1.5 px-6  rounded-2xl m-0 font-bold text-center uppercase"
            >
              cotizar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CotizacionComponent;
