# uielemniv Demo

This is a one-page demo showcasing the `uielemniv` component library.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```

3.  **Open Browser**:
    Navigate to `http://localhost:5173`.

## Setup Details

This project uses:
-   **Vite**: For fast development.
-   **Tailwind CSS**: Configured to scan `uielemniv` for classes.
-   **uielemniv**: The UI library.

### Key Configuration
Ensure `tailwind.config.js` includes the library path:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/uielemniv/dist/**/*.{js,ts,jsx,tsx}" // <--- Important
],
```

# 2.1
