export type Person = {
  id: string;
  name: string;
  age: number;
  address?: Address;
};

export type Address = {
  id: string;
  street: string;
  housenumber: number;
  residents?: Person[];
};

export type addressWithResidentsId = {
  personId: string;
  addressId: string;
}
