import api from "./api"


export async function agendarConsulta(data:Date,especialistaId:string,pacienteId:string){
    try {
        const resultado = await api.post('/consulta',{
            especialista :especialistaId,
            paciente: pacienteId,
            data:data
        })
        console.log("Api",resultado.data)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}


export async function cancelarConsultas(consultaId:string){
    try {
        const resultado = await api.delete(`/consulta/${consultaId}`)
        console.log("Cancelar API",resultado.data)
        return resultado.data
    } catch (error) {
        console.log(error)
        return null
    }
}