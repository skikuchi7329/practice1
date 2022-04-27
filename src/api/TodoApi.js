import axios from "axios";

class TodoApi {
  static async getList() {
    return await axios.get("http://localhost:3001/get_list")
      .catch((err) => {
        console.log(err);
      })
  }
  
  static async create(todo) {
    return await axios.post("http://localhost:3001/create", { todo: todo })
      .catch((err) => {
        console.log(err);
      })
  }

  static async changeStatus(id) {
    return await axios.post("http://localhost:3001/status_update", { id: id })
      .catch((err) => {
        console.log(err);
    })
  }

  static async delete(id) {
    return await axios.post("http://localhost:3001/delete",  { id: id })
      .catch((err) => {
        console.log(err);
    })
  }
}

export {TodoApi};