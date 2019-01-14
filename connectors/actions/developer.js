import Router from 'next/router'
import { toast } from 'react-toastify'

import { DeveloperConstants } from '../../constants/action-type'
import { developerService } from '../../services/developer'

export const saveDeveloper = developer => dispatch => {
  developerService.save(developer)
    .then(data => {
      dispatch({ type: DeveloperConstants.SAVE, developer: data })
      toast.success('Desenvolvedor cadastrado com sucesso!')
      Router.push('/login')
    })
    .catch(error => {
      toast.error('Error ao cadastrar desenvolvedor!')
      throw error
    })
}
