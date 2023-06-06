<template>
	<div>
		<div class="add-new-item d-flex justify-content-end">
			<nuxt-link to="/categories/create" class="btn btn-success btn-sm my-2"><i class="fa-solid fa-circle-plus me-2"></i>Add Category</nuxt-link>
		</div>
		<div class="col-md-12">
			<div class="p-2 mb-1 alert alert-primary">
				<b>Category Lists</b>
			</div>
		</div>
		<table class="table">
			<thead class="alert alert-success py-1 my-2">
				<tr>
					<th>Name</th>
					<th>Status</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>dsfhhdf</td>
					<td>Active</td>
					<td>dscsddc</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>


<script>
	export default {
		layout: 'admin',
		mounted() {

		}
	}
</script>