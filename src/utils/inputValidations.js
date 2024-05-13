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
      },
      pattern: {
        value: /^[0-9]*$/,
        message: "Only numbers are allowed",
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
      message: "Invalid nic",
    },
  },
};

export const paraValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    minLength: {
      value: 3,
      message: "3 characters min",
    },
  },
};

export const dateValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
  },
};