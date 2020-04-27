import request from '@/utils/request'
import API_CONSTANTS from '@/constants/api'
const getReviews = async itemId => request.fetch(`${API_CONSTANTS.ITEM}/${itemId}/${API_CONSTANTS.REVIEWS}`)

const deleteReview = async reviewId => request.delete(`${API_CONSTANTS.ITEM}/${API_CONSTANTS.REVIEWS}/${reviewId}`)

export default { getReviews, deleteReview }
