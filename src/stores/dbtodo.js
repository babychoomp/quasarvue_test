import { defineStore } from "pinia";
import todoApi from "src/apis/todoApi";

export default defineStore("todo", {
  state: () => ({
    newTask: "",
    tasks: [],
    totalCount: 0,
  }),

  actions: {
    adddbtask() {
      if (!this.newTask) {
        this.$refs.list.focus(); // 포커스 외부로 돌림
      }
      const payload = {
        title: this.newTask,
      };
      if (result.status == 200) {
        if (result.data.id) {
          const newTask = {
            id: result.data.id,
            title: this.newTask,
            done: "N",
          };
          this.tasks.unshift(newTask);
          this.totalCount++;
        }
        // notify 등 추가 처리
        this.newTask = "";
      }
    },

    fetchdata() {
      const len = 5;
      const lastId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;

      if (this.tasks.length > 0 && this.tasks.length === this.totalCount) {
        console.log("fetchData 호출안함", this.tasks.length, this.totalCount);
        return false;
      }
      const payload = {
        lastId,
        len,
      };
      if (result.data && result.data.list) {
        this.tasks = [...this.tasks, ...result.data.list];
        this.totalCount = result.data.totalCount;
      }
    },

    async editDBTodo(item) {
      const idx = this.tasks.findIndex((task) => task === item);
      item.done = "N";
      this.tasks.splice(idx, 1, item);

      if (this.editTask.title !== this.origin) {
        await todoApi.update(item);
        // notify 등 추가 처리
      }
    },

    async removeDBItem(item) {
      const idx = this.tasks.findIndex((task) => task.id === item.id);
      this.tasks.splice(idx, 1);
      const result = await todoApi.remove(item);
      if (result.status === 200) {
        // notify 등 추가 처리
      }
    },

    async resetDb() {
      this.tasks = [];
      const payload = {
        title: "todo_",
        done: "N",
        len: 100,
      };
      const result = await todoApi.reset(payload);
      if (result.status === 200) {
        console.log(result.status);
        this.fetchData();
      }
    },
  },
});
