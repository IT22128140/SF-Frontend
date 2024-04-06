export const textValidation = {
    validation: {
      required: {
        value: true,
        message: "Required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
      minLength: {
        value: 3,
        message: "3 characters min",
      },
    },
  };

  export const numberValidation = {
    validation: {
      required: {
        value: true,
        message: "Required",
      }
    },
  };

  export const contactValidation = {
    validation: {
      required: {
        value: true,
        message: "Required",
      },
      maxLength: {
        value: 10,
        message: "10 characters max",
      },
      minLength: {
        value: 10,
        message: "10 characters min",
      },
    },
  };

  export const emailValidation = {
    validation: {
      required: {
        value: true,
        message: "Required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
      minLength: {
        value: 3,
        message: "3 characters min",
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  };

  export const passwordValidation = {
    validation: {
      required: {
        value: true,
        message: "Required",
      },
      maxLength: {
        value: 30,
        message: "30 characters max",
      },
      minLength: {
        value: 8,
        message: "8 characters min",
      },
    },
  };

export const nicValidation = { 
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    maxLength: {
      value: 12,
      message: "12 characters max",
    },
    minLength: {
      value: 10,
      message: "10 characters min",
    },
    pattern: {
      value: /^[0-9]{9}[vV]$/i,
      message: "Invalid email address",
    },
  },
};