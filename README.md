# 📋 MenuPro

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#tech-stack) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#tech-stack) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#tech-stack) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

> A frontend-only restaurant menu management system built for a Web Development Internship task at **Data Alcott Systems**.

## 📖 Project Overview

MenuPro is a comprehensive Single Page Application (SPA) designed to simplify restaurant menu administration from one responsive browser-based workspace.

The application helps restaurant teams:

- Create and organize menu categories and items
- Track ingredient inventory and low-stock alerts
- Manage base prices and temporary discounts
- Present a customer-facing digital menu
- Review analytics, reports, and menu change history

MenuPro was developed as part of a Web Development Internship task at **Data Alcott Systems**, with an emphasis on practical frontend engineering, responsive UI design, state management, and reusable browser-side functionality.

Because MenuPro is frontend-only, it does not require a backend server or database. Application data is persisted in the browser through the `localStorage` API.

## ✨ Key Features

### Core Features

- 🔐 **Role-based mock authentication**
  - Supports Admin, Manager, and Staff roles
  - Persists the active role in browser storage
- 📊 **Dashboard**
  - Displays total menu items
  - Shows active category count
  - Calculates low-stock alerts
  - Highlights a popular menu item
- 🗂️ **Menu and category CRUD**
  - Add, edit, and delete menu categories
  - Add, edit, and delete menu items
  - Link menu items to categories
  - Store descriptions, prices, images, dietary tags, ingredients, and allergens
- 📦 **Inventory tracking**
  - Track ingredient quantities, units, and reorder levels
  - Automatically identifies low-stock ingredients
  - Update stock quantities through a modal form
- 💰 **Pricing and discounts**
  - View base prices for all menu items
  - Apply temporary special discount prices
- 🍽️ **Customer-facing digital menu**
  - Responsive menu card layout
  - Category filter pills
  - Dietary tag display
  - Daily special display
  - Customer-oriented ordering action buttons
- 📈 **Chart.js analytics**
  - Revenue by category bar chart
  - Most popular items doughnut chart
- 🧾 **Reports**
  - Printable menu report through the browser's native print dialog
  - Downloadable inventory CSV report
- 🕒 **Menu versioning history**
  - Records item and category additions, edits, deletions, and price changes
  - Stores the current user role with each change
- 🌙 **Dark mode**
  - Persists the user's theme preference
  - Includes contrast-aware dark theme surfaces and status badges
- 🌍 **Multi-language support**
  - English (`EN`)
  - Spanish (`ES`)
  - French (`FR`)
- 📱 **Responsive navigation**
  - Fixed desktop sidebar
  - Mobile hamburger navigation
  - Responsive tables, cards, charts, and forms

### Bonus Features

- 🔎 Menu search across management table rows and digital menu cards
- 🖨️ Print-friendly report layout
- 📷 QR Code Menu section
- ⭐ Daily specials display
- 🏷️ Dietary tag management for menu items
- 📋 Persistent menu change history

## 🧰 Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic application structure, forms, tables, sections, and accessibility attributes |
| **CSS3** | Custom properties, Flexbox, CSS Grid, responsive breakpoints, themes, cards, tables, and print styles |
| **Vanilla JavaScript** | DOM manipulation, localStorage persistence, CRUD operations, event handling, and SPA routing |
| **Chart.js** | Responsive analytics visualizations |
| **Font Awesome** | Navigation, action, status, and interface icons |
| **Google Fonts** | Inter typography |

## 🏗️ Data Architecture

MenuPro intentionally uses a **No Database** architecture for this internship project. All application state is stored in the browser using the `localStorage` API.

The application maintains separate serialized arrays for its primary entities:

```text
categories    → category definitions and display order
menuItems     → dishes, prices, images, status, dietary tags, ingredients, and allergens
inventory     → ingredient quantities, units, reorder levels, and linked menu items
menuVersions  → audit history for menu and category changes
```

On startup, the application:

1. Checks whether each supported storage key exists.
2. Hydrates missing keys with default mock data.
3. Parses stored JSON into JavaScript arrays.
4. Restores default data when stored values are malformed.
5. Uses shared `getData(key)` and `saveData(key, data)` helpers for consistent reads and writes.

This approach provides persistent state between browser sessions while keeping the project simple to run and easy to inspect during development. Since the data is browser-local, it is not intended for multi-user production deployments.

## 🚀 Installation & Usage

### Prerequisites

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- Optional: Visual Studio Code with the **Live Server** extension
- Optional: Git for cloning the repository

### Option 1: Clone and open locally

```bash
git clone <repository-url>
cd menupro
```

Open `index.html` directly in a modern browser.

### Option 2: Run with VS Code Live Server

1. Open the MenuPro folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your default browser.

Using Live Server is recommended during development because it provides a stable local origin and automatically refreshes the page when files change.

### Mock Login

1. Enter any valid email address.
2. Enter a password.
3. Select a role:
   - Admin
   - Manager
   - Staff
4. Click **Login**.

The selected role is saved to `localStorage` under `currentUserRole`. Use the logout icon in the top navigation to end the mock session.

### Using the Application

- Use the sidebar to switch between Dashboard, Categories, Menu Items, Digital Menu, Pricing, Inventory, Analytics, Reports, Versioning, and QR Menu.
- Use **Add Category** and **Add New Item** to create records.
- Use table action buttons to edit or delete records.
- Update inventory quantities from the Inventory section.
- Apply temporary discounts from the Pricing section.
- Use the search field to filter menu item tables and digital menu cards.
- Use the language selector to switch between English, Spanish, and French.
- Use the moon/sun button to toggle dark mode.
- Generate printable menu reports or downloadable inventory CSV files from Reports.

## 🖼️ Screenshots

> Replace the placeholder image paths below with captured screenshots from your deployment or local environment.

### Dashboard

![MenuPro Dashboard](./screenshots/dashboard.png)

### Digital Menu

![MenuPro Digital Menu](./screenshots/digital-menu.png)

### Inventory Management

![MenuPro Inventory](./screenshots/inventory.png)

## 📁 Project Structure

```text
menupro/
├── index.html    # Application markup and page sections
├── style.css     # Layout, components, responsive styles, themes, and print rules
├── script.js     # State management, CRUD logic, routing, rendering, and UI events
└── README.md     # Project documentation
```

## 🔒 Project Scope and Limitations

MenuPro is a browser-based internship project and demonstration application. It does not currently include:

- A server-side API
- User account registration or real authentication
- A shared production database
- Multi-user synchronization
- Server-side authorization
- Production-grade data backup or recovery

Clearing browser storage, switching browsers, or using a different device will reset or isolate the stored application state.

## 📄 License

This project is released under the MIT License.

```text
MIT License

Copyright (c) 2026 MenuPro contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgements

MenuPro was created as part of the **Free Web Development Internship Online** program and the Web Development Internship task at **Data Alcott Systems**.

Additional acknowledgements:

- [Chart.js](https://www.chartjs.org/) for analytics visualizations
- [Font Awesome](https://fontawesome.com/) for interface icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for menu imagery
- [QRServer](https://goqr.me/api/) for the QR code demonstration endpoint

