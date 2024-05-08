import { Paciente } from "../interfaces/Paciente"
import api from "./api"



export async function cadastrarPaciente(paciente: Paciente){
    if(!paciente) return null
    try {
        console.log(paciente)
            const resultado = await api.post("/paciente",paciente)
            console.log(resultado.data)
            return resultado.data
    } catch (error) {
        console.log("Erro", error)
        return null
    }

}