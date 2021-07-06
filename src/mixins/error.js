const inputError = {
    data() {
        return {
            error: {
                timeout: null,
                message: ""
            }
        }
    },
    methods: {
        clearError() {
            if (this.error.timeout) {
                clearTimeout(this.error.timeout);
                this.error.timeout = null;
                this.error.message = "";
            }
        },
        showError(error) {
            this.clearError();

            this.error.message = error;

            this.error.timeout = setTimeout(() => {
                this.error.message = "";
            }, 2000);
        }
    }
}

export default inputError;
