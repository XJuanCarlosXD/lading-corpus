export type Clients = {
  name: string;
  email: string;
};

export type Reservations = {
  name: string;
  client: Clients;
  service: string;
  startTime: string;
  endTime: string;
  amount?: number;
  price?: number;
};

export type Service = {
  id: number;
  name: string;
  price: string;
  description: string;
};
