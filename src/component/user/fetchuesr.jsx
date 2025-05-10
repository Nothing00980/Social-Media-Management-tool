const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:2000/api/user", {
        credentials: "include" // 🔹 Sends cookies with request
      });
  
      const data = await response.json();
      if (data.user) {
        console.log("User Data:", data.user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);
  