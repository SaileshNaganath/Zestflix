
const API_BASE_URL = import.meta.env.VITE_REACT_API_URL;
const TIMEOUT = import.meta.env.VITE_REACT_API_TIMEOUT;


if (!API_BASE_URL) {
    throw new Error('.env is missing the definition for REACT_APP_API_BASE_URL environment variable')
}

if (!TIMEOUT) {
    throw new Error('.env is missing the definition for REACT_APP_API_TIMEOUT environment variable')
}


export { API_BASE_URL, TIMEOUT  }