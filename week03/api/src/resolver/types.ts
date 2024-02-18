export type Person = {
  id: string;
  name: string;
  age?: number;
  address?: Address;
  imageUrl?: string;
};

export type Address = {
  id: string;
  street: string;
  housenumber: number;
  residents?: Person[];
};

export type addressIdWithResidentsId = {
  personId: string;
  addressId: string;
}
