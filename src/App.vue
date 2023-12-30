<template>
  <div class="loan-calculator">
    <div class="top">
      <h2> Loan Calculator </h2>
        <form>
          <CustomInput v-model="loanAmount" 
                      :label="'Amount'"
          />
          <CustomInput v-model="interestRate" 
                      :label="'Interest Rate'"
          />
          <CustomInput v-model="loanTenure" 
                      :label="'Tenure (in months)'"
          />
        </form> 
    </div> 
    <div class="result">
        <CustomOutput :emi="+emi" 
                      :totalAmount="+totalAmount"
                      :totalInterestPayable="+totalInterestPayable"
        />
        <div class="right">
          <PieChart :key="componentKey" 
                    :chart-data="data"
          />
        </div>
    </div>

    <Table  :emi="+emi" 
            :totalAmount="+totalAmount"
            :loanAmountVal="+loanAmountVal"
            :loanTenureVal="+loanTenureVal"
            :interest="+interest" 
    />
  </div>
</template>

<script setup>

import CustomInput from './components/CustomInput.vue';
import CustomOutput from './components/CustomOutput.vue';
import Table from './components/Table.vue';

import { PieChart } from "vue-chart-3";
import { useToast } from 'vue-toastification';
import { ref, computed} from 'vue';


const toast = useToast();

const loanAmount = ref(10000);
const interestRate = ref(7);
const loanTenure = ref(10);

const componentKey = ref(0);      


const loanAmountVal = computed(() => {
  return parseFloat(loanAmount.value);
});

const interestRateVal = computed(() => { 
  return parseFloat(interestRate.value);
});

const loanTenureVal = computed(() => { 
  return parseFloat(loanTenure.value);
});

const interest = computed(() => {
  return interestRate.value / 12 / 100;
});


const emi = computed(() => {
        return loanAmountVal.value * 
               interest.value *
               (Math.pow(1 + interest.value, loanTenureVal.value) / 
               (Math.pow(1 + interest.value, loanTenureVal.value) - 1));
});


const totalAmount = computed(() => {
        let totalAmount = (loanTenureVal.value * emi.value).toFixed(2);
        return totalAmount;
      });


const totalInterestPayable = computed(() => {
        let  totalInterestPayable = (totalAmount.value - loanAmountVal.value).toFixed(2);
        forceRerender();
        return totalInterestPayable;
        });


const forceRerender = () => {
    componentKey.value += 1;
}


const dataValues = ref([totalInterestPayable , loanAmountVal])

const data = computed(() => ({
    labels : ['Total Interest', 'Principal Loan Amount'],

    datasets: [
    {
        data: dataValues.value,
        backgroundColor: ["#e63946", "#14213d"]
    }
   ]
}))


</script>