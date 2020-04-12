import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'

const postMenu = async payload => request.create(API_CONSTANTS.MENU, payload)

const getMenu = async id => request.fetch(`${API_CONSTANTS.MENU}/${id}/items`)

const deleteMenu = async id => request.delete(API_CONSTANTS.MENU, id)

export default { postMenu, getMenu, deleteMenu }
