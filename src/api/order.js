import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'

const getOrders = async id => request.fetch(`${API_CONSTANTS.ORDER}/?restaurantId=${id}`)


export default { getOrders }
