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
        message: "Only positive numbers are allowed",
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

export const rIdValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[R][0-9]{8}$/,
      message: "Invalid Request ID",
    }
  },
  
};

export const DIdValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[D][0-9]{8}$/,
      message: "Invalid Distribution ID",
    }
  },
  
};

export const lwIdValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[L][W][0-9]*$/,
      message: "Invalid Line Worker ID",
    }
  },
  
};

export const LnoValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[L][0-9]*$/,
      message: "Invalid Line Number",
    }
  },
  
};

export const PnoValidation = {
  validation: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: /^[P][0-9]*$/,
      message: "Invalid Position Number",
    }
  },
  
};

export const productCodeValidation = {
  validation: {
    required: {
      value: true,
      message: "Product Code is required",
    },
    pattern: {
        value: /^PR\d{4}$/, // Regex pattern for "PR" followed by four digits
        message: "Product Code must start with PR followed by four digits",
    }
  },
}

export const quantityValidation = {
  validation: {
    required: {
      value: true,
      message: "Quantity is required",
    },
    max: {
        value: 100,
        message: "Maximum quantity is 100",
    }
  },
}