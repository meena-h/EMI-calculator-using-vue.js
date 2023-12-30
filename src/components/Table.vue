<template> 
<div>
    <table class="table table-bordered">
        <thead class="table-primary">
            <tr>
                <th> Tenure    </th>
                <th> Principal </th>
                <th> Interest  </th>
                <th> EMI       </th>
                <th> Balance   </th>
            </tr>
        </thead>
        <tbody id="myTable">
                <tr v-for="i in props.loanTenureVal">

                    <td> {{ months[(i-1) % months.length] }} </td>
                    <td>₹ {{ (props.emi - (props.loanAmountVal * props.interest)).toFixed(2) }} </td>
                    <td>₹ {{ (props.loanAmountVal * props.interest).toFixed(2) }} </td>
                    <td>₹ {{ props.emi.toFixed(2) }} </td>
                    <template v-if="(props.totalAmount - (props.emi * i)).toFixed(2) < 1">
                        <td> ₹ 0 </td>
                    </template>
                    <template v-else>
                        <td>₹ {{ (props.totalAmount - (props.emi * i)).toFixed(2) }} </td>
                    </template>

                </tr>`
        </tbody>
    </table>
</div>
</template> 

<script setup>

import { ref, computed} from 'vue';

const props = defineProps({

    loanTenureVal:{
    required : true
    },

    emi :{
    required : true
    },

    totalAmount:{
    required : true 
    },

    loanAmountVal:{
    required: true
    },

    interest:{
    required: true
    }
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        
</script>

