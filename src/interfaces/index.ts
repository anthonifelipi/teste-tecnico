export interface IUserRequest {
  fullName: string;
  password: string;
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: {
    id: string;
    fullName: string;
    email: string;
    email2?: string;
    phone: string;
    phone2?: string;
    userId: string;
  }[];
}

export interface IUserRequestUpdate {
  fullName?: string;
  password?: string;
  email?: string;
  email2?: string;
  phone?: string;
  phone2?: string;
}

export interface IUserlogin {
  email: string;
  password: string;
}

export interface IContactRequest {
  fullName: string;
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
  userId: string;
}

export interface iContactResponse {
  id: string;
  fullName: string;
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
}

export interface IContactUpdateRequest {
  fullName?: string;
  email?: string;
  email2?: string;
  phone?: string;
  phone2?: string;
}
