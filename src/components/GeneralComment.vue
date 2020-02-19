<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard bodyWrapper >
        <span style="font-weight: bold; font-size : x-large;">{{id}}</span> 님의 맞은 문제의 수는 
        <span style="font-weight: bold; font-size : large;">{{collectPcnt}}</span>개이며, 시도했지만 풀지 못한 문제의 수는 
        <span style="font-weight: bold; font-size : large;">{{xPcnt}}</span>개입니다. 시도했지만 풀지 못한 문제의 유형으로는 
        <span style="font-weight: bold;">{{algo}}</span> 순으로 많으며 그 외 틀린 유형으로는 
        <span style="font-weight: bold; font-size : large;">{{resultType}}</span>가 많습니다.
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>


<script>
const axios = require("axios");
export default {
  name: 'GeneralComment',
    data(){
        return {
            id:null,
            collectPcnt:0, //맞은문제수
            xPcnt:0, // 시도했지만 풀지못한 문제의수
            algo:null, // 많이 틀리는 알고리즘 유형 3가지
            resultType:null //많이 틀리는 유형
        };
    },
    mounted() {
     axios.get('http://localhost:8080/user/kistone3/GeneralComment')
     .then(response => {
         response = response.data
         this.id = "gudrhks2"
         console.log(response)
         var UserSubmitInfo = []
         UserSubmitInfo = response.UserSubmitInfo
        //  console.log(UserSubmitInfo)
        this.xPcnt = response.Xproblems.length
        var res = [];
        for (let index = 0; index < UserSubmitInfo.length; index++) {
           res = UserSubmitInfo[index]
           if(res._id=="result-ac"){
                this.collectPcnt=res.problems.length
           }
        }
        var UseMistakeAlgoInfo = []
        UseMistakeAlgoInfo = response.UseMistakerAlgoInfo
        var algoType = "";
        for (let index = 0; index < UseMistakeAlgoInfo.length; index++) {
            res = UseMistakeAlgoInfo[index]
            if(index==UseMistakeAlgoInfo.length-1){
                algoType+=res._id
            }else{
                algoType+=res._id+", "
            }
        }
        console.log(algoType)
        this.algo=algoType
         for (let index = 0; index < UserSubmitInfo.length; index++) {
           res = UserSubmitInfo[index]
           if(res._id!="result-ac"&&res._id!="result-wa"){
                if(res._id=="result-tle")  this.resultType="시간초과"
                if(res._id=="result-rte")  this.resultType="런타임에러"
                if(res._id=="result-ce")    this.resultType="컴파일에러"
                if(res._id=="result-ole")   this.resultType="출력초과"
                if(res._id=="result-pe")    this.resultType="출력형식"
               
                break
           }
        }
     })
    }
}
</script>