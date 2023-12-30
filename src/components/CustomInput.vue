<template> 
        <div class="group">
            <div class="title">{{ label }}</div>
                <input type="text" v-model.lazy="inputValue"/>
        </div>  
</template> 


<script setup>

import {computed} from 'vue';

const props = defineProps({
    modelValue : {
    required: true
    },
    label : {
    required : true
    }
});

const emit = defineEmits(['update:modelValue']);

const inputValue = computed({
    get(){
        return props.modelValue;
    },
    set(value){
        emit('update:modelValue', value);
    }
});

</script>
