import { axiosIns } from "@/libs/axios";
import { Clients } from "../Clients/dto";

export enum ClientsAPI {
    base = 'Client'
}

export class ClientApi {
    static base(arg0: string, base: any, arg2: { onSuccess: (data: Clients[]) => void; }) {
        throw new Error('Method not implemented.');
    }
    static fetchClients = async () => {
        try {
            const { data } = await axiosIns.get<Clients[]>(ClientsAPI.base)
            return data;
        }
        catch (er) {
            throw (er)
        }
    }
    static getClient = async (id: string) => {
        try {
            const { data } = await axiosIns.get<Clients[]>(`${ClientsAPI.base}/${id}`)
            return data;
        }
        catch (er) {
            throw (er)
        }
    }

    static addClients = async (payload: Clients) => {
        try {

            const { data } = await axiosIns.post(ClientsAPI.base, payload)
            return data
        }

        catch (er) {
            throw (er)
        }

    }

    static modifyClients = async (payload: Clients) => {
        try {
            const { data } = await axiosIns.post(ClientsAPI.base, payload)
            return data
        }

        catch (er) {
            throw (er)
        }

    }

    static deleteClient = async (clientId: string | number) => {
        try {
            const res = await axiosIns.delete(`${ClientsAPI.base}/${clientId}`,)
            return res
        }

        catch (er) {
            throw (er)
        }
    }


}