export interface MovieModel {
    id: number;
    title: string;
    img: string;
    //schedule: Array<Schedule>;
    classification: string;
}

export interface Schedule {
    paymentUrl: string;
    price: string;
    time: string;
}

export interface MovieDetail {
    cast: Array<Cast>;
    classification: string;
    country: string;
    director: string;
    image: string;
    releaseDate: string;
    sinopsis: string;
    tickets: Array<Schedule>;
    title: string;
    trailer: string;
    year: string;
}

export interface Cast {
    img: string;
    name: string;
}

export interface MovieComment {
    id: number;
    createdDate: string;
    value: string
}