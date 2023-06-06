export const state = () => ({
	category_lists: [],
	msg: ""
});

export const mutations = {
	ADD_CATEGORY(state, data) {
		state.category_lists.push(data);
	}
}

export const actions = {
	storeCategoryData(context, data) {
		try {

			return this.$axios.$post('api/categories/store', data)
			.then(result => {
				console.log(result);
				if(result.status == 1) {
					this.$notify.success({
						//title: 'Hooray',
						message: result.message
					})
					context.commit('ADD_CATEGORY', result.data);
				}
			})
		} catch(err) {
			console.log(err); 
		}
	}
}