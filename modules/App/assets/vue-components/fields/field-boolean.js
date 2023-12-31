let uuid = 0;

export default {

    _meta: {
        label: 'Boolean',
        info: 'True or False',
        icon: 'system:assets/icons/boolean.svg',
        settings: [
            {name: 'label', type: 'text'},
        ],
        render(value, field, context) {

            if (typeof(value) === 'boolean') {
                return `<icon class="kiss-color-${value ? 'success' : 'danger'}">trip_origin</icon>`;
            }

            return '<icon class="kiss-color-muted">trip_origin</icon>';
        }
    },

    data() {
        return {
            val: this.modelValue,
            uuid: `field-boolean-${++uuid}`
        }
    },

    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: false
        }
    },

    watch: {
        modelValue() {
            this.val = this.modelValue;
            this.update();
        }
    },

    methods: {
        update() {
            this.$emit('update:modelValue', this.val)
        }
    },

    template: /*html*/`
        <div class="kiss-flex kiss-flex-middle" field="boolean">
            <input :id="uuid" class="app-switch" type="checkbox" v-model="val" @change="update">
            <label :for="uuid" class="kiss-margin-small-left" :class="{'kiss-color-muted':!val}" v-if="label">{{ label }}</label>
        </div>
    `,
}
