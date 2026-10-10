export default class GalleryImage {
  constructor({ id, src, caption }) {
    this.id = id;
    this.src = src;
    this.caption = caption;
  }

  getAltText() {
    return `Photo of ${this.caption}`;
  }

  matches(keyword) {
    const text = keyword.trim().toLowerCase();
    return text === "" || this.caption.toLowerCase().includes(text);
  }

  static fromPlace(place) {
    return new GalleryImage({
      id: place.id,
      src: place.image,
      caption: place.name,
    });
  }
}