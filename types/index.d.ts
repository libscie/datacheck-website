export {};

declare global {
  interface Window {
    showOpenFilePicker: any; // 👈️ turn off type checking
  }
}