import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
import type { IExibicaoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IExibicaoTermoReferenciaDTO';
import exemploTermoReferencia from '@/modules/termoreferencia/types/IExibicaoTermoReferenciaDTO';
import type { IGrupoTermoReferenciaDTO } from '@/modules/termoreferencia/types/IGrupoTermoReferenciaDTO';

export const useTermoReferenciaStore = defineStore('termoReferenciaStore', () => {

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------


  const exibicaoTermoReferencia = ref<IExibicaoTermoReferenciaDTO>(exemploTermoReferencia)

  const grupoSelecionadoTermoReferencia = ref<IGrupoTermoReferenciaDTO>({
    descricao: '',
    atributos: []
  })

  // Inicializa grupoSelecionadoTermoReferencia com o primeiro grupo de exibicaoTermoReferencia.grupos
  if (exibicaoTermoReferencia.value.grupos.length > 0) {
    grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[0];
  }

  // ---------------------------------------------------------------------------
  // Getters
  // ---------------------------------------------------------------------------
  const indiceGrupoCorrente = computed(() => {
    return exibicaoTermoReferencia.value.grupos.findIndex(grupo => grupo === grupoSelecionadoTermoReferencia.value);
  });
  const isPrimeiroGrupo = computed(() => indiceGrupoCorrente.value === 0);
  const isUltimoGrupo = computed(() => indiceGrupoCorrente.value === exibicaoTermoReferencia.value.grupos.length - 1);


  // ---------------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------------
  const irParaGrupoAnterior = () => {
    if (indiceGrupoCorrente.value > 0) {
      grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[indiceGrupoCorrente.value - 1];
    }
  };

  const irParaProximoGrupo = () => {
    if (indiceGrupoCorrente.value < exibicaoTermoReferencia.value.grupos.length - 1) {
      grupoSelecionadoTermoReferencia.value = exibicaoTermoReferencia.value.grupos[indiceGrupoCorrente.value + 1];
    }
  };

  const selecionarGrupo = (grupoSelected: IGrupoTermoReferenciaDTO) => {
    grupoSelecionadoTermoReferencia.value = grupoSelected;
  }

  return {
    exibicaoTermoReferencia,
    grupoSelecionadoTermoReferencia,
    selecionarGrupo,
    indiceGrupoCorrente,
    isPrimeiroGrupo,
    isUltimoGrupo,
    irParaGrupoAnterior,
    irParaProximoGrupo

  }
})
