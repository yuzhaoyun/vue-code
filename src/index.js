import Vue from "../vue"

// options Api
let vm = new Vue({
  el: "#app",
  data() {
    return {
      title: "学生列表",
      className: 1,
      teacher: ["张三", "李四"],
      total: 2,
      info: {
        a: {
          b: 1,
        }
      },
      students: [
        {
          id: 1,
          name: "小红",
        },{
          id: 2,
          name: "小明",
        }
      ]
    }
  }
});

console.log(vm.info.a);