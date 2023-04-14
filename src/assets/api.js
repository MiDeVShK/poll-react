const apiUrl = "http://localhost:3000/poll"

function api() {
    const getPolls = () => {
      return fetch(apiUrl, {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getPolls,
    };
  }
  
  export default api();