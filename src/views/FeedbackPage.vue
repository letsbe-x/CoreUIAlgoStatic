<template>
     <v-container fluid grid-list-md :style="{textAlign:'center'}">
            <v-layout row wrap>
              <v-flex xs12 sm12 md12 lg12 x12  align="center">
                <v-card  class="mx-2 pa-2 elevation-3">
                    <div class="flex display-2 font-weight-bold">문제 해결에 사용된 주력 언어</div>
                <!--UserproblemsMistakeTypeChart -->
                <UserSubmitLanguageGraph  :userid="userid"></UserSubmitLanguageGraph>
                </v-card>
              </v-flex>
               <v-flex xs12 sm12 md12 lg12 x12  align="center">
               <v-card  class="mx-2 pa-2 elevation-3">
 <div class="flex display-2 font-weight-bold">가장 많이 푼 알고리즘 유형</div>

<UserSolvedAlgoTypeGraph :userid="userid"></UserSolvedAlgoTypeGraph>

                </v-card>
              </v-flex>
              
  <v-flex xs12 sm12 md12 lg12 x12  align="center">
               <v-card  class="mx-2 pa-2 elevation-3">
 <div class="flex display-2 font-weight-bold">가장 많이 실수하는 알고리즘 유형</div>

<UserproblemsMistakeTypeChart :userid="userid"></UserproblemsMistakeTypeChart>

                </v-card>
              </v-flex>

              
              <v-flex xs12 sm12 md12 lg12 x12  align="center">
               <v-card  class="mx-2 pa-2 elevation-3">
 <div class="flex display-2 font-weight-bold">가장 많이 실수하는 알고리즘 유형</div>

<GeneralComment></GeneralComment>


                </v-card>
              </v-flex>
           
            </v-layout>
     </v-container>
</template>


<script>

import UserSubmitLanguageGraph from '@/components/UserLanguageChart/UserSubmitLanguageGraph.vue'
import UserSolvedAlgoTypeGraph from '@/components/UserProblemTypeChart/UserSolvedAlgoTypeGraph.vue'
import UserproblemsMistakeTypeChart from '@/components/UserproblemsMistakeTypeChart/UserproblemsMistakeTypeChart.vue'
import GeneralComment from '@/components/GeneralComment.vue'

export default {
    data() {
        return {
           userid:"gudrhks2"
        }
    },
    components:{
      'GeneralComment' :GeneralComment,
 'UserSubmitLanguageGraph':UserSubmitLanguageGraph,
 'UserSolvedAlgoTypeGraph':UserSolvedAlgoTypeGraph,
 'UserproblemsMistakeTypeChart' :UserproblemsMistakeTypeChart
    }
}
</script>