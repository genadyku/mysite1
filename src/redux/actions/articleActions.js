import * as type from '../../constants/constants'

export const deleteArticle = function (id, type_article) {
	return {
		type: type.DELETE_ARTICLE,
		payload: id,
		type_article,
	}
}
