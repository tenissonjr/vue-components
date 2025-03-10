import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IAtualizacaoTermoReferenciaDTO } from '../types/IAtualizacaoTermoReferenciaDTO'
import { exemploTermoReferencia } from '@/modules/termoreferencia/types/IAtualizacaoTermoReferenciaDTO'
import type { IGrupoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaDTO'
import type { IValidacaoAtributoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IValidacaoAtributoTermoReferenciaDTO'
import type { IAtributoTermoReferenciaDTO } from '../types/IAtributoTermoReferenciaDTO'

export const useTermoReferenciaStore = defineStore('termoReferenciaStore', () => {
  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------

  const atualizacaoTermoReferencia = ref<IAtualizacaoTermoReferenciaDTO>(exemploTermoReferencia)

  const exibirPainelNavegacao = ref<boolean>(true)

  const grupoSelecionadoTermoReferencia = ref<IGrupoTermoReferenciaDTO>({
    descricao: '',
    atributos: [],
  })

  // Inicializa grupoSelecionadoTermoReferencia com o primeiro grupo de AtualizacaoTermoReferencia.grupos
  if (atualizacaoTermoReferencia.value.grupos.length > 0) {
    grupoSelecionadoTermoReferencia.value = atualizacaoTermoReferencia.value.grupos[0]
  }

  // ---------------------------------------------------------------------------
  // Getters
  // ---------------------------------------------------------------------------
  const indiceGrupoCorrente = computed(() => {
    return atualizacaoTermoReferencia.value.grupos.findIndex(
      (grupo) => grupo === grupoSelecionadoTermoReferencia.value,
    )
  })
  const isPrimeiroGrupo = computed(() => indiceGrupoCorrente.value === 0)
  const isUltimoGrupo = computed(
    () => indiceGrupoCorrente.value === atualizacaoTermoReferencia.value.grupos.length - 1,
  )

  const calcularTotalAtributosRespondidos = (grupos: IGrupoTermoReferenciaDTO[]): number => {
    let total = 0
    grupos.forEach((grupo) => {
      grupo.atributos.forEach((atributo) => {
        if (atributo.resposta && atributo.resposta.trim() !== '') {
          total++
        }
      })
    })
    return total
  }

  //Total de Atributos do Grupo Selecionado
  const totalAtributosGrupoSelecionado = computed(() => {
    return grupoSelecionadoTermoReferencia.value.atributos.length
  })

  //Total Atributos de Todos os Grupos
  const totalAtributosTermoReferencia = computed(() => {
    return atualizacaoTermoReferencia.value.grupos.reduce((total, grupo) => {
      return total + grupo.atributos.length
    }, 0)
  })

  //Total de Atributos Respondidos do Grupo Selecionado
  const totalAtributosRespondidosGrupoSelecionado = computed(() => {
    return calcularTotalAtributosRespondidos([grupoSelecionadoTermoReferencia.value])
  })
  //Total de Atributos Respondidos de Todos os Grupos
  const totalAtributosRespondidosRespondidosTermoReferencia = computed(() => {
    return calcularTotalAtributosRespondidos(atualizacaoTermoReferencia.value.grupos)
  })

  const percentualAtributosTermoReferenciaRespondidos = computed(() => {
    return Math.round(
      (totalAtributosRespondidosRespondidosTermoReferencia.value /
        totalAtributosTermoReferencia.value) *
        100,
    )
  })

  const validarAtributos = (
    grupos: IGrupoTermoReferenciaDTO[],
  ): IValidacaoAtributoTermoReferenciaDTO[] => {
    const atributosNaoInformados: IValidacaoAtributoTermoReferenciaDTO[] = []

    grupos.forEach((grupo) => {
      grupo.atributos.forEach((atributo) => {
        if (!atributo.resposta || atributo.resposta.trim() === '') {
          atributosNaoInformados.push({
            descricaoGrupo: grupo.descricao,
            idAtributo: atributo.id,
            tipo: 'Erro',
            descricaoAtributo: atributo.descricao,
            mensagem: `O campo "${atributo.descricao}" não foi informado`,
          })
        }
      })
    })

    return atributosNaoInformados
  }

  const listaValidacaoAtributos = computed(() => {
    return validarAtributos(atualizacaoTermoReferencia.value.grupos)
  })

  // ---------------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------------

  const obterStatusAtributo = (atributo: IAtributoTermoReferenciaDTO): string => {
    return !atributo.resposta || atributo.resposta.trim() === '' ? 'Erro' : 'Normal'
  }

  const irParaGrupoAnterior = () => {
    if (indiceGrupoCorrente.value > 0) {
      grupoSelecionadoTermoReferencia.value =
        atualizacaoTermoReferencia.value.grupos[indiceGrupoCorrente.value - 1]
    }
  }

  const irParaProximoGrupo = () => {
    if (indiceGrupoCorrente.value < atualizacaoTermoReferencia.value.grupos.length - 1) {
      grupoSelecionadoTermoReferencia.value =
        atualizacaoTermoReferencia.value.grupos[indiceGrupoCorrente.value + 1]
    }
  }

  const selecionarGrupo = (grupoSelected: IGrupoTermoReferenciaDTO) => {
    grupoSelecionadoTermoReferencia.value = grupoSelected
  }

  const selecionarGrupoPorDescricao = (descricaoGrupo: string) => {
    const grupoEncontrado = atualizacaoTermoReferencia.value.grupos.find(
      (grupo) => grupo.descricao === descricaoGrupo,
    )
    if (grupoEncontrado) {
      grupoSelecionadoTermoReferencia.value = grupoEncontrado
    }
  }

  const salvarRascusnhoTermoReferencia = () => {
    alert('Rascunho do Termo de Referência salvo com sucesso!')
  }

  const concluirTermoReferencia = () => {
    if (
      totalAtributosRespondidosRespondidosTermoReferencia.value ===
      totalAtributosTermoReferencia.value
    ) {
      alert('Termo de Referência concluído com sucesso!')
    } else {
      const totalAtributosNaoInformados =
        totalAtributosTermoReferencia.value -
        totalAtributosRespondidosRespondidosTermoReferencia.value
      alert(
        `Termo de Referência não pode ser concluído pois existem ${totalAtributosNaoInformados} atributo(s) obrigatório(s) não informado(s).`,
      )
    }
  }

  return {
    exibirPainelNavegacao,
    atualizacaoTermoReferencia,
    grupoSelecionadoTermoReferencia,
    selecionarGrupo,
    indiceGrupoCorrente,
    isPrimeiroGrupo,
    isUltimoGrupo,
    irParaGrupoAnterior,
    irParaProximoGrupo,
    selecionarGrupoPorDescricao,
    totalAtributosGrupoSelecionado,
    totalAtributosTermoReferencia,
    totalAtributosRespondidosGrupoSelecionado,
    totalAtributosRespondidosRespondidosTermoReferencia,
    percentualAtributosTermoReferenciaRespondidos,
    listaValidacaoAtributos,
    obterStatusAtributo,
    salvarRascusnhoTermoReferencia,
    concluirTermoReferencia,
  }
})
