export default class ContactMessage {
  constructor({ name = "", email = "", message = "" } = {}) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  validate() {
    const errors = {};

    if (this.name.trim() === "") {
      errors.name = "Name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (this.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    return errors;
  }

  isValid() {
    return Object.keys(this.validate()).length === 0;
  }
}