import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'

const postRestaurant = async payload => request.create(API_CONSTANTS.MENU, payload)

const getRestaurant = async id => request.fetch(`${API_CONSTANTS.MENU}/${id}`)

const deleteRestaurant = async id => request.delete(API_CONSTANTS.MENU, id)

const getReviews = async restaurantId => request.fetch(`${API_CONSTANTS.RESTAURANT}/${restaurantId}/${API_CONSTANTS.REVIEWS}`)

const deleteReview = async reviewId => request.delete(`${API_CONSTANTS.RESTAURANT}/${API_CONSTANTS.REVIEWS}/${reviewId}`)

export default { postRestaurant, getRestaurant, deleteRestaurant, getReviews, deleteReview }
