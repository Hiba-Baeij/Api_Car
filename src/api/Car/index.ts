import { axiosIns } from "@/libs/axios";
import { AddCarDTO, GetAllCar } from "../Car/dto";
import { serialize } from "object-to-formdata";
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
    
    static addCar = async (payload: Omit<AddCarDTO, 'imageUrl'>) => {
        try {

            const { data } = await axiosIns.post(CarAPI.base, serialize(payload))
            return data
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


