export interface CustomerDTO {
    id: number;
    name: string;
    address: string;
    email: string;
}
export interface ComputerDTO {
    id: number;
    name: string;
    price: number;
    motherboard: string;
    cpu: string;
    cooler: string;
    gpu: string;
    ram: string;
    storage: string;
    case: string;
    powersupply: string;
}
export interface PurchaseDTO {
    id: number;
    date: string;
    deliverytype: string;
    computer: ComputerDTO | null;
    customer: CustomerDTO | null;
}
export interface UserDTO {
    id: number;
    name: string;
    email: string;
    password: string | null;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface AccessTokenDTO {
    accessToken: string;
}