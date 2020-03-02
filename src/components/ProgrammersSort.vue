<template>
<div class="card">
  <h5 class="card-header">국내에서 코딩테스트를 가장 많이 운영해온 프로그래머스 팀이 코딩테스트 결과를 분석해서 만든 고득점 Kit. 코딩테스트에 자주 나오는 유형, 사람들이 많이 틀리는 유형을 간추렸습니다.</h5>
  <div class="card-body">
    <h5 class="card-title">참조 : 프로그래머스 자료</h5>
    <p class="card-text">해싱 : {{Hashing}} 개</p>
    <p class="card-text">큐 : {{Queue}} 개</p>
    <p class="card-text">완전 탐색 : {{Bruteforcing}} 개</p>
    <p class="card-text">동적 계획법 : {{DP}} 개</p>
    <p class="card-text">너비 우선 탐색 : {{BFS}} 개</p>
    <p class="card-text">그래프 : {{Graph}} 개</p>
    <p class="card-text">스택 : {{Stack}} 개</p>
    <p class="card-text">정렬 : {{Sorting}} 개</p>
    <p class="card-text">그리디 : {{Greedy}} 개</p>
    <p class="card-text">깊이 우선 탐색 : {{DFS}} 개</p>
    <p class="card-text">이분 탐색 : {{Binary_search}} 개</p>
  </div>
</div>
</template>


<script>
const _SERVER = "http://localhost:8080";
const axios = require("axios");
export default {
  name: "ProgrammersSort",
  data() {
    return {
      id: null,
      Hashing: 0,
      Queue : 0,
      Bruteforcing : 0,
      DP : 0,
      BFS : 0,
      Graph : 0,
      Stack : 0,
      Sorting : 0,
      Greedy : 0,
      DFS : 0,
      Binary_search:0
    };
  },
  props: {
    user_id: {
      type: String,
      default: "-"
    }
  },
  mounted() {
    axios
      .get(`${_SERVER}/user/${this.user_id}/ProgrammersSort`)
      .then(response => {
        this.id = this.user_id;
        // console.log(response);
        var data = [];
        data = response.data;
        // console.log(data)
        var res = [];
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                for (let index = 0; index < element.length; index++) {
                    // console.log(element[index])
                    if(element[index]._id=="Queue") this.Queue=element[index].count;
                    if(element[index]._id=="Greedy")this.Greedy=element[index].count;
                    if(element[index]._id=="Hashing")this.Hashing=element[index].count;
                    if(element[index]._id=="Binary search")this.Binary_search=element[index].count;
                    if(element[index]._id=="Bruteforcing")this.Bruteforcing=element[index].count;
                    if(element[index]._id=="DP")this.DP=element[index].count;
                    if(element[index]._id=="BFS")this.BFS=element[index].count;
                    if(element[index]._id=="Graph theory")this.Graph+=element[index].count;
                    if(element[index]._id=="Graph traversal")this.Graph+=element[index].count;
                    if(element[index]._id=="Stack")this.Stack=element[index].count;
                    if(element[index]._id=="Sorting")this.Sorting=element[index].count;
                    if(element[index]._id=="DFS")this.DFS=element[index].count;
                }
                
            }
        }

      });
  }
};
</script>