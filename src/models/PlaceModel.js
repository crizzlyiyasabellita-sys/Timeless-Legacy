export default class PlaceModel {
  constructor({ id, name, category, location, description, image }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.location = location;
    this.description = description;
    this.image = image;
  }

  getSummary(maxLength = 80) {
    return this.description.length > maxLength
      ? this.description.slice(0, maxLength) + "..."
      : this.description;
  }

  getUrl() {
    return `/place/${this.id}`;
  }

  belongsTo(category) {
    return category === "All" || this.category === category;
  }
}