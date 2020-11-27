import config from "../config/config";
import AxiosService from "../services/axios-service.js";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  tokenRequired = false;
  httpOptions = null;

  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}employee`, data);
  }
  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}employee`);
  }
  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}employee/${id}`);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}employee/${id}`);
  }
}
