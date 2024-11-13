export type Clients = {
  name: string;
  email: string;
  phone: string;
};

export type Reservations = {
  name: string;
  client: Clients;
  service: string | number;
  startTime: string;
  endTime: string;
  date: string;
  amount?: number;
  price?: number;
  address: string;
};

export type Service = {
  id: number;
  name: string;
  price: string;
  description: string;
};
