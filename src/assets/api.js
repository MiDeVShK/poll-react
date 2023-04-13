function api() {
    const getPolls = () => {
      return fetch("http://localhost:3000/poll", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getPolls,
    };
  }
  
  export default api();