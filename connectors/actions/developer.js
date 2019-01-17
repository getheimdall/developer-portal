import Router from 'next/router'
import { toast } from 'react-toastify'

import { DeveloperConstants } from '../../constants/action-type'
import { developerService } from '../../services/developer'

export const saveDeveloper = developer => dispatch => {
  developerService.save(developer)
    .then(data => {
      dispatch({ type: DeveloperConstants.SAVE, developer: data })
      toast.success('Developer saved with success!')
      Router.push('/login')
    })
    .catch(error => {
      toast.error('Error to saved developer!')
      throw error
    })
}
