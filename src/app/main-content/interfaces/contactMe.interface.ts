export interface ContactFormData {
  contactInfo: {
    email: string;
    phone: string;
  };
  formFields: {
    name: {
      label: string;
      inputType: string;
    };
    email: {
      label: string;
      inputType: string;
    };
    message: {
      label: string;
      inputType: string;
      privacyText: string;
    };
  };
  descriptionText: string;
}