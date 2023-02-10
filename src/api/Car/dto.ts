export class AddCarDTO {
    name = ''
    brandId = ''
    model?: string = ''
    image?: File | null = null
    imageUrl: string = ''
    carCategoryId?= ''

}

export interface GetAllCar {
    id: string;
    name: string;
    model: string;
    image: string;
    brandId: string;
    carCategoryId?: any;
}

