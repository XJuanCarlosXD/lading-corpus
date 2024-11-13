import React, { useCallback, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Select from "react-select";
import GetApiMethod from "../Class/api.class";
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
    watch,
    control,
  } = useForm<Reservations>();

  const [data, setData] = useState<{ services: Service[] } | null>(null);
  const [active, setActive] = useState(false);

  const getData = useCallback(async () => {
    const api = new GetApiMethod();
    setData({
      services: await api.getServices(),
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // Retornar el formato "hh:mm" o "hh:mm:ss"
    return `${hours}:${minutes}:${seconds}`;
  };

  const onSubmit: SubmitHandler<Reservations> = async (values) => {
    const startTimeFormatted = formatTime(values.startTime);
    const endTimeFormatted = formatTime(values.endTime);
    const api = new GetApiMethod();
    try {
      await api.createReservation({
        ...values,
        price: 1000,
        name: values.client.name,
        date: new Date().toISOString(),
        service:
          data?.services?.find((x) => x.name === values.service)?.id || "",
        startTime: startTimeFormatted,
        endTime: endTimeFormatted,
      });
      toast.success("Cotizacion reservada");
    } catch (error) {
      toast.error("Upps error al reservar");
      console.error(error);
    }
  };
  const options: OptionType[] =
    data?.services.map((row) => ({
      label: row.name,
      value: `${row.id}`,
    })) || [];

  const startTime = new Date(watch("startTime"));
  const endTime = new Date(watch("endTime"));

  // Función para formatear la fecha
  const formatStartTime = (date: Date) => {
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Función para formatear solo la hora
  const formatEndTime = (date: Date) => {
    return date.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Verificar si startTime y endTime son del mismo día
  const isSameDay = startTime.toDateString() === endTime.toDateString();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-36 pt-16 max-sm:p-6 flex flex-col gap-4">
        <div className="card p-10 bg-white rounded-lg flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-extrabold text-md md:text-2xl lg:text-4xl text-darkGray">
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
              className={`${
                errors.amount && "border border-red-500"
              } py-3 px-4 w-36 shadow-md shadow-slate-400 rounded-full placeholder:font-normal placeholder:italic text-center`}
              type="text"
              placeholder="Cant. Personas"
              {...register("amount", { required: true })}
            />
            <div className="flex space-x-4 max-sm:flex-col max-sm:gap-2 max-sm:justify-start max-sm:items-start max-sm:w-full max-sm:space-x-0">
              <input
                className={`${
                  errors.startTime && "border border-red-500"
                } py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic`}
                type="datetime-local"
                placeholder="Hora de Inicio"
                {...register("startTime", { required: true })}
              />
              <input
                className={`${
                  errors.endTime && "border border-red-500"
                } py-3 px-8 shadow-md shadow-slate-400 rounded-full w-full placeholder:font-normal placeholder:italic`}
                type="datetime-local"
                placeholder="Hora de Fin"
                {...register("endTime", { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full max-sm:gap-4">
            {watch("service") && (
              <div>
                <p className="text-darkGray max-sm:w-full text-xl max-sm:text-lg font-poppins_regular">
                  Servicio <b className="font-semibold">{watch("service")}</b>
                </p>
                <p className="text-darkGray max-sm:w-full text-justify">
                  {data?.services?.find((x) => x.name === watch("service"))
                    ?.description || ""}
                </p>
              </div>
            )}
            {watch("amount") && (
              <div className="text-darkGray flex items-start gap-2 font-poppins_regular font-black w-full justify-center max-sm:justify-start">
                <p>{watch("amount")}</p>
                <p>Personas</p>
              </div>
            )}
            {watch("startTime") && watch("endTime") && (
              <div className="text-darkGray flex flex-col items-end gap-4 font-poppins_regular font-black w-full justify-between max-sm:items-start">
                <div className="flex items-start gap-2">
                  <p>{formatStartTime(startTime)}</p>
                  <p>-</p>
                  <p>
                    {isSameDay
                      ? formatEndTime(endTime)
                      : endTime.toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                  </p>
                </div>
                <p className="text-4xl font-black font-poppins text-darkGray">
                  RD$ 24,500
                </p>
                <div className="flex items-center gap-2 max-sm:flex-col max-sm:w-full">
                  <button
                    type="button"
                    className="border border-darkGray px-8 py-2 rounded-full font-poppins_regular font-black max-sm:px-4 max-sm:w-full"
                  >
                    NUEVA COTIZACIÓN
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive(!active)}
                    className="text-white bg-darkGray px-10 py-2 rounded-full font-poppins_regular font-black max-sm:w-full"
                  >
                    RESERVAR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {active && (
          <div className="card p-10 bg-white rounded-lg flex flex-col gap-4 w-6/12 max-sm:w-full">
            <div className="flex flex-col justify-center items-start w-full">
              <h2 className="font-medium text-darkGray max-sm:text-sm text-xl">
                Llene el formulario para completar su reserva:
              </h2>
              <div className="border-b border-lightGray lg:w-96 w-64 mt-2" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className={`${
                    errors.client?.name && "border-red-500"
                  } block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer`}
                  placeholder=" "
                  {...register("client.name", { required: true })}
                />
                <label
                  htmlFor="name"
                  className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
                >
                  Nombre Completo
                </label>
              </div>
              <div className="relative ">
                <input
                  type="email"
                  id="email"
                  className={`${
                    errors.client?.email && "border-red-500"
                  } block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer`}
                  placeholder=" "
                  {...register("client.email", { required: true })}
                />
                <label
                  htmlFor="email"
                  className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
                >
                  Correo electrónico
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  className={`${
                    errors.client?.phone && "border-red-500"
                  } block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer`}
                  placeholder=" "
                  {...register("client.phone", { required: true })}
                />
                <label
                  htmlFor="phone"
                  className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
                >
                  Teléfono
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="addres"
                  className={`${
                    errors.address && "border-red-500"
                  } block py-2.5 ps-6 pe-0 w-full text-sm text-darkGray bg-transparent border-0 border-b border-lightGray appearance-none focus:outline-none focus:ring-0 focus:border-darkGray peer`}
                  placeholder=" "
                  {...register("address", { required: true })}
                />
                <label
                  htmlFor="addres"
                  className="absolute lg:text-sm md:text-sm text-xs text-darkGray font-bold italic duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-placeholder-shown:start-2 peer-focus:start-0 peer-focus:text-lightGray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto capitalize"
                >
                  Ubicacion
                </label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-white bg-darkGray px-10 py-2 rounded-full font-poppins_regular font-black max-sm:w-full"
                >
                  RESERVAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default CotizacionComponent;
