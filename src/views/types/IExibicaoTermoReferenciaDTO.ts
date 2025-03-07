import type { ITermoReferenciaDTO } from "./ITermoReferenciaDTO";
import type { IGrupoTermoReferenciaDTO } from "./IGrupoTermoReferenciaDTO";

export interface IExibicaoTermoReferenciaDTO  {
  termoReferencia: ITermoReferenciaDTO
  grupos: IGrupoTermoReferenciaDTO[];

}

const exemploTermoReferencia: IExibicaoTermoReferenciaDTO = {
  termoReferencia: {
    id: 1,
    descricao: "Termo 1",
    dataInicio: "2021-01-01",
    dataFim: "2021-12-31",
    status: "ATIVO",
    grupos: [
      {
        descricao: "Grupo 1",
      },
      {
        descricao: "Grupo 2",
      }
    ]
  },
  grupos: [
    {
      descricao: "Grupo 1",
    },
    {
      descricao: "Grupo 2",
    }
  ]
};

