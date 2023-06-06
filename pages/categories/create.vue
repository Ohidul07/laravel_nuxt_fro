<template>
	<div>
		<div class="add-new-item d-flex justify-content-end">
			<nuxt-link to="/categories" class="btn btn-warning btn-sm my-2 px-3"><i class="fa-solid fa-angle-left me-2"></i>Back</nuxt-link>
		</div>
		<div class="col-md-12 mb-2">
			<div class="p-2 mb-1 alert alert-primary">
				<b>Add Category</b>
			</div>
		</div>
		<div class="category-form">
			<form @submit.prevent="submitCategoryData">
				<div class="col-md-12">
					<div class="border-primary border rounded p-3">
						<div class="row">
							<div class="col-md-6">
								<div class="mb-3" :class="{ invalid: !name.isValid}">
								  <label for="name" class="form-label">Name</label>
								  <input type="name" class="form-control" v-model.trim="name.val" @blur="clearValidity('name')" id="name" placeholder="Enter Name">
								  <p class="err-msg" v-if="!name.isValid">Name must not be empty.</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="mb-3" :class="{ invalid: !status.isValid}">
								  <label for="status" class="form-label">Status</label>
								  <select class="form-select" v-model="status.val" @blur="clearValidity('status')" name="status" aria-label="Default select example">
								    <option value="">select</option>
								    <option value="1">Active</option>
								    <option value="0">Inactive</option>
								  </select>
								  <p class="err-msg" v-if="!status.isValid">Status must not be empty.</p>
								</div>	
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<button type="submit" class="btn btn-success"><i class="fa-solid fa-floppy-disk me-2"></i>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</form>	
		</div>
	</div>
</template>


<script>
	export default {
		layout: 'admin',
		data() {
			return {
				name: {
					val: "",
					isValid: true
				},
				status: {
					val: "",
					isValid: true
				},
				formIsValid: true
			}
		},
		methods: {
			async submitCategoryData() {
				this.ValidateForm();
				if(!this.formIsValid) {
		        	return;
		      	}

		      	const categoryData = {
		      		name: this.name.val,
		      		status: this.status.val,
		      	};
				await this.$store.dispatch('category/storeCategoryData', categoryData);
			},
			ValidateForm() {
				this.formIsValid = true;
				if(this.name.val == "") {
					this.name.isValid = false;
					this.formIsValid = false;
				}
				if(this.status.val == "") {
					this.status.isValid = false;
					this.formIsValid = false;
				}
			},
			clearValidity(input) {
				this[input].isValid = true;
			}	
		}
	}
</script>