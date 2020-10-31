<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 div_trans8 corner4 text-white mt-3">
                <h4 class="mt-2 text-center">Configuración</h4>
                <hr>
                <form action="" class="form-group">
                    <div class="row justify-content-center" v-if="success">
                        <div class="alert alert-success col-md-12">{{ success }}</div>
                    </div>
                    <div class="row justify-content-center" v-else-if="error">
                        <div class="alert alert-danger col-md-11 m-2">{{ error }}</div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="maintenance">Costo de Mantenimiento:</label>
                            <input class="form-control" id="maintenance" type="number" min="0"
                                   v-model.number="maintenance" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="work_days">Días laborales anuales:</label>
                            <input class="form-control" id="work_days" type="number" min="0" v-model.number="work_days"
                                   required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="days">Días entre compras:</label>
                            <input class="form-control" id="days" type="number" min="0" v-model.number="days" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="pedidos">Costo de pedidos:</label>
                            <input class="form-control" id="pedidos" type="number" min="0" v-model.number="costPurchase"
                                   required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="service">Porcentaje de servicio:</label>
                            <input class="form-control" id="service" type="number" min="0" v-model.number="porcent"
                                   required>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="form-group col-md-2">
                            <input type="hidden" required v-model="id">
                            <button type="submit" class="btn btn-outline-primary" @click.prevent="confirm">Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ConfigService from '@/services/ConfigService'

    export default {
        name: 'ConfigComponent',
        data() {
            return {   
                id: 1,
                maintenance: 0,
                work_days: 365,
                days: 0,
                porcent: 0,
                costPurchase: 0,
                success: '',
                error: '',
            }
        },
        methods: {
            confirm() {
                if ((this.id === 1) && (this.maintenance >= 0) && (this.work_days >= 0) && (366 >= this.days > 0)) {
                    const config = {
                        id: this.id,
                        costoMantenimiento: this.maintenance,
                        costoVenta: this.costPurchase,
                        porcentajeServicio: this.porcent,
                        diasLaborales: this.work_days,
                        diasDeCompras: this.days
                    };

                    ConfigService.update(config)
                        .then(resolve => {
                            this.success = resolve;
                            setTimeout(() => {
                                this.success = undefined
                            }, 2500);
                            this.clean()
                        }).catch(reject => {
                        this.error = reject;
                        setTimeout(() => {
                            this.error = undefined
                        }, 2500)
                    })
                } else {
                    this.error = 'Llene todos los campos.';
                    setTimeout(() => {
                        this.error = undefined
                    }, 2500)
                }
            },
            clean() {
                this.product = '';
                this.amount = 0
            }
        },
        created() {
            ConfigService.retrieve(1).then((response) => {
                
                this.id = response.id
                this.maintenance = response.costoMantenimiento
                this.work_days=  response.diasLaborales,
                this.days =  response.diasDeCompras,
                this.porcent = response.porcentajeServicio,
                this.costPurchase = response.costoVenta

            }).catch((error) => {
                console.log(error);
            });
        }
    }
</script>

