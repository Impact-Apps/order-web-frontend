import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'

const postItem = async payload => request.create(API_CONSTANTS.ITEM, payload)

const getItem = async id => request.fetch(`${API_CONSTANTS.ITEM}/${id}`)

const deleteItem = async id => request.delete(API_CONSTANTS.ITEM, id)

export default { postItem, getItem, deleteItem }
