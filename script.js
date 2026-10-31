(function () {
  "use strict";

  const STORAGE_KEYS = ["categories", "menuItems", "inventory", "menuVersions"];

  const defaultData = {
    categories: [
      {
        id: "category-appetizers",
        name: "Appetizers",
        description: "Small plates and starters to begin your meal.",
        icon: "🍽️",
        display_order: 1
      },
      {
        id: "category-main-course",
        name: "Main Course",
        description: "Hearty dishes prepared fresh to order.",
        icon: "🍝",
        display_order: 2
      },
      {
        id: "category-desserts",
        name: "Desserts",
        description: "Sweet finishes for every occasion.",
        icon: "🍰",
        display_order: 3
      }
    ],

    menuItems: [
      {
        id: "item-garlic-bread",
        name: "Garlic Bread",
        description: "Crispy toasted ciabatta with roasted garlic butter and parsley.",
        category_id: "category-appetizers",
        price: 6.5,
        dietary_tags: ["vegetarian"],
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80",
        status: "available",
        ingredients: ["ciabatta bread", "butter", "garlic", "parsley"],
        allergens: ["gluten", "milk"]
      },
      {
        id: "item-spaghetti-carbonara",
        name: "Spaghetti Carbonara",
        description: "Al dente spaghetti tossed with pancetta, egg yolk, Parmesan, and black pepper.",
        category_id: "category-main-course",
        price: 16.95,
        dietary_tags: [],
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
        status: "available",
        ingredients: ["spaghetti", "pancetta", "egg yolks", "Parmesan"],
        allergens: ["gluten", "egg", "milk"]
      }
    ],

    inventory: [
      {
        id: "inventory-pancetta",
        ingredient_name: "Pancetta",
        quantity: 1.2,
        unit: "kg",
        reorder_level: 3,
        item_id: "item-spaghetti-carbonara"
      },
      {
        id: "inventory-garlic",
        ingredient_name: "Garlic",
        quantity: 0.8,
        unit: "kg",
        reorder_level: 1,
        item_id: "item-garlic-bread"
      },
      {
        id: "inventory-spaghetti",
        ingredient_name: "Spaghetti",
        quantity: 18,
        unit: "kg",
        reorder_level: 5,
        item_id: "item-spaghetti-carbonara"
      },
      {
        id: "inventory-ciabatta",
        ingredient_name: "Ciabatta Bread",
        quantity: 42,
        unit: "pcs",
        reorder_level: 12,
        item_id: "item-garlic-bread"
      }
    ],

    menuVersions: []
  };

  const analyticsData = {
    categories: ["Appetizers", "Main Course", "Desserts"],
    revenue: [4280, 8650, 3120],
    popularItems: ["Garlic Bread", "Spaghetti Carbonara", "Chocolate Dessert", "Other"],
    popularOrders: [34, 28, 19, 19]
  };

  const translations = {
    en: {
      restaurantManagement: "Restaurant management",
      welcomeBack: "Welcome back",
      loginSubtitle: "Sign in to manage your menu, inventory, and reports.",
      email: "Email",
      password: "Password",
      role: "Role",
      login: "Login",
      dashboard: "Dashboard",
      categories: "Categories",
      menuItems: "Menu Items",
      digitalMenu: "Digital Menu",
      pricing: "Pricing",
      inventory: "Inventory",
      analytics: "Analytics",
      reports: "Reports",
      versioning: "Versioning",
      qrMenu: "QR Menu",
      search: "Search...",
      english: "English",
      spanish: "Español",
      french: "Français",
      dashboardWelcome: "Welcome back, Manager! Here's your menu overview for today.",
      dashboardSubtitle: "Keep your menu fresh, organized, and ready to serve.",
      addMenuItem: "Add menu item",
      addCategory: "Add Category",
      addNewItem: "Add New Item",
      totalItems: "Total Items",
      activeCategories: "Active Categories",
      lowStockAlerts: "Low Stock Alerts",
      popularItem: "Popular Item",
      menuOrganization: "Menu organization",
      stockManagement: "Stock management",
      pricingManagement: "Pricing management",
      performanceInsights: "Performance insights",
      exportCenter: "Export center",
      auditHistory: "Audit history",
      customerMenu: "Customer menu",
      ourMenu: "Our Menu",
      customerAccess: "Customer access",
      menuManagement: "Menu management",
      allItems: "All Items",
      digitalMenuSubtitle: "Freshly prepared favorites, made for every appetite.",
      availableToOrder: "Available to order",
      dailySpecial: "Daily special",
      dailySpecialDescription: "A fresh favorite selected from today's available menu.",
      twelvePercentThisMonth: "12% this month",
      acrossYourMenu: "Across your menu",
      needsYourAttention: "Needs your attention",
      topSellerThisWeek: "Top seller this week",
      salesPerformance: "Sales performance",
      popularItemsThisWeek: "Popular Items This Week",
      viewAll: "View all",
      stockMonitoring: "Stock monitoring",
      inventoryAlerts: "Inventory Alerts",
      manage: "Manage",
      categoryDistribution: "Category Distribution"
    },

    es: {
      restaurantManagement: "Gestión del restaurante",
      welcomeBack: "Bienvenido de nuevo",
      loginSubtitle: "Inicia sesión para administrar tu menú, inventario e informes.",
      email: "Correo electrónico",
      password: "Contraseña",
      role: "Rol",
      login: "Iniciar sesión",
      dashboard: "Panel",
      categories: "Categorías",
      menuItems: "Platos del menú",
      digitalMenu: "Menú digital",
      pricing: "Precios",
      inventory: "Inventario",
      analytics: "Analítica",
      reports: "Informes",
      versioning: "Versiones",
      qrMenu: "Menú QR",
      search: "Buscar...",
      english: "Inglés",
      spanish: "Español",
      french: "Francés",
      dashboardWelcome: "¡Bienvenido de nuevo, Manager! Este es el resumen de tu menú de hoy.",
      dashboardSubtitle: "Mantén tu menú fresco, organizado y listo para servir.",
      addMenuItem: "Añadir plato",
      addCategory: "Añadir categoría",
      addNewItem: "Añadir nuevo plato",
      totalItems: "Platos totales",
      activeCategories: "Categorías activas",
      lowStockAlerts: "Alertas de stock bajo",
      popularItem: "Plato popular",
      menuOrganization: "Organización del menú",
      stockManagement: "Gestión de stock",
      pricingManagement: "Gestión de precios",
      performanceInsights: "Información de rendimiento",
      exportCenter: "Centro de exportación",
      auditHistory: "Historial de auditoría",
      customerMenu: "Menú para clientes",
      ourMenu: "Nuestro menú",
      customerAccess: "Acceso de clientes",
      menuManagement: "Gestión del menú",
      allItems: "Todos los artículos",
      digitalMenuSubtitle: "Favoritos recién preparados para todos los gustos.",
      availableToOrder: "Disponible para pedir",
      dailySpecial: "Especial del día",
      dailySpecialDescription: "Un favorito fresco seleccionado del menú disponible de hoy.",
      twelvePercentThisMonth: "12% este mes",
      acrossYourMenu: "En todo tu menú",
      needsYourAttention: "Necesita tu atención",
      topSellerThisWeek: "Más vendido esta semana",
      salesPerformance: "Rendimiento de ventas",
      popularItemsThisWeek: "Platos populares de esta semana",
      viewAll: "Ver todo",
      stockMonitoring: "Supervisión de stock",
      inventoryAlerts: "Alertas de inventario",
      manage: "Administrar",
      categoryDistribution: "Distribución por categoría"
    },

    fr: {
      restaurantManagement: "Gestion du restaurant",
      welcomeBack: "Bon retour",
      loginSubtitle: "Connectez-vous pour gérer votre menu, votre inventaire et vos rapports.",
      email: "E-mail",
      password: "Mot de passe",
      role: "Rôle",
      login: "Se connecter",
      dashboard: "Tableau de bord",
      categories: "Catégories",
      menuItems: "Plats",
      digitalMenu: "Menu numérique",
      pricing: "Tarifs",
      inventory: "Inventaire",
      analytics: "Analyses",
      reports: "Rapports",
      versioning: "Versions",
      qrMenu: "Menu QR",
      search: "Rechercher...",
      english: "Anglais",
      spanish: "Espagnol",
      french: "Français",
      dashboardWelcome: "Bon retour, Manager ! Voici l'aperçu de votre menu pour aujourd'hui.",
      dashboardSubtitle: "Gardez votre menu frais, organisé et prêt à servir.",
      addMenuItem: "Ajouter un plat",
      addCategory: "Ajouter une catégorie",
      addNewItem: "Ajouter un plat",
      totalItems: "Nombre de plats",
      activeCategories: "Catégories actives",
      lowStockAlerts: "Alertes de stock faible",
      popularItem: "Plat populaire",
      menuOrganization: "Organisation du menu",
      stockManagement: "Gestion des stocks",
      pricingManagement: "Gestion des tarifs",
      performanceInsights: "Analyse des performances",
      exportCenter: "Centre d'exportation",
      auditHistory: "Historique d'audit",
      customerMenu: "Menu client",
      ourMenu: "Notre menu",
      customerAccess: "Accès client",
      menuManagement: "Gestion du menu",
      allItems: "Tous les articles",
      digitalMenuSubtitle: "Des favoris fraîchement préparés pour tous les goûts.",
      availableToOrder: "Disponible à la commande",
      dailySpecial: "Suggestion du jour",
      dailySpecialDescription: "Un favori frais sélectionné parmi le menu disponible aujourd'hui.",
      twelvePercentThisMonth: "12 % ce mois-ci",
      acrossYourMenu: "Dans tout votre menu",
      needsYourAttention: "Nécessite votre attention",
      topSellerThisWeek: "Meilleure vente de la semaine",
      salesPerformance: "Performance des ventes",
      popularItemsThisWeek: "Plats populaires cette semaine",
      viewAll: "Voir tout",
      stockMonitoring: "Suivi des stocks",
      inventoryAlerts: "Alertes d'inventaire",
      manage: "Gérer",
      categoryDistribution: "Répartition par catégorie"
    }
  };

  let salesChart = null;
  let popularChart = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function getData(key) {
    if (!STORAGE_KEYS.includes(key)) {
      throw new Error(`Unsupported MenuPro data key: ${key}`);
    }

    const storedValue = window.localStorage.getItem(key);

    if (storedValue === null) {
      const initialValue = clone(defaultData[key]);
      saveData(key, initialValue);
      return initialValue;
    }

    try {
      const parsedValue = JSON.parse(storedValue);

      if (!Array.isArray(parsedValue)) {
        throw new TypeError(`Stored "${key}" data is not an array.`);
      }

      return parsedValue;
    } catch (error) {
      console.error(`Invalid localStorage data for "${key}".`, error);
      const restoredValue = clone(defaultData[key]);
      saveData(key, restoredValue);
      return restoredValue;
    }
  }

  function saveData(key, data) {
    if (!STORAGE_KEYS.includes(key)) {
      throw new Error(`Unsupported MenuPro data key: ${key}`);
    }

    if (!Array.isArray(data)) {
      throw new TypeError(`Data for "${key}" must be an array.`);
    }

    window.localStorage.setItem(key, JSON.stringify(data));
  }

  function initializeDataStore() {
    STORAGE_KEYS.forEach((key) => getData(key));
  }

  function getCurrentUserRole() {
    return window.localStorage.getItem("currentUserRole") || "Unknown";
  }

  function logMenuVersion(action) {
    const versions = getData("menuVersions");

    versions.unshift({
      id: createId("version"),
      date: new Date().toISOString(),
      user_role: getCurrentUserRole(),
      action
    });

    saveData("menuVersions", versions);
    renderVersioningTable();
  }

  function getCategoryName(categoryId, categories = getData("categories")) {
    const category = categories.find((entry) => entry.id === categoryId);
    return category ? category.name : "Uncategorized";
  }

  function formatStatus(status) {
    return {
      available: "Available",
      limited: "Limited",
      "out-of-stock": "Out of Stock"
    }[status] || "Unknown";
  }

  function getDietaryTagLabel(tag) {
    return {
      vegetarian: "🌱 Veg",
      vegan: "🌿 Vegan",
      "gluten-free": "🌾 GF",
      "dairy-free": "🥛 Dairy-Free",
      "nut-free": "🥜 Nut-Free"
    }[tag] || tag;
  }

  function renderDashboardMetrics() {
    const items = getData("menuItems");
    const categories = getData("categories");
    const inventory = getData("inventory");

    const totalItems = document.getElementById("dashboard-total-items");
    const activeCategories = document.getElementById("dashboard-active-categories");
    const lowStockAlerts = document.getElementById("dashboard-low-stock-alerts");
    const popularItem = document.getElementById("dashboard-popular-item");

    if (totalItems) {
      totalItems.textContent = String(items.length);
    }

    if (activeCategories) {
      activeCategories.textContent = String(categories.length);
    }

    if (lowStockAlerts) {
      lowStockAlerts.textContent = String(
        inventory.filter(
          (entry) => Number(entry.quantity) <= Number(entry.reorder_level)
        ).length
      );
    }

    if (popularItem) {
      popularItem.textContent = items[0]?.name || "None";
    }
  }

  function getDigitalMenuImage(item, index) {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
    ];

    return item.image && item.image.startsWith("http")
      ? item.image
      : fallbackImages[index % fallbackImages.length];
  }

  function renderCategoriesTable() {
    const tableBody = document.getElementById("categories-table-body");
    const count = document.getElementById("category-count");
    const emptyMessage = document.getElementById("empty-categories-message");

    if (!tableBody) {
      return;
    }

    const categories = getData("categories")
      .slice()
      .sort((a, b) => Number(a.display_order) - Number(b.display_order));

    tableBody.replaceChildren();

    categories.forEach((category) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td class="category-icon-cell">${escapeHtml(category.icon || "🍽️")}</td>
        <td><strong>${escapeHtml(category.name)}</strong></td>
        <td class="category-cell">${escapeHtml(category.description || "No description")}</td>
        <td class="display-order-cell">${Number(category.display_order) || 0}</td>
        <td>
          <div class="row-actions">
            <button type="button" class="row-action" data-edit-category="${escapeHtml(category.id)}" aria-label="Edit ${escapeHtml(category.name)}">
              <i class="fa-solid fa-pen" aria-hidden="true"></i>
            </button>
            <button type="button" class="row-action delete" data-delete-category="${escapeHtml(category.id)}" aria-label="Delete ${escapeHtml(category.name)}">
              <i class="fa-solid fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });

    if (count) {
      count.textContent = `${categories.length} categor${categories.length === 1 ? "y" : "ies"}`;
    }

    if (emptyMessage) {
      emptyMessage.hidden = categories.length > 0;
    }
  }

  function renderMenuItemsTable() {
    const tableBody = document.getElementById("menu-items-table-body");
    const count = document.getElementById("item-count");
    const emptyMessage = document.getElementById("empty-items-message");

    if (!tableBody) {
      return;
    }

    const items = getData("menuItems");
    const categories = getData("categories");

    tableBody.replaceChildren();

    items.forEach((item) => {
      const status = ["available", "limited", "out-of-stock"].includes(item.status)
        ? item.status
        : "limited";

      const dietaryTags = (item.dietary_tags || [])
        .map((tag) => `<span class="dietary-tag">${escapeHtml(getDietaryTagLabel(tag))}</span>`)
        .join("");

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>
          <div class="item-name-cell">
            <img class="table-item-image" src="${escapeHtml(item.image || "https://via.placeholder.com/76/fce7f3/e11d48?text=Food")}" alt="">
            <strong>${escapeHtml(item.name)}</strong>
          </div>
        </td>
        <td class="table-dietary-tags-cell">
          ${dietaryTags || '<span class="category-cell">None</span>'}
        </td>
        <td class="category-cell">${escapeHtml(getCategoryName(item.category_id, categories))}</td>
        <td class="price-cell">$${Number(item.price || 0).toFixed(2)}</td>
        <td>
          <span class="table-status ${status}">${escapeHtml(formatStatus(status))}</span>
        </td>
        <td>
          <div class="row-actions">
            <button type="button" class="row-action" data-edit-item="${escapeHtml(item.id)}" aria-label="Edit ${escapeHtml(item.name)}">
              <i class="fa-solid fa-pen" aria-hidden="true"></i>
            </button>
            <button type="button" class="row-action delete" data-delete-item="${escapeHtml(item.id)}" aria-label="Delete ${escapeHtml(item.name)}">
              <i class="fa-solid fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });

    if (count) {
      count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
    }

    if (emptyMessage) {
      emptyMessage.hidden = items.length > 0;
    }

    applyLanguage(window.localStorage.getItem("languagePreference") || "en");
  }

  function renderInventoryTable() {
    const tableBody = document.getElementById("inventory-table-body");
    const count = document.getElementById("inventory-count");

    if (!tableBody) {
      return;
    }

    const inventory = getData("inventory");
    tableBody.replaceChildren();

    inventory.forEach((entry) => {
      const isLowStock = Number(entry.quantity) <= Number(entry.reorder_level);
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><strong>${escapeHtml(entry.ingredient_name)}</strong></td>
        <td class="price-cell">${Number(entry.quantity)}</td>
        <td class="category-cell">${escapeHtml(entry.unit)}</td>
        <td class="category-cell">${Number(entry.reorder_level)}</td>
        <td>
          <span class="table-status ${isLowStock ? "out-of-stock" : "available"}">
            ${isLowStock ? "Low Stock" : "In Stock"}
          </span>
        </td>
        <td>
          <div class="row-actions">
            <button type="button" class="row-action" data-edit-inventory="${escapeHtml(entry.id)}" aria-label="Update ${escapeHtml(entry.ingredient_name)} stock">
              <i class="fa-solid fa-pen" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });

    if (count) {
      count.textContent = `${inventory.length} ingredient${inventory.length === 1 ? "" : "s"}`;
    }
  }

  function renderPricingTable() {
    const tableBody = document.getElementById("pricing-table-body");
    const count = document.getElementById("pricing-count");

    if (!tableBody) {
      return;
    }

    const items = getData("menuItems");
    const categories = getData("categories");

    tableBody.replaceChildren();

    items.forEach((item) => {
      const discount = Number(item.special_discount_price);
      const hasDiscount = Number.isFinite(discount);
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><strong>${escapeHtml(item.name)}</strong></td>
        <td class="category-cell">${escapeHtml(getCategoryName(item.category_id, categories))}</td>
        <td class="price-cell">$${Number(item.price || 0).toFixed(2)}</td>
        <td class="${hasDiscount ? "discount-price" : "category-cell"}">
          ${hasDiscount ? `$${discount.toFixed(2)}` : "No discount"}
        </td>
        <td>
          <div class="row-actions">
            <button type="button" class="row-action pricing-action" data-edit-pricing="${escapeHtml(item.id)}" aria-label="Apply discount to ${escapeHtml(item.name)}">
              <i class="fa-solid fa-tag" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      `;

      tableBody.appendChild(row);
    });

    if (count) {
      count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
    }
  }

  function renderVersioningTable() {
    const tableBody = document.getElementById("versioning-table-body");
    const count = document.getElementById("versioning-count");
    const emptyMessage = document.getElementById("empty-versioning-message");

    if (!tableBody) {
      return;
    }

    const versions = getData("menuVersions");
    tableBody.replaceChildren();

    versions.forEach((version) => {
      const row = document.createElement("tr");
      const date = new Date(version.date);

      row.innerHTML = `
        <td>${escapeHtml(Number.isNaN(date.getTime()) ? version.date : date.toLocaleString())}</td>
        <td><span class="role-badge">${escapeHtml(version.user_role)}</span></td>
        <td>${escapeHtml(version.action)}</td>
      `;

      tableBody.appendChild(row);
    });

    if (count) {
      count.textContent = `${versions.length} entr${versions.length === 1 ? "y" : "ies"}`;
    }

    if (emptyMessage) {
      emptyMessage.hidden = versions.length > 0;
    }
  }

  function renderDigitalMenu(categoryId = "all") {
    const menuGrid = document.getElementById("digital-menu-grid");
    const emptyMessage = document.getElementById("digital-menu-empty");

    if (!menuGrid) {
      return;
    }

    const items = getData("menuItems");
    const visibleItems = categoryId === "all"
      ? items
      : items.filter((item) => item.category_id === categoryId);

    menuGrid.replaceChildren();

    visibleItems.forEach((item, index) => {
      const card = document.createElement("article");
      const tags = (item.dietary_tags || [])
        .map((tag) => `<span class="dietary-tag">${escapeHtml(getDietaryTagLabel(tag))}</span>`)
        .join("");

      card.className = "digital-menu-card";
      card.innerHTML = `
        <img class="digital-menu-image" src="${escapeHtml(getDigitalMenuImage(item, index))}" alt="${escapeHtml(item.name)}">
        <div class="digital-menu-card-body">
          <h2>${escapeHtml(item.name)}</h2>
          <div class="dietary-tags" aria-label="Dietary tags">
            ${tags || '<span class="dietary-tag">Chef special</span>'}
          </div>
          <p class="digital-menu-description">${escapeHtml(item.description || "A delicious MenuPro favorite.")}</p>
          <div class="digital-menu-card-footer">
            <span class="digital-menu-price">$${Number(item.price || 0).toFixed(2)}</span>
            <button class="order-button" type="button" data-order-item="${escapeHtml(item.id)}">
              Order <i class="fa-solid fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      `;

      menuGrid.appendChild(card);
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleItems.length > 0;
    }

    applyLanguage(window.localStorage.getItem("languagePreference") || "en");
  }

  function renderDailySpecial() {
    const title = document.getElementById("daily-special-title");
    const description = document.getElementById("daily-special-description");
    const price = document.getElementById("daily-special-price");

    if (!title || !description || !price) {
      return;
    }

    const special = getData("menuItems").find((item) => item.status === "available");

    title.textContent = special?.name || "Chef's choice";
    description.textContent = special?.description || "No available specials today.";
    price.textContent = special ? `$${Number(special.price || 0).toFixed(2)}` : "$0.00";

    applyLanguage(window.localStorage.getItem("languagePreference") || "en");
  }

  function renderDigitalMenuCategories() {
    const container = document.getElementById("digital-menu-categories");

    if (!container) {
      return;
    }

    container.replaceChildren();

    const allButton = document.createElement("button");
    allButton.type = "button";
    allButton.className = "category-pill active";
    allButton.dataset.categoryId = "all";
    allButton.dataset.i18n = "allItems";
    allButton.textContent = "All Items";
    container.appendChild(allButton);

    getData("categories")
      .slice()
      .sort((a, b) => Number(a.display_order) - Number(b.display_order))
      .forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "category-pill";
        button.dataset.categoryId = category.id;
        button.textContent = category.name;
        container.appendChild(button);
      });

    applyLanguage(window.localStorage.getItem("languagePreference") || "en");
  }

  function renderReportSummary() {
    const revenueElement = document.getElementById("report-total-revenue");
    const activeItemsElement = document.getElementById("report-active-items");

    if (!revenueElement || !activeItemsElement) {
      return;
    }

    const activeItems = getData("menuItems").filter(
      (item) => item.status !== "out-of-stock"
    ).length;

    const totalRevenue = analyticsData.revenue.reduce(
      (sum, revenue) => sum + Number(revenue || 0),
      0
    );

    revenueElement.textContent = `$${totalRevenue.toFixed(2)}`;
    activeItemsElement.textContent = String(activeItems);
  }

  function renderCharts() {
    const salesCanvas = document.getElementById("salesChart");
    const popularCanvas = document.getElementById("popularChart");

    if (!salesCanvas || !popularCanvas || typeof window.Chart !== "function") {
      return;
    }

    salesChart?.destroy();
    popularChart?.destroy();

    salesChart = new window.Chart(salesCanvas, {
      type: "bar",
      data: {
        labels: analyticsData.categories,
        datasets: [{
          label: "Revenue",
          data: analyticsData.revenue,
          backgroundColor: ["#fda4af", "#e11d48", "#fb7185"],
          borderRadius: 6,
          maxBarThickness: 48
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `$${Number(value).toLocaleString()}`
            }
          }
        }
      }
    });

    popularChart = new window.Chart(popularCanvas, {
      type: "doughnut",
      data: {
        labels: analyticsData.popularItems,
        datasets: [{
          label: "Orders",
          data: analyticsData.popularOrders,
          backgroundColor: ["#e11d48", "#fb7185", "#fda4af", "#fce7f3"],
          borderColor: "#ffffff",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "64%",
        plugins: {
          legend: {
            position: "bottom"
          }
        }
      }
    });
  }

  function populateCategoryOptions(selectedCategoryId) {
    const select = document.getElementById("item-category");

    if (!select) {
      return;
    }

    select.replaceChildren();

    getData("categories").forEach((category) => {
      const option = new Option(category.name, category.id);
      option.selected = category.id === selectedCategoryId;
      select.add(option);
    });
  }

  function openItemModal(item = null) {
    const modal = document.getElementById("item-modal");
    const form = document.getElementById("menu-item-form");
    const title = document.getElementById("item-modal-title");

    if (!modal || !form || !title) {
      return;
    }

    form.reset();

    document.getElementById("item-id").value = item?.id || "";
    document.getElementById("item-name").value = item?.name || "";
    document.getElementById("item-description").value = item?.description || "";
    document.getElementById("item-price").value = item?.price || "";
    document.getElementById("item-image").value = item?.image || "";
    document.getElementById("item-status").value = item?.status || "available";

    populateCategoryOptions(item?.category_id || getData("categories")[0]?.id);

    form.querySelectorAll('input[name="dietary_tags"]').forEach((checkbox) => {
      checkbox.checked = Boolean(item?.dietary_tags?.includes(checkbox.value));
    });

    title.textContent = item ? "Edit Item" : "Add New Item";
    modal.hidden = false;
    document.getElementById("item-name")?.focus();
  }

  function closeItemModal() {
    const modal = document.getElementById("item-modal");

    if (modal) {
      modal.hidden = true;
    }
  }

  function openCategoryModal(category = null) {
    const modal = document.getElementById("category-modal");
    const form = document.getElementById("category-form");
    const title = document.getElementById("category-modal-title");

    if (!modal || !form || !title) {
      return;
    }

    form.reset();

    document.getElementById("category-id").value = category?.id || "";
    document.getElementById("category-name").value = category?.name || "";
    document.getElementById("category-description").value = category?.description || "";
    document.getElementById("category-icon").value = category?.icon || "";
    document.getElementById("category-display-order").value =
      category?.display_order || getData("categories").length + 1;

    title.textContent = category ? "Edit Category" : "Add Category";
    modal.hidden = false;
    document.getElementById("category-name")?.focus();
  }

  function closeCategoryModal() {
    const modal = document.getElementById("category-modal");

    if (modal) {
      modal.hidden = true;
    }
  }

  function openInventoryModal(entry) {
    const modal = document.getElementById("inventory-modal");

    if (!modal || !entry) {
      return;
    }

    document.getElementById("inventory-id").value = entry.id;
    document.getElementById("inventory-ingredient").value = entry.ingredient_name;
    document.getElementById("inventory-quantity").value = entry.quantity;
    document.getElementById("inventory-unit").value = entry.unit;

    modal.hidden = false;
    document.getElementById("inventory-quantity")?.focus();
  }

  function closeInventoryModal() {
    const modal = document.getElementById("inventory-modal");

    if (modal) {
      modal.hidden = true;
    }
  }

  function openPricingModal(item) {
    const modal = document.getElementById("pricing-modal");

    if (!modal || !item) {
      return;
    }

    document.getElementById("pricing-item-id").value = item.id;
    document.getElementById("pricing-item-name").value = item.name;
    document.getElementById("pricing-base-price").value =
      `$${Number(item.price || 0).toFixed(2)}`;
    document.getElementById("pricing-discount-price").value =
      item.special_discount_price ?? "";

    modal.hidden = false;
    document.getElementById("pricing-discount-price")?.focus();
  }

  function closePricingModal() {
    const modal = document.getElementById("pricing-modal");

    if (modal) {
      modal.hidden = true;
    }
  }

  function deleteCategory(categoryId) {
    const categories = getData("categories");
    const category = categories.find((entry) => entry.id === categoryId);

    if (!category || !window.confirm(`Delete "${category.name}" from the categories?`)) {
      return;
    }

    saveData(
      "categories",
      categories.filter((entry) => entry.id !== categoryId)
    );

    logMenuVersion(`Deleted Category: ${category.name}`);
    renderDashboardMetrics();
    renderCategoriesTable();
    renderDigitalMenuCategories();
    renderDigitalMenu();
  }

  function deleteMenuItem(itemId) {
    const items = getData("menuItems");
    const item = items.find((entry) => entry.id === itemId);

    if (!item || !window.confirm(`Delete "${item.name}" from the menu?`)) {
      return;
    }

    saveData(
      "menuItems",
      items.filter((entry) => entry.id !== itemId)
    );

    logMenuVersion(`Deleted Item: ${item.name}`);
    renderDashboardMetrics();
    renderMenuItemsTable();
    renderDigitalMenu();
    renderDailySpecial();
  }

  function downloadInventoryCsv() {
    const headers = [
      "id",
      "ingredient_name",
      "quantity",
      "unit",
      "reorder_level",
      "item_id"
    ];

    const rows = getData("inventory").map((entry) =>
      headers.map((header) => entry[header] ?? "")
    );

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")
      )
      .join("\r\n");

    const objectUrl = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" })
    );

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `menupro-inventory-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();

    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }

  function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = translations[selectedLanguage];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translatedText = dictionary[element.dataset.i18n];

      if (!translatedText) {
        return;
      }

      if (
        element instanceof HTMLInputElement ||
        element instanceof HTMLTextAreaElement
      ) {
        element.placeholder = translatedText;
      } else {
        element.textContent = translatedText;
      }
    });

    window.localStorage.setItem("languagePreference", selectedLanguage);
  }

  function updateProfileRole(role) {
    const roleElement = document.getElementById("profile-role");
    const avatar = document.querySelector(".profile-button .avatar");

    if (roleElement) {
      roleElement.textContent = role;
    }

    if (avatar) {
      avatar.textContent = role.charAt(0).toUpperCase();
    }
  }

  function setAuthenticated(role) {
    const overlay = document.getElementById("login-overlay");
    const appShell = document.getElementById("app-shell");

    updateProfileRole(role);

    if (overlay) {
      overlay.hidden = true;
    }

    appShell?.classList.add("is-authenticated");

    if (typeof window.navigateTo === "function") {
      window.navigateTo("dashboard");
    }
  }

  function logout() {
    window.localStorage.removeItem("currentUserRole");

    const overlay = document.getElementById("login-overlay");
    const appShell = document.getElementById("app-shell");
    const loginForm = document.getElementById("login-form");
    const sidebarToggle = document.getElementById("sidebar-toggle");

    if (overlay) {
      overlay.hidden = false;
    }

    appShell?.classList.remove("is-authenticated");
    loginForm?.reset();

    if (sidebarToggle) {
      sidebarToggle.checked = false;
    }
  }

  function initializeTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = window.localStorage.getItem("themePreference");
    const isDark = savedTheme === "dark";

    document.body.classList.toggle("dark-theme", isDark);

    if (!themeToggle) {
      return;
    }

    const icon = themeToggle.querySelector("i");

    icon?.classList.toggle("fa-moon", !isDark);
    icon?.classList.toggle("fa-sun", isDark);

    themeToggle.addEventListener("click", () => {
      const darkMode = document.body.classList.toggle("dark-theme");

      window.localStorage.setItem(
        "themePreference",
        darkMode ? "dark" : "light"
      );

      icon?.classList.toggle("fa-moon", !darkMode);
      icon?.classList.toggle("fa-sun", darkMode);
    });
  }

  function initializeAuth() {
    const loginForm = document.getElementById("login-form");
    const storedRole = window.localStorage.getItem("currentUserRole");

    if (storedRole) {
      setAuthenticated(storedRole);
    }

    loginForm?.addEventListener("submit", (event) => {
      event.preventDefault();

      const role = new FormData(loginForm).get("role") || "Manager";
      window.localStorage.setItem("currentUserRole", role);
      setAuthenticated(role);
    });

    document.getElementById("logout-button")?.addEventListener("click", logout);
  }

  function initializeLanguage() {
    const languageSelect = document.getElementById("language-select");
    const savedLanguage =
      window.localStorage.getItem("languagePreference") || "en";

    if (!languageSelect) {
      applyLanguage(savedLanguage);
      return;
    }

    languageSelect.value = translations[savedLanguage]
      ? savedLanguage
      : "en";

    applyLanguage(languageSelect.value);

    languageSelect.addEventListener("change", (event) => {
      applyLanguage(event.currentTarget.value);
    });
  }

  function bindCrudEvents() {
    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element
        ? event.target
        : event.target.parentElement;

      if (!target) {
        return;
      }

      const openItemButton = target.closest("[data-open-item-modal]");
      const closeItemButton = target.closest("[data-close-item-modal]");
      const editItemButton = target.closest("[data-edit-item]");
      const deleteItemButton = target.closest("[data-delete-item]");

      const openCategoryButton = target.closest("[data-open-category-modal]");
      const closeCategoryButton = target.closest("[data-close-category-modal]");
      const editCategoryButton = target.closest("[data-edit-category]");
      const deleteCategoryButton = target.closest("[data-delete-category]");

      const editInventoryButton = target.closest("[data-edit-inventory]");
      const editPricingButton = target.closest("[data-edit-pricing]");

      const closeInventoryButton = target.closest("[data-close-inventory-modal]");
      const closePricingButton = target.closest("[data-close-pricing-modal]");

      const categoryButton = target.closest("[data-category-id]");
      const reportButton = target.closest("[data-report-action]");

      if (openItemButton) {
        openItemModal();
        return;
      }

      if (closeItemButton || target.id === "item-modal") {
        closeItemModal();
        return;
      }

      if (editItemButton) {
        const item = getData("menuItems").find(
          (entry) => entry.id === editItemButton.dataset.editItem
        );

        if (item) {
          openItemModal(item);
        }

        return;
      }

      if (deleteItemButton) {
        deleteMenuItem(deleteItemButton.dataset.deleteItem);
        return;
      }

      if (openCategoryButton) {
        openCategoryModal();
        return;
      }

      if (closeCategoryButton || target.id === "category-modal") {
        closeCategoryModal();
        return;
      }

      if (editCategoryButton) {
        const category = getData("categories").find(
          (entry) => entry.id === editCategoryButton.dataset.editCategory
        );

        if (category) {
          openCategoryModal(category);
        }

        return;
      }

      if (deleteCategoryButton) {
        deleteCategory(deleteCategoryButton.dataset.deleteCategory);
        return;
      }

      if (editInventoryButton) {
        const entry = getData("inventory").find(
          (item) => item.id === editInventoryButton.dataset.editInventory
        );

        openInventoryModal(entry);
        return;
      }

      if (editPricingButton) {
        const item = getData("menuItems").find(
          (entry) => entry.id === editPricingButton.dataset.editPricing
        );

        openPricingModal(item);
        return;
      }

      if (closeInventoryButton || target.id === "inventory-modal") {
        closeInventoryModal();
        return;
      }

      if (closePricingButton || target.id === "pricing-modal") {
        closePricingModal();
        return;
      }

      if (categoryButton) {
        document.querySelectorAll(".category-pill").forEach((button) => {
          button.classList.toggle("active", button === categoryButton);
        });

        renderDigitalMenu(categoryButton.dataset.categoryId);
        return;
      }

      if (reportButton?.dataset.reportAction === "menu-pdf") {
        window.print();
        return;
      }

      if (reportButton?.dataset.reportAction === "inventory-csv") {
        downloadInventoryCsv();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeItemModal();
        closeCategoryModal();
        closeInventoryModal();
        closePricingModal();
      }
    });
  }

  function bindFormEvents() {
    document.getElementById("menu-item-form")?.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);
      const items = getData("menuItems");
      const itemId = formData.get("item-id");
      const existingIndex = items.findIndex((item) => item.id === itemId);

      const item = {
        id: itemId || createId("item"),
        name: String(formData.get("name") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        price: Number(formData.get("price") || 0),
        image: String(formData.get("image") || "").trim(),
        category_id: formData.get("category_id"),
        status: formData.get("status"),
        dietary_tags: formData.getAll("dietary_tags"),
        ingredients: existingIndex >= 0 ? items[existingIndex].ingredients || [] : [],
        allergens: existingIndex >= 0 ? items[existingIndex].allergens || [] : []
      };

      if (existingIndex >= 0) {
        items[existingIndex] = item;
      } else {
        items.push(item);
      }

      saveData("menuItems", items);
      logMenuVersion(`${existingIndex >= 0 ? "Edited" : "Added"} Item: ${item.name}`);

      renderDashboardMetrics();
      renderMenuItemsTable();
      renderDigitalMenu();
      renderDailySpecial();
      closeItemModal();
    });

    document.getElementById("category-form")?.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const categories = getData("categories");
      const categoryId = formData.get("category-id");
      const existingIndex = categories.findIndex(
        (category) => category.id === categoryId
      );

      const category = {
        id: categoryId || createId("category"),
        name: String(formData.get("name") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        icon: String(formData.get("icon") || "").trim() || "🍽️",
        display_order: Number(formData.get("display_order") || 0)
      };

      if (existingIndex >= 0) {
        categories[existingIndex] = category;
      } else {
        categories.push(category);
      }

      saveData("categories", categories);
      logMenuVersion(
        `${existingIndex >= 0 ? "Edited" : "Added"} Category: ${category.name}`
      );

      renderDashboardMetrics();
      renderCategoriesTable();
      renderDigitalMenuCategories();
      renderDigitalMenu();
      closeCategoryModal();
    });

    document.getElementById("inventory-form")?.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const inventory = getData("inventory");
      const inventoryIndex = inventory.findIndex(
        (entry) => entry.id === formData.get("inventory-id")
      );

      if (inventoryIndex < 0) {
        return;
      }

      inventory[inventoryIndex].quantity = Number(formData.get("quantity") || 0);
      inventory[inventoryIndex].unit = formData.get("unit");

      saveData("inventory", inventory);

      renderDashboardMetrics();
      renderInventoryTable();
      closeInventoryModal();
    });

    document.getElementById("pricing-form")?.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const items = getData("menuItems");
      const itemIndex = items.findIndex(
        (item) => item.id === formData.get("item-id")
      );

      if (itemIndex < 0) {
        return;
      }

      const discountPrice = Number(formData.get("discount-price") || 0);

      if (discountPrice >= Number(items[itemIndex].price)) {
        window.alert("The discount price must be lower than the base price.");
        return;
      }

      items[itemIndex].special_discount_price = discountPrice;
      saveData("menuItems", items);

      logMenuVersion(`Changed Price: ${items[itemIndex].name}`);

      renderPricingTable();
      renderDigitalMenu();
      closePricingModal();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeDataStore();

    function navigateTo(sectionId) {
      const sections = document.querySelectorAll("main > section");
      const targetSection = document.getElementById(sectionId);
      const sidebarLinks = document.querySelectorAll(".sidebar a");

      sections.forEach((section) => {
        section.style.display = "none";
        section.hidden = false;
      });

      if (!targetSection || !targetSection.matches("main > section")) {
        return false;
      }

      targetSection.style.display = "block";

      sidebarLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${sectionId}`
        );
      });

      if (sectionId === "categories") {
        renderCategoriesTable();
      } else if (sectionId === "inventory") {
        renderInventoryTable();
      } else if (sectionId === "pricing") {
        renderPricingTable();
      } else if (sectionId === "analytics") {
        renderCharts();
      } else if (sectionId === "reports") {
        renderReportSummary();
      } else if (sectionId === "versioning") {
        renderVersioningTable();
      } else if (sectionId === "items") {
        renderMenuItemsTable();
      } else if (sectionId === "digital-menu") {
        renderDigitalMenuCategories();
        renderDigitalMenu();
        renderDailySpecial();
      }

      return true;
    }

    window.navigateTo = navigateTo;

    initializeTheme();
    initializeLanguage();
    initializeAuth();

    renderDashboardMetrics();
    renderCategoriesTable();
    renderInventoryTable();
    renderPricingTable();
    renderReportSummary();
    renderVersioningTable();
    renderMenuItemsTable();
    renderDigitalMenuCategories();
    renderDigitalMenu();
    renderDailySpecial();

    bindCrudEvents();
    bindFormEvents();

    document.querySelectorAll(".sidebar a").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const sectionId = (link.getAttribute("href") || "").replace("#", "");
        navigateTo(sectionId);

        const sidebarToggle = document.getElementById("sidebar-toggle");

        if (sidebarToggle) {
          sidebarToggle.checked = false;
        }

        window.history.replaceState(null, "", `#${sectionId}`);
      });
    });

    const searchInput = document.querySelector(
      'input[type="search"], .search-wrapper input, .topbar input'
    );

    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        const term = event.target.value.toLowerCase().trim();
        const searchableElements = document.querySelectorAll(
          "#menu-items-table-body tr, .digital-menu-card"
        );

        searchableElements.forEach((element) => {
          const text = element.textContent.toLowerCase();

          if (text.includes(term)) {
            element.style.display = "";
            element.classList.remove("hidden-by-search");
          } else {
            element.style.display = "none";
            element.classList.add("hidden-by-search");
          }
        });
      });
    }

    navigateTo("dashboard");
  });

  window.getData = getData;
  window.saveData = saveData;
  window.applyLanguage = applyLanguage;
  window.logout = logout;
  window.renderDashboardMetrics = renderDashboardMetrics;
  window.renderMenuItemsTable = renderMenuItemsTable;
  window.renderCategoriesTable = renderCategoriesTable;
  window.renderInventoryTable = renderInventoryTable;
  window.renderPricingTable = renderPricingTable;
  window.renderDigitalMenu = renderDigitalMenu;
  window.renderCharts = renderCharts;
})();
