import type { Pais } from "../types/Pais";

export class PaisService{
    static getPaises(){
        const urlPaises = 'https://restcountries.com/v3.1/lang/spanish'
        const fetchData = async () => {
            const res = await fetch(urlPaises);
            const data = await res.json();
            const paisesFiltrados:Pais[] = data.map((paisApi: any)=>({
                cca2:paisApi.cca2,
                name:paisApi.name.common,
                capital:paisApi.capital?.[0] ?? 'Sin Capital',
                region:paisApi.region
            }));
            return paisesFiltrados;
        }
        return fetchData()
    }
}

