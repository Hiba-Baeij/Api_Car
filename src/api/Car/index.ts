import { axiosIns } from "@/libs/axios";
import { GetAllCar } from "../Car/dto";

export enum CarAPI {
    base = 'Car'
}


export class CarApi {
    static fetchCars = async () => {
        try {
            const { data } = await axiosIns.get<GetAllCar[]>(CarAPI.base)
            return data;
        }
        catch (er) {
            throw (er)
        }
    }
    static deleteCar = async (carId: string | number) => {
        try {
            const res = await axiosIns.delete(`${CarAPI.base}/${carId}`,)
            return res
        }

        catch (er) {
            throw (er)
        }
    }
}


