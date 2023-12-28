const localStorage = {
    set: function(key, value) {
        // console.log(key, value);
        const testKey = typeof(key) === "string" && key !== "";
        const testValue = value !== undefined;
        if (testKey && testValue) {
            try {
                window.localStorage.setItem(key, value);
            } catch (error) {
                console.log(error);
            }
        }
    },
    
    get: function(key) {
        // console.log(key, window.localStorage.getItem(key));
        if (typeof(key) === "string" && key !== "") {
            return window.localStorage.getItem(key);
        } else {
            return null;
        }
    }
}

export { localStorage }