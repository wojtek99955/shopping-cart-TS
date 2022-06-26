export interface radioValues {
  picked: string;
}

export interface FormValues {
  email: string;
  firstName: string;
  newsletter: boolean;
  lastName: string;
  address: string;
  zip: string;
  city: string;
  country: string;
}

export interface CheckoutDataTypes {
  email?: string;
  fitstName?: string;
  lastName?: string;
  address?: string;
  zip?: string;
  city?: string;
  country?: string;
  newsletter?: boolean;
  payment?: string;
  shipping?: string;
}
