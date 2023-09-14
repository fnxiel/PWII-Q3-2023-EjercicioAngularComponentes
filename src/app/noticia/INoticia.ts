import { IEnlace } from "../enlace/IEnlace"

export interface INoticia {
  titulo: string
  resumen: string
  portada: IPortada
  esDestacada: boolean
  fecha: Date
}

export interface IPortada {
  enlace: IEnlace
  tipo: "imagen" | "video"
  duracion?: number
}
