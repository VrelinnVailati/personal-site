import axios from "axios";

import { getApiUrl } from "@/utils";

const http = axios.create({
  baseURL: getApiUrl(),
});

export default http;
