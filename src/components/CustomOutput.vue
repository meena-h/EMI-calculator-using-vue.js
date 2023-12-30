 <template>
<div class="left"> 
    <div>
        <h3>Loan EMI</h3>
        <div class="value"> {{ emi.toFixed(2) }}  </div>
    </div>
    <div>
        <h3>Total Intrest Payable</h3>
        <div class="value"> {{ totalInterestPayable  }} </div>
    </div>
    <div>
        <h3>Total Amount</h3>
        <div class="value"> {{ totalAmount }} </div>
    </div>
</div>
</template> 

<script setup>

const props = defineProps({
    emi : {
        required : true
        },
    totalAmount: {
        required : true
        },
    totalInterestPayable: {
        required : true
        }
}); 

</script>
