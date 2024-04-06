type Address = {
  city: string;
};

type Company = {
  name: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;

  address: Address;
  company: Company;
};
