export class AddCarDTO {
    name = ''
    brandId = 0
    model?: string = ''
    image?: File | null = null
    imageUrl: string = ''
    carCategoryId?= ''

}

export interface GetAllCar {
    id: number;
    name: string;
    model: string;
    image: string;
    brandId: number;
    carCategoryId?: any;
}