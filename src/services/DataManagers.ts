import getData from "../models/GetDataFromFiles";

interface teams {
    id : number,
    equipe : string,
    carro : string
}

interface drivers extends teams{
    piloto : string,
}

export const dataManager = async (fileName:string, search?:string) => {
    const data = getData(fileName);
    
    if(await data && search){
        const newData: drivers[] = JSON.parse(await data);
        return newData.filter((d) => d.piloto.toLowerCase().includes(search.toLowerCase()))
    }else
        return data;
}