<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 div_trans8 corner4 text-white mt-3" v-if="form === 'create'">
                <h4 class="mt-2">Categorías</h4>
                <h6>Agrega una nueva categoría</h6>
                <form action="" class="form-group">
                    <div class="row justify-content-center" v-if="success">
                        <div class="alert alert-success col-md-12">{{ success }}</div>
                    </div>
                    <div class="row justify-content-center" v-else-if="error">
                        <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4"><input class="form-control" id="category_name" type="text"
                                                                placeholder="Categoría..." v-model.trim="name" required>
                        </div>
                        <div class="form-group col-md-6"><input class="form-control" id="category_description"
                                                                type="text" placeholder="Descripción..."
                                                                v-model.trim="description" required></div>
                        <div class="form-group col-md-2">
                            <button type="submit" class="btn btn-outline-primary" @click.prevent="create">Agregar
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-md-12 div_trans8 corner4 text-white mt-3" v-else-if="form === 'update'">
                <h4 class="mt-2">Categorías</h4>
                <h6>Modifica una categoría</h6>
                <form action="" class="form-group">
                    <div class="row justify-content-center" v-if="success">
                        <div class="alert alert-success col-md-12">{{ success }}</div>
                    </div>
                    <div class="row justify-content-center" v-else-if="error">
                        <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4"><input class="form-control" id="category_name1" type="text"
                                                                placeholder="Categoría..." v-model.trim="name" required>
                        </div>
                        <div class="form-group col-md-6"><input class="form-control" id="category_description1"
                                                                type="text" placeholder="Descripción..."
                                                                v-model.trim="description" required></div>
                        <div class="form-group col-md-2">
                            <input type="hidden" v-model="id">
                            <button type="submit" class="btn btn-outline-primary" @click.prevent="update">Modificar
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <button class="btn btn-outline-info" @click.prevent="triggerForm(-1)">Nueva
                                Categoría
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

        <div class="row mt-4 corner4 div_trans8">
            <table id="table" class="table text-white m-4">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th colspan="2">Extra</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category, index) in categories" :key="index">
                    <td> {{ category.id }}</td>
                    <td> {{ category.name }}</td>
                    <td> {{ category.description }}</td>
                    <td>
                        <button class="__button __button-warning __button-rounded fas fa-pencil-alt" :id="category.id+'-edit'" @click="triggerForm(category.id)" :value="category.id"></button>
                    </td>
                    <td>
                        <button class="__button __button-danger __button-rounded fas fa-times" :id="category.id+'-remove'" @click="remove(category.id)" :value="category.id"></button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import CategoryService from '@/services/CategoryService'

    export default {
        name: 'CategoryComponent',
        data() {
            return {
                id: 0,
                name: '',
                description: '',
                success: '',
                error: '',
                loading: false,
                form: 'create',
                categories: []
            }
        },
        methods: {
            create() {
                if (this.name.trim() && this.description.trim()) {
                    const category = {
                        name: this.name,
                        description: this.description
                    }

                    CategoryService.create(category)
                        .then(resolve => {
                            this.success = "Se ha cargado Exitosamente"
                            CategoryService.retrieveAll().then((response) => {
                                this.categories = response;
                            }).catch((error) => {
                                console.log(error);
                            });
                            setTimeout(() => {
                                this.success = undefined
                            }, 2500)
                            this.clean()
                        })
                        .catch(reject => {
                            this.error = reject

                            setTimeout(() => {
                                this.error = undefined
                            }, 2500)
                        })
                } else {
                    this.error = 'Llene todos los campos.'

                    setTimeout(() => {
                        this.error = undefined
                    }, 2500)
                }
            },
            remove(id) {
                const target = document.getElementById(id + "-remove");

                target.disabled = true
                target.classList.remove('fa-times')
                target.classList.add('fa-sync')
                target.classList.add('fa-spin')

                CategoryService.remove(id)
                    .then(resolve => {
                        target.classList.remove('fa-sync')
                        target.classList.remove('fa-spin')
                        target.classList.add('fa-times')
                        target.disabled = false;
                        CategoryService.retrieveAll().then((response) => {
                            this.categories = response;
                            this.loading = false;
                        }).catch((error) => {
                            console.log(error);
                        });
                    })
            },
            update() {
                if (this.id > 0 && this.name.trim() && this.description.trim()) {
                    const category = {
                        id: this.id,
                        name: this.name,
                        description: this.description
                    }

                    CategoryService.update(category)
                        .then(resolve => {
                            this.success = "Update completo"
                            CategoryService.retrieveAll().then((response) => {
                                this.categories = response;
                            }).catch((error) => {
                                console.log(error);
                            });
                            setTimeout(() => {
                                this.success = undefined
                            }, 2500)
                        })
                        .catch(reject => {
                            this.error = reject

                            setTimeout(() => {
                                this.error = undefined
                            }, 2500)
                        })
                } else {
                    this.error = 'Llene todos los campos.'

                    setTimeout(() => {
                        this.error = undefined
                    }, 2500)

                }
                this.clean();
                this.id = '';

            },
            async triggerForm(id) {
                const target = document.getElementById(id + "-edit");
                if (id === -1) {
                    this.loading = true;
                    this.form = 'create';
                    this.clean();
                    this.loading = false
                } else {
                    target.disabled = true;
                    target.classList.remove('fa-edit');
                    target.classList.add('fa-sync');
                    target.classList.add('fa-spin');

                    const resolve = await CategoryService.retrieve(id);
                    this.id = resolve.id;
                    this.name = resolve.name;
                    this.description = resolve.description;

                    target.classList.remove('fa-sync');
                    target.classList.remove('fa-spin');
                    target.classList.add('fa-edit');
                    target.disabled = false;

                    this.form = 'update';
                    this.loading = false
                }
            },
            clean() {
                this.name = '';
                this.description = '';
            },
        },
        created() {
            CategoryService.retrieveAll().then((response) => {
                console.log(response);
                this.categories = response;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
</script>

