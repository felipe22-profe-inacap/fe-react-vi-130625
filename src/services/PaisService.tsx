export class PaisService{
    static getPaises(){
        const urlPaises = 'https://restcountries.com/v3.1/lang/spanish'
        const fetchData = async () => {
            const res = await fetch(urlPaises);
            const data = res.json();
            return data
        }
        return fetchData()
    }
}

