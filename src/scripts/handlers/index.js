const localStorage = {
    set: function(key, value) {
        const testKey = typeof(key) === "string" && key !== "";
        const testValue = typeof(value) === "string" && value !== "";
        if (testKey && testValue) {
            try {
                window.localStorage.setItem(key, value);
            } catch (error) {
                console.log(error);
            }
        }
    },
    
    get: function(key) {
        if (typeof(key) === "string" && key !== "") {
            return window.localStorage.getItem(key);
        } else {
            return null;
        }
    }
}

export { localStorage }