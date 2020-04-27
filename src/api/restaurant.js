
import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'

const getReviews = async restaurantId => request.fetch(`${API_CONSTANTS.RESTAURANT}/${restaurantId}/${API_CONSTANTS.REVIEWS}`)

const deleteReview = async reviewId => request.delete(`${API_CONSTANTS.RESTAURANT}/${API_CONSTANTS.REVIEWS}/${reviewId}`)

export default { getReviews, deleteReview }
